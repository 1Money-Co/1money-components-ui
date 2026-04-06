import { createContext, useContext } from 'react';
import type { FormContextValue, FormCoreInstance } from './interface';

export const FormContext = createContext<FormContextValue | null>(null);

FormContext.displayName = 'FormContext';

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a <Form> component');
  }
  return context;
};

/** Read the FormCoreInstance from the nearest <Form> context (like Ant Design's Form.useFormInstance) */
export const useFormInstance = (): FormCoreInstance => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormInstance must be used within a <Form> component');
  }
  return context.formInstance;
};
