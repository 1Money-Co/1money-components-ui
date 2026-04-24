# CoachMark

A guided onboarding tooltip card with multi-step navigation. Features a beak arrow pointing to the target element, step indicators (Carousel dots), and Back/Next/Finish navigation buttons.

## Import

```tsx
import { CoachMark } from '@1money/components-ui';
// or
import { CoachMark } from '@1money/components-ui/CoachMark';
```

## Usage

```tsx
const steps = [
  {
    icon: <Icons name="dashboard" size={24} />,
    heading: 'Welcome to Dashboard',
    body: 'Here you can see an overview of your finances.',
  },
  {
    heading: 'Track Your Spending',
    body: 'Use the charts to monitor transactions by category.',
  },
  {
    heading: "You're all set!",
    body: 'Explore the rest of the app at your own pace.',
  },
];

<CoachMark
  steps={steps}
  defaultActiveStep={0}
  placement="top"
  onFinish={() => console.log('Tour complete')}
  onDismiss={() => console.log('Tour dismissed')}
/>
```

## Props

### CoachMarkProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `CoachMarkStep[]` | — | **Required.** Array of step configurations |
| `activeStep` | `number` | — | Current step index (controlled) |
| `defaultActiveStep` | `number` | `0` | Default step index (uncontrolled) |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Beak arrow placement relative to the target element |
| `arrowOffset` | `string` | — | Offset of the arrow from center (CSS value, e.g. `'20px'`, `'-10px'`) |
| `dismissible` | `boolean` | `true` | Show the dismiss (close) button |
| `labels` | `CoachMarkLabels` | — | Custom button and dismiss labels |
| `onChange` | `(step: number) => void` | — | Callback when the active step changes |
| `onFinish` | `() => void` | — | Callback when the finish button is clicked on the last step |
| `onDismiss` | `() => void` | — | Callback when the dismiss button is clicked |
| `prefixCls` | `string` | `'coach-mark'` | CSS class prefix for customization |
| `className` | `string` | `''` | Additional CSS classes |
| `ref` | `RefObject<HTMLDivElement \| null>` | — | Ref forwarded to the root element |

### CoachMarkStep

Each entry in the `steps` array may include:

| Field | Type | Description |
|-------|------|-------------|
| `icon` | `ReactNode` | Icon or illustration displayed above the heading |
| `heading` | `ReactNode` | Heading text |
| `body` | `ReactNode` | Body text |

### CoachMarkLabels

Passed via the `labels` prop to override default button text:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `back` | `string` | `'Back'` | Label for the back button |
| `next` | `string` | `'Next'` | Label for the next button |
| `finish` | `string` | `'Finish'` | Label for the finish button (shown on the last step) |
| `dismiss` | `string` | `'Dismiss'` | `aria-label` for the dismiss (close) button |

## Step Sequences

- **Single step**: Back button is hidden; the only action button shows "Finish"
- **First step** (`activeStep === 0`): Back button is rendered but disabled
- **Middle steps**: Both Back and Next buttons are active
- **Last step** (`activeStep === steps.length - 1`): Next button shows the finish label and triggers `onFinish`

## Placements

The `placement` prop controls where the beak arrow appears on the card:

- `top`: Beak at bottom — card sits above the target
- `bottom`: Beak at top — card sits below the target
- `left`: Beak at right — card sits to the left of the target
- `right`: Beak at left — card sits to the right of the target

Use `arrowOffset` to shift the arrow horizontally or vertically away from center when the target is not centered on the card edge.
