import { useState, useCallback, useRef } from 'react';
import type { ReactElement } from 'react';
import React from 'react';
import { useEventCallback } from '@1money/hooks';

interface UseOverlayFormOptions {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  autoClose?: boolean;
  submitTimeout?: number;
}

interface UseOverlayFormReturn {
  mergedOpen: boolean;
  triggerNode: ReactElement | null;
  handleFinish: (values: Record<string, unknown>) => Promise<void>;
  handleHide: () => void;
  handleShow: () => void;
}

export function useOverlayForm(
  options: UseOverlayFormOptions,
  onFinish?: (values: Record<string, unknown>) => void | Promise<void>,
): UseOverlayFormReturn {
  const {
    open: controlledOpen,
    onOpenChange,
    trigger,
    autoClose = true,
    submitTimeout,
  } = options;

  const isControlled = controlledOpen !== undefined;
  const [internalOpen, setInternalOpen] = useState(false);
  const mergedOpen = isControlled ? controlledOpen : internalOpen;
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange],
  );

  const handleShow = useEventCallback(() => {
    setOpen(true);
  });

  const handleHide = useEventCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(false);
  });

  const handleFinish = useEventCallback(async (values: Record<string, unknown>) => {
    await onFinish?.(values);

    if (autoClose) {
      if (submitTimeout && submitTimeout > 0) {
        timeoutRef.current = setTimeout(() => {
          setOpen(false);
        }, submitTimeout);
      } else {
        setOpen(false);
      }
    }
  });

  // Clone trigger with onClick handler
  const triggerNode = trigger
    ? React.cloneElement(trigger as React.ReactElement<Record<string, unknown>>, {
        onClick: (...args: unknown[]) => {
          handleShow();
          const originalOnClick = (trigger.props as Record<string, unknown>)?.onClick;
          if (typeof originalOnClick === 'function') {
            (originalOnClick as (...a: unknown[]) => void)(...args);
          }
        },
      })
    : null;

  return {
    mergedOpen,
    triggerNode,
    handleFinish,
    handleHide,
    handleShow,
  };
}

export default useOverlayForm;
