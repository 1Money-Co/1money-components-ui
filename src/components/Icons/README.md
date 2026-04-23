# Icons

`Icons` now exposes three entrypoints with different jobs:

- Static components first: use `CrossIcon`, `SearchIcon`, `LogoWithWords`, `IllusPending` when the icon is known at author time.
- Dynamic rendering: use `Icon` when the icon name comes from config or runtime state.
- Compatibility: keep `Icons` for existing callsites and alias-driven consumers.

## Import

```tsx
import {
  CrossIcon,
  Icon,
  Icons,
  IconHover,
  IconWrapper,
  LogoWithWords,
} from '@1money/components-ui';

import type { IconName, IconsProps } from '@1money/components-ui';
```

## Preferred Usage

```tsx
// Static JSX: preferred
<CrossIcon size={16} />
<LogoWithWords width={132} height={24} logoColor="#073387" wordColor="#131313" />

// Dynamic runtime dispatch
<Icon name="cross" size={16} />

// Backward-compatible wrapper
<Icons name="depositFiatCrypto" size={16} />
```

## Props

`IconProps` and `IconsProps` extend `IconWrapperProps` and add `name: IconName`.

Shared wrapper props:

| Prop | Type | Default |
|------|------|---------|
| `size` | `number \| \`${number}\`` | `24` |
| `width` | `number \| \`${number}\`` | — |
| `height` | `number \| \`${number}\`` | — |
| `color` | `string` | `'currentColor'` |
| `fill` | `boolean` | — |
| `stroke` | `boolean` | — |
| `className` | `string` | `''` |
| `wrapperCls` | `string` | `''` |
| `prefixCls` | `string` | `'icons'` |
| `ariaLabel` | `string` | — |
| `tabIndex` | `number` | — |
| `onClick` | `(e) => unknown` | — |
| `onKeyDown` | `(e) => unknown` | — |

Special direct exports keep their specific props:

- `SortIcon` keeps `status` and `inactiveColor`
- `StatusSuccessIcon` / `StatusFailIcon` keep `innerColor`
- `LogoWithWords` / `LogoWithBeta` keep logo-specific color and layout props
- Illustration components keep `borderColor` / `gradientColor`

## Names

`IconName` still includes the existing canonical names and legacy aliases such as:

- `cross`
- `search`
- `upload`
- `notificationInfo`
- `logoWithWords`
- `illusPending`
- `depositFiatCrypto`

## Notes

- The dynamic registry stays compatible with existing alias names.
- Selected standard icons are now backed by direct source-level `.svg` component imports.
- Logos, illustrations, and special runtime icons remain hand-authored TSX components.
