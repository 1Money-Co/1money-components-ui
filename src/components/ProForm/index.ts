import { ProForm as ProFormBase } from './ProForm';
import { ProFormItem } from './ProFormItem';
import { ProFormDependency } from './ProFormDependency';
import { ProFormList } from './ProFormList';
import { ProFormGroup } from './ProFormGroup';
import { Submitter } from './Submitter';
import {
  ProFormText,
  ProFormPassword,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormSwitch,
  ProFormSelect,
  ProFormRadioGroup,
  ProFormSlider,
  ProFormDatePicker,
  ProFormUpload,
  ProFormFieldSet,
} from './fields';
import { useForm as useFormInternal } from './core/hooks/useForm';
import type { FormInstance, UseFormConfig } from './core/interface';
import { useProFormContext, useFormInstance } from './context';
import './style';

/** Public hook — returns [FormInstance] for backward compatibility */
const useForm = (config?: UseFormConfig): [FormInstance] => {
  const { formInstance } = useFormInternal(config);
  return [formInstance];
};

// Compose ProForm with static sub-components and hooks
const ProForm = Object.assign(ProFormBase, {
  // Item + core hooks
  Item: ProFormItem,
  useForm,
  useInstance: useFormInstance,
  useContext: useProFormContext,
  // Composition
  Dependency: ProFormDependency,
  List: ProFormList,
  Group: ProFormGroup,
  FieldSet: ProFormFieldSet,
  Submitter,
  // Fields
  Text: ProFormText,
  Password: ProFormPassword,
  TextArea: ProFormTextArea,
  Checkbox: ProFormCheckbox,
  CheckboxGroup: ProFormCheckboxGroup,
  Switch: ProFormSwitch,
  Select: ProFormSelect,
  RadioGroup: ProFormRadioGroup,
  Slider: ProFormSlider,
  DatePicker: ProFormDatePicker,
  Upload: ProFormUpload,
});

export { ProForm, ProFormItem };
export default ProForm;

// Named exports for fields
export {
  createProFormField,
  ProFormText,
  ProFormPassword,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormSwitch,
  ProFormSelect,
  ProFormRadioGroup,
  ProFormSlider,
  ProFormDatePicker,
  ProFormUpload,
  ProFormFieldSet,
} from './fields';

// Composition + layouts
export { ProFormDependency } from './ProFormDependency';
export { ProFormList } from './ProFormList';
export { ProFormGroup } from './ProFormGroup';
export { DrawerForm } from './layouts/DrawerForm';
export { DialogForm } from './layouts/DialogForm';
export { QueryFilter } from './layouts/QueryFilter';

// ProForm types
export type {
  ProFormProps,
  ProFormItemProps,
  ProFormFieldProps,
  ProFormContextValue,
  ProFormFormInstance,
  ProFormFieldTransformFn,
  ProFormFieldConvertValueFn,
  ProFormValueEnumObj,
  ProFormRequestOption,
  ProFormValueType,
  FormListContextValue,
  ProFormColProps,
  ProFormFieldSetProps,
  ProFormGroupProps,
  SubmitterProps,
  ProFormDependencyProps,
  ProFormListProps,
  ProFormListAction,
  DrawerFormProps,
  DialogFormProps,
  QueryFilterProps,
  CreateProFormFieldConfig,
} from './interface';

export { CSS_PREFIX, WIDTH_SIZE_MAP, DEFAULT_COL_SPAN, DEFAULT_TEXT, PROFORM_MODES } from './constants';
export type { ProFormMode } from './constants';

// Re-export core types that ProForm consumers still need
export type {
  FormInstance,
  FormCoreInstance,
  Rule,
  ValidateTrigger,
  ValidateStatus,
  FormLayout,
  FormSize,
  LabelAlign,
  UseFormConfig,
  UseFormReturn,
  UseFormInternals,
} from './core/interface';
