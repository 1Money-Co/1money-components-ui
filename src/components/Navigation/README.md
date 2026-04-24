# Navigation

Vertical sidebar navigation component with support for collapsible menus, sub-menus, icons, and active/disabled states. Also exports `Nav`, a flat/grouped navigation component that supports recursive multi-level nesting.

## Import

```tsx
import { Navigation, Nav } from '@1money/components-ui';
// or
import { Navigation, Nav } from '@1money/components-ui/Navigation';
```

## Usage

### Navigation (sidebar with collapse)

```tsx
import { useRef } from 'react';
import type { NavigationHandlers } from '@1money/components-ui';

const ref = useRef<NavigationHandlers>(null);

<Navigation
  ref={ref}
  items={[
    { key: 'home', label: 'Home', icon: 'home', active: true },
    { key: 'portfolio', label: 'Portfolio', icon: 'portfolio' },
    {
      key: 'transactions',
      label: 'Transactions',
      icon: 'transactions',
      children: [
        { key: 'deposits', label: 'Deposits' },
        { key: 'withdrawals', label: 'Withdrawals' },
      ],
    },
  ]}
  collapsible
  onCollapse={(collapsed) => console.log(collapsed)}
  selector={<CompanySelector />}
>
  {/* rendered at the bottom of the sidebar */}
  <SettingsLink />
</Navigation>

// Imperative control
ref.current?.toggle();
ref.current?.collapse(true);
```

### Nav (flat / grouped navigation)

```tsx
<Nav
  items={[
    {
      key: 'group-accounts',
      label: 'Accounts',
      icon: 'wallet',
      children: [
        { key: 'checking', label: 'Checking', active: true },
        { key: 'savings', label: 'Savings' },
      ],
    },
    { key: 'settings', label: 'Settings' },
  ]}
/>
```

## Navigation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavigationItem[]` | — | Navigation menu items (required) |
| `collapsed` | `boolean` | — | Controlled collapsed state |
| `defaultCollapsed` | `boolean` | `false` | Default collapsed state (uncontrolled) |
| `collapsible` | `boolean` | `false` | Whether the collapse toggle button is shown |
| `onCollapse` | `(collapsed: boolean) => void` | — | Callback when collapsed state changes |
| `header` | `ReactNode` | built-in 1Money logo | Header content; pass `null` to hide |
| `onLogoClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler for the default logo |
| `selector` | `ReactNode` | — | Company selector slot rendered below the header |
| `children` | `ReactNode` | — | Content rendered at the bottom of the sidebar (e.g., settings, profile) |
| `prefixCls` | `string` | `'navigation'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## NavigationHandlers (imperative ref)

When a `ref` is attached to `<Navigation>`, the handle exposes:

| Method | Signature | Description |
|--------|-----------|-------------|
| `toggle` | `() => void` | Toggle the collapsed state |
| `collapse` | `(collapsed: boolean) => void` | Set the collapsed state directly |

## NavigationItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string \| number` | — | Unique key |
| `label` | `ReactNode` | — | Display label (required) |
| `icon` | `ReactNode` | — | Icon for top-level group headers; accepts an `IconName` string or any `ReactNode` |
| `suffix` | `ReactNode` | — | Content rendered after the label (e.g., a badge or tag) |
| `link` | `string \| ReactElement` | — | URL string or link component (e.g., Next.js `<Link>`) that wraps the item |
| `active` | `boolean` | `false` | Whether this item is currently active |
| `disabled` | `boolean` | `false` | Whether this item is disabled |
| `hidden` | `boolean` | `false` | Whether this item is hidden (excluded from render) |
| `onClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler |
| `children` | `Omit<NavigationItem, 'children' \| 'defaultOpen' \| 'onOpenChange'>[]` | — | Sub-menu items (Level 2) |
| `defaultOpen` | `boolean` | `false` | Whether the sub-menu is open by default |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when the sub-menu open state changes |

## Nav Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `NavItem[]` | — | Navigation items (required). Top-level items with `children` render as collapsible groups |
| `prefixCls` | `string` | `'nav'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## NavItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string \| number` | — | Unique key |
| `label` | `ReactNode` | — | Display label (required) |
| `icon` | `ReactNode` | — | Icon — accepts an `IconName` string or any `ReactNode` |
| `suffix` | `ReactNode` | — | Content rendered after the label |
| `link` | `string \| ReactElement` | — | URL string or link component that wraps the item |
| `active` | `boolean` | `false` | Whether this item is currently active |
| `disabled` | `boolean` | `false` | Whether this item is disabled |
| `hidden` | `boolean` | `false` | Whether this item is hidden (excluded from render) |
| `children` | `NavItem[]` | — | Nested child items — enables recursive multi-level nesting |
| `defaultOpen` | `boolean` | `false` | Whether children are expanded by default |
| `onOpenChange` | `(open: boolean) => void` | — | Callback when expand state changes |
| `onClick` | `(e: MouseEvent<HTMLElement>) => void` | — | Click handler |
