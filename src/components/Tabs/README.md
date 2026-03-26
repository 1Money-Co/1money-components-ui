# Tabs

A horizontal tab navigation component for switching between content sections.

## Import

```tsx
import { Tabs } from '@1money/components-ui';
// or
import { Tabs } from '@1money/components-ui/Tabs';
```

## Usage

```tsx
<Tabs
  defaultActiveKey="tab1"
  items={[
    { key: 'tab1', label: 'Overview', badge: 5 },
    { key: 'tab2', label: 'Transactions' },
    { key: 'tab3', label: 'Analytics', disabled: true },
  ]}
  onChange={(key) => console.log('Active tab:', key)}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | — | Tab items configuration (required) |
| `activeKey` | `string` | — | Active tab key (controlled mode) |
| `defaultActiveKey` | `string` | First item key | Default active tab key (uncontrolled mode) |
| `onChange` | `(key: string) => void` | — | Callback when active tab changes |
| `prefixCls` | `string` | `'tabs'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

### TabItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `key` | `string` | — | Unique identifier (required) |
| `label` | `ReactNode` | — | Tab header label |
| `badge` | `number` | — | Badge number next to the label |
| `disabled` | `boolean` | `false` | Whether the tab is disabled |
| `children` | `ReactNode` | — | Tab panel content |
