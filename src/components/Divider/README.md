# Divider

A divider line separates different content.

## Import

```tsx
import { Divider } from '@1money/components-ui';
```

## Usage

### Horizontal

```tsx
<p>Above</p>
<Divider />
<p>Below</p>
```

### With Text

```tsx
<Divider>Section Title</Divider>
<Divider orientation="left">Left Title</Divider>
<Divider orientation="right">Right Title</Divider>
```

### Vertical

```tsx
Text <Divider type="vertical" /> Text
```

### Dashed / Dotted

```tsx
<Divider variant="dashed" />
<Divider variant="dotted">Dotted</Divider>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'horizontal' \| 'vertical'` | `'horizontal'` | Direction type |
| orientation | `'left' \| 'center' \| 'right'` | `'center'` | Position of inner text |
| orientationMargin | `string \| number` | — | Margin between text and border |
| plain | `boolean` | `false` | Render text in plain style |
| variant | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` | Border style variant |
| prefixCls | `string` | `'divider'` | Custom class prefix |
| children | `ReactNode` | — | Inner text content |
