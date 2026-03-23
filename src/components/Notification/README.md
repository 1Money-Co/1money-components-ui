# Notification

A notification card component for displaying status messages with optional icon, title, body, link, and close button. Supports four status variants: info, success, warning, and error.

## Import

```tsx
import { Notification } from '@1money/components-ui';
// or
import { Notification } from '@1money/components-ui/Notification';
```

## Usage

```tsx
<Notification
  status="success"
  title="Account linked"
  body="Your bank account has been successfully connected."
  onClose={() => console.log('closed')}
/>
```

### With Link

```tsx
<Notification
  status="info"
  title="New feature"
  body="You can now link multiple accounts."
  link={{ label: 'Learn more', onClick: () => {} }}
/>
```

### With Href

```tsx
<Notification
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
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref to the root div element |
| `prefixCls` | `string` | `'notification'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

This component also accepts all standard HTML div attributes (except `title`).
