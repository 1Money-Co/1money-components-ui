# Drawer

Portal-rendered drawer panel for side sheets and top/bottom panels. Supports controlled open state, placement, mask dismissal, Escape dismissal, header controls, and footer content.

## Import

```tsx
import { Drawer } from '@1money/components-ui';
// or
import { Drawer } from '@1money/components-ui/Drawer';
```

## Usage

```tsx
<Drawer
  open={open}
  title="Transfer details"
  placement="right"
  onClose={() => setOpen(false)}
  footer={<Button onClick={() => setOpen(false)}>Done</Button>}
>
  Drawer content
</Drawer>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls whether the drawer is visible |
| `placement` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Side the drawer slides from |
| `width` | `string \| number` | `360` | Width for left/right drawers |
| `height` | `string \| number` | `360` | Height for top/bottom drawers |
| `title` | `ReactNode` | — | Header title |
| `footer` | `ReactNode` | — | Footer content |
| `maskClosable` | `boolean` | `true` | Whether overlay click calls `onClose` |
| `showCloseIcon` | `boolean` | `true` | Shows the close button |
| `showBackIcon` | `boolean` | `false` | Shows the back button |
| `closeIcon` | `ReactNode` | `cross` icon | Custom close icon |
| `backIcon` | `ReactNode` | `arrowLeft` icon | Custom back icon |
| `children` | `ReactNode` | — | Drawer body content |
| `onClose` | `() => void` | — | Close handler |
| `onBack` | `() => void` | — | Back button handler |
| `rootStyle` / `wrapperStyle` / `headerStyle` / `bodyStyle` / `footerStyle` | `CSSProperties` | — | Style overrides for drawer slots |
| `prefixCls` | `string` | `'drawer'` | CSS class prefix |
| `className` | `string` | — | Additional class on the drawer panel |

All other standard `HTMLDivElement` attributes are forwarded to the drawer panel.

