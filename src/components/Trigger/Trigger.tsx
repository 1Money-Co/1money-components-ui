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
import React, { cloneElement, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { TriggerAction, TriggerProps } from './interface';

const PREFIX = 'om-trigger';

function normalizeTrigger(
  trigger: TriggerAction | TriggerAction[],
): TriggerAction[] {
  return Array.isArray(trigger) ? trigger : [trigger];
}

function composeRefs<T>(
  ...refs: Array<React.Ref<T> | ((node: T | null) => void) | null | undefined>
) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref && typeof ref === 'object' && 'current' in ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

function getPlacementMeta(placement: TriggerProps['placement']) {
  const [side, align] = (placement ?? 'bottom-start').split('-');

  return {
    side,
    align,
  };
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
  const arrowRef = useRef<SVGSVGElement>(null);
  const triggers = normalizeTrigger(trigger);

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

  const { refs, floatingStyles, context, placement: resolvedPlacement } = useFloating({
    open: innerOpen,
    onOpenChange: handleOpenChange,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      floatingOffset(offset),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      ...(showArrow ? [arrow({ element: arrowRef })] : []),
    ],
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

  const referenceProps = getReferenceProps({
    ref: composeRefs(refs.setReference, ref),
  });
  const placementMeta = getPlacementMeta(resolvedPlacement);

  const panel = (
    <div
      ref={refs.setFloating}
      style={{ ...floatingStyles, ...overlayStyle }}
      className={joinCls(`${PREFIX}-panel`, overlayClassName)}
      data-placement={resolvedPlacement}
      data-side={placementMeta.side}
      data-align={placementMeta.align}
      {...getFloatingProps()}
    >
      {showArrow && (
        <FloatingArrow
          ref={arrowRef}
          context={context}
          className={`${PREFIX}-arrow`}
        />
      )}
      {typeof content === 'function'
        ? content({ close: () => handleOpenChange(false), open: innerOpen })
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
