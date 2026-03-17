# Tag

A compact pill-shaped label used to categorize, filter, or indicate status. Supports multiple color variants, three sizes, an optional leading icon, and an optional remove button.

## Import

```tsx
import { Tag } from '@1money/components-ui';
// or
import { Tag } from '@1money/components-ui/Tag';
```

## Usage

```tsx
<Tag label="Active" color="success" />
<Tag label="Warning" color="warning" icon="add" removable onRemove={() => {}} />
<Tag label="Medium" size="medium" color="recommended" />
<Tag label="Small" size="small" color="negative" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Tag label text (optional) |
| `color` | `'neutral' \| 'warning' \| 'negative' \| 'success' \| 'recommended' \| 'black'` | `'neutral'` | Color variant |
| `size` | `'large' \| 'medium' \| 'small'` | `'large'` | Size variant |
| `icon` | `IconName` | — | Leading icon name from the Icons component |
| `removable` | `boolean` | `false` | Shows a remove button |
| `onRemove` | `(e: MouseEvent<HTMLSpanElement>) => void` | — | Callback when remove button is clicked |
| `ref` | `RefObject<HTMLSpanElement \| null>` | — | Ref to the root span element |
| `prefixCls` | `string` | `'tag-beta'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

This component also accepts all standard HTML span attributes (except `color`).
