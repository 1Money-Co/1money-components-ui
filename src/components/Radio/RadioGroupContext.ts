import { createContext, useContext } from 'react';
import type {
  RadioAlignment,
  RadioChangeEvent,
  RadioOrientation,
  RadioSize,
  RadioValueType,
  RadioVariant,
} from './interface';

interface RadioGroupContextValue {
  /** Currently selected value in the group */
  value: RadioValueType | undefined;
  /** Handler called when a radio in the group is selected */
  onChange: (event: RadioChangeEvent) => void;
  /** Whether the entire group is disabled */
  disabled: boolean;
  /** HTML name attribute for native radio grouping */
  name?: string;
  /** Visual variant inherited by children */
  variant: RadioVariant;
  /** Visual size inherited by children */
  size: RadioSize;
  /** Cell orientation inherited by children */
  orientation: RadioOrientation;
  /** Alignment inherited by children */
  alignment: RadioAlignment;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

export const RadioGroupProvider = RadioGroupContext.Provider;

export const useRadioGroupContext = () => useContext(RadioGroupContext);

export type { RadioGroupContextValue };
