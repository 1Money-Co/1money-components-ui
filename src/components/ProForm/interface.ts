import type { ReactNode, FC, ReactElement, MutableRefObject, CSSProperties } from 'react';
import type { FormProps, FormItemProps, FormCoreInstance, Rule } from '@/components/Form';
import type { ButtonProps } from '@/components/Button';
import type { DrawerProps, DrawerPlacement } from '@/components/Drawer';
import type { GridRowProps, GridColProps, GridColSize } from '@/components/Grid';
import type { DialogProps } from '@/components/Dialog';
import type { ProFormMode } from './constants';

// ---------------------------------------------------------------------------
// Transform / ConvertValue function types
// ---------------------------------------------------------------------------

/** Transform field value before submission */
export type ProFormFieldTransformFn = (
  value: unknown,
  name: string,
  allValues: Record<string, unknown>,
) => unknown;

/** Convert stored value before displaying in the field */
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
// ProFormContext
// ---------------------------------------------------------------------------
export interface ProFormContextValue {
  /** @deprecated Use `mode` instead. Kept for backward compatibility. */
  readonly?: boolean;
  /** Form mode: 'edit' (default), 'read' (readonly), 'update' (edit existing data) */
  mode?: ProFormMode;
  grid?: boolean;
  colProps?: ProFormColProps;
  registerTransform?: (name: string, fn: ProFormFieldTransformFn) => void;
  unregisterTransform?: (name: string) => void;
  formInstance?: ProFormFormInstance;
}

// ---------------------------------------------------------------------------
// FormInstance (lightweight subset used inside ProForm)
// ---------------------------------------------------------------------------
export interface ProFormFormInstance {
  submit: () => { success: boolean; values?: Record<string, unknown>; errors?: Record<string, string> };
  resetFields: () => void;
  getFieldValue: (name: string) => unknown;
  getFieldsValue: () => Record<string, unknown>;
  setFieldsValue: (values: Record<string, unknown>) => void;
  setFieldValue: (name: string, value: unknown) => void;
  validateFields: (fieldsRules?: Record<string, Rule[]>) => boolean;
  getFieldsFormatValue: () => Record<string, unknown>;
  validateFieldsReturnFormatValue: () => { success: boolean; values?: Record<string, unknown>; errors?: Record<string, string> };
}

// ---------------------------------------------------------------------------
// Field props (common to all ProForm fields)
// ---------------------------------------------------------------------------
export interface ProFormFieldProps<FieldProps = Record<string, unknown>> {
  name?: string;
  label?: ReactNode;
  rules?: Rule[];
  required?: boolean;
  help?: ReactNode;
  validateStatus?: string;
  labelCol?: { span?: number; offset?: number };
  wrapperCol?: { span?: number; offset?: number };
  colon?: boolean;
  /** @deprecated Use `mode='read'` instead */
  readonly?: boolean;
  /** Field-level mode override: 'edit', 'read', or 'update' */
  mode?: ProFormMode;
  hidden?: boolean;
  colProps?: ProFormColProps;
  fieldProps?: Partial<FieldProps>;
  placeholder?: string;
  disabled?: boolean;
  width?: 'sm' | 'md' | 'lg' | 'xl' | number;
  transform?: ProFormFieldTransformFn;
  convertValue?: ProFormFieldConvertValueFn;
  /** Field names to watch — auto-wraps with ProFormDependency */
  dependencies?: string[];
  /** Async option loader (works with Select, RadioGroup, CheckboxGroup) */
  request?: (params?: Record<string, unknown>) => Promise<ProFormRequestOption[]>;
  /** Extra params passed to request; merged with dependency values */
  params?: Record<string, unknown>;
  /** Quick enum → options conversion for Select/Radio/Checkbox fields */
  valueEnum?: ProFormValueEnumObj;
  /** Debounce delay (ms) for field onChange */
  debounceTime?: number;
}

// ---------------------------------------------------------------------------
// Submitter
// ---------------------------------------------------------------------------
export interface SubmitterProps {
  submitText?: ReactNode;
  resetText?: ReactNode;
  render?: (
    props: { form: FormCoreInstance; submit: () => void; reset: () => void },
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
export interface ProFormProps extends Omit<FormProps, 'onSubmit'> {
  submitter?: SubmitterProps | false;
  /** @deprecated Use `mode='read'` instead */
  readonly?: boolean;
  /** Form mode: 'edit' (default), 'read' (readonly), 'update' (edit existing data) */
  mode?: ProFormMode;
  grid?: boolean;
  colProps?: ProFormColProps;
  rowProps?: Partial<GridRowProps>;
  loading?: boolean;
  request?: (params?: unknown) => Promise<Record<string, unknown>>;
  params?: unknown;
  formRef?: MutableRefObject<ProFormFormInstance | undefined>;
  /** Strip null / undefined / empty-string values before onFinish (default: true) */
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
  /** Validate that the list is not empty on form submission */
  required?: boolean;
  /** Error message when list is empty (used with required) */
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
  help?: ReactNode;
  /** Gap between child fields in px */
  gap?: number;
  style?: CSSProperties;
  children?: ReactNode;
}

// ---------------------------------------------------------------------------
// ProFormGroup
// ---------------------------------------------------------------------------
export interface ProFormGroupProps {
  title?: ReactNode;
  /** Extra content rendered at the right of the title */
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
  /** Sync form values to URL search params */
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
