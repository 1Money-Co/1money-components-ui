import * as React from 'react';
import type { ResizeObserverProps } from '../interface';
import { CollectionContext } from '../Collection';
import useResizeObserver from '../useResizeObserver';
import { getDOM, supportRef, getNodeRef } from '../utils/reactUtil';
import { useComposeRef } from '@/utils/ref';

export interface SingleObserverProps extends ResizeObserverProps {
  children: React.ReactElement | ((ref: React.RefObject<Element>) => React.ReactElement);
}

function SingleObserver(props: SingleObserverProps, ref: React.Ref<HTMLElement>) {
  const { children, disabled, onResize, data } = props;
  const elementRef = React.useRef<Element>(null);

  const onCollectionResize = React.useContext(CollectionContext);

  // =========================== Children ===========================
  const isRenderProps = typeof children === 'function';
  const mergedChildren = isRenderProps ? children(elementRef as React.RefObject<any>) : children;

  // ============================= Ref ==============================
  const canRef =
    !isRenderProps && React.isValidElement(mergedChildren) && supportRef(mergedChildren);
  const originRef: React.Ref<Element> = canRef ? getNodeRef(mergedChildren) : null;

  const mergedRef = useComposeRef(originRef!, elementRef);

  const getDomElement = () => {
    return getDOM(elementRef.current) as HTMLElement;
  };

  React.useImperativeHandle(ref, () => getDomElement());

  // =========================== Observe ============================
  useResizeObserver(!disabled, getDomElement, onResize, (sizeInfo, target) => {
    onCollectionResize?.(sizeInfo, target, data);
  });

  // ============================ Render ============================
  return canRef
    ? React.cloneElement(mergedChildren as React.ReactElement<any>, {
        ref: mergedRef,
      })
    : mergedChildren;
}

const RefSingleObserver = React.forwardRef(SingleObserver);

RefSingleObserver.displayName = 'SingleObserver';

export default RefSingleObserver;
