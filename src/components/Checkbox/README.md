# Checkbox

A checkbox component with label and description support, built on PrimeReact Checkbox with the 1Money design system tokens. Supports checked, unchecked, and indeterminate states with configurable label direction.

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
  onChange={(checked) => setIsChecked(checked)}
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
| `direction` | `'left' \| 'right'` | `'left'` | Position of the checkbox relative to the label |
| `onChange` | `(checked: boolean) => void` | — | Callback when checked state changes |
| `ref` | `RefObject<HTMLLabelElement \| null>` | — | Ref to the root label element |
| `prefixCls` | `string` | `'checkbox'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

This component also accepts all props from PrimeReact's `CheckboxProps` (except `checked`, `onChange`, `icon`, `size`, `ref`).
