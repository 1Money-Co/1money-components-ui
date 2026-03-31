import { memo, useLayoutEffect, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { CoachMark } from '@/components/CoachMark';
import type { FC, CSSProperties } from 'react';
import type { TourProps, TourStep } from './interface';

const DEFAULT_SPOTLIGHT_PADDING = 8;
const DEFAULT_GAP = 14;
const DEFAULT_SPOTLIGHT_RADIUS = 12;
const DEFAULT_Z_INDEX = 1000;

const COACH_MARK_WIDTH = 450;
const VIEWPORT_MARGIN = 12;

interface Position {
  spotlight: CSSProperties;
  coachMark: CSSProperties;
  arrowOffset?: string;
}

const resolveTarget = (step: TourStep): HTMLElement | null => {
  if (typeof step.target === 'string') {
    return document.querySelector<HTMLElement>(step.target);
  }
  return step.target?.current ?? null;
};

const clampHorizontal = (
  targetCenterX: number,
  cardWidth: number,
): { left: number; arrowOffset?: string } => {
  const vw = window.innerWidth;
  let left = targetCenterX - cardWidth / 2;

  if (left < VIEWPORT_MARGIN) {
    left = VIEWPORT_MARGIN;
  } else if (left + cardWidth > vw - VIEWPORT_MARGIN) {
    left = vw - VIEWPORT_MARGIN - cardWidth;
  }

  const arrowX = targetCenterX - left;
  const arrowPercent = (arrowX / cardWidth) * 100;
  const needsOffset = Math.abs(arrowPercent - 50) > 2;

  return {
    left,
    arrowOffset: needsOffset ? `${arrowPercent.toFixed(1)}%` : undefined,
  };
};

const clampVertical = (
  targetCenterY: number,
  cardHeight: number,
): { top: number; arrowOffset?: string } => {
  const vh = window.innerHeight;
  let top = targetCenterY - cardHeight / 2;

  if (top < VIEWPORT_MARGIN) {
    top = VIEWPORT_MARGIN;
  } else if (top + cardHeight > vh - VIEWPORT_MARGIN) {
    top = vh - VIEWPORT_MARGIN - cardHeight;
  }

  const arrowY = targetCenterY - top;
  const arrowPercent = (arrowY / cardHeight) * 100;
  const needsOffset = Math.abs(arrowPercent - 50) > 2;

  return {
    top,
    arrowOffset: needsOffset ? `${arrowPercent.toFixed(1)}%` : undefined,
  };
};

const computePosition = (
  el: HTMLElement,
  placement: string,
  spotlightPadding: number,
  gap: number,
  spotlightRadius: number,
  zIndex: number,
): Position => {
  const rect = el.getBoundingClientRect();

  const spotlight: CSSProperties = {
    position: 'absolute',
    top: rect.top - spotlightPadding,
    left: rect.left - spotlightPadding,
    width: rect.width + spotlightPadding * 2,
    height: rect.height + spotlightPadding * 2,
    borderRadius: spotlightRadius,
    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.45)',
    pointerEvents: 'none',
    transition: 'all 250ms ease',
    zIndex: zIndex + 1,
  };

  const coachMark: CSSProperties = {
    position: 'absolute',
    zIndex: zIndex + 2,
    transition: 'all 250ms ease',
  };

  let arrowOffset: string | undefined;
  const targetCenterX = rect.left + rect.width / 2;
  const targetCenterY = rect.top + rect.height / 2;

  switch (placement) {
    case 'bottom': {
      const h = clampHorizontal(targetCenterX, COACH_MARK_WIDTH);
      coachMark.top = rect.bottom + gap;
      coachMark.left = h.left;
      arrowOffset = h.arrowOffset;
      break;
    }
    case 'top': {
      const h = clampHorizontal(targetCenterX, COACH_MARK_WIDTH);
      coachMark.bottom = window.innerHeight - rect.top + gap;
      coachMark.left = h.left;
      arrowOffset = h.arrowOffset;
      break;
    }
    case 'right': {
      const v = clampVertical(targetCenterY, COACH_MARK_WIDTH);
      coachMark.top = v.top;
      coachMark.left = rect.right + gap;
      arrowOffset = v.arrowOffset;
      break;
    }
    case 'left': {
      const v = clampVertical(targetCenterY, COACH_MARK_WIDTH);
      coachMark.top = v.top;
      coachMark.right = window.innerWidth - rect.left + gap;
      arrowOffset = v.arrowOffset;
      break;
    }
  }

  return { spotlight, coachMark, arrowOffset };
};

const TourInner: FC<TourProps> = props => {
  const {
    open,
    steps,
    activeStep,
    defaultActiveStep = 0,
    onChange,
    onClose,
    dismissible = true,
    labels,
    spotlightPadding = DEFAULT_SPOTLIGHT_PADDING,
    gap = DEFAULT_GAP,
    scrollIntoView: shouldScroll = true,
    spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
    closeOnBackdropClick = false,
    zIndex = DEFAULT_Z_INDEX,
  } = props;

  const [currentStep, setCurrentStep] = useControlledState(
    defaultActiveStep,
    activeStep,
  );

  const [pos, setPos] = useState<Position | null>(null);

  const currentConfig = steps[currentStep];
  const placement = currentConfig?.placement ?? 'bottom';

  // Compute position on step change, open change, and resize/scroll
  useLayoutEffect(() => {
    if (!open || !currentConfig) {
      setPos(null);
      return;
    }

    const el = resolveTarget(currentConfig);
    if (!el) return;

    if (shouldScroll) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const update = () => {
      const target = resolveTarget(currentConfig);
      if (!target) return;
      setPos(computePosition(target, placement, spotlightPadding, gap, spotlightRadius, zIndex));
    };

    // Initial position after possible scroll
    const timer = setTimeout(update, shouldScroll ? 300 : 0);

    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [open, currentStep, currentConfig, placement, spotlightPadding, gap, shouldScroll, spotlightRadius, zIndex]);

  // Reset step when tour opens
  useEffect(() => {
    if (open && activeStep === undefined) {
      setCurrentStep(defaultActiveStep);
    }
  }, [open]);

  const handleChange = useEventCallback((step: number) => {
    setCurrentStep(step);
    onChange?.(step);
  });

  const handleFinish = useEventCallback(() => {
    onClose();
  });

  const handleDismiss = useEventCallback(() => {
    onClose();
  });

  if (!open || !pos) return null;

  const coachMarkSteps = steps.map(s => ({
    icon: s.icon,
    heading: s.heading,
    body: s.body,
  }));

  const overlay: CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex,
    pointerEvents: 'none',
  };

  const backdropClick: CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex,
    pointerEvents: 'auto',
    background: 'transparent',
  };

  return createPortal(
    <>
      {/* Invisible layer to block interaction with page */}
      <div style={backdropClick} onClick={closeOnBackdropClick ? handleDismiss : undefined} />

      {/* Visual layer */}
      <div style={overlay}>
        <div style={pos.spotlight} />
        <div style={{ ...pos.coachMark, pointerEvents: 'auto' }}>
          <CoachMark
            steps={coachMarkSteps}
            activeStep={currentStep}
            onChange={handleChange}
            onFinish={handleFinish}
            onDismiss={handleDismiss}
            dismissible={dismissible}
            placement={placement}
            arrowOffset={currentConfig?.arrowOffset ?? pos.arrowOffset}
            labels={labels}
          />
        </div>
      </div>
    </>,
    document.body,
  );
};

export const Tour = memo(TourInner);
export default Tour;
