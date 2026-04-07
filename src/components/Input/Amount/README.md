# AmountInput

Amount input component for entering monetary values with support for currency selectors, action buttons, and balance display. Extends the base Input pattern with `inputMode="decimal"` by default.

## Import

```tsx
import { Input } from '@1money/components-ui';

// Used as Input.Amount
```

## Usage

```tsx
<Input.Amount
  label="You send"
  feedback="$2,992.68 USDC available"
  placeholder="Enter amount"
  suffix={
    <>
      <button onClick={onMax}>Use Max</button>
      <CurrencySelector value="USDC" onChange={onCurrencyChange} />
    </>
  }
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'large' \| 'small'` | `'large'` | Input size |
| `status` | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'` | Validation status |
| `disabled` | `boolean` | `false` | Disables the input |
| `label` | `ReactNode` | - | Label above the input |
| `info` | `ReactNode` | - | Info icon next to label |
| `description` | `ReactNode` | - | Description below label |
| `feedback` | `ReactNode` | - | Feedback text below input (e.g., available balance) |
| `required` | `boolean` | `false` | Shows required indicator |
| `prefix` | `ReactNode` | - | Content before the input (e.g., currency icon) |
| `suffix` | `ReactNode` | - | Content after the input (e.g., action button, currency selector) |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | `''` | Initial value for uncontrolled mode |
| `placeholder` | `string` | `'0'` | Placeholder text |
| `allowClear` | `boolean` | `false` | Shows clear button when input has value |
| `onChange` | `(value: string, event) => void` | - | Change callback |
| `onClear` | `() => void` | - | Clear button callback |
