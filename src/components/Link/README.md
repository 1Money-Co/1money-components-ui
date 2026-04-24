# Link

Inline text hyperlink with three color variants and two sizes. Wraps a native `<a>` element and applies the `link` typography scale (underlined).

## Import

```tsx
import { Link } from '@1money/components-ui';
// or
import { Link } from '@1money/components-ui/Link';
```

## Usage

```tsx
<Link href="https://1money.com" color="primary" size="large">
  Visit 1Money
</Link>
```

Disabled:

```tsx
<Link disabled>Read more</Link>
```

External (auto `rel="noopener noreferrer"` when `target="_blank"`):

```tsx
<Link href="https://docs.1money.com" target="_blank">
  Documentation
</Link>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'black' \| 'grey'` | `'primary'` | Visual color variant |
| `size` | `'large' \| 'small'` | `'large'` | Typography size (large = 14px, small = 12px) |
| `disabled` | `boolean` | `false` | Disables navigation, click, and focus |
| `href` | `string` | — | Target URL |
| `target` | `'_blank' \| '_self' \| ...` | — | Anchor target |
| `rel` | `string` | auto `'noopener noreferrer'` when `target="_blank"` | Anchor rel attribute |
| `children` | `ReactNode` | — | Link content |
| `onClick` | `(e: MouseEvent) => void` | — | Click handler (suppressed when disabled) |
| `prefixCls` | `string` | `'link'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
