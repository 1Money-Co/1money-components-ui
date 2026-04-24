# Portal

Utility component for rendering children into `document.body` or a custom container. It can also be disabled to render children in place.

## Import

```tsx
import { Portal } from '@1money/components-ui';
// or
import { Portal } from '@1money/components-ui/Portal';
```

## Usage

```tsx
<Portal>
  <div>Rendered in document.body</div>
</Portal>

<Portal disablePortal>
  <div>Rendered in place</div>
</Portal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Content to render |
| `container` | `Element \| (() => Element \| null) \| null` | `document.body` | Portal target |
| `disablePortal` | `boolean` | `false` | Render children in place instead of portaling |

