# ProForm

Unified form system built on the internal form core and 1Money field components. `ProForm` wraps a native `<form>`, manages values/validation, and exposes item primitives, field wrappers, dependency rendering, list fields, grouped sections, and overlay form layouts.

## Import

```tsx
import {
  ProForm,
  ProFormText,
  ProFormSelect,
  DialogForm,
  QueryFilter,
} from '@1money/components-ui';
// or
import { ProForm, ProFormText } from '@1money/components-ui/ProForm';
```

## Usage

```tsx
<ProForm
  initialValues={{ name: '' }}
  onFinish={(values) => console.log(values)}
>
  <ProForm.Text
    name="name"
    label="Name"
    rules={[{ required: true, message: 'Name is required' }]}
  />
  <ProForm.Select
    name="currency"
    label="Currency"
    fieldProps={{ options: [{ label: 'USD', value: 'USD' }] }}
  />
</ProForm>
```

## Exports

`ProForm` is the root component and also exposes static members:

`ProForm.Item`, `ProForm.Dependency`, `ProForm.List`, `ProForm.Group`, `ProForm.FieldSet`, `ProForm.Submitter`, `ProForm.Text`, `ProForm.Password`, `ProForm.TextArea`, `ProForm.Checkbox`, `ProForm.CheckboxGroup`, `ProForm.Switch`, `ProForm.Select`, `ProForm.RadioGroup`, `ProForm.Slider`, `ProForm.DatePicker`, `ProForm.Upload`, `ProForm.useForm`, `ProForm.useInstance`, and `ProForm.useContext`.

Named exports include `ProFormItem`, `ProFormDependency`, `ProFormList`, `ProFormGroup`, all field components, `DialogForm`, `DrawerForm`, `QueryFilter`, and `createProFormField`.

## ProForm Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialValues` | `Record<string, unknown>` | — | Initial form values |
| `onFinish` | `(values) => void` | — | Called after successful submit with transformed values |
| `onFinishFailed` | `({ values, errors }) => void` | — | Called when validation fails |
| `onValuesChange` | `(changedValues, allValues) => void` | — | Called when a field changes |
| `onReset` | `() => void` | — | Called when reset runs |
| `size` | `FormSize` | `'middle'` | Form control size |
| `labelAlign` | `LabelAlign` | `'left'` | Label alignment |
| `disabled` | `boolean` | `false` | Disables child fields through context |
| `colon` | `boolean` | `true` | Show label colon |
| `requiredMark` | `boolean` | `true` | Show required marker |
| `validateTrigger` | `ValidateTrigger` | `'onChange'` | Validation trigger |
| `submitter` | `SubmitterProps \| false` | default submitter | Submit/reset button configuration |
| `mode` | `ProFormMode` | `'edit'` | Form display mode |
| `grid` | `boolean` | `false` | Render items in grid layout |
| `colProps` | `ProFormColProps` | — | Default grid column props for items |
| `rowProps` | `Partial<GridRowProps>` | — | Grid row props |
| `loading` | `boolean` | `false` | Loading state for async request usage |
| `request` | `(params?) => Promise<Record<string, unknown>>` | — | Loads values asynchronously |
| `params` | `unknown` | — | Parameters passed to `request` |
| `formRef` | `MutableRefObject<ProFormFormInstance \| undefined>` | — | Imperative form instance ref |
| `omitNil` | `boolean` | — | Omit nil values from submitted output |
| `prefixCls` | `string` | — | Accepted for API compatibility; the current root class prefix is `proform` |
| `className` | `string` | — | Additional CSS classes |

All other native form attributes are forwarded to the `<form>` element, excluding `onSubmit` and `onReset`.

## Field Props

Field components use `ProFormFieldProps<FieldProps>`.

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Field name |
| `label` | `ReactNode` | Field label |
| `rules` | `Rule[]` | Validation rules |
| `required` | `boolean` | Required marker and validation hint |
| `description` / `feedback` | `ReactNode` | Helper and feedback content |
| `fieldProps` | `Partial<FieldProps>` | Props passed to the wrapped field component |
| `mode` / `readonly` | `ProFormMode` / `boolean` | Display mode controls |
| `hidden` | `boolean` | Hide field |
| `colProps` | `ProFormColProps` | Grid column config |
| `transform` | `ProFormFieldTransformFn` | Transform submitted value |
| `convertValue` | `ProFormFieldConvertValueFn` | Convert value before rendering |
| `dependencies` | `string[]` | Field dependencies |
| `request` / `params` | async options loader | Load field options |
| `valueEnum` | `ProFormValueEnumObj` | Option map for select/radio/tag renderers |
| `debounceTime` | `number` | Debounce async request |

## Layout Forms

`DialogForm` and `DrawerForm` combine overlay components with `ProForm`.

| Prop | Type | Description |
|------|------|-------------|
| `open` | `boolean` | Controlled overlay state |
| `onOpenChange` | `(open: boolean) => void` | Open state callback |
| `trigger` | `ReactElement` | Element that opens the form |
| `title` | `ReactNode` | Overlay title |
| `submitTimeout` | `number` | Submit loading timeout |
| `autoClose` | `boolean` | Close after successful submit |
| `destroyOnClose` | `boolean` | Unmount form when closed |
| `dialogProps` / `drawerProps` | overlay props | Extra props for the underlying overlay |

`QueryFilter` extends `ProForm` with collapsed search layout props such as `defaultCollapsed`, `collapsed`, `defaultColsNumber`, `labelWidth`, `split`, `searchConfig`, and `syncToUrl`.
