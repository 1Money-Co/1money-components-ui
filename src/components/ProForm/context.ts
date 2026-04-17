import { createContext, useContext } from 'react';
import type { ProFormContextValue, FormListContextValue, ProFormFormInstance } from './interface';

export const ProFormContext = createContext<ProFormContextValue | null>(null);

ProFormContext.displayName = 'ProFormContext';

/**
 * Read the unified ProForm context (merged form core + ProForm semantics).
 * Throws when used outside `<ProForm>`.
 */
export const useProFormContext = (): ProFormContextValue => {
  const ctx = useContext(ProFormContext);
  if (!ctx) {
    throw new Error('useProFormContext must be used within a <ProForm> component');
  }
  return ctx;
};

/**
 * Read the ProForm form instance (superset of FormCoreInstance with format helpers).
 */
export const useFormInstance = (): ProFormFormInstance => {
  return useProFormContext().formInstance;
};

// ---------------------------------------------------------------------------
// FormListContext — provides list scope info to ProFormDependency
// ---------------------------------------------------------------------------
export const FormListContext = createContext<FormListContextValue>({});

FormListContext.displayName = 'FormListContext';

export const useFormListContext = (): FormListContextValue => useContext(FormListContext);
