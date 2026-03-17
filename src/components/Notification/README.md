# NotificationBeta

A notification card component for displaying status messages with optional icon, title, body, link, and close button. Supports four status variants: info, success, warning, and error.

## Import

```tsx
import { NotificationBeta } from '@1money/react-ui';
// or
import { NotificationBeta } from '@1money/react-ui/NotificationBeta';
```

## Usage

```tsx
<NotificationBeta
  status="success"
  title="Account linked"
  body="Your bank account has been successfully connected."
  onClose={() => console.log('closed')}
/>
```

### With Link

```tsx
<NotificationBeta
  status="info"
  title="New feature"
  body="You can now link multiple accounts."
  link={{ label: 'Learn more', onClick: () => {} }}
/>
```

### With Href

```tsx
<NotificationBeta
  status="info"
  title="Help center"
  body="Documentation has moved to a new location."
  link={{
    label: 'Open docs',
    href: 'https://example.com/docs',
    target: '_blank',
  }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status variant controlling icon and icon-background color |
| `title` | `ReactNode` | — | Title text displayed in bold |
| `body` | `ReactNode` | — | Body text displayed below the title |
| `link` | `{ label: string; href?: string; target?: HTMLAttributeAnchorTarget; rel?: string; onClick?: MouseEventHandler<HTMLElement> }` | — | Optional action. Renders as an anchor when `href` is provided, otherwise as a button |
| `icon` | `ReactNode` | — | Custom icon element (overrides default status icon) |
| `showIcon` | `boolean` | `true` | Whether to show the status icon |
| `closable` | `boolean` | `true` | Whether to show the close button |
| `onClose` | `MouseEventHandler<HTMLButtonElement>` | — | Callback when close button is clicked |
| `prefixCls` | `string` | `'notification-beta'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
