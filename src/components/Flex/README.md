# Flex

A layout helper component modeled after Ant Design's Flex. Provides a consistent API for flex direction, alignment, wrapping, and gap spacing.

## Features

- Horizontal or vertical flex layouts
- Justify and align helpers
- Wrap control
- Gap spacing using the 4px grid

## Import

```tsx
import { Flex } from '@1money/components-ui';
// or
import { Flex } from '@1money/components-ui/Flex';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from '@1money/components-ui/Flex';
```

## Basic Usage

```tsx
import { Flex } from '@1money/components-ui';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY } from '@1money/components-ui/Flex';

<Flex gap={FLEX_GAP.middle} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
  <div>Left</div>
  <div>Right</div>
</Flex>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `vertical` | `boolean` | `false` | Stack items vertically |
| `wrap` | `boolean \| 'nowrap' \| 'wrap' \| 'wrap-reverse'` | — | Flex wrapping |
| `align` | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | — | Align items |
| `justify` | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | — | Justify content |
| `gap` | `'small' \| 'middle' \| 'large' \| number` | `0` | Gap between items |
| `prefixCls` | `string` | `'flex'` | CSS class prefix |

This component also accepts all standard HTML div attributes.

## Vertical Layout

```tsx
const VERTICAL_GAP = 16;

<Flex vertical gap={VERTICAL_GAP}>
  <div>Top</div>
  <div>Bottom</div>
</Flex>
```
