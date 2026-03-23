import type { ReactNode, RefObject } from 'react';

export type CheckboxValueType = string | number;

export interface CheckboxProps {
  ref?: RefObject<HTMLLabelElement | null>;
  className?: string;
  prefixCls?: string;
  id?: string;
  name?: string;
  value?: CheckboxValueType;
  required?: boolean;
  title?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  indeterminate?: boolean;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Label text displayed next to the checkbox */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Placement of the label relative to the checkbox ('left' places label before checkbox, 'right' places label after) */
  labelPlacement?: 'left' | 'right';
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}
