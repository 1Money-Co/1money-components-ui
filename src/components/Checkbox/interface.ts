import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';

export type CheckboxValueType = string | number;

export interface CheckboxChangeTarget {
  checked: boolean;
  disabled: boolean;
  id?: string;
  indeterminate: boolean;
  name?: string;
  type: 'checkbox';
  value?: CheckboxValueType;
}

export interface CheckboxChangeEvent {
  nativeEvent: Event;
  preventDefault: () => void;
  stopPropagation: () => void;
  target: CheckboxChangeTarget;
}

type NativeCheckboxInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'checked'
  | 'className'
  | 'defaultChecked'
  | 'onChange'
  | 'size'
  | 'style'
  | 'type'
  | 'value'
>;

export interface CheckboxProps extends NativeCheckboxInputProps {
  ref?: RefObject<HTMLLabelElement | null>;
  className?: string;
  prefixCls?: string;
  style?: CSSProperties;
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
  onChange?: (event: CheckboxChangeEvent) => void;
}

export interface CheckboxGroupOption {
  label: ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
  description?: ReactNode;
  labelPlacement?: 'left' | 'right';
  indeterminate?: boolean;
  className?: string;
  id?: string;
  onChange?: (event: CheckboxChangeEvent) => void;
  required?: boolean;
  title?: string;
}

export interface CheckboxGroupProps {
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  prefixCls?: string;
  name?: string;
  disabled?: boolean;
  options?: Array<CheckboxValueType | CheckboxGroupOption>;
  value?: CheckboxValueType[];
  defaultValue?: CheckboxValueType[];
  onChange?: (checkedValue: CheckboxValueType[]) => void;
  children?: ReactNode;
  orientation?: 'horizontal' | 'vertical';
  title?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}
