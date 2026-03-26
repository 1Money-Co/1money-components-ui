import { useLayoutEffect } from '@1money/hooks';
import {
  cloneElement,
  forwardRef,
  isValidElement,
  memo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { fillRef, useComposeRef } from '@/utils/ref';
import type { ReactElement, Ref } from 'react';
import type { PortalContainer, PortalProps } from './interface';

const getContainer = (container?: PortalContainer) => (
  typeof container === 'function' ? container() : container
);

const PortalBase = forwardRef<Element | null, PortalProps>((props, forwardedRef) => {
  const {
    children,
    container,
    disablePortal = false,
  } = props;
  const [mountNode, setMountNode] = useState<Element | null>(null);
  const childRef = isValidElement(children)
    ? (children as ReactElement & { ref?: Ref<unknown> }).ref ?? null
    : null;
  const handleRef = useComposeRef(childRef as Ref<unknown>, forwardedRef as Ref<unknown>);

  useLayoutEffect(() => {
    if (disablePortal) {
      setMountNode(null);
      return;
    }

    if (typeof document === 'undefined') return;

    setMountNode(getContainer(container) ?? document.body);
  }, [container, disablePortal]);

  useLayoutEffect(() => {
    if (!mountNode || disablePortal) return undefined;

    fillRef(forwardedRef, mountNode);

    return () => {
      fillRef(forwardedRef, null);
    };
  }, [disablePortal, forwardedRef, mountNode]);

  if (disablePortal) {
    if (isValidElement(children)) {
      return cloneElement(
        children as ReactElement<{ ref?: Ref<unknown> }>,
        { ref: handleRef as Ref<unknown> },
      );
    }

    return <>{children}</>;
  }

  return mountNode ? createPortal(children, mountNode) : null;
});

PortalBase.displayName = 'Portal';

export const Portal = memo(PortalBase);

Portal.displayName = 'Portal';

export default Portal;
