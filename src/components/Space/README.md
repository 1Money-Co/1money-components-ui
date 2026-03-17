# Space

A layout helper component modeled after Ant Design's Space. It wraps each child and applies consistent spacing, optional alignment, wrapping, and split separators.

## Features

- Horizontal or vertical spacing
- Preset or custom gap sizes (4px grid)
- Align control for items
- Optional wrap for horizontal layouts
- Optional split between items

## Basic Usage

```tsx
import { Space } from '@1money/react-ui';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '@1money/react-ui/Space';

<Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
  <span>Left</span>
  <span>Right</span>
</Space>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| align | Align items | 'start' \| 'end' \| 'center' \| 'baseline' | - |
| direction | Spacing direction | 'horizontal' \| 'vertical' | 'horizontal' |
| size | Gap size | 'small' \| 'middle' \| 'large' \| number \| [SpaceSize, SpaceSize] | 'small' |
| split | Insert split element between items | ReactNode | - |
| wrap | Auto wrap when horizontal | boolean | false |
| prefixCls | Classname prefix | string | 'space' |

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
