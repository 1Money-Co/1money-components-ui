# Pagination

Pagination control with previous/next actions, page windows, boundary pages, and ellipsis handling. The `usePagination` hook is also exported for custom renderers.

## Import

```tsx
import { Pagination, usePagination } from '@1money/components-ui';
// or
import { Pagination, usePagination } from '@1money/components-ui/Pagination';
```

## Usage

```tsx
<Pagination
  total={125}
  pageSize={10}
  defaultCurrent={1}
  onChange={(page, pageSize) => console.log(page, pageSize)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `total` | `number` | — | Total item count |
| `pageSize` | `number` | `10` | Items per page |
| `current` | `number` | — | Controlled current page |
| `defaultCurrent` | `number` | `1` | Initial page |
| `boundaryCount` | `number` | `1` | Pages always shown at both start and end |
| `middlePageCount` | `number` | `3` | Maximum pages shown around the current page |
| `onChange` | `(page: number, pageSize: number) => void` | — | Called when page changes |
| `aria-label` | `string` | `'Pagination'` | Navigation landmark label |
| `prefixCls` | `string` | `'pagination'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

When `total` resolves to `0`, the component renders `null`.

## `usePagination`

`usePagination(options)` accepts the same pagination options and returns:

| Field | Type | Description |
|-------|------|-------------|
| `current` | `number` | Current page |
| `pageSize` | `number` | Current page size |
| `total` | `number` | Total item count |
| `totalPages` | `number` | Computed page count |
| `canPrevious` / `canNext` | `boolean` | Whether controls can move |
| `items` | `PaginationItem[]` | Page, control, and ellipsis items |
| `goTo` / `previous` / `next` | functions | Imperative pagination helpers |

