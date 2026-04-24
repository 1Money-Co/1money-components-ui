# Segment

A segmented control component for switching between mutually exclusive options. Displays options as a horizontal pill group with a sliding active indicator.

## Import

```tsx
import { Segment } from '@1money/components-ui';
// or
import { Segment } from '@1money/components-ui/Segment';
```

## Usage

```tsx
<Segment
  defaultValue="overview"
  items={[
    { value: 'overview', label: 'Overview' },
    { value: 'transactions', label: 'Transactions' },
    { value: 'analytics', label: 'Analytics' },
  ]}
  onChange={(value) => console.log('Selected:', value)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `SegmentItem[]` | — | Segment options (required) |
| `value` | `string` | — | Selected value (controlled mode) |
| `defaultValue` | `string` | First item value | Default selected value (uncontrolled mode) |
| `animated` | `boolean` | `true` | Whether to animate the sliding indicator transition |
| `onChange` | `(value: string) => void` | — | Callback when selection changes |
| `prefixCls` | `string` | `'segment'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

### SegmentItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Unique value (required) |
| `label` | `ReactNode` | — | Display label |
| `disabled` | `boolean` | `false` | Whether the option is disabled |
