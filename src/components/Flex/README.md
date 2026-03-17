# Flex

A layout helper component modeled after Ant Design's Flex. Provides a consistent API for flex direction, alignment, wrapping, and gap spacing.

## Features

- Horizontal or vertical flex layouts
- Justify and align helpers
- Wrap control
- Gap spacing using the 4px grid

## Basic Usage

```tsx
import { Flex } from '@1money/react-ui';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY } from '@1money/react-ui/Flex';

<Flex gap={FLEX_GAP.middle} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
  <div>Left</div>
  <div>Right</div>
</Flex>
```

## Component Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| vertical | Stack items vertically | boolean | false |
| wrap | Flex wrapping | boolean \| 'nowrap' \| 'wrap' \| 'wrap-reverse' | 'nowrap' |
| align | Align items | 'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch' | - |
| justify | Justify content | 'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' | - |
| gap | Gap between items | 'small' \| 'middle' \| 'large' \| number | 0 |
| prefixCls | Classname prefix | string | 'flex' |

## Vertical Layout

```tsx
const VERTICAL_GAP = 16;

<Flex vertical gap={VERTICAL_GAP}>
  <div>Top</div>
  <div>Bottom</div>
</Flex>
```
