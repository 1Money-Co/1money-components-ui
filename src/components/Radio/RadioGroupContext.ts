import { createContext, useContext } from 'react';
import type { RadioChangeEvent, RadioValueType } from './interface';

interface RadioGroupContextValue {
  /** Currently selected value in the group */
  value: RadioValueType | undefined;
  /** Handler called when a radio in the group is selected */
  onChange: (event: RadioChangeEvent) => void;
  /** Whether the entire group is disabled */
  disabled: boolean;
  /** HTML name attribute for native radio grouping */
  name?: string;
  /** Position of radio relative to label, inherited by children */
  direction: 'left' | 'right';
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroupContext = () => useContext(RadioGroupContext);

export type { RadioGroupContextValue };
