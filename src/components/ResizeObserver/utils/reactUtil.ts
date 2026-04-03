import * as React from 'react';

/**
 * Flatten React children into a flat array, expanding fragments.
 */
export function toArray(children: React.ReactNode): React.ReactElement[] {
  const result: React.ReactElement[] = [];

  React.Children.forEach(children, (child) => {
    if (child === undefined || child === null) return;

    if (Array.isArray(child)) {
      result.push(...toArray(child));
    } else if (
      React.isValidElement(child) &&
      (child as React.ReactElement<any>).type === React.Fragment
    ) {
      result.push(...toArray((child as React.ReactElement<any>).props.children));
    } else {
      result.push(child as React.ReactElement);
    }
  });

  return result;
}

/**
 * Extract a real DOM node from a ref-like object.
 */
export function getDOM(node: any): HTMLElement | SVGElement | null {
  if (node && typeof node === 'object' && node.nativeElement) {
    const nativeElement = node.nativeElement;
    if (nativeElement instanceof HTMLElement || nativeElement instanceof SVGElement) {
      return nativeElement;
    }
  }

  if (node instanceof HTMLElement || node instanceof SVGElement) {
    return node;
  }

  return null;
}

function isReactElement(node: any): boolean {
  return React.isValidElement(node) && !isFragment(node);
}

function isFragment(node: any): boolean {
  return React.isValidElement(node) && (node as React.ReactElement<any>).type === React.Fragment;
}

/**
 * Check if a React element supports ref forwarding.
 * In React 19+, all non-fragment elements support refs.
 */
export function supportRef(node: any): boolean {
  if (!node) return false;

  // React 19+ no need `forwardRef` anymore. So just pass if is a React element (not fragment).
  const reactVersion = parseInt(React.version.split('.')[0], 10);
  if (isReactElement(node) && reactVersion >= 19) return true;

  // unwrap memo
  const type = (node as any).type;
  const realType = type?.$$typeof === Symbol.for('react.memo') ? type.type : type;

  // Function component without forwardRef
  if (
    typeof realType === 'function' &&
    !realType.prototype?.render &&
    realType.$$typeof !== Symbol.for('react.forward_ref')
  ) {
    return false;
  }

  // Class component without forwardRef
  if (
    typeof node === 'function' &&
    !node.prototype?.render &&
    node.$$typeof !== Symbol.for('react.forward_ref')
  ) {
    return false;
  }

  return true;
}

/**
 * Get ref from React element, handling React 19 property changes.
 * Excludes fragments.
 */
export function getNodeRef(node: React.ReactElement): React.Ref<any> | null {
  if (!isReactElement(node)) return null;

  // React 19+ moves ref into props
  if (Object.prototype.propertyIsEnumerable.call((node as any).props, 'ref')) {
    return (node as any).props.ref;
  }

  return (node as any).ref ?? null;
}
