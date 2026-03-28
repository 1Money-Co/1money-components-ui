# Style System

A SCSS-based design system providing theme tokens, a public `theme` namespace, and atomic utility classes.

## Architecture

```text
styles/
├── _api.scss               # Single public entrypoint
├── index.scss              # CSS bundle entrypoint — emits utilities + root CSS vars
├── public/                 # Consumer-facing facade only
├── tokens/                 # Pure data — Sass maps + pure query functions
│   ├── color/
│   │   ├── _primitives.scss       # Raw color primitives (internal)
│   │   ├── _semantic-color.scss   # Semantic bg/text/icon/border scales
│   │   └── _index.scss
│   ├── spacing/
│   │   ├── _primitives.scss       # Figma-aligned spacing scale (100 = 4px)
│   │   └── _index.scss
│   ├── radius/
│   │   ├── _primitives.scss       # Figma-aligned radius scale
│   │   └── _index.scss
│   ├── shadow/
│   │   ├── _primitives.scss       # Box-shadow scale
│   │   └── _index.scss
│   ├── opacity/
│   │   ├── _primitives.scss       # Opacity tokens consumed via theme.opacity()
│   │   └── _index.scss
│   ├── sizing/
│   │   ├── _primitives.scss       # Component height scale
│   │   ├── _semantic-sizing.scss  # Percentage-based width/height scale
│   │   ├── _functions.scss        # Pure component-height token query helpers
│   │   └── _index.scss
│   ├── typography/
│   │   ├── _primitives.scss       # Font families, weights, line-heights, tracking (internal)
│   │   ├── _semantic-typography.scss # Full Figma typography spec as Sass maps
│   │   ├── _functions.scss        # Pure typography scale query helpers
│   │   └── _index.scss
│   └── _index.scss                # Re-exports all token subsystems
├── theme/                  # Theme domain + token → CSS var transforms
│   ├── _scales.scss               # $om-theme-scales aggregation + feature flags
│   ├── _functions.scss            # Theme refs, typography var emission, themed accessors
│   ├── _breakpoints.scss          # Theme-owned breakpoint helpers
│   └── _index.scss                # Internal theme barrel
├── system/                 # sx engine + utility generator support
│   ├── _props.scss                # Prop registry (2 kinds: enum, scale)
│   ├── _sx.scss                   # Internal system-prop compiler
│   └── _index.scss                # Internal system barrel
├── recipes/                # Library recipe helpers like variants
├── utilities/              # Output — atomic CSS class generator
│   ├── _generator.scss            # 2 branches: enum, scale
│   └── _index.scss                # Emits classes for all breakpoints
```

### Dependency flow

```text
tokens -> theme -> system -> utilities
tokens -> theme -> recipes
theme -> public
system -> public
_api.scss -> public
components -> _api.scss
components -> recipes (library-only)
components -> theme/functions (rare library-only reader exception)
```

### Import rules

Public consumers:

- `@use '@/styles/api' as theme;`

Library-only exceptions:

- `@use '@/styles/recipes/variants' as variants;`
- `@use '@/styles/theme/functions' as theme-internal;` for rare reader access such as `om-line-height(...)` or `om-line-height-px(...)`

Forbidden in components:

- `@use '@/styles/system/*'`
- `@use '@/styles/tokens/*'`

### What belongs where

| Concern | Lives in |
|--------|----------|
| Palette, spacing, typography, breakpoints, shape, shadows, opacity, sizing | `theme/` |
| `sx()` and prop registry | `system/` |
| Variant schema helpers | `recipes/` |
| Rare library-only readers like `om-line-height(...)` and `om-line-height-px(...)` | `theme/functions` exception |
| Consumer-facing namespace exported by `_api.scss` | `public/` |

## Feature Flags

All flags live in `theme/_scales.scss` and default to `true`. Set to `false` to suppress that category of utility classes:

| Flag | Controls |
|------|----------|
| `$om-sys-enable-spacing` | Spacing utilities (`om-p-*`, `om-m-*`, `om-gap-*`) |
| `$om-sys-enable-layout` | Layout utilities (`om-d-*`, `om-flex-*`, `om-jc-*`, `om-ai-*`, `om-fw-*`) |
| `$om-sys-enable-sizing` | Sizing utilities (`om-w-*`, `om-h-*`) |
| `$om-sys-enable-color` | Color utilities (`om-bg-*`, `om-border-*`) |
| `$om-sys-enable-visual` | Visual utilities (`om-radius-*`, `om-shadow-*`) |

```scss
@use '@1money/components-ui/styles/theme/scales' with (
  $om-sys-enable-color: false,
);
```

## How to Add a System Property

1. **Add entries** to the appropriate source map in `system/_props.scss` (e.g. `$om-spacing-props`, `$om-enum-props`, `$om-scale-props`, etc.)
2. If `kind: scale` — specify which `scale` name from `$om-theme-scales` (e.g. `spacing`, `sizing`, `bg`, `radius`, `shadow`)
3. If `kind: enum` — specify a `values` list of allowed enum values
4. **Add aliases** (if any) to `$om-system-aliases` — they auto-inherit the canonical entry's config
5. **Generator and `theme.sx()` pick it up automatically** — no changes needed in `_generator.scss` or `_mixin.scss`

### Prop Metadata Fields

| Field | Required | Description |
|-------|----------|-------------|
| `css` | yes | List of CSS properties to emit (e.g. `(padding-left, padding-right)`) |
| `kind` | yes | One of: `enum`, `scale` |
| `flag` | yes | Feature flag group: `spacing`, `layout`, `sizing`, `color`, `visual` |
| `scale` | for scale | Token scale name in `$om-theme-scales` |
| `values` | for enum | List of allowed enum values |

## How to Add a New Token Scale

Use this checklist when introducing an entirely new token category (e.g., `z-index`, `line-height`, `border-width`). The process touches 4 files in a fixed order.

### Checklist

- [ ] **Step 1 — Define the scale** → `tokens/{name}/_primitives.scss` + `_index.scss`
- [ ] **Step 2 — Register in theme** → `theme/_scales.scss`
- [ ] **Step 3 (optional) — Add `om-sx` shorthand** → `system/_props.scss`
- [ ] **Step 4 — Verify** → `pnpm lint:style && pnpm build -n`

> **No accessor function needed.** Use the generic `om(scale, key)` function for any registered scale (e.g., `om(zindex, 'modal')`). It is already registered in stylelint. Only add a dedicated `om-{name}()` shortcut if the scale is used by 5+ components.

### Step 1 — Define the scale (`tokens/`)

Create `src/styles/tokens/{name}/` with two files:

**`_primitives.scss`** — the raw scale map:

```scss
// tokens/{name}/_primitives.scss
$om-{name}-scale: (
  'auto': auto,
  '100': 1,
  '200': 2,
  '300': 3,
  '400': 4,
) !default;
```

**`_index.scss`** — re-export + optional accessor:

```scss
// tokens/{name}/_index.scss
@forward './primitives';

// Optional: pure query function that does NOT wrap in var().
// Only add this if the scale needs non-CSS-var access (like om-spacing-token).
```

Then register the new token module in the tokens barrel:

```scss
// tokens/_index.scss — add this line:
@forward './{name}';
```

### Step 2 — Register in theme (`theme/_scales.scss`)

```scss
// theme/_scales.scss already has `@use '../tokens' as tokens;`
// The new scale is available as `tokens.$om-{name}-scale` after Step 1.

// In $om-theme-scales — add the entry:
$om-theme-scales: (
  // ... existing scales
  {name}: tokens.$om-{name}-scale,      // ← add this
) !default;

// If you want CSS custom variables emitted (most scales do):
$om-theme-css-var-scales: (spacing, radius, shadow, bg, text, icon, border, component-height, {name}) !default;
//                                                                                             ^^^ add
```

### Step 3 (optional) — Add `theme.sx()` support (`system/_props.scss`)

Only if you want `theme.sx()` and utility classes to support this scale:

```scss
// In system/_props.scss — add to $om-scale-props:
$om-scale-props: (
  // ... existing
  '{short}': (css: {css-property}, scale: {name}),
) !default;

// Optional alias in $om-system-aliases:
$om-system-aliases: (
  // ... existing
  '{camelCase}': '{short}',
) !default;
```

If the scale also needs a feature flag, add in `theme/_scales.scss`:

```scss
$om-sys-enable-{flag}: true !default;
```

And register it in `utilities/_generator.scss`:

```scss
$-flag-enabled: (
  // ... existing
  {flag}: theme.$om-sys-enable-{flag},
);
```

### Step 4 — Verify

```bash
pnpm lint:style   # stylelint recognizes the new function
pnpm build -n     # Sass compiles, CSS vars emitted in :root
```

### Complete example: adding `z-index`

```text
Files to create:
  src/styles/tokens/zindex/_primitives.scss
  src/styles/tokens/zindex/_index.scss

Files to edit:
  src/styles/tokens/_index.scss          — @forward './zindex';
  src/styles/theme/_scales.scss          — @use + $om-theme-scales
```

**`tokens/zindex/_primitives.scss`**:

```scss
$om-zindex-scale: (
  'hide': -1,
  'base': 0,
  'dropdown': 1000,
  'sticky': 1100,
  'overlay': 1300,
  'modal': 1400,
  'popover': 1500,
  'toast': 1700,
) !default;
```

**`tokens/zindex/_index.scss`**:

```scss
@forward './primitives';
```

**`theme/_scales.scss`** additions:

```scss
// theme/_scales.scss already has `@use '../tokens' as tokens;`
$om-theme-scales: (
  // ... existing
  zindex: tokens.$om-zindex-scale,
) !default;
// No need to add to $om-theme-css-var-scales — z-index rarely needs CSS vars.
```

Usage — no accessor function needed, use `om()` directly:

```scss
.modal { z-index: om(zindex, 'modal'); } // 1400
.toast { z-index: om(zindex, 'toast'); } // 1700
```

---

## Usage

### Public SCSS API

Import the public entrypoint and use the `theme` namespace everywhere:

```scss
@use '@/styles/api' as theme;
```

The public contract is intentionally small:

```text
theme.$prefix
theme.palette(domain, token, state?)
theme.spacing(scale|gap|component-padding|section-padding, key)
theme.shape(key)
theme.shadows(key)
theme.sizing(scale|component-height, key)
theme.opacity(key)
@include theme.typography(category, size, $strong: false)
@include theme.up/down/between/only/respond(...)
@include theme.sx(...)
```

#### `theme.sx()` — system-prop mixin

Spacing and radius keys follow the Figma token names, so `100 = 4px`, `200 = 8px`, `400 = 16px`, `800 = 32px`, etc.

Declare multiple styled properties with responsive overrides in a single call:

```scss
.card {
  @include theme.sx((
    p: 600,
    d: flex,
    flex: column,
    gap: 400,
    bg: default,
    radius: 300,
    shadow: 100,
    md: (
      p: 400,
      gap: 300,
    ),
    sm: (
      p: 200,
      flex: column,
    ),
  ));
}
```

##### Supported props

| Category | Short | Alias (camelCase) | CSS Property |
|----------|-------|-------------------|--------------|
| Spacing | `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` | — | `padding-*` |
| Spacing | `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` | — | `margin-*` |
| Spacing | `gap` | — | `gap` |
| Layout | `d` | `display` | `display` |
| Layout | `flex` | `flexDirection` | `flex-direction` |
| Layout | `jc` | `justifyContent` | `justify-content` |
| Layout | `ai` | `alignItems` | `align-items` |
| Layout | `fw` | `flexWrap` | `flex-wrap` |
| Sizing | `w` | `width` | `width` |
| Sizing | `h` | `height` | `height` |
| Color | `bg` | `bgcolor`, `bgColor` | `background-color` |
| Color | `border` | `borderColor` | `border-color` |
| Visual | `radius` | `borderRadius` | `border-radius` |
| Visual | `shadow` | `boxShadow` | `box-shadow` |

##### Pseudo-class nesting

Nest a map under an `&`-prefixed key to generate pseudo-class selectors:

```scss
.card {
  @include theme.sx((
    bg: default,
    p: 400,
    '&:hover': (bg: default-hover),
    '&:focus-visible': (border: brand),
    md: (
      p: 200,
      '&:hover': (bg: default-secondary),
    ),
  ));
}
```

##### Responsive keys

Nest a map under a breakpoint key to generate a `max-width` media query:

- `lg` → `max-width: 1279.98px`
- `md` → `max-width: 1023.98px`
- `sm` → `max-width: 767.98px`

#### Theme value accessors

Use theme-domain functions for individual CSS values:

```scss
.element {
  padding: theme.spacing(scale, 400);
  gap: theme.spacing(gap, 200);
  color: theme.palette(text, 'default');
  background-color: theme.palette(bg, 'brand', 'hover');
  border-color: theme.palette(border, 'default-secondary');
  border-radius: theme.shape(300);
  box-shadow: theme.shadows(100);
  width: theme.sizing(scale, 50);
  height: theme.sizing(component-height, md);
  opacity: theme.opacity(disabled);
}
```

#### Typography

Typography is exposed publicly only as a mixin. This keeps the public contract centered on semantic text recipes instead of fine-grained font property readers.

```scss
.title {
  @include theme.typography(title, sm);
}

.body-strong {
  @include theme.typography(body, md, $strong: true);
}

.link {
  @include theme.typography(link, md);
}
```

**Categories and sizes:**

| Category | Sizes | Font | Strong weight |
|----------|-------|------|---------------|
| `display` | `xl`, `lg`, `md`, `sm`, `xs` | Aeonik | — |
| `headline` | `lg`, `md`, `sm`, `xs` | Aeonik | — |
| `title` | `lg`, `md`, `sm` | Inter | 700 |
| `body` | `lg`, `md`, `sm` | Inter | 500 |
| `link` | `md`, `sm` | Inter | — |
| `label` | `xl`, `lg`, `md`, `sm`, `xs` | Inter | 600–700 |

#### Responsive mixins

```scss
.sidebar {
  width: 280px;

  @include theme.down(md) {
    width: 200px;
  }

  @include theme.down(sm) {
    display: none;
  }
}
```

Also available:

- `@include theme.up(bp)`
- `@include theme.between(lo, hi)`
- `@include theme.only(bp)`
- `@include theme.respond(bp)`

### Internal-Only Library APIs

`recipes/` is a real library-only layer. It is not part of the public SCSS contract and must never be used from external consumer code outside this library.

Variants are library recipe helpers. They are not part of the public consumer API and should only be imported by library component styles:

```scss
@use '@/styles/api' as theme;
@use '@/styles/recipes/variants' as variants;

$component: 'badge';
$badge-schema: variants.om-variant-schema($component, text, bg);
$badge-variants: (
  'info': (
    text: theme.palette(text, 'brand'),
    bg: theme.palette(bg, 'brand-secondary'),
  ),
  'danger': (
    text: theme.palette(text, 'danger'),
    bg: theme.palette(bg, 'danger-secondary'),
  ),
);
```

For rare library-internal readers that are deliberately not public, components may use `theme/functions` directly as a controlled exception. Keep this narrow and only for value readers such as line-height access for alignment calculations:

```scss
@use '@/styles/theme/functions' as theme-internal;

.checkbox-box-wrapper {
  height: theme-internal.om-line-height-px(body, lg);
}
```

### Business Code — Utility Classes

Import the compiled CSS and use atomic classes in JSX:

```tsx
import '@1money/components-ui/index.css';

function Page() {
  return (
    <div className="om-d-flex om-flex-column om-gap-600 om-p-800 om-bg-default">
      <h1 className="om-mb-400">Title</h1>
      <div className="om-d-flex om-gap-400 om-md-flex-column">
        <div className="om-w-33 om-md-w-100 om-radius-300 om-shadow-100" />
        <div className="om-w-33 om-md-w-100 om-radius-300 om-shadow-100" />
      </div>
    </div>
  );
}
```

#### Class naming convention

```text
Base:       .om-{prop}-{value}
Responsive: .om-{breakpoint}-{prop}-{value}

Examples:
  .om-p-400        → padding: 16px
  .om-mx-600       → margin-left: 24px; margin-right: 24px
  .om-d-flex       → display: flex
  .om-jc-center    → justify-content: center
  .om-bg-default   → background-color: var(--om-bg-default)
  .om-w-50         → width: 50%
  .om-radius-full  → border-radius: 9999px
  .om-md-p-200     → @media (max-width: 1023.98px) { padding: 8px }
  .om-sm-d-none    → @media (max-width: 767.98px) { display: none }
```

### Business SCSS — Direct Theme Consumption

```scss
@use '@1money/components-ui/styles/api' as theme;

.hero {
  color: theme.palette(text, 'brand');
  padding: theme.spacing(scale, 800);

  @include theme.down(md) {
    padding: theme.spacing(scale, 400);
  }
}
```

### Theme Customization

Override CSS variables to customize the theme:

```css
:root {
  --om-bg-brand: #1a73e8;
  --om-spacing-400: 20px;
  --om-radius-300: 10px;

  /* Typography overrides */
  --om-body-md-font-size: 16px;
  --om-body-md-line-height: 140%;
  --om-headline-lg-font-family: 'Custom Font', sans-serif;
}
```

## Token Scales

### Spacing (100 = 4px)

Figma references currently showcased in the design system:

- Gap: `100`, `200`, `300`, `400`, `600`, `1600`
- Component padding: `050`, `100`, `200`, `300`, `400`, `600`, `800`
- Section padding: `800`, `1600`, `2400`, `4000`

The style system keeps the full monotonic 4px ladder between those anchors so utilities and `theme.sx()` stay predictable.

| Key | Value |
|-----|-------|
| `0` | 0 |
| `100` | 4px |
| `200` | 8px |
| `300` | 12px |
| `400` | 16px |
| `500` | 20px |
| `600` | 24px |
| `800` | 32px |
| `1000` | 40px |
| `1200` | 48px |
| `1400` | 56px |
| `1600` | 64px |
| `2000` | 80px |
| `2400` | 96px |
| `3200` | 128px |
| `4000` | 160px |

### Semantic spacing domains

| Domain | Allowed keys |
|--------|--------------|
| `theme.spacing(gap, key)` | `050`, `100`, `200`, `300`, `400`, `600`, `1600` |
| `theme.spacing(component-padding, key)` | `050`, `100`, `200`, `300`, `400`, `600`, `800` |
| `theme.spacing(section-padding, key)` | `800`, `1600`, `2400`, `4000` |

### Radius

| Key | Value |
|-----|-------|
| `0` | 0 |
| `100` | 4px |
| `200` | 8px |
| `300` | 12px |
| `400` | 16px |
| `600` | 24px |
| `full` | 9999px |

### Shadow

| Key | Value |
|-----|-------|
| `0` | none |
| `100` | `0 4px 8px rgba(65, 91, 130, 12%)` |
| `200` | `0 10px 22px rgba(0, 0, 0, 10%)` |

### Sizing

Use `theme.sizing(scale, key)` for percentage sizing and `theme.sizing(component-height, key)` for semantic control heights.

**Scale sizing**

| Key | Value |
|-----|-------|
| `25` | 25% |
| `33` | 33.333% |
| `50` | 50% |
| `66` | 66.667% |
| `75` | 75% |
| `100` | 100% |
| `auto` | auto |

**Component heights**

| Key | Value | Use case |
|-----|-------|----------|
| `xs` | 24px | Badge, small chips |
| `sm` | 32px | Small button, icon button |
| `md` | 40px | Medium button, sidebar items |
| `lg` | 44px | Small input/select |
| `xl` | 48px | Cell, stepper step |
| `2xl` | 52px | Default button |
| `3xl` | 56px | Default input/select |

### Opacity

| Key | Value |
|-----|-------|
| `subtle` | 0.05 |
| `light` | 0.1 |
| `medium` | 0.2 |
| `disabled-light` | 0.3 |
| `overlay` | 0.4 |
| `disabled` | 0.5 |
| `disabled-heavy` | 0.6 |
| `strong` | 0.8 |

### Semantic Color Token Reference

Color access is unified under `theme.palette(domain, token, state?)`, where `domain` is one of `bg`, `text`, `icon`, or `border`.

#### Suffix rules

| Suffix | Meaning | Typical usage |
|--------|---------|---------------|
| *(none)* | Primary level | Button fills, primary text |
| `-hover` | Hover state | `:hover` pseudo-class |
| `-secondary` | Secondary level (lighter) | Secondary buttons, tags |
| `-secondary-hover` | Secondary hover | `:hover` on secondary |
| `-tertiary` | Lightest level | Badge backgrounds, subtle fills |
| `-tertiary-hover` | Tertiary hover | `:hover` on tertiary |
| `on-{group}` | Content on that surface | White text on brand bg |

#### Common component variant patterns

Extracted from `ButtonBeta` and `NotificationBeta` usage.

**Button variants** (keys: `text`, `bg`, `hover-bg`, `disabled-text`, `disabled-bg`, `spinner-stroke`):

| Variant | text | bg | hover-bg | disabled-text | disabled-bg | spinner-stroke |
|---------|------|----|----------|---------------|-------------|----------------|
| primary | `theme.palette(text, 'on-neutral')` | `theme.palette(bg, 'brand')` | `theme.palette(bg, 'brand-hover')` | `theme.palette(text, 'disabled-white')` | `theme.palette(bg, 'disabled-brand')` | `theme.palette(text, 'on-neutral')` |
| secondary | `theme.palette(text, 'brand')` | `theme.palette(bg, 'brand-secondary')` | `theme.palette(bg, 'brand-secondary-hover')` | `theme.palette(text, 'brand-secondary')` | `theme.palette(bg, 'brand-tertiary')` | `theme.palette(text, 'brand')` |
| grey | `theme.palette(text, 'default')` | `theme.palette(bg, 'default-secondary')` | `theme.palette(bg, 'default-secondary')` | `theme.palette(text, 'disabled')` | `theme.palette(bg, 'disabled')` | `theme.palette(text, 'default')` |
| black | `theme.palette(text, 'on-neutral')` | `theme.palette(bg, 'neutral')` | `theme.palette(bg, 'neutral-hover')` | `theme.palette(text, 'disabled-white')` | `theme.palette(bg, 'disabled-black')` | `theme.palette(text, 'on-neutral')` |
| danger | `theme.palette(text, 'danger')` | `theme.palette(bg, 'danger-secondary')` | `theme.palette(bg, 'danger-secondary-hover')` | `theme.palette(text, 'danger-tertiary')` | `theme.palette(bg, 'danger-tertiary')` | `theme.palette(text, 'danger')` |
| warning | `theme.palette(text, 'default')` | `theme.palette(bg, 'warning')` | `theme.palette(bg, 'warning-hover')` | `theme.palette(text, 'disabled')` | `theme.palette(bg, 'warning-secondary')` | `theme.palette(text, 'default')` |

**Notification/badge variants** (keys: `icon-color`, `icon-bg`):

| Variant | icon-color | icon-bg |
|---------|------------|---------|
| info | `theme.palette(icon, 'brand')` | `theme.palette(bg, 'brand-tertiary-hover')` |
| success | `theme.palette(icon, 'positive')` | `theme.palette(bg, 'positive-tertiary-hover')` |
| warning | `theme.palette(icon, 'warning')` | `theme.palette(bg, 'warning-secondary-hover')` |
| error | `theme.palette(icon, 'danger')` | `theme.palette(bg, 'danger-tertiary-hover')` |

#### State pairing rules

Use these patterns when choosing token names for interactive states:

| Base bg | Hover bg | Disabled |
|---------|----------|----------|
| `{group}` | `{group}-hover` | `disabled` or `disabled-{modifier}` |
| `{group}-secondary` | `{group}-secondary-hover` | `{group}-tertiary` |
| `{group}-tertiary` | `{group}-tertiary-hover` | `disabled` |

#### Utility background tokens

Use these for overlay and scrim surfaces that do not belong to the default/brand/status ladders:

| Token | Value | Typical usage |
|-------|-------|---------------|
| `scrim-dark` | `rgba(0, 0, 0, 0.2)` | Dark modal/page scrim overlays |
| `scrim-light` | `rgba(255, 255, 255, 0.8)` | Light frosted or inverse overlay surfaces |
