# ResizeObserver

React wrapper around resize observation utilities. It calls `onResize` on first render and whenever the observed element changes size.

## Import

```tsx
import { ResizeObserver, useResizeObserver } from '@1money/components-ui';
// or
import { ResizeObserver, useResizeObserver } from '@1money/components-ui/ResizeObserver';
```

## Usage

```tsx
<ResizeObserver
  onResize={(size, element) => {
    console.log(size.width, element);
  }}
>
  <div>Measured content</div>
</ResizeObserver>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode \| ((ref) => ReactElement)` | — | Observed element or render function |
| `disabled` | `boolean` | `false` | Disables resize observation |
| `onResize` | `(size: SizeInfo, element: HTMLElement) => void` | — | Called on initial measurement and resize |
| `data` | `unknown` | — | Additional data for collection usage |

### SizeInfo

| Field | Type | Description |
|-------|------|-------------|
| `width` / `height` | `number` | Content rectangle size |
| `offsetWidth` / `offsetHeight` | `number` | Element offset size |

