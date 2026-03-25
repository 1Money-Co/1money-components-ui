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
  onClose={() => console.log('closed')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status variant controlling colors and icon |
| `title` | `ReactNode` | — | Title text displayed in bold |
| `body` | `ReactNode` | — | Body text below the title |
| `link` | `AlertLinkConfig` | — | Optional link below the body |
| `icon` | `ReactNode` | — | Custom icon override |
| `showIcon` | `boolean` | `true` | Whether to show the status icon |
| `action` | `ReactNode` | — | Optional action element (e.g., button) |
| `closable` | `boolean` | `true` | Whether to show the close button |
| `onClose` | `MouseEventHandler` | — | Close button click handler |
| `prefixCls` | `string` | `'alert'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
