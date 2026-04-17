import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export const useDialogFocus = (
  active: boolean,
  dialogRef: RefObject<HTMLDivElement | null>,
) => {
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || typeof document === 'undefined') return undefined;

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const frame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [active, dialogRef]);

  useEffect(() => {
    if (active) return;

    previousActiveElementRef.current?.focus?.();
    previousActiveElementRef.current = null;
  }, [active]);
};
