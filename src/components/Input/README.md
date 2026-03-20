# Input

An input family for `@1money/components-ui` covering single-line input, password, search, textarea, and OTP use cases. The family shares a common shell for label, description, feedback, size, status, and disabled state handling.

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
```

## Shared Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'large' \| 'small'` | `'large'` | Size variant |
| `status` | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'` | Visual validation state |
| `label` | `ReactNode` | — | Label content displayed above the control |
| `info` | `ReactNode` | — | Optional helper content beside the label |
| `description` | `ReactNode` | — | Optional helper text displayed between label and control |
| `feedback` | `ReactNode` | — | Feedback text displayed below the control |
| `required` | `boolean` | `false` | Shows a required marker next to the label |
| `disabled` | `boolean` | `false` | Disables user interaction |
| `prefix` | `ReactNode` | — | Leading slot inside the control |
| `suffix` | `ReactNode` | — | Trailing slot inside the control |
| `prefixCls` | `string` | `'input'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes on the shell root |

## `Input` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `placeholder` | `string` | — | Native input placeholder |
| `allowClear` | `boolean` | `false` | Shows a clear action when the field has a value |
| `onChange` | `(value: string, event: ChangeEvent<HTMLInputElement>) => void` | — | Called with the next value and the native change event |

## `Input.Password` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visibilityToggle` | `boolean` | `true` | Shows the visibility toggle action |
| `visibleIcon` | `ReactNode` | `Icons eyeClose` | Icon shown when the password is visible |
| `hiddenIcon` | `ReactNode` | `Icons eyeOn` | Icon shown when the password is hidden |

## `Input.Search` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | `boolean` | `false` | Disables the action and swaps the icon for loading text |
| `searchButton` | `boolean \| ReactNode` | `true` | Shows the trailing search action or renders custom action content |
| `searchTrigger` | `'enter' \| 'button' \| 'both'` | `'both'` | Controls whether Enter, the button, or both can trigger search |
| `onSearch` | `(value: string) => void` | — | Called when a search is triggered |

## `Input.TextArea` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled value |
| `defaultValue` | `string` | `''` | Uncontrolled initial value |
| `rows` | `number` | `4` | Visible row count |
| `autoSize` | `boolean \| { minRows?: number; maxRows?: number }` | — | Reserved for future autosize behavior |
| `showCount` | `boolean` | `false` | Displays the current character count |
| `maxLength` | `number` | — | Limits the value and drives the count display |
| `onChange` | `(value: string, event: ChangeEvent<HTMLTextAreaElement>) => void` | — | Called with the next value and the native change event |

## `Input.OTP` Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | Controlled OTP value |
| `defaultValue` | `string` | `''` | Uncontrolled initial OTP value |
| `length` | `number` | `6` | Number of OTP cells |
| `autoFocus` | `boolean` | `false` | Focuses the first cell on mount |
| `mask` | `boolean` | `false` | Renders each cell as a password input |
| `formatter` | `(value: string) => string` | — | Transforms the aggregated value before it is stored |
| `onChange` | `(value: string) => void` | — | Called whenever the OTP value changes |
| `onComplete` | `(value: string) => void` | — | Called when all cells are filled |
