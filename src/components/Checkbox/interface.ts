import type { ReactNode, RefObject } from 'react';
import type { CheckboxProps as PrimeCheckboxProps } from 'primereact/checkbox';

export interface CheckboxProps
  extends Omit<
    PrimeCheckboxProps,
    'checked' | 'onChange' | 'icon' | 'size' | 'ref'
  > {
  ref?: RefObject<HTMLLabelElement | null>;
  prefixCls?: string;
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Label text displayed next to the checkbox */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Position of the checkbox relative to the label */
  direction?: 'left' | 'right';
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}
