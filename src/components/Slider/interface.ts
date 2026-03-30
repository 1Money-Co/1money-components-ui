import type { ReactNode, RefObject } from 'react';

export interface SliderProps {
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  /** CSS class prefix for customization */
  prefixCls?: string;
  id?: string;
  name?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Current value (controlled) */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Whether the slider is disabled */
  disabled?: boolean;
  /** Label displayed above the slider */
  label?: ReactNode;
  /** Description displayed below the slider */
  description?: ReactNode;
  /** Whether to show the label row */
  showLabel?: boolean;
  /** Whether to show the description */
  showDescription?: boolean;
  /** Prefix string for the output value (e.g., "$") */
  valuePrefix?: string;
  /** Custom formatter for the output value display */
  formatValue?: (value: number, min: number, max: number) => string;
  /** Callback when value changes */
  onChange?: (value: number) => void;
  /** Callback when user finishes dragging */
  onChangeEnd?: (value: number) => void;
}
