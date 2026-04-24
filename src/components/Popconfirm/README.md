# Popconfirm

Popconfirm is a semantic confirmation overlay built on top of `Trigger`. It presents a compact title/body layout with two actions and a placement-aware beak arrow.

## Import

```tsx
import { Popconfirm } from '@1money/components-ui';
import '@1money/components-ui/index.css';
```

## Basic Usage

```tsx
<Popconfirm
  title="Delete transfer rule?"
  body="This action removes the rule immediately and cannot be undone."
  cancelText="Keep rule"
  confirmText="Delete"
  onConfirm={() => {
    // perform delete
  }}
>
  <Button color="danger">Delete rule</Button>
</Popconfirm>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | `undefined` | Heading shown at the top of the floating card. |
| `body` | `ReactNode` | `undefined` | Secondary description shown below the title. |
| `icon` | `IconName` | `'notificationInfo'` | Icon rendered beside the text content. |
| `showIcon` | `boolean` | `true` | Toggles the leading icon. |
| `showArrow` | `boolean` | `true` | Toggles the custom beak arrow. |
| `cancelText` | `ReactNode` | `'Cancel'` | Label for the secondary action. |
| `confirmText` | `ReactNode` | `'Confirm'` | Label for the primary action. |
| `cancelButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the secondary button. |
| `confirmButtonProps` | `Omit<ButtonProps, 'children'>` | `undefined` | Additional props merged onto the primary button. |
| `closeOnCancel` | `boolean` | `true` | Closes the panel automatically after the secondary action unless prevented. |
| `closeOnConfirm` | `boolean` | `true` | Closes the panel automatically after the primary action unless prevented. |
| `onCancel` | `(event, context) => void` | `undefined` | Called when the secondary action is clicked. Call `event.preventDefault()` to keep the panel open. |
| `onConfirm` | `(event, context) => void` | `undefined` | Called when the primary action is clicked. Call `event.preventDefault()` to keep the panel open. |
| `className` | `string` | `undefined` | Class name applied to the Popconfirm card. |
| `prefixCls` | `string` | `'popconfirm'` | CSS class prefix used to generate internal BEM-style classes. |
| `trigger` | `TriggerAction \| TriggerAction[]` | `'click'` | Trigger mode forwarded to `Trigger`. |
| `placement` | `Placement` | `'top'` | Floating placement forwarded to `Trigger`. |
| `offset` | `number` | `8` | Distance between the trigger anchor and the floating card. |

All other props from `TriggerProps` are also accepted, excluding `content` and `role`, which are managed internally.
