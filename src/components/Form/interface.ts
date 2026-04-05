import type React from 'react';
import type { FC, FormHTMLAttributes, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
import type {
  FormSize,
  FormLayout,
  LabelAlign,
  ValidateStatus,
  ValidateTrigger,
} from './constants';

export type {
  FormSize,
  FormLayout,
  LabelAlign,
  ValidateStatus,
  ValidateTrigger,
};

export interface Rule {
  required?: boolean;
  message?: string;
  min?: number;
  max?: number;
  pattern?: RegExp;
  type?: 'number' | 'email' | 'url';
  enum?: unknown[];
  validator?: (
    value: unknown,
    values: Record<string, unknown>,
  ) => boolean | string | Promise<boolean | string>;
}

export interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit' | 'onReset'> {
  children?: ReactNode;
  className?: string;
  prefixCls?: string;
  initialValues?: Record<string, unknown>;
  onFinish?: (values: Record<string, unknown>) => void;
  onFinishFailed?: (errorInfo: {
    values: Record<string, unknown>;
    errors: Record<string, string>;
  }) => void;
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>,
  ) => void;
  onReset?: () => void;
  size?: FormSize;
  labelAlign?: LabelAlign;
  disabled?: boolean;
  colon?: boolean;
  requiredMark?: boolean;
  validateTrigger?: ValidateTrigger;
}

export interface FormItemProps {
  children?: ReactNode;
  className?: string;
  prefixCls?: string;
  label?: ReactNode;
  name?: string;
  rules?: Rule[];
  required?: boolean;
  help?: ReactNode;
  validateStatus?: ValidateStatus;
  hasFeedback?: boolean;
  colon?: boolean;
  hidden?: boolean;
}

export interface FieldProps {
  name: string;
  value: unknown;
  error?: string;
  touched?: boolean;
  validating?: boolean;
  onChange: (value: unknown) => void;
  onBlur: () => void;
}

export interface FieldOptions {
  rules?: Rule[];
  validateTrigger?: ValidateTrigger;
}

export interface FieldComponentProps {
  children: ReactNode | ((props: FieldProps) => ReactNode);
  render?: (props: FieldProps) => ReactNode;
}

export interface FormInstance {
  getFieldValue: (name: string) => unknown;
  getFieldsValue: (nameList?: string[]) => Record<string, unknown>;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldsValue: (values: Record<string, unknown>) => void;
  setFieldError: (name: string, error: string | null) => void;
  setFieldsError: (errors: Record<string, string>) => void;
  resetFields: (fields?: string[]) => void;
  validateFields: (nameList?: string[]) => Promise<Record<string, unknown>>;
  submit: (
    callback?: (values: Record<string, unknown>) => void | Promise<void>,
  ) => Promise<Record<string, unknown> | undefined>;
  getFieldError: (name: string) => string | undefined;
  getFieldsError: (nameList?: string[]) => Record<string, string>;
  isFieldTouched: (name: string) => boolean;
  isFieldsTouched: (nameList?: string[], allTouched?: boolean) => boolean;
  isFieldValidating: (name: string) => boolean;
  setFieldTouched: (name: string, isTouched?: boolean) => void;
  setFieldsTouched: (touched: Record<string, boolean>) => void;
  defineField: (name: string, options?: FieldOptions) => FC<FieldComponentProps>;
  registerField: (name: string, rules: Rule[]) => void;
  unregisterField: (name: string) => void;
}

export interface FormContextValue {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string | null) => void;
  validateField: (name: string, rules: Rule[], providedValue?: unknown) => boolean;
  registerField: (name: string, rules: Rule[]) => void;
  unregisterField: (name: string) => void;
  size: FormSize;
  labelAlign: LabelAlign;
  disabled: boolean;
  colon: boolean;
  requiredMark: boolean;
  validateTrigger: ValidateTrigger;
}

export interface UseFormOptions {
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>,
  ) => void;
  validateTrigger?: ValidateTrigger;
  rules?: Record<string, Rule[]>;
}

export interface UseFormCoreConfig {
  initialValues?: Record<string, unknown>;
  onFinish?: (values: Record<string, unknown>) => void;
  onFinishFailed?: (errorInfo: {
    values: Record<string, unknown>;
    errors: Record<string, string>;
  }) => void;
  onValuesChange?: (
    changedValues: Record<string, unknown>,
    allValues: Record<string, unknown>,
  ) => void;
  onReset?: () => void;
  size?: FormSize;
  labelAlign?: LabelAlign;
  disabled?: boolean;
  colon?: boolean;
  requiredMark?: boolean;
  validateTrigger?: ValidateTrigger;
}

export interface UseFormCoreReturn {
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  fieldRules: Record<string, Rule[]>;
  getFieldRules: (name: string) => Rule[] | undefined;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string | null) => void;
  setFieldsValue: (values: Record<string, unknown>) => void;
  getFieldValue: (name: string) => unknown;
  getFieldsValue: () => Record<string, unknown>;
  validateField: (name: string, rules: Rule[], providedValue?: unknown) => boolean;
  validateFields: (fieldsRules?: Record<string, Rule[]>) => boolean;
  registerField: (name: string, rules: Rule[]) => void;
  unregisterField: (name: string) => void;
  handleSubmit: (e?: React.FormEvent) => void;
  handleReset: (e?: React.FormEvent) => void;
  resetFields: () => void;
  formInstance: {
    submit: () => { success: boolean; values?: Record<string, unknown>; errors?: Record<string, string> };
    resetFields: () => void;
    getFieldValue: (name: string) => unknown;
    getFieldsValue: () => Record<string, unknown>;
    setFieldsValue: (values: Record<string, unknown>) => void;
    setFieldValue: (name: string, value: unknown) => void;
    validateFields: (fieldsRules?: Record<string, Rule[]>) => boolean;
  };
  contextValue: FormContextValue;
}

export interface FormComponent
  extends ForwardRefExoticComponent<
    FormProps & RefAttributes<FormInstance>
  > {
  Item: FC<FormItemProps>;
  useForm: (
    initialValues?: Record<string, unknown>,
    options?: UseFormOptions,
  ) => [FormInstance];
  useFormContext: () => FormContextValue;
  useFormCore: (config?: UseFormCoreConfig) => UseFormCoreReturn;
}
