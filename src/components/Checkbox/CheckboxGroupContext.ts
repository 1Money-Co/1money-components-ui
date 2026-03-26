import { createContext } from 'react';
import type { ReactNode } from 'react';
import type { CheckboxValueType } from './interface';

export interface CheckboxGroupContextValue {
  name?: string;
  disabled: boolean;
  value: CheckboxValueType[];
  cancelValue: (value: CheckboxValueType) => void;
  registerValue: (value: CheckboxValueType) => void;
  toggleOption: (option: {
    label?: ReactNode;
    value: CheckboxValueType;
  }) => void;
}

export const CheckboxGroupContext =
  createContext<CheckboxGroupContextValue | null>(null);
