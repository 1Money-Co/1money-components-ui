# CoachMark

A guided onboarding tooltip card with multi-step navigation. Features a beak arrow pointing to the target element, step indicators (Carousel Points), and Back/Next/Finish navigation buttons.

## Import

```tsx
import { CoachMark } from '@1money/components-ui';
// or
import { CoachMark } from '@1money/components-ui/CoachMark';
```

## Usage

```tsx
<CoachMark
  heading="Welcome to Dashboard"
  body="Here you can see an overview of your finances."
  steps={4}
  defaultActiveStep={0}
  placement="top"
  icon={<Icons name="dashboard" size={24} />}
  onFinish={() => console.log('Tour complete')}
  onDismiss={() => console.log('Tour dismissed')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `ReactNode` | — | Heading text |
| `body` | `ReactNode` | — | Body text |
| `icon` | `ReactNode` | — | Icon or illustration above the heading |
| `steps` | `number` | — | Total number of steps (required) |
| `activeStep` | `number` | — | Current step index (controlled) |
| `defaultActiveStep` | `number` | `0` | Default step index (uncontrolled) |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Beak arrow placement |
| `dismissible` | `boolean` | `true` | Show dismiss (close) button |
| `onChange` | `(step: number) => void` | — | Callback when step changes |
| `onFinish` | `() => void` | — | Callback when finish button is clicked |
| `onDismiss` | `() => void` | — | Callback when dismiss button is clicked |
| `backLabel` | `string` | `'Back'` | Custom back button label |
| `nextLabel` | `string` | `'Next'` | Custom next button label |
| `finishLabel` | `string` | `'Finish'` | Custom finish button label |
| `prefixCls` | `string` | `'coach-mark'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |

## Step Sequences

- **First step** (`activeStep === 0`): Back button is disabled
- **Middle steps**: Both Back and Next buttons are active
- **Last step** (`activeStep === steps - 1`): Next button shows "Finish" label

## Placements

The `placement` prop controls where the beak arrow appears:
- `top`: Beak at bottom, coach mark is above the target
- `bottom`: Beak at top, coach mark is below the target
- `left`: Beak at right, coach mark is to the left of the target
- `right`: Beak at left, coach mark is to the right of the target
