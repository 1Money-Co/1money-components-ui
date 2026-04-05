import { ProForm as ProFormBase } from './ProForm';
import { ProFormDependency } from './ProFormDependency';
import { ProFormList } from './ProFormList';
import { Submitter } from './Submitter';
import {
  ProFormText,
  ProFormPassword,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormSwitch,
  ProFormSelect,
} from './fields';
import { ModalForm } from './layouts/ModalForm';
import { QueryFilter } from './layouts/QueryFilter';
import './style';

// Compose ProForm with static sub-components
const ProForm = Object.assign(ProFormBase, {
  Dependency: ProFormDependency,
  List: ProFormList,
  Submitter,
  Text: ProFormText,
  Password: ProFormPassword,
  TextArea: ProFormTextArea,
  Checkbox: ProFormCheckbox,
  CheckboxGroup: ProFormCheckboxGroup,
  Switch: ProFormSwitch,
  Select: ProFormSelect,
});

export { ProForm };
export default ProForm;

// Re-export individual pieces for named imports
export { ProFormDependency } from './ProFormDependency';
export { ProFormList } from './ProFormList';
export { Submitter } from './Submitter';
export {
  createProFormField,
  ProFormText,
  ProFormPassword,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormCheckboxGroup,
  ProFormSwitch,
  ProFormSelect,
} from './fields';
export { ModalForm } from './layouts/ModalForm';
export { QueryFilter } from './layouts/QueryFilter';
export { useProFormContext, FormListContext, useFormListContext } from './context';

// Re-export types
export type {
  ProFormProps,
  ProFormFieldProps,
  ProFormContextValue,
  ProFormFormInstance,
  ProFormFieldTransformFn,
  ProFormFieldConvertValueFn,
  FormListContextValue,
  SubmitterProps,
  ProFormDependencyProps,
  ProFormListProps,
  ProFormListAction,
  ModalFormProps,
  QueryFilterProps,
  CreateProFormFieldConfig,
} from './interface';

export { CSS_PREFIX, WIDTH_SIZE_MAP, DEFAULT_COL_SPAN, DEFAULT_TEXT } from './constants';
