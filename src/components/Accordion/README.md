# Accordion

A collapsible content panel component for organizing and presenting information in a compact, expandable format. Supports fill (card-style) and stroke (divider-style) visual variants with two size options.

## Import

```tsx
import { Accordion } from '@1money/components-ui';
// or
import { Accordion } from '@1money/components-ui/Accordion';
```

## Usage

```tsx
const items = [
  { key: '1', title: 'Section Title', children: 'Content here...' },
  { key: '2', title: 'Another Section', children: 'More content...' },
];

<Accordion items={items} />
<Accordion items={items} variant="stroke" size="small" />
<Accordion items={items} multiple defaultActiveKeys={['1', '2']} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | — | Accordion items configuration (required) |
| `variant` | `'fill' \| 'stroke'` | `'fill'` | Visual style variant |
| `size` | `'large' \| 'small'` | `'large'` | Size variant |
| `multiple` | `boolean` | `false` | Allow multiple items expanded simultaneously |
| `activeKeys` | `string[]` | — | Controlled active item keys |
| `defaultActiveKeys` | `string[]` | `[]` | Default active item keys |
| `onChange` | `(activeKeys: string[]) => void` | — | Callback when active items change |
| `prefixCls` | `string` | `'accordion'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

### AccordionItem

| Prop | Type | Description |
|------|------|-------------|
| `key` | `string` | Unique identifier |
| `title` | `ReactNode` | Header title content |
| `children` | `ReactNode` | Expandable panel content |
| `disabled` | `boolean` | Whether the item is disabled |
