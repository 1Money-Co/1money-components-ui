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

`Typography.Title`, `Typography.Body`, and `Typography.Label` additionally support:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `strong` | `boolean` | `false` | Uses the semantic strong weight defined in the typography tokens |
