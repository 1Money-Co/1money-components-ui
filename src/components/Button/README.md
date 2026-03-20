# Button

A button component with the 1Money design system tokens. Supports multiple color variants, three sizes, and optional leading/trailing icon slots.

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
| `iconStart` | `ReactNode` | — | Leading icon slot |
| `iconEnd` | `ReactNode` | — | Trailing icon slot |
| `loading` | `boolean` | — | Shows a loading spinner and disables the button |
| `disabled` | `boolean` | — | Disables the button |
| `ref` | `RefObject<HTMLButtonElement \| null>` | — | Ref to the root button element |
| `prefixCls` | `string` | `'button'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | — | Button content |

This component also accepts the standard button props used by the underlying implementation (except the props managed directly by this component such as `label`, `severity`, and `size`).
