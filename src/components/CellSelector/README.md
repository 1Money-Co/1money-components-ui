# CellSelector

A selectable card component used for choosing between options. Supports checked/unchecked states, multiple sizes (large, medium, small), and horizontal/vertical layouts. Use `CellSelectorGroup` to manage single-select behavior across multiple items.

## Import

```tsx
import { CellSelector, CellSelectorGroup } from '@1money/components-ui';
// or
import { CellSelector, CellSelectorGroup } from '@1money/components-ui/CellSelector';
```

## Usage

```tsx
// Standalone (toggle)
<CellSelector
  label="Bank Transfer"
  description="Transfer via bank account"
  icon={<Icons name="deposit" size={16} />}
  checked={checked}
  onChange={setChecked}
/>

// Group (single select)
<CellSelectorGroup value={selected} onChange={setSelected}>
  <CellSelector value="bank" label="Bank Transfer" description="Via bank" icon={...} />
  <CellSelector value="crypto" label="Crypto" description="Via wallet" icon={...} />
</CellSelectorGroup>
```

## CellSelector Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | `false` | Whether the cell is checked (controlled) |
| `defaultChecked` | `boolean` | `false` | Default checked state (uncontrolled) |
| `size` | `'large' \| 'medium' \| 'small'` | `'large'` | Size variant |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `label` | `ReactNode` | — | Label text |
| `description` | `ReactNode` | — | Description (large size only) |
| `icon` | `ReactNode` | — | Icon slot |
| `value` | `string \| number` | — | Value for group usage |
| `disabled` | `boolean` | `false` | Disables the component |
| `onChange` | `(checked: boolean) => void` | — | Change callback |
| `prefixCls` | `string` | `'cell-selector'` | CSS class prefix |

## CellSelectorGroup Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | — | Currently selected value (controlled) |
| `defaultValue` | `string \| number` | — | Default selected value (uncontrolled) |
| `layout` | `'vertical' \| 'horizontal'` | `'vertical'` | Group layout direction |
| `disabled` | `boolean` | `false` | Disables all children |
| `onChange` | `(value: string \| number) => void` | — | Change callback |
