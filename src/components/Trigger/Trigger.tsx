import {
  arrow,
  autoUpdate,
  flip,
  FloatingArrow,
  FloatingPortal,
  offset as floatingOffset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import React, { cloneElement, useCallback, useMemo, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { joinCls } from '@/utils/classnames';
import type { CSSProperties, FC } from 'react';
import type { TriggerAction, TriggerProps } from './interface';
import './style';

const PREFIX = 'om-trigger';

function normalizeTrigger(
  trigger: TriggerAction | TriggerAction[],
): TriggerAction[] {
  return Array.isArray(trigger) ? trigger : [trigger];
}

function setRef<T>(ref: React.Ref<T> | null | undefined, node: T | null) {
  if (typeof ref === 'function') {
    ref(node);
  } else if (ref && typeof ref === 'object' && 'current' in ref) {
    ref.current = node;
  }
}

const Trigger: FC<TriggerProps> = ({
  content,
  trigger = 'click',
  placement = 'bottom-start',
  open,
  onOpenChange,
  defaultOpen = false,
  showArrow = false,
  offset = 4,
  portal = true,
  dismissible = true,
  hoverDelay,
  overlayClassName,
  overlayStyle,
  children,
  disabled = false,
  onOpen,
  onClose,
  role = 'dialog',
  ref,
}) => {
  const arrowRef = useRef<Element>(null);
  const triggers = useMemo(() => normalizeTrigger(trigger), [trigger]);

  const [innerOpen, setInnerOpen] = useControlledState(defaultOpen, open);

  const handleOpenChange = useEventCallback((nextOpen: boolean) => {
    if (disabled) return;
    setInnerOpen(nextOpen);
    onOpenChange?.(nextOpen);
    if (nextOpen) {
      onOpen?.();
    } else {
      onClose?.();
    }
  });

  const middleware = useMemo(
    () => [
      floatingOffset(offset),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      arrow({ element: arrowRef, padding: 8 }),
    ],
    [offset],
  );

  const { refs, floatingStyles, context, placement: resolvedPlacement } = useFloating({
    open: innerOpen,
    onOpenChange: handleOpenChange,
    placement,
    whileElementsMounted: autoUpdate,
    middleware,
  });

  const clickInteraction = useClick(context, {
    enabled: triggers.includes('click') && !disabled,
  });

  const hoverInteraction = useHover(context, {
    enabled: triggers.includes('hover') && !disabled,
    delay: hoverDelay,
  });

  const focusInteraction = useFocus(context, {
    enabled: triggers.includes('focus') && !disabled,
  });

  const dismissInteraction = useDismiss(context, {
    enabled: dismissible,
  });

  const roleInteraction = useRole(context, { role });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    clickInteraction,
    hoverInteraction,
    focusInteraction,
    dismissInteraction,
    roleInteraction,
  ]);

  const composedRef = useCallback(
    (node: HTMLElement | null) => {
      refs.setReference(node);
      setRef(ref, node);
    },
    [refs.setReference, ref],
  );

  const referenceProps = getReferenceProps({ ref: composedRef });

  const placementMeta = useMemo(() => {
    const [side, align] = (resolvedPlacement ?? 'bottom-start').split('-');
    return { side, align };
  }, [resolvedPlacement]);

  const closePanel = useCallback(() => handleOpenChange(false), [handleOpenChange]);

  const arrowData = context.middlewareData.arrow;
  const arrowVars = {
    ...(arrowData?.x != null && { '--arrow-x': `${arrowData.x}px` }),
    ...(arrowData?.y != null && { '--arrow-y': `${arrowData.y}px` }),
  } as CSSProperties;

  const panel = (
    <div
      ref={refs.setFloating}
      style={{ ...floatingStyles, ...arrowVars, ...overlayStyle }}
      className={joinCls(`${PREFIX}-panel`, overlayClassName)}
      data-placement={resolvedPlacement}
      data-side={placementMeta.side}
      data-align={placementMeta.align}
      {...getFloatingProps()}
    >
      {showArrow ? (
        <FloatingArrow
          ref={arrowRef as React.RefObject<SVGSVGElement | null>}
          context={context}
          className={`${PREFIX}-arrow`}
        />
      ) : (
        <span
          ref={arrowRef as React.RefObject<HTMLSpanElement | null>}
          style={{
            position: 'absolute',
            width: 0,
            height: 0,
            pointerEvents: 'none',
            visibility: 'hidden',
          }}
        />
      )}
      {typeof content === 'function'
        ? content({ close: closePanel, open: innerOpen })
        : content}
    </div>
  );

  return (
    <>
      {cloneElement(children, referenceProps)}
      {innerOpen && (portal ? <FloatingPortal>{panel}</FloatingPortal> : panel)}
    </>
  );
};

export default Trigger;
