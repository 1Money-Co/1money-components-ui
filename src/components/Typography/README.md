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

<Typography.Body size="md" ellipsis={{ rows: 2, tooltip: true }}>
  Settlement updates often include enough detail to overflow smaller UI slots.
</Typography.Body>

<Typography.Title size="sm" copyable>
  0x8f7c5d4e3b2a1908fedcba987654321001234567
</Typography.Title>

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
| `children` | `ReactNode` | — | Typography content |
| `as` | `ElementType` | category-specific tag | Override the rendered semantic tag |
| `prefixCls` | `string` | `'typography'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `italic` | `boolean` | `false` | Applies italic styling |
| `underline` | `boolean` | `false` | Adds underline decoration |
| `delete` | `boolean` | `false` | Adds line-through decoration |
| `disabled` | `boolean` | `false` | Uses disabled text styling; `Typography.Link` also blocks interaction |
| `ellipsis` | `boolean \| TypographyEllipsisConfig` | `false` | Enables single-line truncation by default, or configures multi-line truncation and overflow tooltip behavior |
| `copyable` | `boolean \| TypographyCopyableConfig` | `false` | Renders a persistent copy action that copies the original text or a configured override |

`Typography.Title`, `Typography.Body`, and `Typography.Label` additionally support:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `strong` | `boolean` | `false` | Uses the semantic strong weight defined in the typography tokens |

## Ellipsis

`ellipsis={true}` enables single-line truncation. Use the object form when you need more control:

```tsx
<Typography.Body size="md" ellipsis={{ rows: 2, tooltip: true }}>
  Long body copy...
</Typography.Body>
```

- `rows` defaults to `1`
- `rows > 1` enables multi-line clamping
- `tooltip={true}` uses the full source text as the tooltip body
- `tooltip={TooltipProps}` lets you control placement, arrow, delays, and other tooltip options
- Tooltip content is only mounted when the rendered text actually overflows

## Copyable

`copyable={true}` adds a persistent copy action with default copy/copy-success feedback. Use the object form to override copy text, icon, labels, or reset timing:

```tsx
<Typography.Link
  size="md"
  href="https://example.com/reference"
  copyable={{ text: 'https://example.com/reference', duration: 1200 }}
>
  https://example.com/reference
</Typography.Link>
```

- Copy defaults to the original full text content, not the visually truncated string
- `copyable.text` overrides the copied value and is recommended when `children` contains complex nodes
- `copyable.icon` accepts a single icon node or a `[defaultIcon, successIcon]` tuple
- `copyable.tooltips` accepts `false` or `[defaultLabel, successLabel]`
- `copyable.duration` controls how long the success or failure state is shown before resetting
