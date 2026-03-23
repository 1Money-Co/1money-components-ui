import type { ReactNode, RefObject } from 'react';
import type { CheckboxValueType } from '../Checkbox';

export interface CheckboxGroupOption {
  label: ReactNode;
  value: CheckboxValueType;
  disabled?: boolean;
  description?: ReactNode;
  labelPlacement?: 'left' | 'right';
  indeterminate?: boolean;
  className?: string;
  id?: string;
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
