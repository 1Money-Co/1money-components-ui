import type { ReactNode, RefObject } from 'react';
import type { CoachMarkPlacement, CoachMarkLabels } from '@/components/CoachMark';

export interface TourStep {
  /** Target element — CSS selector string or React ref */
  target: string | RefObject<HTMLElement | null>;
  /** Placement of the CoachMark relative to the target */
  placement?: CoachMarkPlacement;
  /** Offset of the arrow from center */
  arrowOffset?: string;
  /** Icon or illustration for this step */
  icon?: ReactNode;
  /** Heading text for this step */
  heading?: ReactNode;
  /** Body text for this step */
  body?: ReactNode;
}

export interface TourProps {
  /** Whether the tour is visible */
  open: boolean;
  /** Tour step configurations */
  steps: TourStep[];
  /** Current active step index (controlled) */
  activeStep?: number;
  /** Default active step index (uncontrolled) */
  defaultActiveStep?: number;
  /** Callback when step changes */
  onChange?: (step: number) => void;
  /** Callback when tour is closed (dismiss or finish) */
  onClose: () => void;
  /** Whether to show the dismiss button on CoachMark */
  dismissible?: boolean;
  /** Custom labels for CoachMark buttons */
  labels?: CoachMarkLabels;
  /** Padding around the spotlight highlight (px) */
  spotlightPadding?: number;
  /** Gap between the target and the CoachMark (px) */
  gap?: number;
  /** Whether to scroll the target element into view */
  scrollIntoView?: boolean;
  /** Border radius of the spotlight (px) */
  spotlightRadius?: number;
  /** Whether clicking the backdrop closes the tour */
  closeOnBackdropClick?: boolean;
  /** Z-index for the overlay */
  zIndex?: number;
}
