# Slider

A slider input component for selecting a numeric value within a range. Displays an optional label with value output and description text.

## Import

```tsx
import { Slider } from '@1money/components-ui';
// or
import { Slider } from '@1money/components-ui/Slider';
```

## Usage

```tsx
<Slider
  label="Price"
  description="Set your budget"
  valuePrefix="$"
  defaultValue={40}
  min={0}
  max={100}
  onChange={(value) => console.log(value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | — | Current value (controlled) |
| `defaultValue` | `number` | `min` | Default value (uncontrolled) |
| `min` | `number` | `0` | Minimum value |
| `max` | `number` | `100` | Maximum value |
| `step` | `number` | `1` | Step increment |
| `disabled` | `boolean` | `false` | Disables the slider |
| `label` | `ReactNode` | — | Label displayed above the slider |
| `description` | `ReactNode` | — | Description displayed below the slider |
| `showLabel` | `boolean` | `true` | Whether to show the label row |
| `showDescription` | `boolean` | `true` | Whether to show the description |
| `valuePrefix` | `string` | `''` | Prefix string for the output value (e.g., "$") |
| `formatValue` | `(value, min, max) => string` | — | Custom formatter for the value display |
| `onChange` | `(value: number) => void` | — | Callback when value changes |
| `onChangeEnd` | `(value: number) => void` | — | Callback when user finishes dragging |
| `id` | `string` | — | ID forwarded to the underlying `<input>` element |
| `name` | `string` | — | Name forwarded to the underlying `<input>` element |
| `aria-label` | `string` | — | Accessible label for the slider |
| `aria-labelledby` | `string` | — | ID of an element that labels the slider |
| `prefixCls` | `string` | `'slider'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
