# Spinner

A loading spinner component used to indicate loading states and provide visual feedback to users. Supports three visual variants: a simple CSS ring (`default`), an animated Lottie logo (`brand`), and the same logo on a gradient circle background (`brand-bg`).

## Import

```tsx
import { Spinner } from '@1money/components-ui';
// or
import { Spinner } from '@1money/components-ui/Spinner';
```

## Usage

```tsx
// Default ring spinner
<Spinner />

// Custom size
<Spinner size={48} />

// Brand Lottie spinner
<Spinner type="brand" />

// Brand spinner with title and body text
<Spinner type="brand" title="Loading" body="Please wait a moment" />

// Brand spinner with gradient background
<Spinner type="brand-bg" size={64} title="Setting up your account" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'default' \| 'brand' \| 'brand-bg'` | `'default'` | Spinner variant. `'default'` renders an animated CSS ring; `'brand'` renders an animated Lottie logo; `'brand-bg'` renders the logo centred on a gradient circle. |
| `size` | `number` | `32` | Diameter in pixels. For `'brand-bg'` the logo is scaled to two-thirds of this value. |
| `title` | `string` | — | Title text rendered below the animation. Only displayed for `'brand'` and `'brand-bg'` types. |
| `body` | `string` | — | Body text rendered below the title. Only displayed for `'brand'` and `'brand-bg'` types. |
| `prefixCls` | `string` | `'spinner'` | CSS class prefix used for BEM class generation. |
| `className` | `string` | — | Additional CSS classes applied to the root element. |
| `style` | `CSSProperties` | — | Inline styles applied to the root element (`'default'` type only). |

All other standard `HTMLDivElement` attributes (except `title`) are forwarded to the root `<div>`.

## Examples

### Inline Button Loading

```tsx
<button disabled={loading}>
  {loading ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner size={16} />
      <span>Submitting…</span>
    </div>
  ) : (
    'Submit'
  )}
</button>
```

### Page Loading Overlay

```tsx
const PageLoader = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <Spinner size={48} />
    </div>
  );
};
```

### Brand Spinner with Message

```tsx
<Spinner
  type="brand"
  size={56}
  title="Hang tight"
  body="We're processing your request"
/>
```

### Brand Spinner on Gradient Background

```tsx
<Spinner
  type="brand-bg"
  size={80}
  title="Setting up your account"
/>
```
