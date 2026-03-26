# Radio

A radio button component built on native `input[type="radio"]` with the 1Money design system. It supports standalone controlled and uncontrolled usage, label with description, configurable direction, and grouped selection management via `RadioGroup`.

## Import

```tsx
import { Radio, RadioGroup } from '@1money/components-ui';
// or tree-shakeable
import { Radio, RadioGroup } from '@1money/components-ui/Radio';
```

## Radio Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | — | Value that identifies this radio within a `RadioGroup` |
| `checked` | `boolean` | — | Whether the radio is checked in controlled standalone usage |
| `defaultChecked` | `boolean` | `false` | Default checked state in uncontrolled standalone usage |
| `disabled` | `boolean` | `false` | Disables the radio |
| `label` | `ReactNode` | — | Label text displayed next to the radio |
| `description` | `ReactNode` | — | Description text displayed below the label |
| `direction` | `'left' \| 'right'` | `'left'` | Position of the radio relative to the label |
| `onChange` | `(event: RadioChangeEvent) => void` | — | Callback when checked state changes |
| `prefixCls` | `string` | `'radio'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes applied to the root label |
| `style` | `CSSProperties` | — | Inline style applied to the root label |
| `ref` | `RefObject<HTMLLabelElement \| null>` | — | Ref forwarded to the root label element |

All additional native radio input props are spread onto the underlying `input[type="radio"]`.

## RadioGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | — | Currently selected value in controlled mode |
| `defaultValue` | `string \| number` | — | Default selected value in uncontrolled mode |
| `id` | `string` | — | HTML id attribute for the root radiogroup container |
| `name` | `string` | — | HTML name attribute shared by radios in the group |
| `disabled` | `boolean` | `false` | Disables all radios in the group |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Layout direction of the group |
| `direction` | `'left' \| 'right'` | `'left'` | Position of radio relative to label, inherited by children |
| `gap` | `number \| string` | — | Gap between radio items |
| `title` | `string` | — | Title attribute for the root radiogroup container |
| `aria-label` | `string` | — | Accessible label for the group |
| `aria-labelledby` | `string` | — | Accessible labelled-by reference for the group |
| `options` | `RadioOptionItem[]` | — | Quick-render mode: array of radio options |
| `children` | `ReactNode` | — | Custom `Radio` children, which take precedence over `options` |
| `onChange` | `(event: RadioChangeEvent) => void` | — | Callback when the selected value changes |
| `prefixCls` | `string` | `'radio-group'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes applied to the root container |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the root container |

### RadioOptionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | (required) | Value that identifies this option |
| `id` | `string` | — | HTML id attribute for the underlying radio input |
| `label` | `ReactNode` | — | Label text displayed next to the radio |
| `description` | `ReactNode` | — | Description text displayed below the label |
| `disabled` | `boolean` | — | Whether this specific option is disabled |
| `required` | `boolean` | — | Whether this specific option is required |
| `title` | `string` | — | Title attribute for the underlying radio input |

## Event Shape

```tsx
type RadioChangeEvent = {
  nativeEvent: Event;
  preventDefault: () => void;
  stopPropagation: () => void;
  target: {
    checked: boolean;
    disabled: boolean;
    id?: string;
    name?: string;
    type: 'radio';
    value?: string | number;
  };
};
```

## Basic Usage

```tsx
<Radio
  label="Accept terms"
  checked={isChecked}
  onChange={(event) => setIsChecked(event.target.checked)}
/>
```

## RadioGroup With Children

```tsx
const [selected, setSelected] = useState<string | number>('a');

<RadioGroup
  value={selected}
  onChange={(event) => {
    if (event.target.value !== undefined) {
      setSelected(event.target.value);
    }
  }}
>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
  <Radio value="c" label="Option C" />
</RadioGroup>
```

## RadioGroup With Options

```tsx
const [selected, setSelected] = useState<string | number>('email');

<RadioGroup
  value={selected}
  onChange={(event) => {
    if (event.target.value !== undefined) {
      setSelected(event.target.value);
    }
  }}
  options={[
    { value: 'email', label: 'Email', description: 'Receive via email' },
    { value: 'sms', label: 'SMS', description: 'Receive via text message' },
    { value: 'push', label: 'Push', description: 'Receive on your device' },
  ]}
/>
```

## Direction and Layout

```tsx
<Radio label="Left aligned" direction="left" />
<Radio label="Right aligned" direction="right" />

<RadioGroup layout="horizontal" value={selected} onChange={handleChange}>
  <Radio value="sm" label="Small" />
  <Radio value="md" label="Medium" />
  <Radio value="lg" label="Large" />
</RadioGroup>
```

## Controlled and Uncontrolled

```tsx
// Standalone controlled
<Radio
  label="Controlled"
  checked={value}
  onChange={(event) => setValue(event.target.checked)}
/>

// Standalone uncontrolled
<Radio label="Uncontrolled" defaultChecked />

// Group controlled
<RadioGroup value={selected} onChange={handleChange}>
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>

// Group uncontrolled
<RadioGroup defaultValue="a">
  <Radio value="a" label="Option A" />
  <Radio value="b" label="Option B" />
</RadioGroup>
```
