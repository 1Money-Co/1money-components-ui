import * as React from 'react';
import type { OnResize, SizeInfo } from './interface';
import { observe, unobserve } from './utils/observerUtil';
import { useEventCallback } from '@1money/hooks';

export default function useResizeObserver(
  enabled: boolean,
  getTarget: HTMLElement | (() => HTMLElement),
  onDelayResize?: OnResize,
  onSyncResize?: OnResize,
) {
  // ============================= Size =============================
  const sizeRef = React.useRef<SizeInfo>({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1,
  });

  // =========================== Observe ============================

  // Handler
  const onInternalResize = useEventCallback((target: Element) => {
    const htmlTarget = target as HTMLElement;
    const { width, height } = htmlTarget.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = htmlTarget;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight };
      sizeRef.current = size;

      // IE is strange, right?
      const mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      const mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;

      const sizeInfo = {
        ...size,
        offsetWidth: mergedOffsetWidth,
        offsetHeight: mergedOffsetHeight,
      };

      onSyncResize?.(sizeInfo, htmlTarget);

      // defer the callback but not defer to next frame
      Promise.resolve().then(() => {
        onDelayResize?.(sizeInfo, htmlTarget);
      });
    }
  });

  // Dynamic observe
  const isFuncTarget = typeof getTarget === 'function';
  const funcTargetIdRef = React.useRef(0);
  const getTargetRef = React.useRef(getTarget);
  getTargetRef.current = getTarget;

  React.useEffect(() => {
    const currentGetTarget = getTargetRef.current;
    const target = typeof currentGetTarget === 'function' ? currentGetTarget() : currentGetTarget;

    if (target && enabled) {
      observe(target, onInternalResize);
    } else if (enabled && isFuncTarget) {
      funcTargetIdRef.current += 1;
    }

    return () => {
      if (target) {
        unobserve(target, onInternalResize);
      }
    };
  }, [enabled, isFuncTarget, isFuncTarget ? funcTargetIdRef.current : getTarget]);
}
