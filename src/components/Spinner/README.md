# Spinner

A loading spinner component built on top of PrimeReact's ProgressSpinner with enhanced styling. Spinners are used to indicate loading states, background processes, or waiting periods to provide visual feedback to users.

## Features

- Customizable size and stroke width
- Configurable animation duration and colors
- Client-side rendering support with 'use client' directive
- Built-in accessibility features
- Responsive design compatibility
- Full PrimeReact ProgressSpinner compatibility
- Lightweight and performant

## Basic Usage

```tsx
import { Spinner } from '@1money/react-ui';

// Basic spinner
<Spinner />

// Small spinner
<Spinner style={{ width: '20px', height: '20px' }} />

// Large spinner with custom color
<Spinner 
  style={{ 
    width: '60px', 
    height: '60px' 
  }}
  stroke="#4CAF50"
  fill="#E8F5E8"
/>

// Custom animation duration
<Spinner animationDuration="1s" />

// Spinner with custom stroke width
<Spinner strokeWidth="3" />
```

## Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | 'spinner' |

## Inherited Props

This component extends PrimeReact's ProgressSpinner component and inherits all its props:

- `style?: CSSProperties` - Inline styles for size, colors, etc.
- `className?: string` - Additional CSS classes
- `strokeWidth?: string` - Width of the spinner stroke
- `fill?: string` - Fill color for the spinner background
- `animationDuration?: string` - Duration of the spin animation
- `stroke?: string` - Color of the spinner stroke

## Common Styling Props

| Property | Description | Example |
| --- | --- | --- |
| width/height | Spinner size | `{ width: '30px', height: '30px' }` |
| stroke | Spinner color | `"#3D73F2"` |
| fill | Background color | `"transparent"` |
| strokeWidth | Line thickness | `"2"` |
| animationDuration | Spin speed | `"2s"` |

## Styling

The Spinner component uses SCSS modules with BEM-like naming conventions. Customize through:

1. `className` prop for additional styles
2. `prefixCls` override for complete style control  
3. `style` prop for direct inline styling
4. CSS custom properties for theme customization
5. PrimeReact theme variables for global styling

## Accessibility

- Proper ARIA attributes for screen readers
- Accessible loading state indication
- High contrast mode compatible
- Keyboard navigation friendly
- Semantic HTML structure

## Examples

### Loading States

```tsx
const LoadingButton = ({ loading, onClick, children }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Spinner style={{ width: '16px', height: '16px' }} />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
```

### Page Loading Overlay

```tsx
const PageLoader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="page-loader-overlay">
      <div className="loader-content">
        <Spinner 
          style={{ 
            width: '50px', 
            height: '50px' 
          }}
          stroke="#3D73F2"
          strokeWidth="3"
        />
        <p>Loading your data...</p>
      </div>
    </div>
  );
};

// CSS
.page-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
```

### Transaction Processing

```tsx
const TransactionLoader = ({ status, amount }) => {
  const getSpinnerColor = () => {
    switch (status) {
      case 'processing': return '#FF9800';
      case 'verifying': return '#2196F3';
      case 'completed': return '#4CAF50';
      default: return '#9E9E9E';
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'processing': return 'Processing your payment...';
      case 'verifying': return 'Verifying with your bank...';
      case 'completed': return 'Payment completed!';
      default: return 'Preparing transaction...';
    }
  };

  return (
    <div className="transaction-loader">
      <Spinner 
        style={{ 
          width: '40px', 
          height: '40px' 
        }}
        stroke={getSpinnerColor()}
        strokeWidth="3"
        animationDuration="1.5s"
      />
      
      <div className="transaction-details">
        <h3>${amount.toFixed(2)}</h3>
        <p>{getStatusMessage()}</p>
      </div>
    </div>
  );
};
```

### Data Loading States

```tsx
const DataTable = ({ data, loading, error }) => {
  if (loading) {
    return (
      <div className="data-loading">
        <Spinner 
          style={{ width: '30px', height: '30px' }}
          stroke="#666"
        />
        <span>Loading financial data...</span>
      </div>
    );
  }

  if (error) {
    return <div className="error-state">Error loading data</div>;
  }

  return (
    <table>
      {/* Table content */}
    </table>
  );
};
```

### Form Submission

```tsx
const PaymentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      await submitPayment(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <Spinner style={{ width: '18px', height: '18px' }} />
            Processing Payment
          </div>
        ) : (
          'Submit Payment'
        )}
      </button>
    </form>
  );
};
```

### Inline Loading Indicators

```tsx
const AccountBalance = ({ balance, loading }) => {
  return (
    <div className="account-balance">
      <label>Current Balance</label>
      {loading ? (
        <div className="balance-loading">
          <Spinner style={{ width: '20px', height: '20px' }} />
          <span>Updating...</span>
        </div>
      ) : (
        <div className="balance-amount">
          ${balance.toLocaleString()}
        </div>
      )}
    </div>
  );
};
```

### Different Sizes and Colors

```tsx
const SpinnerShowcase = () => {
  return (
    <div className="spinner-showcase">
      {/* Small spinners */}
      <div className="size-group">
        <h4>Small (16px)</h4>
        <Spinner style={{ width: '16px', height: '16px' }} />
      </div>

      {/* Medium spinners */}
      <div className="size-group">
        <h4>Medium (24px)</h4>
        <Spinner 
          style={{ width: '24px', height: '24px' }}
          stroke="#2196F3"
        />
      </div>

      {/* Large spinners */}
      <div className="size-group">
        <h4>Large (40px)</h4>
        <Spinner 
          style={{ width: '40px', height: '40px' }}
          stroke="#4CAF50"
          strokeWidth="3"
        />
      </div>

      {/* Custom colors */}
      <div className="color-group">
        <h4>Custom Colors</h4>
        <Spinner 
          style={{ width: '30px', height: '30px' }}
          stroke="#E91E63"
          strokeWidth="2"
        />
        <Spinner 
          style={{ width: '30px', height: '30px' }}
          stroke="#FF9800"
          strokeWidth="2"
        />
        <Spinner 
          style={{ width: '30px', height: '30px' }}
          stroke="#9C27B0"
          strokeWidth="2"
        />
      </div>
    </div>
  );
};
```

### Custom Styled Spinner

```tsx
// With custom CSS class
<Spinner 
  className="custom-spinner"
  style={{ width: '50px', height: '50px' }}
/>

// CSS
.custom-spinner {
  filter: drop-shadow(0 0 10px rgba(61, 115, 242, 0.3));
}

.custom-spinner svg {
  border-radius: 50%;
}

// With custom prefix class
<Spinner 
  prefixCls="my-spinner"
  style={{ width: '35px', height: '35px' }}
/>
```

### Conditional Spinner Display

```tsx
const ConditionalSpinner = ({ show, message = "Loading..." }) => {
  if (!show) return null;

  return (
    <div className="conditional-spinner">
      <Spinner 
        style={{ 
          width: '24px', 
          height: '24px' 
        }}
        stroke="#666"
      />
      {message && <span className="spinner-message">{message}</span>}
    </div>
  );
};

// Usage
<ConditionalSpinner 
  show={isLoading} 
  message="Syncing your accounts..." 
/>
```
