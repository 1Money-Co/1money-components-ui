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

/**
 * Check if a React element supports ref forwarding.
 * In React 19+, all elements support refs.
 */
export function supportRef(node: any): boolean {
  if (!node) return false;

  // React 19+ - all elements support refs
  const reactVersion = parseInt(React.version.split('.')[0], 10);
  if (reactVersion >= 19) return React.isValidElement(node);

  if (!React.isValidElement(node)) return false;

  const type = (node as any).type;

  // unwrap memo
  const realType = type?.$$typeof === Symbol.for('react.memo') ? type.type : type;

  // Function components without forwardRef don't support refs
  if (typeof realType === 'function' && !realType.prototype?.isReactComponent) {
    // Check if it's a forwardRef
    if (type?.$$typeof === Symbol.for('react.forward_ref')) return true;
    return false;
  }

  return true;
}

/**
 * Get ref from React element, handling React 19 property changes.
 */
export function getNodeRef(node: React.ReactElement): React.Ref<any> | null {
  if (!React.isValidElement(node)) return null;

  // React 19+ moves ref into props
  if (Object.prototype.propertyIsEnumerable.call((node as any).props, 'ref')) {
    return (node as any).props.ref;
  }

  return (node as any).ref ?? null;
}
