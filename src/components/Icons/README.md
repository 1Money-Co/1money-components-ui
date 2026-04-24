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

// Type imports
import type { IconName, SortIconStatus } from '@1money/components-ui';
```

## Basic Usage

```tsx
// Basic icon (default 24px, inherits currentColor)
<Icons name="arrowRight" />

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
| `color` | `string` | `'currentColor'` | Icon color (CSS color value) |
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

## Special Icon Props

### Status Icons (`statusSuccess`, `statusFail`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `innerColor` | `string` | — | Color for the inner part of the status icon |

### Sort Icon (`sort`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `SortIconStatus` | — | Sort direction state |
| `inactiveColor` | `string` | — | Color for the inactive arrow |

### LogoWithWords (`logoWithWords`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoColor` | `string` | — | Override color for the logo mark |
| `logoCls` | `string` | — | CSS class for the logo mark |
| `wordColor` | `string` | — | Override color for the wordmark |
| `wordCls` | `string` | — | CSS class for the wordmark |
| `networkLogo` | `boolean` | — | Show the "NETWORK" wordmark alongside |
| `networkColor` | `string` | — | Override color for the network wordmark |
| `networkCls` | `string` | — | CSS class for the network wordmark |

### LogoWithBeta (`logoWithBeta`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `logoColor` | `string` | — | Override color for the logo mark |
| `logoCls` | `string` | — | CSS class for the logo mark |
| `wordColor` | `string` | — | Override color for the wordmark |
| `wordCls` | `string` | — | CSS class for the wordmark |
| `betaColor` | `string` | — | Override color for the beta badge |
| `betaCls` | `string` | — | CSS class for the beta badge |

### Illustrations (`illus*` icons)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderColor` | `string` | `'#131313'` | Stroke/border color of the illustration |
| `gradientColor` | `string \| [string, string]` | `['#B9CCE4', 'white']` | Gradient fill — a single color or `[start, end]` tuple |

Some illustrations also accept `color` to override the accent circle (defaults to `#AE0000` for error-themed, `#F4C600` for pending-themed).

## Available Icon Names

All icon names use **camelCase**. The `IconName` type provides full autocompletion.

### Functional Icons

`arrowUp`, `arrowDown`, `arrowLeft`, `arrowRight`, `add`, `minus`, `cross`, `more`, `chevronDown`, `chevronUp`, `chevronLeft`, `chevronRight`, `sort`, `collapse`, `extend`, `spinner`, `check`, `remove`, `pix`

### System Icons

`info`, `notifications`, `favorite`, `transferHistory`, `support`, `help`, `language`, `share`, `products`, `hub`, `systemSecurity`, `fees`, `settings`, `id`, `viewBalance`, `hideBalance`, `privacy`, `card`, `coin`, `wallet`, `email`, `rewards`, `time`, `location`, `calendar`, `securityCheck`, `devices`, `images`, `bank`, `coins`, `earn`, `scan`, `search`, `maintenance`, `editFile`, `document`, `upload`, `gift`, `filter`, `expand`, `systemCollapse`, `refresh`, `transfer`, `link`, `save`, `like`, `dislike`, `copy`, `mobile`, `chat`, `swap`, `clock`, `desktop`, `ach`, `businessAccount`, `individualAccount`, `apiKey`, `brokenLink`, `autoConversionRules`

### Menu Icons

`dashboard`, `digitalAsset`, `addressBook`, `linkedBankAccounts`, `wire`, `swift`, `account`, `profile`, `security`, `logout`, `portfolio`, `home`, `convert`, `withdraw`, `send`, `menuDeposit`, `company`, `parties`, `transactions`, `fiat`, `money`, `sendCrypto`

### Primary Icons

`deposit`, `withdrawal`, `conversion`, `mintToken`, `burnToken`, `accountLocked`, `pending`, `success`, `fail`, `error`

### Status Icons

`statusSuccess`, `statusFail` (these accept an additional `innerColor` prop)

### Currency Icons

`usd`, `eur`, `gbp`, `jpy`, `cny`

### Social Icons

`google`, `apple`, `twitter`, `linkedIn`, `passkey`

### Notification Icons

`notificationInfo`, `notificationWarning`, `notificationSuccess`, `notificationError`

### Logo Icons

`logo`, `logoWord`, `logoNetwork`, `logoWithWords`, `logoBg`, `logoBeta`, `logoWithBeta`

### Illustrations

`illusChecked`, `illusEmailError`, `illusLinkExpired`, `illus2FA`, `illusLocked`, `illusError`, `illusRegionNotSupported`, `illusID`, `illusVerification`, `illusPending`, `illusPasskey`, `illusAddAccount`

### Figma Aliases

These are convenience aliases that map to existing icons for Figma design-token parity:

| Alias | Maps to |
|-------|---------|
| `depositFiatCrypto` | `deposit` |
| `withdrawFiatCrypto` | `withdrawal` |
| `accountdLocked` | `accountLocked` |
| `personalSettings` | `account` |
| `security2` | `systemSecurity` |
| `iconPix` | `pix` |
| `noApiKeys` | `brokenLink` |

### Other

`pause`

## Color Inheritance

The `IconWrapper` uses `currentColor` as the default color and injects a runtime CSS rule so that SVG child elements without explicit `fill` or `stroke` attributes automatically inherit `currentColor`. This means icons follow the parent element's text color by default — set `color` on the parent or pass the `color` prop to override.
