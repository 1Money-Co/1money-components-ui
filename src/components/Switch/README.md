# Switch

A toggle switch component for binary on/off choices. Supports optional label and description text with configurable placement.

## Import

```tsx
import { Switch } from '@1money/components-ui';
// or
import { Switch } from '@1money/components-ui/Switch';
```

## Usage

```tsx
<Switch label="Notifications" onChange={(checked) => console.log(checked)} />

<Switch
  label="Dark Mode"
  description="Enable dark theme across the app"
  defaultChecked
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | Controlled checked state |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `disabled` | `boolean` | `false` | Disables the switch |
| `label` | `ReactNode` | — | Label text |
| `description` | `ReactNode` | — | Description text below the label |
| `labelPlacement` | `'left' \| 'right'` | `'left'` | Label position relative to switch |
| `onChange` | `(checked: boolean) => void` | — | Callback on state change |
| `prefixCls` | `string` | `'switch'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
