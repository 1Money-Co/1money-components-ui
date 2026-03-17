# Icons

A comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling and accessibility features.

## Features

- Custom SVG icon library
- 1Money brand logos
- Illustration graphics
- Deprecated icon support for backward compatibility
- Icon wrapper with consistent styling
- Size variants
- Color customization support
- Accessibility attributes

## Components

### Icons
Main icon component for displaying custom SVG icons.

### IconWrapper
Wrapper component for consistent icon styling and layout.

### Logo
1Money brand logo components in various formats.

### Illustrations
Larger graphic elements and illustrations.

### Deprecated
Legacy icon support for backward compatibility.

## Basic Usage

```tsx
import { Icons, IconWrapper, Logo } from '@1money/react-ui';

// Basic icon
<Icons name="arrow-right" />

// Icon with wrapper
<IconWrapper size="large">
  <Icons name="user" />
</IconWrapper>

// Logo
<Logo variant="primary" />

// Custom size and styling
<Icons 
  name="settings" 
  className="text-primary" 
  style={{ width: 24, height: 24 }} 
/>
```

## Icons Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "icons" |
| name | Icon name from the available icon set | IconName | - |
| size | Predefined size variant | 'small' \| 'medium' \| 'large' \| 'xl' | 'medium' |
| color | Icon color (CSS color value) | string | 'currentColor' |
| className | Additional CSS classes | string | - |
| style | Inline styles | CSSProperties | - |

## IconWrapper Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| prefixCls | The classname prefix for component styling | string | "icon-wrapper" |
| size | Size variant for consistent icon container | 'small' \| 'medium' \| 'large' \| 'xl' | 'medium' |
| className | Additional CSS classes | string | - |
| children | Icon content to wrap | ReactNode | - |

## Logo Props

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Logo variant to display | 'primary' \| 'secondary' \| 'symbol' \| 'text' | 'primary' |
| size | Logo size | 'small' \| 'medium' \| 'large' | 'medium' |
| className | Additional CSS classes | string | - |

## Available Icon Names

The `IconName` type includes all available icons in the system. Common icons include:

- Navigation: `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`, `chevron-left`, `chevron-right`
- Actions: `plus`, `minus`, `close`, `check`, `edit`, `delete`, `copy`, `share`
- Interface: `menu`, `search`, `filter`, `settings`, `more`, `info`, `warning`, `error`
- User: `user`, `users`, `profile`, `account`
- Communication: `mail`, `phone`, `message`, `notification`
- Files: `document`, `image`, `video`, `download`, `upload`
- Finance: `dollar`, `credit-card`, `bank`, `wallet`, `exchange`

## Styling

Icons use SVG format and can be styled with CSS:

1. **Color**: Use `color` prop or CSS `color` property
2. **Size**: Use `size` prop or CSS `width`/`height`
3. **Custom styling**: Use `className` or `style` props

## Accessibility

- Proper ARIA attributes
- Screen reader friendly
- Keyboard navigation support when interactive
- Semantic markup

## Examples

### Icon Button
```tsx
<button className="icon-button">
  <IconWrapper size="medium">
    <Icons name="settings" />
  </IconWrapper>
  Settings
</button>
```

### Navigation Icons
```tsx
const NavigationMenu = () => (
  <nav>
    <a href="/dashboard">
      <Icons name="dashboard" />
      Dashboard
    </a>
    <a href="/profile">
      <Icons name="user" />
      Profile
    </a>
    <a href="/settings">
      <Icons name="settings" />
      Settings
    </a>
  </nav>
);
```

### Status Icons
```tsx
const StatusIcon = ({ status }) => {
  const iconMap = {
    success: 'check-circle',
    warning: 'warning-triangle', 
    error: 'x-circle',
    info: 'info-circle'
  };
  
  return (
    <Icons 
      name={iconMap[status]} 
      className={`status-icon status-icon--${status}`}
    />
  );
};
```

### Logo Usage
```tsx
// Header logo
<header>
  <Logo variant="primary" size="large" />
</header>

// Footer logo  
<footer>
  <Logo variant="symbol" size="small" />
</footer>
```

### Custom Styled Icons
```tsx
<Icons 
  name="heart"
  style={{ 
    color: '#ff6b6b', 
    width: '32px', 
    height: '32px',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
  }}
/>
```

## Migration from Deprecated Icons

If you're using deprecated icons, they're still available but consider migrating:

```tsx
// Old (still works)
import { Deprecated } from '@1money/react-ui';
<Deprecated name="old-icon-name" />

// New (recommended)
import { Icons } from '@1money/react-ui';
<Icons name="new-icon-name" />
```
