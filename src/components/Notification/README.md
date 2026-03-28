# Notification

Notification exposes a static `notification` API for globally mounted status messages.
Use `notification.open(...)` or the status shorthands instead of rendering a `Notification`
component directly.
The notification surface uses the Figma `Drop Shadow(Beta)/200` shadow treatment.

## Import

```tsx
import { notification } from '@1money/components-ui';
// or
import notification from '@1money/components-ui/Notification';
```

## Quick Start

```tsx
import { Button, notification } from '@1money/components-ui';

export default function Example() {
  return (
    <Button
      onClick={() => {
        notification.success({
          title: 'Account linked',
          body: 'Your bank account has been successfully connected.',
        });
      }}
    >
      Show notification
    </Button>
  );
}
```

## API Overview

| Method | Typical use |
|------|------|
| `notification.open(config)` | Full control over status and config |
| `notification.info(config)` | Informational message |
| `notification.success(config)` | Success feedback |
| `notification.warning(config)` | Warning or risky action reminder |
| `notification.error(config)` | Error feedback |
| `notification.destroy(key?)` | Close one notification or clear all |
| `notification.config(config)` | Set global defaults |

## Usage Recipes

### `notification.open`

```tsx
notification.open({
  status: 'success',
  title: 'Account linked',
  body: 'Your bank account has been successfully connected.',
  placement: 'topRight',
});
```

### `notification.info`

```tsx
notification.info({
  title: 'New feature',
  body: 'You can now link multiple accounts.',
});
```

### `notification.success`

```tsx
notification.success({
  title: 'Sync complete',
  body: 'Your balances are up to date.',
});
```

### `notification.warning`

```tsx
notification.warning({
  title: 'Review before submitting',
  body: 'Changing settlement settings affects all future transfers.',
  duration: 0,
});
```

### `notification.error`

```tsx
notification.error({
  title: 'Transfer failed',
  body: 'We could not complete the transfer. Please try again.',
});
```

### Action Link Button

Use `link.onClick` without `href` when the notification should trigger an in-app action.

```tsx
notification.open({
  title: 'Help center',
  body: 'Documentation has moved to a new location.',
  link: {
    label: 'Open guide',
    onClick: () => {
      console.log('open guide');
    },
  },
});
```

### Href Link

Use `href` when the action should render as a normal anchor.

```tsx
notification.open({
  title: 'Help center',
  body: 'Documentation has moved to a new location.',
  link: {
    label: 'Open docs',
    href: 'https://example.com/docs',
    target: '_blank',
  },
});
```

### Custom Icon

```tsx
import { Icons } from '@1money/components-ui';

notification.open({
  title: 'Manual review',
  body: 'This payout is being reviewed by an operator.',
  icon: <Icons name="notificationWarning" size={32} />,
});
```

### Hide Icon Or Close Button

```tsx
notification.open({
  title: 'Background sync',
  body: 'This message uses custom chrome.',
  showIcon: false,
  closable: false,
});
```

### Persistent Notification

Set `duration: 0` to keep the notification open until it is updated or destroyed.

```tsx
notification.open({
  key: 'sync',
  title: 'Sync in progress',
  body: 'We are updating your balances.',
  duration: 0,
});
```

### Update Existing Notification

Reuse the same `key` to replace an existing notification in place.

```tsx
notification.open({
  key: 'sync',
  title: 'Sync in progress',
  body: 'We are updating your balances.',
  duration: 0,
});

notification.success({
  key: 'sync',
  title: 'Sync complete',
  body: 'Your balances are up to date.',
});
```

### Capture The Returned Key

If you do not provide a `key`, `notification.open` returns one for later updates or removal.

```tsx
const notificationKey = notification.open({
  title: 'Processing',
  body: 'Your request is being handled.',
  duration: 0,
});

notification.success({
  key: notificationKey,
  title: 'Finished',
  body: 'The request completed successfully.',
});
```

### Destroy By Key

```tsx
notification.open({
  key: 'draft-save',
  title: 'Draft saved',
  body: 'This message will be dismissed manually.',
  duration: 0,
});

notification.destroy('draft-save');
```

### Destroy All

```tsx
notification.destroy();
```

### `onClose` Callback

`onClose` runs after the notification is fully removed.

```tsx
notification.open({
  title: 'Profile updated',
  body: 'Your changes have been saved.',
  onClose: () => {
    console.log('notification removed');
  },
});
```

### Global Defaults

```tsx
notification.config({
  placement: 'bottomRight',
  duration: 6,
  maxCount: 3,
});
```

### Per-call Override Global Defaults

```tsx
notification.config({
  placement: 'bottomRight',
  duration: 6,
});

notification.open({
  title: 'Uses global defaults',
});

notification.open({
  title: 'Overrides placement',
  placement: 'topLeft',
  duration: 0,
});
```

## Open Config

| Field | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string \| number` | auto-generated | Unique identifier used to update or destroy an existing notification |
| `status` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Status variant controlling icon and icon-background color |
| `title` | `ReactNode` | — | Title text displayed in bold |
| `body` | `ReactNode` | — | Body text displayed below the title |
| `link` | `{ label: string; href?: string; target?: HTMLAttributeAnchorTarget; rel?: string; onClick?: MouseEventHandler<HTMLElement> }` | — | Optional action. Renders as an anchor when `href` is provided, otherwise as a button |
| `icon` | `ReactNode` | — | Custom icon element overriding the default status icon |
| `showIcon` | `boolean` | `true` | Whether to show the status icon |
| `closable` | `boolean` | `true` | Whether to show the close button |
| `placement` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` | Screen placement for the notification container |
| `duration` | `number` | `4.5` | Auto-close timeout in seconds. Use `0` to keep the notification open |
| `onClose` | `() => void` | — | Callback fired after the notification is removed |

## Global Config

| Field | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` | `'topRight'` | Default screen placement for new notifications |
| `duration` | `number` | `4.5` | Default auto-close timeout in seconds |
| `maxCount` | `number` | `Infinity` | Maximum number of visible notifications per placement |

## Static Methods

- `notification.open(config)`
- `notification.info(config)`
- `notification.success(config)`
- `notification.warning(config)`
- `notification.error(config)`
- `notification.destroy(key?)`
- `notification.config({ placement, duration, maxCount })`
