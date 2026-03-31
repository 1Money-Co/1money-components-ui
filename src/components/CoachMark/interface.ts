import type { ReactNode, RefObject } from 'react';

export const COACH_MARK_PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;
export type CoachMarkPlacement = (typeof COACH_MARK_PLACEMENTS)[number];

export interface CoachMarkStep {
  /** Icon or illustration displayed above the heading */
  icon?: ReactNode;
  /** Heading text */
  heading?: ReactNode;
  /** Body text */
  body?: ReactNode;
}

export interface CoachMarkLabels {
  /** Custom label for the back button */
  back?: string;
  /** Custom label for the next button */
  next?: string;
  /** Custom label for the finish button */
  finish?: string;
  /** Custom aria-label for the dismiss button */
  dismiss?: string;
}

export interface CoachMarkProps {
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Array of step configurations */
  steps: CoachMarkStep[];
  /** Current active step index (controlled) */
  activeStep?: number;
  /** Default active step index (uncontrolled) */
  defaultActiveStep?: number;
  /** Callback when step changes */
  onChange?: (step: number) => void;
  /** Callback when the last step's finish button is clicked */
  onFinish?: () => void;
  /** Callback when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Whether to show the dismiss (close) button */
  dismissible?: boolean;
  /** Placement of the beak arrow relative to target element */
  placement?: CoachMarkPlacement;
  /** Offset of the arrow from center (CSS value, e.g. '20px', '-10px') */
  arrowOffset?: string;
  /** Custom button and dismiss labels */
  labels?: CoachMarkLabels;
}
