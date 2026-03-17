# Tooltip

A dark tooltip component built on top of [react-tooltip](https://react-tooltip.com/) with the 1Money design system tokens. Supports 12 placement variants, optional title/body content, controlled/uncontrolled open state, and configurable trigger behavior.

## Import

```tsx
import { Tooltip } from '@1money/components-ui';
// or
import { Tooltip } from '@1money/components-ui/Tooltip';
```

## Usage

```tsx
{/* Hover trigger (default) */}
<button id="my-trigger">Hover me</button>
<Tooltip anchorSelect="#my-trigger" body="Simple tooltip" />

{/* With title */}
<button id="info-trigger">Info</button>
<Tooltip anchorSelect="#info-trigger" title="Heading" body="Detailed text" placement="bottom" />

{/* Controlled */}
<button id="ctrl-trigger">Controlled</button>
<Tooltip anchorSelect="#ctrl-trigger" body="Controlled tooltip" open={isOpen} onOpenChange={setIsOpen} />

{/* Click trigger */}
<button id="click-trigger">Click me</button>
<Tooltip
  anchorSelect="#click-trigger"
  body="Click tooltip"
  openEvents={{ click: true, mouseover: false, mouseenter: false, focus: false }}
  closeEvents={{ click: true, mouseleave: false, mouseout: false, blur: false }}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placement` | `TooltipBetaPlacement` | `'top'` | Arrow direction and alignment |
| `title` | `ReactNode` | — | Bold title text |
| `body` | `ReactNode` | — | Body text content |
| `arrow` | `boolean` | `true` | Whether to show the arrow |
| `open` | `boolean` | — | Whether the tooltip is open (controlled) |
| `defaultOpen` | `boolean` | — | Default open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when the tooltip open state changes |
| `anchorSelect` | `string` | — | CSS selector for the trigger element |
| `prefixCls` | `string` | `'tooltip-beta'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

All other props from [react-tooltip ITooltip](https://react-tooltip.com/docs/options) are also supported (e.g., `openEvents`, `closeEvents`, `offset`, `delayShow`, `delayHide`), except `place`, `noArrow`, `children`, `isOpen`, and `setIsOpen` which are remapped to the props above.

### Placements

`'top'` | `'top-start'` | `'top-end'` | `'bottom'` | `'bottom-start'` | `'bottom-end'` | `'left'` | `'left-start'` | `'left-end'` | `'right'` | `'right-start'` | `'right-end'`
