import { useEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { DRAWER_PHASES } from '../constants';

type DrawerPhase = (typeof DRAWER_PHASES)[keyof typeof DRAWER_PHASES];

const clearTimer = (timerRef: RefObject<number | null>) => {
  if (timerRef.current === null) return;

  window.clearTimeout(timerRef.current);
  timerRef.current = null;
};

const clearFrame = (frameRef: RefObject<number | null>) => {
  if (frameRef.current === null) return;

  window.cancelAnimationFrame(frameRef.current);
  frameRef.current = null;
};

export const useDrawerTransition = (open: boolean, closeDelay: number) => {
  const [phase, setPhase] = useState<DrawerPhase>(
    open ? DRAWER_PHASES.open : DRAWER_PHASES.closed,
  );
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      clearTimer(closeTimerRef);
      clearFrame(openFrameRef);
    };
  }, []);

  useEffect(() => {
    if (open) {
      clearTimer(closeTimerRef);

      if (phase === DRAWER_PHASES.open || phase === DRAWER_PHASES.opening) return;

      setPhase(DRAWER_PHASES.opening);
      return;
    }

    if (phase === DRAWER_PHASES.closed || phase === DRAWER_PHASES.closing) return;

    clearFrame(openFrameRef);
    setPhase(DRAWER_PHASES.closing);
    closeTimerRef.current = window.setTimeout(() => {
      setPhase(DRAWER_PHASES.closed);
      closeTimerRef.current = null;
    }, closeDelay);
  }, [closeDelay, open, phase]);

  useEffect(() => {
    if (phase !== DRAWER_PHASES.opening) return undefined;

    openFrameRef.current = window.requestAnimationFrame(() => {
      setPhase(DRAWER_PHASES.open);
      openFrameRef.current = null;
    });

    return () => {
      clearFrame(openFrameRef);
    };
  }, [phase]);

  return {
    mounted: phase !== DRAWER_PHASES.closed,
    open: phase === DRAWER_PHASES.open,
  };
};
