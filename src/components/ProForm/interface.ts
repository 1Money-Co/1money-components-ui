import type { ReactNode, FC, ReactElement } from 'react';
import type { FormProps, FormItemProps, Rule } from '@/components/Form';
import type { ButtonProps } from '@/components/Button';
import type { GridRowProps, GridColProps } from '@/components/Grid';
import type { ModalProps } from '@/components/Modal';

// ---------------------------------------------------------------------------
// ProFormContext
// ---------------------------------------------------------------------------
export interface ProFormContextValue {
  readonly?: boolean;
  grid?: boolean;
  colProps?: { span?: number };
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
  readonly?: boolean;
  hidden?: boolean;
  colProps?: { span?: number };
  fieldProps?: Partial<FieldProps>;
  placeholder?: string;
  disabled?: boolean;
  width?: 'sm' | 'md' | 'lg' | 'xl' | number;
}

// ---------------------------------------------------------------------------
// Submitter
// ---------------------------------------------------------------------------
export interface SubmitterProps {
  submitText?: ReactNode;
  resetText?: ReactNode;
  render?: (
    props: { form?: ProFormFormInstance; submit: () => void; reset: () => void },
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
  readonly?: boolean;
  grid?: boolean;
  colProps?: { span?: number };
  rowProps?: Partial<GridRowProps>;
  loading?: boolean;
  request?: (params?: unknown) => Promise<Record<string, unknown>>;
  params?: unknown;
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
  children: (values: Record<string, unknown>) => ReactNode;
}

// ---------------------------------------------------------------------------
// ModalForm
// ---------------------------------------------------------------------------
export interface ModalFormProps extends Omit<ProFormProps, 'title'> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  title?: ReactNode;
  width?: number | string;
  submitTimeout?: number;
  autoClose?: boolean;
  destroyOnClose?: boolean;
  modalProps?: Partial<ModalProps>;
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
