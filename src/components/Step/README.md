# Step

Vertical step/status list for multi-step workflows. Each item can show a generated number, success/error status icon, custom indicator, description, and optional tag.

## Import

```tsx
import { Step } from '@1money/components-ui';
// or
import { Step } from '@1money/components-ui/Step';
```

## Usage

```tsx
<Step
  items={[
    { key: 'start', title: 'Start', description: 'Create the request', status: 'completed' },
    { key: 'review', title: 'Review', tag: { label: 'Pending' } },
    { key: 'done', title: 'Complete' },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `StepItem[]` | — | Step items to render |
| `prefixCls` | `string` | `'step'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |

All other standard `HTMLDivElement` attributes are forwarded to the root element.

### StepItem

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Unique item key |
| `title` | `ReactNode` | Main step title |
| `description` | `ReactNode` | Secondary copy |
| `status` | `'default' \| 'completed' \| 'error'` | Status controlling indicator and default tag color |
| `indicator` | `ReactNode` | Custom indicator node |
| `tag` | `ReactNode \| StepTagConfig` | Optional tag rendered beside the copy |

### StepTagConfig

| Field | Type | Description |
|-------|------|-------------|
| `label` | `string` | Tag label |
| `color` | `TagProps['color']` | Tag color |
| `size` | `TagProps['size']` | Tag size |
| `icon` | `TagProps['icon']` | Tag icon |

