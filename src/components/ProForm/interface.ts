import type { ReactNode, FC, ReactElement, MutableRefObject, CSSProperties, FormHTMLAttributes } from 'react';
import type {
  FormInstance,
  FormSize,
  LabelAlign,
  ValidateStatus,
  ValidateTrigger,
  Rule,
} from './core/interface';
import type { ButtonProps } from '@/components/Button';
import type { DrawerProps, DrawerPlacement } from '@/components/Drawer';
import type { GridRowProps, GridColProps, GridColSize } from '@/components/Grid';
import type { DialogProps } from '@/components/Dialog';
import type { ProFormMode } from './constants';

// ---------------------------------------------------------------------------
// Transform / ConvertValue function types
// ---------------------------------------------------------------------------
export type ProFormFieldTransformFn = (
  value: unknown,
  name: string,
  allValues: Record<string, unknown>,
) => unknown;

export type ProFormFieldConvertValueFn = (
  value: unknown,
  name: string,
) => unknown;

// ---------------------------------------------------------------------------
// valueEnum
// ---------------------------------------------------------------------------
export type ProFormValueEnumObj = Record<
  string | number,
  string | { text: string; disabled?: boolean }
>;

// ---------------------------------------------------------------------------
// Responsive column props for grid mode
// ---------------------------------------------------------------------------
export interface ProFormColProps {
  span?: number;
  sm?: GridColSize;
  md?: GridColSize;
  lg?: GridColSize;
}

// ---------------------------------------------------------------------------
// Async option type (used by field-level request)
// ---------------------------------------------------------------------------
export interface ProFormRequestOption {
  label: string;
  value: unknown;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// ProFormFormInstance — superset of FormInstance with format helpers
// ---------------------------------------------------------------------------
export interface ProFormFormInstance extends FormInstance {
  getFieldsFormatValue: () => Record<string, unknown>;
  validateFieldsReturnFormatValue: () => Promise<{
    success: boolean;
    values?: Record<string, unknown>;
    errors?: Record<string, string>;
  }>;
  submitForm: () => Promise<void>;
}

// ---------------------------------------------------------------------------
// ProFormContext — unified context that replaces the former FormContext
// Includes core form state + ProForm-specific fields.
// ---------------------------------------------------------------------------
export interface ProFormContextValue {
  // ── Core form state (from useForm) ──
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  validating: Record<string, boolean>;
  formInstance: ProFormFormInstance;
  setFieldValue: (name: string, value: unknown) => void;
  setFieldError: (name: string, error: string | null) => void;
  validateField: (name: string, rules: Rule[], providedValue?: unknown) => boolean;
  validateFieldAsync: (
    name: string,
    value: unknown,
    rules: Rule[],
  ) => Promise<{ isValid: boolean; error: string | null }>;
  registerField: (name: string, rules: Rule[]) => void;
  unregisterField: (name: string) => void;
  size: FormSize;
  labelAlign: LabelAlign;
  disabled: boolean;
  colon: boolean;
  requiredMark: boolean;
  validateTrigger: ValidateTrigger;

  // ── ProForm specifics ──
  /** @deprecated Use `mode` instead. Kept for backward compatibility. */
  readonly: boolean;
  mode: ProFormMode;
  grid: boolean;
  colProps: ProFormColProps;
  registerTransform: (name: string, fn: ProFormFieldTransformFn) => void;
  unregisterTransform: (name: string) => void;
}

// ---------------------------------------------------------------------------
// Field props (common to all ProForm fields)
// ---------------------------------------------------------------------------
export interface ProFormFieldProps<FieldProps = Record<string, unknown>> {
  name?: string;
  label?: ReactNode;
  rules?: Rule[];
  required?: boolean;
  description?: ReactNode;
  feedback?: ReactNode;
  validateStatus?: string;
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  colon?: boolean;
  /** @deprecated Use `mode='read'` instead */
  readonly?: boolean;
  mode?: ProFormMode;
  hidden?: boolean;
  colProps?: ProFormColProps;
  fieldProps?: Partial<FieldProps>;
  placeholder?: string;
  disabled?: boolean;
  width?: 'sm' | 'md' | 'lg' | 'xl' | number;
  transform?: ProFormFieldTransformFn;
  convertValue?: ProFormFieldConvertValueFn;
  dependencies?: string[];
  request?: (params?: Record<string, unknown>) => Promise<ProFormRequestOption[]>;
  params?: Record<string, unknown>;
  valueEnum?: ProFormValueEnumObj;
  debounceTime?: number;
}

// ---------------------------------------------------------------------------
// ProFormItem — FormItem + ProForm semantic extensions
// ---------------------------------------------------------------------------
export type ProFormValueType =
  | 'text'
  | 'password'
  | 'digit'
  | 'date'
  | 'dateTime'
  | 'select'
  | 'radio'
  | 'switch'
  | 'tag';

export interface ProFormItemProps {
  children?: ReactNode;
  className?: string;
  prefixCls?: string;
  label?: ReactNode;
  name?: string;
  rules?: Rule[];
  required?: boolean;
  description?: ReactNode;
  feedback?: ReactNode;
  validateStatus?: ValidateStatus;
  hasFeedback?: boolean;
  colon?: boolean;
  hidden?: boolean;
  /** Transform before submit, registered into ProForm pipeline */
  transform?: ProFormFieldTransformFn;
  /** Convert the displayed value before rendering into children */
  convertValue?: ProFormFieldConvertValueFn;
  /** Built-in read-mode value type renderer */
  valueType?: ProFormValueType;
  /** Custom read-mode rendering; overrides valueType */
  readonlyRender?: (value: unknown, values: Record<string, unknown>) => ReactNode;
  /** Grid column config; falls back to ProForm.colProps */
  colProps?: ProFormColProps;
  /** Per-item mode override */
  mode?: ProFormMode;
  /** Placeholder shown in read mode when the value is empty (default: '-') */
  emptyText?: ReactNode;
  /** Value enum for select/radio/tag value types */
  valueEnum?: ProFormValueEnumObj;
}

// ---------------------------------------------------------------------------
// Submitter
// ---------------------------------------------------------------------------
export interface SubmitterProps {
  submitText?: ReactNode;
  resetText?: ReactNode;
  render?: (
    props: { form: ProFormFormInstance; submit: () => void; reset: () => void },
    dom: ReactElement[],
  ) => ReactNode;
  onSubmit?: () => void;
  onReset?: () => void;
  submitButtonProps?: Partial<ButtonProps>;
  resetButtonProps?: Partial<ButtonProps>;
}

// ---------------------------------------------------------------------------
// ProForm
// ---------------------------------------------------------------------------
export interface ProFormProps
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
  submitter?: SubmitterProps | false;
  /** @deprecated Use `mode='read'` instead */
  readonly?: boolean;
  mode?: ProFormMode;
  grid?: boolean;
  colProps?: ProFormColProps;
  rowProps?: Partial<GridRowProps>;
  loading?: boolean;
  request?: (params?: unknown) => Promise<Record<string, unknown>>;
  params?: unknown;
  formRef?: MutableRefObject<ProFormFormInstance | undefined>;
  omitNil?: boolean;
}

// ---------------------------------------------------------------------------
// ProFormList
// ---------------------------------------------------------------------------
export interface ProFormListAction {
  add: (defaultValue?: Record<string, unknown>, index?: number) => void;
  remove: (index: number) => void;
  move: (from: number, to: number) => void;
  copy: (index: number) => void;
  getList: () => unknown[];
}

export interface ProFormListProps {
  name: string;
  label?: ReactNode;
  min?: number;
  max?: number;
  required?: boolean;
  requiredMessage?: string;
  initialValue?: Record<string, unknown>[];
  copyIconProps?: false | Partial<ButtonProps>;
  deleteIconProps?: false | Partial<ButtonProps>;
  creatorButtonProps?: false | (Partial<ButtonProps> & { text?: ReactNode; position?: 'top' | 'bottom' });
  itemRender?: (props: { listDom: ReactNode; action: ProFormListAction }) => ReactNode;
  actionRender?: (
    row: { index: number; record: unknown },
    action: ProFormListAction,
    defaultDom: { copy: ReactNode; delete: ReactNode },
  ) => ReactNode;
  children?: ReactNode | ((fields: Array<{ name: string; key: string }>, action: ProFormListAction) => ReactNode);
  onAfterAdd?: (defaultValue: Record<string, unknown>, index: number) => void;
  onAfterRemove?: (index: number) => void;
}

// ---------------------------------------------------------------------------
// ProFormDependency
// ---------------------------------------------------------------------------
export interface ProFormDependencyProps {
  name: string[];
  ignoreFormListField?: boolean;
  children: (values: Record<string, unknown>, form: ProFormFormInstance) => ReactNode;
}

// ---------------------------------------------------------------------------
// FormListContext (used by ProFormList to expose list scope to Dependency)
// ---------------------------------------------------------------------------
export interface FormListContextValue {
  listName?: string;
}

// ---------------------------------------------------------------------------
// ProFormFieldSet
// ---------------------------------------------------------------------------
export interface ProFormFieldSetProps {
  name?: string;
  label?: ReactNode;
  rules?: Rule[];
  required?: boolean;
  description?: ReactNode;
  feedback?: ReactNode;
  gap?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

// ---------------------------------------------------------------------------
// ProFormGroup
// ---------------------------------------------------------------------------
export interface ProFormGroupProps {
  title?: ReactNode;
  extra?: ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  style?: CSSProperties;
  children?: ReactNode;
}

// ---------------------------------------------------------------------------
// DialogForm
// ---------------------------------------------------------------------------
export interface DialogFormProps extends Omit<ProFormProps, 'title'> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  title?: ReactNode;
  width?: number | string;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  dialogProps?: Partial<DialogProps>;
}

// ---------------------------------------------------------------------------
// DrawerForm
// ---------------------------------------------------------------------------
export interface DrawerFormProps extends Omit<ProFormProps, 'title'> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  title?: ReactNode;
  width?: number | string;
  placement?: DrawerPlacement;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  drawerProps?: Partial<DrawerProps>;
}

// ---------------------------------------------------------------------------
// QueryFilter
// ---------------------------------------------------------------------------
export interface QueryFilterProps extends ProFormProps {
  defaultCollapsed?: boolean;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  defaultColsNumber?: number;
  labelWidth?: number | 'auto';
  split?: boolean;
  searchConfig?: {
    searchText?: ReactNode;
    resetText?: ReactNode;
  };
  syncToUrl?: boolean | ((values: Record<string, unknown>, type: 'get' | 'set') => Record<string, unknown>);
}

// ---------------------------------------------------------------------------
// createProFormField config
// ---------------------------------------------------------------------------
export interface CreateProFormFieldConfig<FieldProps> {
  component: FC<FieldProps> | (FC<FieldProps> & { displayName?: string });
  valuePropName?: string;
  mapProps?: (props: Record<string, unknown>) => Record<string, unknown>;
  renderReadonly?: (value: unknown, props?: Partial<FieldProps>) => ReactNode;
}
