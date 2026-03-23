# Grid

A responsive 12-column layout system modeled after Ant Design's Row/Col, built with flexbox and consistent gutters.

## Features

- 12-column grid with spans and offsets
- Responsive breakpoints (sm/md/lg, desktop-first with max-width)
- Horizontal and vertical gutters
- Row alignment and justification helpers
- Optional flex-based columns

## Breakpoints

- `sm`: max-width 767.98px
- `md`: max-width 1023.98px
- `lg`: max-width 1279.98px

## Import

```tsx
import { Grid, Row, Col } from '@1money/components-ui';
// or
import { Grid, Row, Col } from '@1money/components-ui/Grid';
import { GRID_ALIGN, GRID_JUSTIFY } from '@1money/components-ui/Grid';
```

## Basic Usage

```tsx
import { Grid } from '@1money/components-ui';
import { GRID_ALIGN, GRID_JUSTIFY } from '@1money/components-ui/Grid';

const GRID_GUTTER: [number, number] = [16, 8];
const SPAN_HALF = 6;

<Grid gutter={GRID_GUTTER} justify={GRID_JUSTIFY.spaceBetween} align={GRID_ALIGN.middle}>
  <Grid.Col span={SPAN_HALF}>Left</Grid.Col>
  <Grid.Col span={SPAN_HALF}>Right</Grid.Col>
</Grid>
```

## Component Props

### Grid / Row

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gutter` | `number \| string \| [number \| string, number \| string] \| { sm?; md?; lg? } \| [{ sm?; md?; lg? }, { sm?; md?; lg? }]` | `0` | Horizontal gutter (use array for [horizontal, vertical]) |
| `align` | `'top' \| 'middle' \| 'bottom' \| 'stretch'` | — | Vertical alignment |
| `justify` | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly' \| { sm?; md?; lg? }` | — | Horizontal alignment |
| `wrap` | `boolean` | `true` | Toggle flex wrapping |
| `prefixCls` | `string` | `'grid-row'` | CSS class prefix |

Also accepts all standard HTML div attributes.

### Col

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `span` | `number` | — | Column span (1-12) |
| `offset` | `number` | — | Column offset (1-12) |
| `order` | `number` | — | Flex order |
| `push` | `number` | — | Move column right by cells |
| `pull` | `number` | — | Move column left by cells |
| `flex` | `number \| string` | — | Flex value (e.g. `1`, `'auto'`, `'100px'`) |
| `sm/md/lg` | `number \| { span?; offset?; order?; pull?; push?; flex? }` | — | Desktop-first responsive size config (max-width) |
| `prefixCls` | `string` | `'grid-col'` | CSS class prefix |

Also accepts all standard HTML div attributes.

## Responsive Usage

```tsx
const GRID_GUTTER = { sm: 8, md: 16, lg: 24 };
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const OFFSET_MD = 2;
const SPAN_LARGE = 3;

import { GRID_JUSTIFY } from '@1money/components-ui/Grid';

const GRID_JUSTIFY_RESPONSIVE = {
  sm: GRID_JUSTIFY.start,
  md: GRID_JUSTIFY.spaceBetween,
  lg: GRID_JUSTIFY.end
};
const PUSH_COL = 1;
const PULL_COL = 1;

<Grid gutter={GRID_GUTTER}>
  <Grid.Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_MD }} lg={SPAN_LARGE} />
</Grid>

<Grid gutter={GRID_GUTTER} justify={GRID_JUSTIFY_RESPONSIVE}>
  <Grid.Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_MD }} lg={SPAN_LARGE} />
  <Grid.Col span={SPAN_BASE} push={PUSH_COL} pull={PULL_COL} />
</Grid>
```

## Styling

Styles are SCSS-based and follow the 4px spacing grid. Gutters are implemented via CSS variables and inherited by child columns.
