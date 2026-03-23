# CheckboxGroup

A grouped checkbox component that supports `options`-driven rendering, direct `Checkbox` children, and controlled or uncontrolled selected values.

## Import

```tsx
import { Checkbox, CheckboxGroup } from '@1money/components-ui';
// or
import { CheckboxGroup } from '@1money/components-ui/CheckboxGroup';
```

## Usage

```tsx
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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Array<CheckboxValueType \| CheckboxGroupOption>` | — | Quick configuration for rendering grouped checkboxes |
| `value` | `CheckboxValueType[]` | — | Controlled selected values |
| `defaultValue` | `CheckboxValueType[]` | `[]` | Default selected values for uncontrolled usage |
| `onChange` | `(checkedValue: CheckboxValueType[]) => void` | — | Callback when the selected values change |
| `name` | `string` | — | Shared native name passed to all child inputs |
| `disabled` | `boolean` | `false` | Disables the entire group |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction for the group |
| `children` | `ReactNode` | — | Direct `Checkbox` children controlled by the group |
| `className` | `string` | `''` | Additional CSS classes |
| `prefixCls` | `string` | `'checkbox-group'` | CSS class prefix |
