# Radio

A radio button component built on PrimeReact RadioButton with the 1Money design system. Supports standalone controlled/uncontrolled usage, label with description, configurable direction, and group management via `RadioGroup`.

## Import

```tsx
import { Radio, RadioGroup } from '@1money/components-ui';
// or tree-shakeable
import { Radio, RadioGroup } from '@1money/components-ui/Radio';
```

## Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | — | Value that identifies this radio within a RadioGroup |
| `checked` | `boolean` | — | Whether the radio is checked (controlled, standalone usage) |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled, standalone usage) |
| `disabled` | `boolean` | `false` | Disables the radio |
| `label` | `ReactNode` | — | Label text displayed next to the radio |
| `description` | `ReactNode` | — | Description text displayed below the label |
| `direction` | `'left' \| 'right'` | `'left'` | Position of the radio relative to the label |
| `onChange` | `(checked: boolean) => void` | — | Callback when checked state changes (standalone usage) |
| `prefixCls` | `string` | `'radio-beta'` | CSS class prefix |
| `ref` | `RefObject<HTMLLabelElement \| null>` | — | Ref forwarded to the root label element |

All additional PrimeReact `RadioButtonProps` are spread onto the underlying `PrimeRadioButton`.

## RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | — | Currently selected value (controlled) |
| `defaultValue` | `string \| number` | — | Default selected value (uncontrolled) |
| `name` | `string` | — | HTML name attribute for native radio grouping |
| `disabled` | `boolean` | `false` | Disables all radios in the group |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction of the group |
| `direction` | `'left' \| 'right'` | `'left'` | Position of radio relative to label (inherited by children) |
| `gap` | `number \| string` | — | Gap between radio items — accepts spacing token key or CSS value |
| `options` | `RadioOptionItem[]` | — | Quick-render mode: array of radio options |
| `children` | `ReactNode` | — | Custom Radio children (takes precedence over `options`) |
| `onChange` | `(value: string \| number) => void` | — | Callback when the selected value changes |
| `prefixCls` | `string` | `'radio-group'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the root div element |

### RadioOptionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | (required) | Value that identifies this option |
| `label` | `ReactNode` | — | Label text displayed next to the radio |
| `description` | `ReactNode` | — | Description text displayed below the label |
| `disabled` | `boolean` | — | Whether this specific option is disabled |

## Basic Usage

```tsx
<Radio label="Accept terms" checked={isChecked} onChange={(checked) => setIsChecked(checked)} />
```

## Feature Groups

### Direction

Position the radio circle on the left (default) or right side of the label.

```tsx
<Radio label="Left aligned" direction="left" />
<Radio label="Right aligned" direction="right" />
```

### Label with Description

Add supplementary text below the label for additional context.

```tsx
<Radio
  label="Email notifications"
  description="Receive updates about your account via email"
  checked
/>
```

### RadioGroup with Children

Wrap multiple `Radio` components in a `RadioGroup` to manage selection state as a group. Each `Radio` needs a `value` prop; the group's `onChange` receives the selected value.

```tsx
const [selected, setSelected] = useState<string | number>('a');

<RadioGroup value={selected} onChange={setSelected}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
  <Radio value="c" label="Option C" />
</RadioGroup>
```

### RadioGroup with Options

Use the `options` prop for a quick declarative approach instead of manually rendering `Radio` children.

```tsx
const [selected, setSelected] = useState<string | number>('email');

<RadioGroup
  value={selected}
  onChange={setSelected}
  options={[
    { value: 'email', label: 'Email', description: 'Receive via email' },
    { value: 'sms', label: 'SMS', description: 'Receive via text message' },
    { value: 'push', label: 'Push notification', description: 'Receive on your device' },
  ]}
/>
```

### Layout

RadioGroup supports `vertical` (default) and `horizontal` layouts.

```tsx
<RadioGroup value={selected} onChange={setSelected} layout="horizontal">
  <Radio value="sm" label="Small" />
  <Radio value="md" label="Medium" />
  <Radio value="lg" label="Large" />
</RadioGroup>
```

## Edge Cases

### Controlled vs Uncontrolled (Standalone)

Standalone `Radio` (outside a RadioGroup) supports both modes via `useControlledState`. Pass `checked` + `onChange` for controlled, or `defaultChecked` for uncontrolled.

```tsx
{/* Controlled */}
<Radio label="Controlled" checked={value} onChange={(checked) => setValue(checked)} />

{/* Uncontrolled */}
<Radio label="Uncontrolled" defaultChecked={false} />
```

### Controlled vs Uncontrolled (RadioGroup)

RadioGroup also supports both modes. Pass `value` + `onChange` for controlled, or `defaultValue` for uncontrolled.

```tsx
{/* Controlled */}
<RadioGroup value={selected} onChange={setSelected}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>

{/* Uncontrolled */}
<RadioGroup defaultValue="a">
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
```

### Disabled Group with Individual Override

`RadioGroup`'s `disabled` prop disables all children. Individual `Radio` items can also be disabled independently via `options`.

```tsx
<RadioGroup value="a" disabled>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>

{/* Or disable individual options */}
<RadioGroup
  value={selected}
  onChange={setSelected}
  options={[
    { value: 'a', label: 'Available' },
    { value: 'b', label: 'Unavailable', disabled: true },
    { value: 'c', label: 'Available' },
  ]}
/>
```

### Group Direction Inheritance

When `direction` is set on `RadioGroup`, all child `Radio` components inherit it. A `Radio` can override the group direction via its own `direction` prop.

```tsx
<RadioGroup value={selected} onChange={setSelected} direction="right">
  <Radio value="a" label="Inherits right" description="Description A" />
  <Radio value="b" label="Inherits right" description="Description B" />
  <Radio value="c" label="Overrides to left" direction="left" />
</RadioGroup>
```

### Custom Gap

Control spacing between items with the `gap` prop.

```tsx
<RadioGroup value={selected} onChange={setSelected} gap={24}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
```
