# Dialog

Modal dialog rendered in a portal. Supports small and large layouts, optional illustration/media areas, back/close controls, mask and Escape dismissal, and configurable footer actions.

## Import

```tsx
import { Dialog } from '@1money/components-ui';
// or
import { Dialog } from '@1money/components-ui/Dialog';
```

## Usage

```tsx
<Dialog
  open={open}
  title="Confirm transfer"
  onCancel={() => setOpen(false)}
  onOk={handleSubmit}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls whether the dialog is visible |
| `size` | `'small' \| 'large'` | `'small'` | Dialog layout size |
| `maskClosable` | `boolean` | `true` | Whether clicking the overlay calls `onCancel` |
| `showCloseIcon` | `boolean` | `true` | Shows the close button |
| `showBackIcon` | `boolean` | `false` | Shows the back button |
| `fullWidth` | `boolean` | `false` | Uses the full-width dialog layout |
| `title` | `ReactNode` | — | Title content |
| `children` | `ReactNode` | — | Main dialog body content |
| `illustration` | `ReactNode \| IconName` | — | Illustration rendered above the title |
| `media` | `ReactNode` | — | Media area rendered before the dialog content |
| `closeIcon` | `ReactNode` | `cross` icon | Custom close icon |
| `backIcon` | `ReactNode` | `arrowLeft` icon | Custom back icon |
| `footer` | `ReactNode \| DialogFooterRender \| null` | generated from actions | Custom footer. Pass `null` to hide it |
| `onOk` | `() => void \| Promise<void>` | — | Confirm action; also renders the OK button when present |
| `onCancel` | `() => void \| Promise<void>` | — | Cancel/close action; also renders the Cancel button when present |
| `onBack` | `() => void` | — | Back button handler |
| `okText` | `ReactNode` | `'Confirm'` | OK button content |
| `cancelText` | `ReactNode` | `'Cancel'` | Cancel button content |
| `cancelButtonProps` | `Partial<ButtonProps>` | — | Props merged onto the Cancel button |
| `okButtonProps` | `Partial<ButtonProps>` | — | Props merged onto the OK button |
| `rootStyle` / `wrapperStyle` / `bodyStyle` / `headerStyle` / `contentStyle` / `footerStyle` | `CSSProperties` | — | Style overrides for dialog slots |
| `prefixCls` | `string` | `'dialog'` | CSS class prefix |
| `className` | `string` | — | Additional class on the dialog panel |

All other standard `HTMLDivElement` attributes are forwarded to the dialog panel.

