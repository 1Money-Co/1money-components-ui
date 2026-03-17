# Style System

A SCSS-based design system providing theme tokens, a system-prop compiler (`om-sx`), and atomic utility classes.

## Architecture

```text
styles/
├── _api.scss               # @forward tokens + theme, om-sx mixin (~10 lines)
├── index.scss              # CSS bundle entrypoint — emits utilities + root CSS vars
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
│   │   ├── _primitives.scss       # Opacity tokens + om-opacity()
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
├── _legacy-color.scss      # Deprecated legacy color variables (for unmigrated components)
├── theme/                  # Transform — tokens → CSS var references
│   ├── _scales.scss               # $om-theme-scales aggregation + feature flags
│   ├── _functions.scss            # Theme refs, typography var emission, themed accessors
│   └── _index.scss                # 2 forwards: scales, functions
├── system/                 # Component API — sx compiler, responsive, variant DSL
│   ├── _breakpoints.scss          # om-up/down/between/only/respond
│   ├── _variants.scss             # Variant DSL (schema, validate, apply, classes)
│   ├── _props.scss                # Prop registry (2 kinds: enum, scale)
│   ├── _mixin.scss                # om-sx mixin implementation
│   └── _index.scss                # 3 forwards: breakpoints, variants, om-sx
├── utilities/              # Output — atomic CSS class generator
│   ├── _generator.scss            # 2 branches: enum, scale
│   └── _index.scss                # Emits classes for all breakpoints
```

### Dependency flow (strict one-way)

```text
tokens → theme → system → utilities
           ↘
         _api.scss
```

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
@use '@1money/react-ui/styles/theme/scales' with (
  $om-sys-enable-color: false,
);
```

## How to Add a System Property

1. **Add entries** to the appropriate source map in `system/_props.scss` (e.g. `$om-spacing-props`, `$om-enum-props`, `$om-scale-props`, etc.)
2. If `kind: scale` — specify which `scale` name from `$om-theme-scales` (e.g. `spacing`, `sizing`, `bg`, `radius`, `shadow`)
3. If `kind: enum` — specify a `values` list of allowed enum values
4. **Add aliases** (if any) to `$om-system-aliases` — they auto-inherit the canonical entry's config
5. **Generator and `om-sx` pick it up automatically** — no changes needed in `_generator.scss` or `_mixin.scss`

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

### Step 3 (optional) — Add `om-sx` shorthand (`system/_props.scss`)

Only if you want `om-sx` and utility classes to support this scale:

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

### Component Library SCSS

Import the `api` entrypoint to get all helpers in a flat namespace:

```scss
@use '@/styles/api' as *;
```

#### `om-sx` — System-prop mixin

Spacing and radius keys follow the Figma token names, so `100 = 4px`, `200 = 8px`, `400 = 16px`, `800 = 32px`, etc.

Declare multiple styled properties with responsive overrides in a single call:

```scss
.card {
  @include om-sx((
    p: 600,              // padding: 24px
    d: flex,             // display: flex
    flex: column,        // flex-direction: column
    gap: 400,            // gap: 16px
    bg: default,         // background-color: var(--om-bg-default)
    radius: 300,         // border-radius: var(--om-radius-300, 12px)
    shadow: 100,          // box-shadow: var(--om-shadow-10000, ...)
    md: (                // @media (max-width: 1023.98px)
      p: 400,
      gap: 300,
    ),
    sm: (                // @media (max-width: 767.98px)
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
  @include om-sx((
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

Compiles to:

```css
.card { background-color: var(--om-bg-default); padding: var(--om-spacing-400, 16px); }
.card:hover { background-color: var(--om-bg-default-hover); }
.card:focus-visible { border-color: var(--om-border-brand); }
@media (max-width: 1023.98px) {
  .card { padding: var(--om-spacing-200, 8px); }
  .card:hover { background-color: var(--om-bg-default-secondary); }
}
```

Pseudo-classes inside breakpoints work automatically — the recursion handles it. Any `&`-prefixed string key is treated as a selector nesting trigger.

##### Responsive keys

Nest a map under a breakpoint key to generate a `max-width` media query:

- `lg` → `max-width: 1279.98px`
- `md` → `max-width: 1023.98px`
- `sm` → `max-width: 767.98px`

#### Token functions

Use token functions for individual CSS properties:

```scss
.element {
  padding: om-spacing(400);    // var(--om-spacing-400, 16px)
  color: om-text(default);     // var(--om-text-default)
  border-radius: om-radius(300); // var(--om-radius-300, 12px)
  box-shadow: om-shadow(100);  // var(--om-shadow-10000, 0 4px 8px ...)
  width: om-sizing(50);        // 50%
}
```

#### Typography functions

Access the Figma typography scale programmatically. The raw typography maps live in `tokens/typography`, while the CSS-variable accessors and mixins live in `theme`. Typography is not registered in `$om-theme-scales` because its values are multi-property maps, not single CSS values — no utility classes are generated.

**CSS custom properties** are emitted under `:root` for every typography entry, enabling runtime theme overrides:

```css
--om-body-md-font-size: 14px;
--om-body-md-line-height: 19.6px;
--om-body-md-font-weight: 400;
--om-body-md-strong-font-weight: 500;
--om-link-md-text-decoration: underline;
--om-link-md-text-decoration-skip-ink: none;
```

All accessor functions (`om-font-size`, `om-line-height`, etc.) and the `@include om-typography()` mixin emit `var()` references that resolve to these custom properties.

**Functions** return individual values:

```scss
.heading {
  font-size: om-font-size(display, xl);     // var(--om-display-xl-font-size)
  line-height: om-line-height(display, xl);  // var(--om-display-xl-line-height)
  font-weight: om-font-weight(body, md);     // var(--om-body-md-font-weight)
  font-family: om-font-family(headline, lg); // var(--om-headline-lg-font-family)
  letter-spacing: om-letter-spacing(display, xl); // var(--om-display-xl-letter-spacing)
}
```

**`om-typography()` function** returns the raw property map from the token layer:

```scss
@use 'sass:map';

$body-md: om-typography(body, md);
.element {
  font-size: map.get($body-md, font-size);   // 14px
}
```

**`@include om-typography()` mixin** emits all CSS properties at once:

```scss
.body-text {
  @include om-typography(body, md);
  // Emits: font-family, font-size, line-height, letter-spacing, font-weight
}

.body-strong {
  @include om-typography(body, md, $strong: true);
  // Same as above but font-weight: 500 (medium) instead of 400 (regular)
}

.link {
  @include om-typography(link, md);
  // Also emits: text-decoration: underline; text-decoration-skip-ink: none;
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

#### Component heights

Standardized heights for interactive elements via `om-component-height($key)`. Returns `var(--om-component-height-{key}, {fallback})`.

```scss
.button {
  height: om-component-height(md); // var(--om-component-height-md, 40px)
}
```

If you need the raw token value inside the token layer itself, use `om-component-height-token($key)`.

| Key | Value | Use case |
|-----|-------|----------|
| `xs` | 24px | Badge, small chips |
| `sm` | 32px | Small button, icon button |
| `md` | 40px | Medium button, sidebar items |
| `lg` | 44px | Small input/select |
| `xl` | 48px | Cell, stepper step |
| `2xl` | 52px | Default button |
| `3xl` | 56px | Default input/select |

#### Variant DSL

Use the variant helpers when multiple component modifiers differ only by a token map. The DSL is built around three parts:

1. A `variants` map keyed by string variant names
2. A `schema` map from emitted CSS property/custom-property names to token keys inside each variant
3. Two mixins: one for the default variant, one for generating all modifier classes

```scss
@use '@/styles/api' as *;

$component: 'badge';
$badge-variant-schema: om-variant-schema($component, text, bg);

$badge-variants: (
  'info': (
    text: om-text('brand'),
    bg: om-bg('brand-secondary'),
  ),
  'danger': (
    text: om-text('danger'),
    bg: om-bg('danger-secondary'),
  ),
);

.#{$prefix}-badge {
  @include om-variant-default($badge-variants, 'info', $badge-variant-schema);

  color: var(--om-badge-text);
  background-color: var(--om-badge-bg);

  @include om-variant-classes($badge-variants, $badge-variant-schema, $default: 'info');
}
```

`om-variant-schema($component, $keys...)` auto-generates the schema map using the system prefix, equivalent to manually writing `(--om-badge-text: text, --om-badge-bg: bg)`. This eliminates repetitive boilerplate and keeps CSS variable names consistent.

Both `om-variant-default` and `om-variant-classes` validate at compile time that every variant contains all token keys required by the schema. A missing key triggers a Sass `@error` immediately.

Available helpers:

- `om-variant-schema($component, $keys...)` auto-generates a schema map from a component name and token key list
- `om-variant($variants, $name)` returns a variant token map and errors on unknown names
- `om-variant-value($tokens, $key)` returns a token value and errors on missing keys
- `om-variant-extend($base, $overrides)` creates a new variant by merging overrides into a base variant
- `om-variant-apply($schema, $tokens)` emits declarations for one variant payload
- `om-variant-default($variants, $name, $schema)` validates all variants against the schema, then applies the default payload
- `om-variant-classes($variants, $schema, $default: null, $selector-prefix: '&-')` validates and generates modifier classes; pass `$default` to skip the default variant (its values are already set by `om-variant-default`)

Use quoted strings for variant names like `'white'`, `'black'`, or `'grey'` to avoid Sass treating them as color literals during selector interpolation.

##### Extending a base variant

Use `om-variant-extend` when variants share a common base to reduce duplication:

```scss
$base: (
  text: om-text('default'),
  bg: om-bg('default'),
);

$variants: (
  'default': $base,
  'active': om-variant-extend($base, (
    bg: om-bg('brand'),
  )),
);
```

#### Opacity

Standardized opacity values via `om-opacity($key)`:

```scss
.disabled {
  opacity: om-opacity(disabled); // 0.5
}
```

| Key | Value |
|-----|-------|
| `subtle` | 0.05 |
| `light` | 0.1 |
| `medium` | 0.2 |
| `disabled-light` | 0.3 |
| `overlay` | 0.4 |
| `disabled` | 0.5 |
| `disabled-heavy` | 0.6 |

#### Semantic spacing helpers

Use semantic helpers when you want code to reflect the Figma spacing groups directly. These helpers only accept the keys defined for that group and resolve back to primitive spacing vars.

```scss
.stack {
  gap: om-gap(400); // var(--om-spacing-400, 16px)
}

.card {
  padding: om-component-padding(600); // var(--om-spacing-600, 24px)
}

.page-section {
  padding: om-section-padding(1600); // var(--om-spacing-1600, 64px)
}
```

Semantic helpers are aliases only. Utility classes and CSS variable output remain based on the primitive `spacing` scale.

#### Responsive mixins

```scss
.sidebar {
  width: 280px;

  @include om-down(md) { width: 200px; }    // max-width: 1023.98px
  @include om-down(sm) { display: none; }    // max-width: 767.98px
}

// Also available:
// om-up(bp)            → min-width
// om-between(lo, hi)   → min-width and max-width
// om-only(bp)          → exact range for one breakpoint
// om-respond(bp)       → alias for om-down
```

### Business Code — Utility Classes

Import the compiled CSS and use atomic classes in JSX:

```tsx
import '@1money/react-ui/index.css';

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
@use '@1money/react-ui/styles/api' as om;

.hero {
  color: om.om-text(brand);
  padding: om.om-spacing(800);

  @include om.om-down(md) {
    padding: om.om-spacing(400);
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
  --om-body-md-line-height: 24px;
  --om-headline-lg-font-family: 'Custom Font', sans-serif;
}
```

## Token Scales

### Spacing (100 = 4px)

Figma references currently showcased in the design system:

- Gap: `100`, `200`, `300`, `400`, `600`, `1600`
- Component padding: `100`, `200`, `300`, `400`, `600`, `800`
- Section padding: `800`, `1600`, `2400`, `4000`

The style system keeps the full monotonic 4px ladder between those anchors so utilities and `om-sx` stay predictable.

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

### Semantic spacing groups

| Group | Allowed keys |
|-------|--------------|
| `om-gap(...)` | `100`, `200`, `300`, `400`, `600`, `1600` |
| `om-component-padding(...)` | `100`, `200`, `300`, `400`, `600`, `800` |
| `om-section-padding(...)` | `800`, `1600`, `2400`, `4000` |

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

| Key | Value |
|-----|-------|
| `25` | 25% |
| `33` | 33.333% |
| `50` | 50% |
| `66` | 66.667% |
| `75` | 75% |
| `100` | 100% |
| `auto` | auto |

### Semantic Color Token Reference

Semantic color tokens (`om-bg()`, `om-text()`, `om-icon()`) follow a consistent naming convention across all color groups. Use these tables as a quick reference when building variant maps.

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

Extracted from ButtonBeta and NotificationBeta real-world usage.

**Button variants** (keys: `text`, `bg`, `hover-bg`, `disabled-text`, `disabled-bg`, `spinner-stroke`):

| Variant | text | bg | hover-bg | disabled-text | disabled-bg | spinner-stroke |
|---------|------|----|----------|---------------|-------------|----------------|
| primary | `om-text('on-neutral')` | `om-bg('brand')` | `om-bg('brand-hover')` | `om-text('disabled-white')` | `om-bg('disabled-brand')` | `om-text('on-neutral')` |
| secondary | `om-text('brand')` | `om-bg('brand-secondary')` | `om-bg('brand-secondary-hover')` | `om-text('brand-secondary')` | `om-bg('brand-tertiary')` | `om-text('brand')` |
| grey | `om-text('default')` | `om-bg('default-secondary')` | `om-bg('default-secondary')` | `om-text('disabled')` | `om-bg('disabled')` | `om-text('default')` |
| black | `om-text('on-neutral')` | `om-bg('neutral')` | `om-bg('neutral-hover')` | `om-text('disabled-white')` | `om-bg('disabled-black')` | `om-text('on-neutral')` |
| danger | `om-text('danger')` | `om-bg('danger-secondary')` | `om-bg('danger-secondary-hover')` | `om-text('danger-tertiary')` | `om-bg('danger-tertiary')` | `om-text('danger')` |
| warning | `om-text('default')` | `om-bg('warning')` | `om-bg('warning-hover')` | `om-text('disabled')` | `om-bg('warning-secondary')` | `om-text('default')` |

**Notification/badge variants** (keys: `icon-color`, `icon-bg`):

| Variant | icon-color | icon-bg |
|---------|------------|---------|
| info | `om-icon('brand')` | `om-bg('brand-tertiary-hover')` |
| success | `om-icon('positive')` | `om-bg('positive-tertiary-hover')` |
| warning | `om-icon('warning')` | `om-bg('warning-secondary-hover')` |
| error | `om-icon('danger')` | `om-bg('danger-tertiary-hover')` |

#### State pairing rules

Use these patterns when choosing token names for interactive states:

| Base bg | Hover bg | Disabled |
|---------|----------|----------|
| `{group}` | `{group}-hover` | `disabled` or `disabled-{modifier}` |
| `{group}-secondary` | `{group}-secondary-hover` | `{group}-tertiary` |
| `{group}-tertiary` | `{group}-tertiary-hover` | `disabled` |
