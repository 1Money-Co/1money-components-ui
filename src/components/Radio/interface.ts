import type { ReactNode, RefObject } from 'react';
import type { RadioButtonProps as PrimeRadioButtonProps } from 'primereact/radiobutton';

export interface RadioProps
  extends Omit<
    PrimeRadioButtonProps,
    'checked' | 'onChange' | 'ref'
  > {
  ref?: RefObject<HTMLLabelElement | null>;
  prefixCls?: string;
  /** Value that identifies this radio within a RadioGroup */
  value?: string | number;
  /** Whether the radio is checked (controlled, standalone usage) */
  checked?: boolean;
  /** Default checked state (uncontrolled, standalone usage) */
  defaultChecked?: boolean;
  /** Label text displayed next to the radio */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Position of the radio relative to the label */
  direction?: 'left' | 'right';
  /** Callback when checked state changes (standalone usage) */
  onChange?: (checked: boolean) => void;
}

export interface RadioOptionItem {
  /** Value that identifies this option */
  value: string | number;
  /** Label text displayed next to the radio */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Whether this specific option is disabled */
  disabled?: boolean;
}

export interface RadioGroupProps {
  ref?: RefObject<HTMLDivElement | null>;
  prefixCls?: string;
  className?: string;
  /** Currently selected value (controlled) */
  value?: string | number;
  /** Default selected value (uncontrolled) */
  defaultValue?: string | number;
  /** HTML name attribute for native radio grouping */
  name?: string;
  /** Disables all radios in the group */
  disabled?: boolean;
  /** Layout direction of the group */
  layout?: 'vertical' | 'horizontal';
  /** Position of radio relative to label (inherited by children) */
  direction?: 'left' | 'right';
  /** Gap between radio items — accepts spacing token key or CSS value */
  gap?: number | string;
  /** Quick-render mode: array of radio options */
  options?: RadioOptionItem[];
  /** Custom Radio children (takes precedence over options) */
  children?: ReactNode;
  /** Callback when the selected value changes */
  onChange?: (value: string | number) => void;
}
