import { createContext } from 'react';
import type { CheckboxValueType } from '../Checkbox/interface';

export interface CheckboxGroupContextValue {
  name?: string;
  disabled: boolean;
  isChecked: (value: CheckboxValueType) => boolean;
  onChange: (value: CheckboxValueType, nextChecked: boolean) => void;
}

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextValue | null>(null);
