# Skeleton

A placeholder component that displays a shimmer animation before content is loaded. Use it to reduce perceived loading time and prevent layout shift.

## Import

```tsx
import { Skeleton } from '@1money/components-ui';
// or
import { Skeleton } from '@1money/components-ui/Skeleton';
```

## Usage

```tsx
// Rectangle (default)
<Skeleton />
<Skeleton width="10rem" />
<Skeleton width="10rem" height="4rem" />

// Rounded
<Skeleton borderRadius="16px" />

// Square
<Skeleton size="3rem" />

// Circle
<Skeleton shape="circle" size="4rem" />

// No animation
<Skeleton animation="none" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shape` | `'rectangle' \| 'circle'` | `'rectangle'` | Shape of the skeleton |
| `size` | `CSSProperties['width']` | - | Shorthand to set both width and height |
| `animation` | `'wave' \| 'none'` | `'wave'` | Animation type |
| `width` | `CSSProperties['width']` | `'100%'` | Width (ignored when `size` is set) |
| `height` | `CSSProperties['height']` | `'1rem'` | Height (ignored when `size` is set) |
| `borderRadius` | `CSSProperties['borderRadius']` | - | Border radius override |
| `prefixCls` | `string` | `'skeleton'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
