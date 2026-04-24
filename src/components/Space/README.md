# Space

A layout helper component. It wraps each child and applies consistent spacing, optional alignment, wrapping, and split separators.

## Features

- Horizontal or vertical spacing
- Preset or custom gap sizes (4px grid)
- Align control for items
- Optional wrap for horizontal layouts
- Optional split between items

## Import

```tsx
import { Space } from '@1money/components-ui';
// or
import { Space } from '@1money/components-ui/Space';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/components-ui/Space';
```

## Basic Usage

```tsx
import { Space } from '@1money/components-ui';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/components-ui/Space';

<Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
  <span>Left</span>
  <span>Right</span>
</Space>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `align` | `'start' \| 'end' \| 'center' \| 'baseline'` | — | Align items |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Spacing direction |
| `size` | `'small' \| 'middle' \| 'large' \| number \| [SpaceSize, SpaceSize]` | `'small'` (8px) | Gap size; when omitted, resolves to `'small'` (8px) internally |
| `split` | `ReactNode` | — | Insert split element between items |
| `wrap` | `boolean` | `false` | Auto wrap when horizontal |
| `prefixCls` | `string` | `'space'` | CSS class prefix |

This component also accepts all standard HTML div attributes.

## Vertical Layout

```tsx
<Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
  <div>Top</div>
  <div>Bottom</div>
</Space>
```

## Split Example

```tsx
<Space split={<span>|</span>} size={SPACE_SIZE.small}>
  <span>Alpha</span>
  <span>Beta</span>
  <span>Gamma</span>
</Space>
```
