# Copy

A copy-to-clipboard icon button that displays a copy icon by default and switches to a check icon upon successful copy, reverting after 1.5 seconds.

## Import

```tsx
import { Copy } from '@1money/components-ui';
// or
import { Copy } from '@1money/components-ui/Copy';
```

## Usage

```tsx
<Copy
  value="Text to copy"
  onSuccess={(val) => console.log('Copied:', val)}
  onError={(val) => console.log('Failed:', val)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | The text content to copy to clipboard (required) |
| `iconSize` | `number` | `20` | Icon size in pixels |
| `color` | `string` | — | Icon color |
| `successColor` | `string` | `'#1F5800'` | Icon color when copy succeeds |
| `contained` | `boolean` | `true` | Whether to show the background container around the icon |
| `onSuccess` | `(value: string) => void` | — | Callback fired when copy succeeds |
| `onError` | `(value: string) => void` | — | Callback fired when copy fails |
| `prefixCls` | `string` | `'copy'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |
