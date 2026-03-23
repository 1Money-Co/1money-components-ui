# Spinner

A loading spinner component used to indicate loading states and provide visual feedback to users.

## Import

```tsx
import { Spinner } from '@1money/components-ui';
// or
import { Spinner } from '@1money/components-ui/Spinner';
```

## Usage

```tsx
// Basic spinner
<Spinner />

// Custom size
<Spinner style={{ width: '20px', height: '20px' }} />

// Custom animation duration
<Spinner animationDuration="1s" />

// Custom stroke width
<Spinner strokeWidth="3" />

// Custom fill
<Spinner style={{ width: '60px', height: '60px' }} fill="#E8F5E8" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `prefixCls` | `string` | `'spinner'` | CSS class prefix |

### Inherited Props

This component accepts these additional props:

| Prop | Type | Description |
|------|------|-------------|
| `style` | `CSSProperties` | Inline styles (use `width`/`height` to control size) |
| `className` | `string` | Additional CSS classes |
| `strokeWidth` | `string` | Width of the spinner stroke |
| `fill` | `string` | Fill color for the spinner background |
| `animationDuration` | `string` | Duration of the spin animation (default `'2s'`) |

## Examples

### Inline Loading

```tsx
<button disabled={loading}>
  {loading ? (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Spinner style={{ width: '16px', height: '16px' }} />
      <span>Loading...</span>
    </div>
  ) : (
    'Submit'
  )}
</button>
```

### Page Loading Overlay

```tsx
const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <Spinner
        style={{ width: '50px', height: '50px' }}
        strokeWidth="3"
      />
      <p>Loading your data...</p>
    </div>
  );
};
```
