# Navigation

Vertical sidebar navigation component with support for collapsible menus, sub-menus, icons, and active/disabled states.

## Import

```tsx
import { Navigation } from '@1money/components-ui';
// or
import { Navigation } from '@1money/components-ui/Navigation';
```

## Usage

```tsx
<Navigation
  items={[
    { key: 'home', label: 'Home', icon: 'home', active: true },
    { key: 'portfolio', label: 'Portfolio', icon: 'portfolio' },
    { key: 'transactions', label: 'Transactions', icon: 'transactions', children: [
      { key: 'deposits', label: 'Deposits' },
      { key: 'withdrawals', label: 'Withdrawals' },
    ]},
  ]}
  collapsible
  onCollapse={(collapsed) => console.log(collapsed)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavigationItem[]` | — | Navigation menu items |
| `collapsed` | `boolean` | — | Controlled collapsed state |
| `defaultCollapsed` | `boolean` | `false` | Default collapsed state (uncontrolled) |
| `collapsible` | `boolean` | `false` | Whether collapse toggle is shown |
| `onCollapse` | `(collapsed: boolean) => void` | — | Callback when collapsed state changes |
| `header` | `ReactNode` | — | Header content (e.g., logo) |
| `footer` | `ReactNode` | — | Footer content |
| `width` | `number \| string` | `280` | Width when expanded |
| `collapsedWidth` | `number \| string` | `80` | Width when collapsed |
| `prefixCls` | `string` | `'navigation'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## NavigationItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string` | — | Unique key |
| `label` | `ReactNode` | — | Display label |
| `icon` | `IconName` | — | Icon name from Icons component |
| `suffix` | `ReactNode` | — | Content after label |
| `active` | `boolean` | `false` | Active state |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `(e, item) => void` | — | Click handler |
| `children` | `NavigationItem[]` | — | Sub-menu items |
| `defaultOpen` | `boolean` | `false` | Whether sub-menu is open by default |
