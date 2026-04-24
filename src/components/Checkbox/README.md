# Checkbox

A checkbox component with label and description support, built with a native `input[type='checkbox']` and the 1Money design system tokens. Supports checked, unchecked, and indeterminate states with configurable label direction.

## Import

```tsx
import { Checkbox } from '@1money/components-ui';
// or
import { Checkbox } from '@1money/components-ui/Checkbox';
```

## Usage

```tsx
<Checkbox
  checked={isChecked}
  label="Accept terms"
  description="You must accept the terms to continue"
  onChange={(event) => setIsChecked(event.target.checked)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Whether the checkbox is checked (controlled) |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `indeterminate` | `boolean` | `false` | Whether the checkbox is in indeterminate state |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `label` | `ReactNode` | — | Label text displayed next to the checkbox |
| `description` | `ReactNode` | — | Description text displayed below the label |
| `labelPlacement` | `'left' \| 'right'` | `'left'` | Placement of the label relative to the checkbox |
| `onChange` | `(event: CheckboxChangeEvent) => void` | — | Callback when checked state changes |
| `value` | `string \| number` | — | Value of the checkbox, used by `CheckboxGroup` to track selection |
| `name` | `string` | — | Native name attribute passed to the underlying input |
| `required` | `boolean` | `false` | Marks the checkbox as required |
| `title` | `string` | — | Native title attribute for the element |
| `aria-label` | `string` | — | Accessible label for the checkbox |
| `aria-labelledby` | `string` | — | ID of an element that labels the checkbox |
| `style` | `CSSProperties` | — | Inline styles applied to the root element |
| `ref` | `RefObject<HTMLLabelElement \| null>` | — | Ref to the root label element |
| `prefixCls` | `string` | `'checkbox'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## CheckboxGroup

`CheckboxGroup` is exported from the same module as `Checkbox`, matching the `Radio` / `RadioGroup` structure.

```tsx
import { Checkbox, CheckboxGroup } from '@1money/components-ui';
// or
import { Checkbox, CheckboxGroup } from '@1money/components-ui/Checkbox';

<CheckboxGroup
  name="fruits"
  options={[
    { label: 'Apple', value: 'apple' },
    { label: 'Pear', value: 'pear' },
  ]}
  value={selectedValues}
  onChange={setSelectedValues}
/>

<Checkbox.Group defaultValue={['alpha']}>
  <Checkbox value="alpha" label="Alpha" />
  <Checkbox value="beta" label="Beta" />
</Checkbox.Group>
```

Selected values are returned in declaration order, and `options` items can define their own `onChange` callback that receives the checkbox change event.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<CheckboxValueType \| CheckboxGroupOption>` | — | Quick configuration for rendering grouped checkboxes |
| `value` | `CheckboxValueType[]` | — | Controlled selected values |
| `defaultValue` | `CheckboxValueType[]` | `[]` | Default selected values for uncontrolled usage |
| `onChange` | `(checkedValue: CheckboxValueType[]) => void` | — | Callback when the selected values change |
| `name` | `string` | — | Shared native name passed to all child inputs |
| `disabled` | `boolean` | `false` | Disables the entire group |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction for the group |
| `children` | `ReactNode` | — | Direct `Checkbox` children controlled by the group |
| `title` | `string` | — | Native title attribute for the group element |
| `aria-label` | `string` | — | Accessible label for the group |
| `aria-labelledby` | `string` | — | ID of an element that labels the group |
| `className` | `string` | `''` | Additional CSS classes |
| `prefixCls` | `string` | `'checkbox-group'` | CSS class prefix |
