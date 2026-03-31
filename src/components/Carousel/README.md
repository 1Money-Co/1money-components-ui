# Carousel

A diamond-shaped dot indicator for step navigation. Used as a sub-component inside Coach Mark, onboarding flows, and similar multi-step UIs.

## Import

```tsx
import { Carousel } from '@1money/components-ui';
// or
import { Carousel } from '@1money/components-ui/Carousel';
```

## Usage

```tsx
<Carousel count={4} defaultActiveIndex={0} onChange={(index) => console.log(index)} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | — | Total number of indicator dots (required) |
| `activeIndex` | `number` | — | Current active dot index (controlled) |
| `defaultActiveIndex` | `number` | `0` | Default active dot index (uncontrolled) |
| `onChange` | `(index: number) => void` | — | Callback when active dot changes |
| `prefixCls` | `string` | `'carousel'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## Dot States

- **Default**: 8px diamond shape, neutral color
- **Hover**: 8px diamond shape, darker neutral color
- **Active**: 12px diamond shape, brand color
