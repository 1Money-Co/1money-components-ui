# Select

Custom select component with single and multiple selection, option groups, searchable lists, field shell metadata, validation states, and custom render hooks.

## Import

```tsx
import { Select } from '@1money/components-ui';
// or
import { Select } from '@1money/components-ui/Select';
```

## Usage

```tsx
<Select
  label="Currency"
  placeholder="Select currency"
  options={[
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR', disabled: true },
  ]}
  onChange={(value, option) => console.log(value, option)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `ReactNode` | `'Value'` | Placeholder content |
| `options` | `SelectOptionData[]` | `[]` | Options or option groups |
| `value` | `SelectValue` | — | Controlled value |
| `defaultValue` | `SelectValue` | `[]` for multiple, otherwise `undefined` | Initial value |
| `size` | `'large' \| 'middle' \| 'small'` | `'large'` | Control size. `middle` normalizes to large styling |
| `status` | `'default' \| 'error' \| 'warning' \| 'success'` | `'default'` | Validation state |
| `variant` | `'fill' \| 'stroke' \| 'frameless'` | `'fill'` | Visual style |
| `disabled` | `boolean` | `false` | Disables interaction |
| `multiple` | `boolean` | `false` | Enables multiple selection |
| `maxVisibleValues` | `number` | — | Maximum selected values shown before collapsing |
| `searchable` | `boolean` | `false` | Shows search input inside the panel |
| `searchPlaceholder` | `string` | `'Search'` | Search input placeholder |
| `searchValue` | `string` | — | Controlled search value |
| `defaultSearchValue` | `string` | `''` | Initial search value |
| `label` / `info` / `description` / `feedback` | `ReactNode` | — | Field shell metadata |
| `required` | `boolean` | `false` | Shows required marker |
| `prefix` | `ReactNode` | — | Leading content in the control |
| `emptyContent` | `ReactNode` | `'No options'` | Empty list content |
| `panelFooter` | `ReactNode` | — | Content below the option list |
| `open` | `boolean` | — | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `listMaxHeight` | `number` | `320` | Maximum panel list height |
| `onChange` | `(value, option?) => void` | — | Called when selection changes |
| `onOpenChange` | `(open: boolean) => void` | — | Called when panel opens/closes |
| `onSearchChange` | `(value: string) => void` | — | Called when search changes |
| `onBlur` | `(event?) => void` | — | Blur handler |
| `filterOption` | `(searchValue, option) => boolean` | built-in text match | Custom filter function |
| `renderOption` | `(option, meta) => ReactNode` | — | Custom option renderer |
| `renderValue` | `(option, meta) => ReactNode` | — | Custom selected value renderer |
| `id` / `name` / `aria-label` / `aria-labelledby` | `string` | — | Native/accessibility attributes |
| `prefixCls` | `string` | `'select'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

### SelectOption

| Field | Type | Description |
|-------|------|-------------|
| `label` | `ReactNode` | Option label |
| `value` | `string \| number` | Option value |
| `disabled` | `boolean` | Disable this option |
| `description` | `ReactNode` | Secondary option text |
| `searchText` | `string` | Text used for search matching |

Option groups use `{ label, options, key? }`.

