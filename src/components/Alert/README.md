# Alert

An inline alert component for displaying contextual feedback messages. Supports four status variants: info, success, warning, and error.

## Import

```tsx
import { Alert } from '@1money/components-ui';
// or
import { Alert } from '@1money/components-ui/Alert';
```

## Usage

```tsx
<Alert
  status="info"
  title="Information"
  body="This is an informational message."
  link={{ label: 'Learn more', href: '/docs' }}
  closable
  onClose={() => console.log('closed')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status variant controlling colors and icon |
| `title` | `ReactNode` | — | Title text displayed in bold |
| `body` | `ReactNode` | — | Body text below the title |
| `link` | `AlertLinkConfig` | — | Optional link below the body (see sub-table below) |
| `icon` | `ReactNode` | — | Custom icon override |
| `showIcon` | `boolean` | `true` | Whether to show the status icon |
| `action` | `ReactNode` | — | Optional action element (e.g., button) |
| `closable` | `boolean` | `false` | Whether to show the close button |
| `onClose` | `MouseEventHandler<HTMLButtonElement>` | — | Close button click handler |
| `prefixCls` | `string` | `'alert'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

### AlertLinkConfig

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Display text for the link **(required)** |
| `href` | `string` | URL — when provided, the link renders as an anchor instead of a button |
| `target` | `HTMLAttributeAnchorTarget` | Anchor target (only applies when `href` is provided) |
| `rel` | `string` | Anchor rel attribute (only applies when `href` is provided) |
| `onClick` | `MouseEventHandler<HTMLElement>` | Click handler for the link or action button |
