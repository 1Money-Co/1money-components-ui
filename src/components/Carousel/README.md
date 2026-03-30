# Carousel

A carousel/slider component for cycling through a series of content panels. Features diamond-shaped indicator dots with animated state transitions.

## Import

```tsx
import { Carousel } from '@1money/components-ui';
// or
import { Carousel } from '@1money/components-ui/Carousel';
```

## Usage

```tsx
<Carousel autoPlay loop onChange={(index) => console.log(index)}>
  <div>Slide 1</div>
  <div>Slide 2</div>
  <div>Slide 3</div>
</Carousel>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | Slide content |
| `activeIndex` | `number` | — | Current active slide (controlled) |
| `defaultActiveIndex` | `number` | `0` | Default active slide (uncontrolled) |
| `autoPlay` | `boolean` | `false` | Enable auto-play |
| `autoPlayInterval` | `number` | `3000` | Auto-play interval in ms |
| `loop` | `boolean` | `false` | Loop back to start after last slide |
| `showIndicators` | `boolean` | `true` | Show indicator dots |
| `onChange` | `(index: number) => void` | — | Callback when active slide changes |
| `prefixCls` | `string` | `'carousel'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
