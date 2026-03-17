import type { ReactNode } from 'react';
import type { ITooltip } from 'react-tooltip';

export type TooltipBetaPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end';

export interface TooltipProps
  extends Omit<ITooltip, 'place' | 'noArrow' | 'children' | 'isOpen' | 'setIsOpen'> {
  prefixCls?: string;
  /** Placement of the tooltip relative to the trigger element */
  placement?: TooltipBetaPlacement;
  /** Bold title text displayed above the body */
  title?: ReactNode;
  /** Body text content */
  body?: ReactNode;
  /** Whether to show the arrow pointing to the trigger element */
  arrow?: boolean;
  /** Whether the tooltip is open (controlled) */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when the tooltip open state changes */
  onOpenChange?: (open: boolean) => void;
}
