# Trigger

Low-level floating trigger component powered by Floating UI. It attaches popup content to a single trigger element and supports click, hover, focus, controlled open state, portals, arrows, and dismissal behavior.

## Import

```tsx
import { Trigger } from '@1money/components-ui';
// or
import { Trigger } from '@1money/components-ui/Trigger';
```

## Usage

```tsx
<Trigger
  trigger="click"
  placement="bottom-start"
  content={({ close }) => (
    <div>
      Popup content
      <button type="button" onClick={close}>Close</button>
    </div>
  )}
>
  <Button>Open</Button>
</Trigger>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode \| ({ close, open }) => ReactNode` | — | Floating content |
| `trigger` | `'click' \| 'hover' \| 'focus' \| TriggerAction[]` | `'click'` | Interaction mode |
| `placement` | `Placement` | `'bottom-start'` | Floating UI placement |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `showArrow` | `boolean` | `false` | Shows arrow pointing to the trigger |
| `offset` | `number` | `4` | Gap between trigger and popup |
| `portal` | `boolean` | `true` | Render popup in a portal |
| `dismissible` | `boolean` | `true` | Close on outside press / Escape |
| `hoverDelay` | `number \| { open?: number; close?: number }` | — | Hover open/close delay in milliseconds |
| `overlayClassName` | `string` | — | Class applied to popup |
| `overlayStyle` | `CSSProperties` | — | Style applied to popup |
| `children` | `ReactElement` | — | Single trigger element |
| `disabled` | `boolean` | `false` | Disables interactions |
| `onOpen` | `() => void` | — | Called when popup opens |
| `onClose` | `() => void` | — | Called when popup closes |
| `role` | `'dialog' \| 'tooltip' \| 'menu' \| 'alertdialog' \| 'listbox'` | `'dialog'` | Accessibility role |
| `ref` | `Ref<HTMLElement \| null>` | — | Ref forwarded to the trigger element |
