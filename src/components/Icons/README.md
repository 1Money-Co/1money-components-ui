# Icons

A comprehensive icon system providing access to custom SVG icons, logos, illustrations, and deprecated icons with consistent styling.

## Components

- **Icons**: Main icon component for displaying any icon by name.
- **IconWrapper**: SVG wrapper providing consistent sizing and color.
- **IconHover**: Hover-effect container for icon buttons.

## Import

```tsx
import { Icons, IconWrapper, IconHover } from '@1money/components-ui';
// or
import { Icons, IconWrapper, IconHover } from '@1money/components-ui/Icons';

// Type import
import type { IconName } from '@1money/components-ui';
```

## Basic Usage

```tsx
// Basic icon (default 24px, color #131313)
<Icons name="arrowRight" />
import { Icons, IconWrapper, Logo } from '@1money/components-ui';

// Custom size and color
<Icons name="settings" size={32} color="#3D73F2" />

// With explicit width/height
<Icons name="search" width={20} height={20} />

// Icon with hover container
<IconHover>
  <Icons name="more" />
</IconHover>

// Disabled hover container
<IconHover disabled>
  <Icons name="settings" />
</IconHover>

// Logo
<Icons name="logo" size={40} />
```

## Icons Props

`IconsProps` extends `IconWrapperProps` with an additional `name` prop.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | — | Icon name from the available icon set |
| `size` | `number \| \`${number}\`` | `24` | Icon size in pixels (sets both width and height) |
| `width` | `number \| \`${number}\`` | — | Override width independently |
| `height` | `number \| \`${number}\`` | — | Override height independently |
| `color` | `string` | `'#131313'` | Icon color (CSS color value) |
| `fill` | `boolean` | — | Set SVG fill to `currentColor` |
| `stroke` | `boolean` | — | Set SVG stroke to `currentColor` |
| `viewBox` | `string` | `'0 0 24 24'` | SVG viewBox attribute |
| `id` | `string` | — | HTML id attribute |
| `className` | `string` | `''` | CSS class on the SVG element |
| `wrapperCls` | `string` | `''` | CSS class on the wrapper `<i>` element |
| `style` | `CSSProperties` | — | Inline styles on the wrapper |
| `ariaLabel` | `string` | — | Accessibility label |
| `tabIndex` | `number` | — | Tab index for keyboard navigation |
| `onClick` | `(e: MouseEvent<HTMLElement>) => any` | — | Click handler |
| `onKeyDown` | `(e: KeyboardEvent<HTMLElement>) => any` | — | Key down handler |
| `prefixCls` | `string` | `'icons'` | CSS class prefix |

## IconHover Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `disabled` | `boolean` | — | Disables hover effect and adds reduced opacity |
| `prefixCls` | `string` | `'icons-hover'` | CSS class prefix |
| `className` | `string` | — | Additional CSS classes |

Also accepts all standard HTML div attributes.

## Available Icon Names

All icon names use **camelCase**. The `IconName` type provides full autocompletion.

### Functional Icons

`arrowUp`, `arrowDown`, `arrowLeft`, `arrowRight`, `add`, `minus`, `cross`, `more`, `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`, `collapse`, `extend`, `spinner`, `check`, `remove`, `pix`

### System Icons

`info`, `notifications`, `favorite`, `transferHistory`, `support`, `help`, `language`, `share`, `products`, `hub`, `systemSecurity`, `fees`, `settings`, `id`, `viewBalance`, `hideBalance`, `privacy`, `card`, `coin`, `wallet`, `email`, `rewards`, `time`, `location`, `calendar`, `securityCheck`, `devices`, `images`, `bank`, `coins`, `earn`, `scan`, `search`, `maintenance`, `editFile`, `document`, `upload`, `gift`, `filter`, `expand`, `systemCollapse`, `refresh`, `transfer`, `link`, `save`, `like`, `dislike`, `copy`, `mobile`, `chat`, `swap`, `clock`, `desktop`, `ach`, `businessAccount`, `individualAccount`, `apiKey`, `brokenLink`, `autoConversionRules`

### Menu Icons

`dashboard`, `digitalAsset`, `addressBook`, `linkedBankAccounts`, `wire`, `swift`, `account`, `profile`, `security`, `logout`, `portfolio`, `home`, `convert`, `withdraw`, `send`, `menuDeposit`, `company`, `parties`, `transactions`, `fiat`, `money`, `sendCrypto`

### Primary Icons

`deposit`, `withdrawal`, `conversion`, `mintToken`, `burnToken`, `accountLocked`, `pending`, `success`, `fail`, `error`

### Status Icons

`statusSuccess`, `statusFail` (these accept an additional `innerColor` prop)

### Logo Icons

`logo`, `logoWord`, `logoNetwork`, `logoWithWords`, `logoBg`, `logoBeta`, `logoWithBeta`

### Illustrations

`illusChecked`, `illusEmailError`, `illusLinkExpired`, `illus2FA`, `illusLocked`, `illusError`, `illusRegionNotSupported`, `illusIDCard`, `illusVerification`, `illusTransfer`, `illusSend`, `illusAccount`, `illusPending`

```tsx
// Old (still works)
import { Deprecated } from '@1money/components-ui';
<Deprecated name="old-icon-name" />

// New (recommended)
import { Icons } from '@1money/components-ui';
<Icons name="new-icon-name" />
```
