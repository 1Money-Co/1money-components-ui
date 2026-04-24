# Tour

Guided onboarding overlay that highlights a target element and renders a `CoachMark` next to it. Steps can target CSS selectors or React refs.

## Import

```tsx
import { Tour } from '@1money/components-ui';
// or
import { Tour } from '@1money/components-ui/Tour';
```

## Usage

```tsx
<Tour
  open={open}
  onClose={() => setOpen(false)}
  steps={[
    {
      target: '#dashboard-card',
      placement: 'bottom',
      heading: 'Dashboard',
      body: 'Track your account activity here.',
    },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | — | Controls whether the tour is visible |
| `steps` | `TourStep[]` | — | Tour step configuration |
| `activeStep` | `number` | — | Controlled active step index |
| `defaultActiveStep` | `number` | `0` | Initial active step |
| `onChange` | `(step: number) => void` | — | Called when active step changes |
| `onClose` | `() => void` | — | Called when dismissed or finished |
| `dismissible` | `boolean` | `true` | Shows the CoachMark dismiss button |
| `labels` | `CoachMarkLabels` | — | Custom CoachMark button labels |
| `spotlightPadding` | `number` | `8` | Padding around highlighted target |
| `gap` | `number` | `14` | Gap between target and CoachMark |
| `scrollIntoView` | `boolean` | `true` | Scroll target into view before positioning |
| `spotlightRadius` | `number` | `12` | Spotlight border radius |
| `closeOnBackdropClick` | `boolean` | `false` | Whether backdrop click closes the tour |
| `zIndex` | `number` | `1000` | Overlay z-index |

### TourStep

| Field | Type | Description |
|-------|------|-------------|
| `target` | `string \| RefObject<HTMLElement \| null>` | CSS selector or ref for the highlighted element |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | CoachMark placement |
| `arrowOffset` | `string` | Custom CoachMark arrow offset |
| `icon` | `ReactNode` | Step icon/illustration |
| `heading` | `ReactNode` | Step heading |
| `body` | `ReactNode` | Step body copy |

