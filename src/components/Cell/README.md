# Cell

Interactive action row component for settings-style or navigation-style lists.

## Import

```tsx
import { Cell } from '@1money/components-ui';
// or
import { Cell } from '@1money/components-ui/Cell';
```

## Usage

```tsx
<Cell iconStart="security" iconEnd="arrowRight">
  Authenticator app
</Cell>
```

Active state:

```tsx
<Cell iconStart="security" iconEnd="arrowRight" active>
  Authenticator app
</Cell>
```

Disabled state:

```tsx
<Cell iconStart="security" iconEnd="arrowRight" disabled>
  Authenticator app
</Cell>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `iconStart` | `IconName` | — | Leading icon rendered before the label |
| `iconEnd` | `IconName` | — | Trailing icon rendered after the label |
| `active` | `boolean` | `false` | Applies the selected/active visual state |
| `disabled` | `boolean` | `false` | Disables click interaction and applies disabled styling |
| `prefixCls` | `string` | `'cell'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `ReactNode` | — | Row label content |
| `...buttonProps` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | Native button props forwarded to the root element |
