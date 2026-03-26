# Empty

Empty state placeholder component. Displays an icon, optional title, description text, and optional action button to indicate no data is available.

## Import

```tsx
import { Empty } from '@1money/components-ui';
// or
import { Empty } from '@1money/components-ui/Empty';
```

## Usage

```tsx
// Basic usage with icon name
<Empty
  icon="transactions"
  title="No record found"
  description="Try adjusting your filters to find the record you are looking for"
/>

// With custom icon component
<Empty
  icon={<MyCustomIcon />}
  description="No data available"
/>

// With action button
<Empty
  variant="stroke"
  icon="bank"
  description="You don't have any bank accounts linked"
  action={<Button>Add new bank account</Button>}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'stroke' \| 'fill'` | `'stroke'` | Visual style — stroke has background and border, fill is transparent |
| `icon` | `IconName \| ReactNode` | — | Top icon, either an icon name string or a custom React element |
| `title` | `ReactNode` | — | Optional bold title text |
| `description` | `ReactNode` | — | Body description text |
| `action` | `ReactNode` | — | Optional action slot (e.g., a Button) |
| `prefixCls` | `string` | `'empty'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
