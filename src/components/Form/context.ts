import { createContext, useContext } from 'react';
import type { FormContextValue } from './interface';

export const FormContext = createContext<FormContextValue | null>(null);

FormContext.displayName = 'FormContext';

export const useFormContext = (): FormContextValue => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a <Form> component');
  }
  return context;
};
