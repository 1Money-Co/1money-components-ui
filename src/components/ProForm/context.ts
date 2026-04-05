import { createContext, useContext } from 'react';
import type { ProFormContextValue, FormListContextValue } from './interface';
import { DEFAULT_COL_SPAN } from './constants';

const noop = () => {};

export const ProFormContext = createContext<ProFormContextValue>({
  readonly: false,
  grid: false,
  colProps: { span: DEFAULT_COL_SPAN },
  registerTransform: noop,
  unregisterTransform: noop,
});

ProFormContext.displayName = 'ProFormContext';

export const useProFormContext = (): ProFormContextValue => useContext(ProFormContext);

// ---------------------------------------------------------------------------
// FormListContext — provides list scope info to ProFormDependency
// ---------------------------------------------------------------------------
export const FormListContext = createContext<FormListContextValue>({});

FormListContext.displayName = 'FormListContext';

export const useFormListContext = (): FormListContextValue => useContext(FormListContext);
