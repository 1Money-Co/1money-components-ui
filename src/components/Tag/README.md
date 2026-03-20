# TagBeta

A compact pill-shaped label used to categorize, filter, or indicate status. Supports multiple color variants, three sizes, an optional leading icon, and an optional remove button.

## Import

```tsx
import { TagBeta } from '@1money/components-ui';
// or
import { TagBeta } from '@1money/components-ui/TagBeta';
```

## Usage

```tsx
<TagBeta label="Active" color="success" />
<TagBeta label="Warning" color="warning" icon="add" removable onRemove={() => {}} />
<TagBeta label="Medium" size="medium" color="recommended" />
<TagBeta label="Small" size="small" color="negative" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Tag label text |
| `color` | `'neutral' \| 'warning' \| 'negative' \| 'success' \| 'recommended' \| 'black'` | `'neutral'` | Color variant |
| `size` | `'large' \| 'medium' \| 'small'` | `'large'` | Size variant |
| `icon` | `IconName` | - | Leading icon name from the Icons component |
| `removable` | `boolean` | `false` | Shows a remove button |
| `onRemove` | `(e: MouseEvent) => void` | - | Callback when remove button is clicked |
| `prefixCls` | `string` | `'tag-beta'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
