import { createContext, useContext } from 'react';
import type { ProFormContextValue } from './interface';
import { DEFAULT_COL_SPAN } from './constants';

export const ProFormContext = createContext<ProFormContextValue>({
  readonly: false,
  grid: false,
  colProps: { span: DEFAULT_COL_SPAN },
});

ProFormContext.displayName = 'ProFormContext';

export const useProFormContext = (): ProFormContextValue => useContext(ProFormContext);
