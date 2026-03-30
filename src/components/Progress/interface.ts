import type { HTMLAttributes, ReactNode, RefObject } from 'react';
import type {
  ProgressColor,
  ProgressPlacement,
  ProgressState,
} from './constants';

export type {
  ProgressColor,
  ProgressPlacement,
  ProgressState,
} from './constants';

export interface ProgressFormatContext {
  percent: number;
  state: ProgressState;
}

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement | null>;

  /** CSS class prefix for BEM namespace customization */
  prefixCls?: string;

  /** Completion progress as a percentage. Values are normalized to 0-100. */
  percent: number;

  /** Semantic visual state. When omitted, the component derives one from percent. */
  state?: ProgressState;

  /** Track color scheme variant. */
  color?: ProgressColor;

  /** Alignment of the info row. */
  placement?: ProgressPlacement;

  /** Whether to show the progress info row. Defaults to true. */
  showInfo?: boolean;

  /** Custom formatter for the info row. */
  format?: (percent: number, context: ProgressFormatContext) => ReactNode;

  /** Optional feedback content rendered only for the error state. */
  feedback?: ReactNode;
}
