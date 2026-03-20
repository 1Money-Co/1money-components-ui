# TooltipBeta

A dark tooltip component built on top of [react-tooltip](https://react-tooltip.com/) with the 1Money design system tokens. Supports 12 placement variants, optional title/body content, and configurable trigger behavior.

## Import

```tsx
import { TooltipBeta } from '@1money/components-ui';
// or
import { TooltipBeta } from '@1money/components-ui/TooltipBeta';
```

## Usage

```tsx
{/* Hover trigger (default) */}
<button id="my-trigger">Hover me</button>
<TooltipBeta anchorSelect="#my-trigger" body="Simple tooltip" />

{/* With title */}
<button id="info-trigger">Info</button>
<TooltipBeta anchorSelect="#info-trigger" title="Heading" body="Detailed text" placement="bottom" />

{/* Click trigger */}
<button id="click-trigger">Click me</button>
<TooltipBeta
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
| `title` | `ReactNode` | - | Bold title text |
| `body` | `ReactNode` | - | Body text content |
| `arrow` | `boolean` | `true` | Whether to show the arrow |
| `anchorSelect` | `string` | - | CSS selector for the trigger element |
| `prefixCls` | `string` | `'tooltip-beta'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

All other props from [react-tooltip ITooltip](https://react-tooltip.com/docs/options) are also supported (e.g., `openEvents`, `closeEvents`, `offset`, `delayShow`, `delayHide`).

### Placements

`'top'` | `'top-start'` | `'top-end'` | `'bottom'` | `'bottom-start'` | `'bottom-end'` | `'left'` | `'left-start'` | `'left-end'` | `'right'` | `'right-start'` | `'right-end'`
