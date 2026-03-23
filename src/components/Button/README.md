# Button

A native button component with the 1Money design system tokens. Supports multiple color variants, three sizes, optional leading/trailing icon slots, loading state, and rounded styling.

## Import

```tsx
import { Button } from '@1money/components-ui';
// or
import { Button } from '@1money/components-ui/Button';
```

## Usage

```tsx
// Basic
<Button color="primary" size="medium">Submit</Button>

// With icons
<Button color="secondary" iconStart={<Icons name="add" size={16} />}>
  Add Item
</Button>

<Button color="grey" iconEnd={<Icons name="arrowRight" size={16} />}>
  Next
</Button>

// Loading state
<Button loading>Processing...</Button>

// Disabled
<Button disabled>Unavailable</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'secondary' \| 'grey' \| 'black' \| 'white' \| 'danger' \| 'warning'` | `'primary'` | Color variant |
| `size` | `'large' \| 'medium' \| 'small'` | `'medium'` | Size variant |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Native button type |
| `rounded` | `boolean` | `false` | Applies a pill-shaped border radius |
| `iconStart` | `ReactNode` | — | Leading icon slot |
| `iconEnd` | `ReactNode` | — | Trailing icon slot |
| `loading` | `boolean` | `false` | Shows a loading spinner and disables the button |
| `disabled` | `boolean` | `false` | Disables the button |
| `prefixCls` | `string` | `'button'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | — | Button content |

This component accepts standard native button attributes such as `name`, `value`, `form`, `aria-*`, and `data-*`.

Refs are forwarded to the root `<button>` element.
