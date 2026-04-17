import { ProForm as ProFormBase } from './ProForm';
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
  ProFormUpload,
  ProFormFieldSet,
} from './fields';
import { DrawerForm } from './layouts/DrawerForm';
import { DialogForm } from './layouts/DialogForm';
import { QueryFilter } from './layouts/QueryFilter';
import './style';

// Compose ProForm with static sub-components
const ProForm = Object.assign(ProFormBase, {
  Dependency: ProFormDependency,
  List: ProFormList,
  Group: ProFormGroup,
  FieldSet: ProFormFieldSet,
  Submitter,
  Text: ProFormText,
  Password: ProFormPassword,
  TextArea: ProFormTextArea,
  Checkbox: ProFormCheckbox,
  CheckboxGroup: ProFormCheckboxGroup,
  Switch: ProFormSwitch,
  Select: ProFormSelect,
  Upload: ProFormUpload,
});

export { ProForm };
export default ProForm;

// Re-export individual pieces for named imports
export { ProFormDependency } from './ProFormDependency';
export { ProFormList } from './ProFormList';
export { ProFormGroup } from './ProFormGroup';
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
  ProFormUpload,
  ProFormFieldSet,
} from './fields';
export { DrawerForm } from './layouts/DrawerForm';
export { DialogForm } from './layouts/DialogForm';
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
  ProFormValueEnumObj,
  ProFormRequestOption,
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
