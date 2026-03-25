import type { HTMLAttributes, ReactNode } from 'react';

export interface SegmentItem {
  /** Unique value for the segment option */
  value: string;
  /** Display label */
  label: ReactNode;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export interface SegmentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Current selected value (controlled mode) */
  value?: string;
  /** Default selected value (uncontrolled mode) */
  defaultValue?: string;
  /** Segment options */
  items: SegmentItem[];
  /** Callback when selection changes */
  onChange?: (value: string) => void;
}
