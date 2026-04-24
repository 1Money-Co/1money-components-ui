# Calendar

A date picker component wrapping PrimeReact's Calendar with custom styling. Supports single date, multiple dates, and date range selection modes.

## Import

```tsx
import { Calendar } from '@1money/components-ui';
// or
import { Calendar } from '@1money/components-ui/Calendar';
```

## Usage

```tsx
<Calendar
  label="Date of Birth"
  required
  placeholder="MM/DD/YYYY"
  onChange={(e) => console.log(e.value)}
/>
```

### Range Selection

```tsx
<Calendar
  label="Date Range"
  selectionMode="range"
  numberOfMonths={2}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'large' \| 'small'` | `'large'` | Size variant |
| `label` | `ReactNode` | — | Label displayed above the input |
| `message` | `ReactNode` | — | Helper/error message below the input |
| `required` | `boolean` | `false` | Shows asterisk after label |
| `success` | `boolean` | `false` | Success state styling |
| `invalid` | `boolean` | `false` | Error state styling |
| `selectionMode` | `'single' \| 'range' \| 'multiple'` | `'single'` | Date selection mode |
| `defaultValue` | `Date \| Date[] \| null` | — | Default value (uncontrolled) |
| `value` | `Date \| Date[] \| null` | — | Controlled value |
| `contentWidth` | `CSSProperties['width']` | — | Custom calendar content width |
| `placeholder` | `string` | `'MM/DD/YYYY'` | Input placeholder text |
| `prefixCls` | `string` | `'calendar'` | CSS class prefix |
| `wrapperCls` | `string` | — | Additional CSS class for the wrapper element |
| `labelCls` | `string` | — | Additional CSS class for the label element |
| `messageCls` | `string` | — | Additional CSS class for the message element |
| `className` | `string` | — | Additional CSS classes for the inner input element |

All other props are forwarded to PrimeReact's `Calendar` component.
