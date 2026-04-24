# Dropdown

Small wrapper around `Trigger` with dropdown-friendly trigger defaults. Use it to attach floating content to a single trigger element.

## Import

```tsx
import { Dropdown } from '@1money/components-ui';
// or
import { Dropdown } from '@1money/components-ui/Dropdown';
```

## Usage

```tsx
<Dropdown
  content={({ close }) => (
    <button type="button" onClick={close}>
      Close
    </button>
  )}
  placement="bottom-start"
>
  <Button>Open menu</Button>
</Dropdown>
```

## Props

`DropdownProps` accepts all `TriggerProps` except `trigger`, which is narrowed to dropdown trigger modes.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `ReactNode \| ({ close, open }) => ReactNode` | — | Floating dropdown content |
| `trigger` | `'click' \| 'hover'` | `'click'` | How the dropdown opens |
| `placement` | `Placement` | `'bottom-start'` from `Trigger` | Floating placement |
| `open` | `boolean` | — | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Initial open state |
| `onOpenChange` | `(open: boolean) => void` | — | Called when open state changes |
| `showArrow` | `boolean` | `false` from `Trigger` | Shows arrow pointing to the trigger |
| `offset` | `number` | `4` from `Trigger` | Gap between trigger and panel |
| `portal` | `boolean` | `true` from `Trigger` | Render panel in a portal |
| `dismissible` | `boolean` | `true` from `Trigger` | Close on outside click / Escape |
| `hoverDelay` | `number \| { open?: number; close?: number }` | — | Hover delay in milliseconds |
| `overlayClassName` | `string` | — | Class applied to the floating panel |
| `overlayStyle` | `CSSProperties` | — | Style applied to the floating panel |
| `children` | `ReactElement` | — | Single trigger element |
| `disabled` | `boolean` | `false` | Disables interactions |
| `role` | `TriggerRole` | `'dialog'` | Accessibility role for the panel |
