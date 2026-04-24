# Progress

Linear progress indicator for continuous percentage progress with semantic status styling. Automatically derives a visual state from `percent` when no explicit `state` is provided, and renders an optional info row and error feedback slot.

## Import

```tsx
import { Progress } from '@1money/components-ui';
// or
import { Progress } from '@1money/components-ui/Progress';
```

## Usage

```tsx
{/* Basic usage */}
<Progress percent={40} />

{/* Explicit state */}
<Progress percent={100} state="success" />
<Progress percent={60} state="error" feedback="Upload failed. Please try again." />

{/* White color variant (e.g. on a dark background) */}
<Progress percent={70} color="white" />

{/* Custom info formatter */}
<Progress
  percent={55}
  format={(percent) => `${percent} of 100 steps complete`}
/>

{/* Info row on the right */}
<Progress percent={30} placement="right" />

{/* Hide info row */}
<Progress percent={50} showInfo={false} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `percent` | `number` | — | **Required.** Completion progress as a percentage. Values are clamped to `0–100`. |
| `state` | `'default' \| 'success' \| 'error' \| 'not-started'` | derived | Semantic visual state. When omitted the component derives one from `percent`: `<= 0` → `'not-started'`, `>= 100` → `'success'`, otherwise `'default'`. |
| `color` | `'gray' \| 'white'` | `'gray'` | Track color scheme variant. Use `'white'` on dark backgrounds. |
| `placement` | `'left' \| 'right'` | `'left'` | Alignment of the info row relative to the bar. |
| `showInfo` | `boolean` | `true` | Whether to render the info row (percentage text or custom `format` output). |
| `format` | `(percent: number, ctx: ProgressFormatContext) => ReactNode` | — | Custom formatter for the info row. Receives the clamped `percent` and `{ percent, state }` context. |
| `feedback` | `ReactNode` | — | Content rendered below the bar only when `state` resolves to `'error'`. Accepts a string or any React node. |
| `prefixCls` | `string` | `'progress'` | CSS class prefix used for BEM namespace customization. |
| `className` | `string` | `''` | Additional CSS classes appended to the root element. |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the root `<div>` element. |

This component also accepts all standard HTML `<div>` attributes (`id`, `style`, `data-*`, `aria-*`, etc.).

### ProgressFormatContext

Passed as the second argument to the `format` prop:

| Field | Type | Description |
|-------|------|-------------|
| `percent` | `number` | Clamped percentage value (`0–100`). |
| `state` | `ProgressState` | The resolved state after auto-derivation. |
