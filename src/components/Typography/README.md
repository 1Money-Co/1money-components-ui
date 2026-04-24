# Typography

Semantic typography primitives aligned to the design token categories in `src/styles/tokens/typography`.

## Import

```tsx
import { Typography } from '@1money/components-ui';
// or
import { Typography } from '@1money/components-ui/Typography';
```

## Usage

```tsx
<Typography.Display size="lg">Account Overview</Typography.Display>

<Typography.Headline size="md">Settlement Timeline</Typography.Headline>

<Typography.Title size="sm" strong>
  Customer Details
</Typography.Title>

<Typography.Body size="md" as="p">
  Semantic body copy keeps product text aligned with the shared typography scale.
</Typography.Body>

<Typography.Body size="md" ellipsis={{ tooltip: true }} copyable>
  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f749f
</Typography.Body>

<Typography.Label size="sm" htmlFor="email">
  Email
</Typography.Label>

<Typography.Link size="md" href="https://ant.design/components/typography/" target="_blank">
  Typography reference
</Typography.Link>
```

## Components

| Component | Sizes | Default tag | Supports `strong` |
|------|------|---------|-------------|
| `Typography.Display` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `div` | No |
| `Typography.Headline` | `'lg' \| 'md' \| 'sm' \| 'xs'` | `div` | No |
| `Typography.Title` | `'lg' \| 'md' \| 'sm'` | `div` | Yes |
| `Typography.Body` | `'lg' \| 'md' \| 'sm'` | `span` | Yes |
| `Typography.Label` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `label` | Yes |
| `Typography.Link` | `'md' \| 'sm'` | `a` | No |

## Shared Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | category-specific union | — | Required size token for the selected semantic category |
| `color` | `TypographyColor` | — | Semantic text color token (e.g. `'default'`, `'disabled'`, `'brand'`, `'positive'`, `'danger'`, `'warning'`, `'neutral'`, and their `-secondary` / `-tertiary` / `on-*` variants) |
| `children` | `ReactNode` | — | Typography content |
| `as` | category-specific tag union | category-specific tag | Override the rendered semantic tag for `Display`, `Headline`, `Title`, `Body`, and `Label` |
| `prefixCls` | `string` | `'typography'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `italic` | `boolean` | `false` | Applies italic styling |
| `underline` | `boolean` | `false` | Adds underline decoration |
| `delete` | `boolean` | `false` | Adds line-through decoration |
| `disabled` | `boolean` | `false` | Uses disabled text styling; `Typography.Link` also blocks interaction |
| `ellipsis` | `boolean \| TypographyEllipsisConfig` | `false` | Adaptive middle ellipsis — shows full text when it fits, truncates in the middle when it overflows |
| `copyable` | `boolean \| TypographyCopyableConfig` | `false` | Renders a copy icon next to the text; defaults to showing a success notification |

`Typography.Title`, `Typography.Body`, and `Typography.Label` additionally support:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `strong` | `boolean` | `false` | Uses the semantic strong weight defined in the typography tokens |

Supported `as` values:

- `Typography.Display`: `div | h1 | h2 | h3 | h4 | h5 | h6`
- `Typography.Headline`: `div | h1 | h2 | h3 | h4 | h5 | h6`
- `Typography.Title`: `div | h1 | h2 | h3 | h4 | h5 | h6`
- `Typography.Body`: `span | p | div`
- `Typography.Label`: `label | span | div`
- `Typography.Link` does not expose `as`; it always renders as `a`

## Ellipsis

Adaptive middle ellipsis — automatically monitors container width via `ResizeObserver`. When the text fits, it displays in full; when it overflows, it truncates in the middle (e.g. `814f0d3a...749f`).

```tsx
// Default: start=8, end=4
<Typography.Body size="md" ellipsis>
  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f
</Typography.Body>
// Fits → 0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f
// Overflows → 0x814f0d...749f

// Custom character counts
<Typography.Body size="md" ellipsis={{ start: 6, end: 6 }}>
  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f
</Typography.Body>
// Overflows → 0x814f...0d749f

// With tooltip showing full text on hover
<Typography.Body size="md" ellipsis={{ tooltip: true }}>
  0x814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d749f
</Typography.Body>
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `start` | `number` | `8` | Characters to keep at the start |
| `end` | `number` | `4` | Characters to keep at the end |
| `tooltip` | `boolean \| TooltipProps` | `false` | Show full text in a tooltip when truncated |

- Tooltip is only mounted when the text is actually truncated
- `tooltip={TooltipProps}` lets you control placement, arrow, delays, and other tooltip options
- Copy always uses the original full text, not the truncated display

## Copyable

`copyable={true}` adds a copy icon next to the text using the `Copy` component. On success, a `notification.success` toast is shown by default.

```tsx
<Typography.Link
  size="md"
  href="https://example.com/reference"
  copyable={{ text: 'https://example.com/reference' }}
>
  https://example.com/reference
</Typography.Link>
```

- Copy defaults to the original full text content, not the visually truncated string
- `copyable.text` overrides the copied value
- `copyable.onCopy` overrides the default success notification with a custom callback
