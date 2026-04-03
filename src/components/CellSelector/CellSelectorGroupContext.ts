import { createContext, useContext } from 'react';

interface CellSelectorGroupContextValue {
  /** Currently selected value in the group */
  value: string | number | undefined;
  /** Handler called when a cell selector in the group is selected */
  onChange: (value: string | number) => void;
  /** Whether the entire group is disabled */
  disabled: boolean;
}

const CellSelectorGroupContext =
  createContext<CellSelectorGroupContextValue | null>(null);

export const CellSelectorGroupProvider = CellSelectorGroupContext.Provider;

export const useCellSelectorGroupContext = () =>
  useContext(CellSelectorGroupContext);

export type { CellSelectorGroupContextValue };
