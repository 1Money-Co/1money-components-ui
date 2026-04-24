# Input

An input family for `@1money/components-ui` covering single-line input, password, search, textarea, OTP, trade, amount, and mask use cases. The family shares a common shell for label, tip, feedback, size, status, and disabled state handling.

## Import

```tsx
import { Input } from '@1money/components-ui';
// or
import { Input } from '@1money/components-ui/Input';
```

## Usage

```tsx
<Input label="Amount" placeholder="Value" />

<Input.Password label="Password" />

<Input.Search label="Search" onSearch={(value) => console.log(value)} />

<Input.TextArea label="Memo" rows={4} />

<Input.OTP length={6} />

<Input.Trade currencySymbol="$" currencyUnit="USD" />

<Input.Amount currencyLabel="USDC" />

<Input.Mask mask="999-99-9999" />
```

## Shared Props (`InputBaseProps`)

These props are available on all sub-components unless noted otherwise.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'large' \| 'small'` | `'large'` | Size variant |
| `status` | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'` | Visual validation state |
| `label` | `ReactNode` | — | Label content displayed above the control |
| `info` | `ReactNode` | — | Optional helper content displayed beside the label |
| `tip` | `ReactNode` | — | Optional helper text displayed between the label and control |
| `feedback` | `ReactNode` | — | Feedback text displayed below the control |
| `feedbackIcon` | `IconName \| ReactNode` | — | Icon displayed alongside the feedback text |
| `required` | `boolean` | `false` | Shows a required marker next to the label |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `loading` | `boolean` | `false` | Shows a loading spinner and disables the control |
| `prefix` | `ReactNode` | — | Leading slot inside the control |
| `suffix` | `ReactNode` | — | Trailing slot inside the control |
| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |
| `prefixCls` | `string` | `'input'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes on the shell root |

> Note: `prefix`, `suffix`, and `allowClear` are not available on `Input.TextArea`. `prefix`, `suffix`, `allowClear`, and `loading` are not available on `Input.OTP`. `Input.Trade` uses its own layout and does not extend `InputBaseProps`.

## `Input` Props

Extends `InputBaseProps` and native `<input>` attributes (excluding `prefix`, `size`, `onChange`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `placeholder` | `string` | — | Native input placeholder |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |
| `onClear` | `() => void` | — | Called when the clear action is triggered |
| `mask` | `string` | — | When provided, the input behaves as a mask input. Tokens: `9` = digit, `a` = letter, `*` = alphanumeric |
| `slotChar` | `string` | `'_'` | Placeholder character shown in unfilled mask positions |
| `unmask` | `boolean` | `false` | When true, `onChange` receives the raw value without mask characters |
| `autoClear` | `boolean` | `false` | When true, clears an incomplete mask value on blur |
| `onComplete` | `(value: string) => void` | — | Called when all mask positions are filled |

> When `mask` is provided, `Input` delegates to `Input.Mask` internally.

## `Input.Password` Props

Extends `InputBaseProps` and native `<input>` attributes (excluding `type`, `allowClear`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `visibilityToggle` | `boolean` | `true` | Shows the visibility toggle button |
| `showIcon` | `ReactNode` | `HideBalanceIcon` | Icon rendered when the password is visible (clicking hides it) |
| `hideIcon` | `ReactNode` | `ViewBalanceIcon` | Icon rendered when the password is hidden (clicking reveals it) |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |

## `Input.Search` Props

Extends `InputProps` (which extends `InputBaseProps`) and inherits all base and mask props.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `loading` | `boolean` | `false` | Replaces the search icon with a spinner |
| `searchButton` | `boolean \| ReactNode` | `true` | Shows the search icon prefix; pass a node for custom content |
| `searchTrigger` | `'enter' \| 'button' \| 'both'` | `'both'` | Controls whether Enter, the icon button, or both trigger search |
| `onSearch` | `(value: string) => void` | — | Called when a search is triggered |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |
| `onClear` | `() => void` | — | Called when the clear action is triggered (requires `allowClear`) |

## `Input.TextArea` Props

Extends `InputBaseProps` (excluding `allowClear`, `prefix`, `suffix`) and native `<textarea>` attributes (excluding `onChange`, `prefix`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `rows` | `number` | `4` | Visible row count |
| `showCount` | `boolean` | `false` | Displays the current character count below the textarea |
| `maxLength` | `number` | — | Native max character limit; also drives the count display as `current/max` |
| `onChange` | `(value: string, event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Called with the next value and the native change event |

## `Input.OTP` Props

Extends `InputBaseProps` (excluding `allowClear`, `prefix`, `suffix`, `loading`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled OTP value |
| `defaultValue` | `string` | `''` | Uncontrolled initial OTP value |
| `length` | `number` | `6` | Number of OTP cells |
| `autoFocus` | `boolean` | `false` | Focuses the first cell on mount |
| `mask` | `boolean` | `false` | Renders each cell as a password field |
| `formatter` | `(value: string) => string` | — | Transforms the aggregated value before it is stored |
| `onChange` | `(value: string) => void` | — | Called whenever the OTP value changes |
| `onComplete` | `(value: string) => void` | — | Called when all cells are filled |

## `Input.Trade` Props

A specialized numeric input for trade/exchange flows. Does not use `FieldShell` or extend `InputBaseProps`.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `status` | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'` | Visual validation state (only `error` has a distinct style) |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `readOnly` | `boolean` | `false` | Makes the field read-only |
| `placeholder` | `string` | `'0'` | Native input placeholder |
| `currencySymbol` | `string` | `'$'` | Currency symbol displayed before the value |
| `currencyUnit` | `string` | `'USD'` | Currency unit displayed after the value |
| `exchangeText` | `ReactNode` | — | Exchange info displayed in the subline (e.g. `"0 USDT"`) |
| `feedback` | `ReactNode` | — | Error or helper message displayed below the subline |
| `showMax` | `boolean` | `false` | Shows a Max button |
| `onMax` | `() => void` | — | Called when the Max button is clicked |
| `onSwap` | `() => void` | — | Called when the swap icon is clicked; also renders the swap button when provided |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |
| `min` | `number \| bigint` | — | Minimum numeric value (inclusive) |
| `max` | `number \| bigint` | — | Maximum numeric value (inclusive) |
| `maxFractionDigits` | `number \| bigint` | — | Maximum number of decimal places |
| `negative` | `boolean` | — | Allows negative numbers |
| `className` | `string` | `''` | Additional CSS classes on the root element |
| `prefixCls` | `string` | `'input'` | CSS class prefix |

## `Input.Amount` Props

A numeric input for token/currency amount entry. Extends `InputBaseProps` (excluding `allowClear`) and native `<input>` attributes (excluding `prefix`, `size`, `onChange`, `min`, `max`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | — | Uncontrolled initial value |
| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |
| `onClear` | `() => void` | — | Called when the clear action is triggered |
| `actionLabel` | `ReactNode` | — | Action button label (e.g. `"Use Max"`) rendered in the suffix before the currency selector |
| `onAction` | `() => void` | — | Called when the action button is clicked |
| `currencyIcon` | `ReactNode` | — | Currency icon shown in the currency selector (e.g. `<img src="..." />`) |
| `currencyLabel` | `string` | — | Currency label text shown in the selector (e.g. `"USDC"`) |
| `onCurrencyClick` | `() => void` | — | Called when the currency selector is clicked; also renders a chevron when provided |
| `min` | `number \| bigint` | — | Minimum numeric value (inclusive) |
| `max` | `number \| bigint` | — | Maximum numeric value (inclusive) |
| `maxFractionDigits` | `number \| bigint` | — | Maximum number of decimal places |
| `negative` | `boolean` | — | Allows negative numbers |

## `Input.Mask` Props

A standalone masked input. Extends `InputBaseProps` (excluding `allowClear`) and native `<input>` attributes (excluding `prefix`, `size`, `onChange`).

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mask` | `string` | — | **Required.** Mask pattern. Tokens: `9` = digit, `a` = letter, `*` = alphanumeric. Literal characters pass through as-is |
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `slotChar` | `string` | `'_'` | Placeholder character shown in unfilled mask positions |
| `unmask` | `boolean` | `false` | When true, `onChange` receives the raw value without mask characters or slot chars |
| `autoClear` | `boolean` | `false` | When true, clears an incomplete mask value on blur |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the formatted (or raw if `unmask`) value and the native change event |
| `onComplete` | `(value: string) => void` | — | Called when all mask token positions are filled |
