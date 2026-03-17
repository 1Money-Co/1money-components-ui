# Style System API Reference

Internal SCSS authoring reference for `@1money/components-ui` component development.

## Import

```scss
@use '@/styles/api' as *;
```

This single import provides all token functions, semantic helpers, typography mixins, and responsive mixins in a flat namespace.

---

## Token Functions

### `om-spacing($key)` — Spacing Scale

Returns `var(--om-spacing-{key}, {fallback})`.

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

```scss
.element { padding: om-spacing(400); } // var(--om-spacing-400, 16px)
```

### `om-radius($key)` — Border Radius Scale

Returns `var(--om-radius-{key}, {fallback})`.

| Key | Value |
|-----|-------|
| `0` | 0 |
| `100` | 4px |
| `200` | 8px |
| `300` | 12px |
| `400` | 16px |
| `600` | 24px |
| `full` | 9999px |

```scss
.element { border-radius: om-radius(300); } // var(--om-radius-300, 12px)
```

### `om-shadow($key)` — Box Shadow Scale

Returns `var(--om-shadow-{key}, {fallback})`.

| Key | Value |
|-----|-------|
| `0` | none |
| `100` | `0 4px 8px rgba(65, 91, 130, 12%)` |
| `200` | `0 10px 22px rgba(0, 0, 0, 10%)` |

```scss
.element { box-shadow: om-shadow(100); }
```

### `om-color($key)` — Removed

> **Removed**: `om-color()` has been removed and will trigger a Sass compile-time error. Use semantic functions (`om-bg`, `om-text`, `om-icon`, `om-border`) instead. Legacy color variables are available via `@use '@/styles/legacy-color'` for unmigrated components only.

### `om-sizing($key)` — Width/Height Sizing

| Key | Value |
|-----|-------|
| `25` | 25% |
| `33` | 33.333% |
| `50` | 50% |
| `66` | 66.667% |
| `75` | 75% |
| `100` | 100% |
| `auto` | auto |

---

## Semantic Color Functions

Contextual tokens for backgrounds, text, icons, and borders. See `SemanticColors.md` for the complete key list.

All four functions share the same signature pattern:

```scss
om-bg($group, $variant: null)
om-text($group, $variant: null)
om-icon($group, $variant: null)
om-border($group, $variant: null)
```

When called with two arguments, `$group` and `$variant` are concatenated with a hyphen to form the lookup key (e.g., `om-bg('brand', 'hover')` → resolves key `'brand-hover'`). When called with one argument, it is used as the key directly.

### `om-bg($group, $variant: null)` — Background Colors

```scss
// Single-key form (most common)
.card { background-color: om-bg('brand'); }
.card:hover { background-color: om-bg('brand-hover'); }
.card.p-disabled { background-color: om-bg('disabled'); }

// Two-param form (equivalent)
.card:hover { background-color: om-bg('brand', 'hover'); }
```

### `om-text($group, $variant: null)` — Text Colors

```scss
.label { color: om-text('default'); }
.label-muted { color: om-text('default-tertiary'); }
.on-dark { color: om-text('on-neutral'); }
```

### `om-icon($group, $variant: null)` — Icon Colors

```scss
.icon { color: om-icon('default'); }
.icon-brand { color: om-icon('brand'); }
```

### `om-border($group, $variant: null)` — Semantic Border Colors

```scss
.input { border-color: om-border('default'); }
.input:focus { border-color: om-border('brand'); }
.input.error { border-color: om-border('danger'); }
```

---

## Semantic Spacing Helpers

Aliases for `om-spacing()` that enforce allowed keys per Figma spacing group.

### `om-gap($key)` — Gap Spacing

Allowed keys: `100`, `200`, `300`, `400`, `600`, `1600`

```scss
.stack { gap: om-gap(400); } // var(--om-spacing-400, 16px)
```

### `om-component-padding($key)` — Component Internal Padding

Allowed keys: `100`, `200`, `300`, `400`, `600`, `800`

```scss
.button { padding: om-component-padding(400); }
```

### `om-section-padding($key)` — Page Section Padding

Allowed keys: `800`, `1600`, `2400`, `4000`

```scss
.section { padding: om-section-padding(1600); }
```

---

## Typography

All typography tokens are emitted as CSS custom properties under `:root`, enabling runtime theme overrides:

```css
--om-body-md-font-size: 14px;
--om-body-md-line-height: 19.6px;
--om-body-md-font-weight: 400;
--om-body-md-strong-font-weight: 500;
--om-link-md-text-decoration: underline;
```

Variable naming: `--om-{category}-{size}-{property}`

### `@include om-typography($category, $size, [$strong: false])`

Emits all CSS properties as `var()` references: `font-family`, `font-size`, `line-height`, `letter-spacing`, `font-weight`.

```scss
.body { @include om-typography(body, md); }
// Compiles to:
//   font-size: var(--om-body-md-font-size);
//   font-family: var(--om-body-md-font-family);
//   line-height: var(--om-body-md-line-height);
//   letter-spacing: var(--om-body-md-letter-spacing);
//   font-weight: var(--om-body-md-font-weight);

.body-bold { @include om-typography(body, md, $strong: true); }
// font-weight: var(--om-body-md-strong-font-weight);

.link { @include om-typography(link, md); }
// Also emits: text-decoration: var(--om-link-md-text-decoration);
```

### Categories & Sizes

| Category | Sizes | Font | Strong weight |
|----------|-------|------|---------------|
| `display` | `xl`, `lg`, `md`, `sm`, `xs` | Aeonik | -- |
| `headline` | `lg`, `md`, `sm`, `xs` | Aeonik | -- |
| `title` | `lg`, `md`, `sm` | Inter | 700 |
| `body` | `lg`, `md`, `sm` | Inter | 500 |
| `link` | `md`, `sm` | Inter | -- |
| `label` | `xl`, `lg`, `md`, `sm`, `xs` | Inter | 600-700 |

### Individual Typography Functions

All return `var()` references to the corresponding CSS custom property:

```scss
.heading {
  font-size: om-font-size(display, xl);          // var(--om-display-xl-font-size)
  line-height: om-line-height(display, xl);       // var(--om-display-xl-line-height)
  font-weight: om-font-weight(body, md);          // var(--om-body-md-font-weight)
  font-family: om-font-family(headline, lg);      // var(--om-headline-lg-font-family)
  letter-spacing: om-letter-spacing(display, xl); // var(--om-display-xl-letter-spacing)
}
```

### `om-typography()` Function (raw data accessor)

The **function** (not mixin) still returns the raw Sass property map for compile-time access:

```scss
@use 'sass:map';
$body-md: om-typography(body, md);
.element { font-size: map.get($body-md, font-size); } // 14px (raw value)
```

---

## Component Heights

`om-component-height($key)` — Standardized heights for interactive elements. Returns `var(--om-component-height-{key}, {fallback})`.

| Key | Value | Use case |
|-----|-------|----------|
| `xs` | 24px | Badge, small chips |
| `sm` | 32px | Small button, icon button |
| `md` | 40px | Medium button, sidebar items |
| `lg` | 44px | Small input/select |
| `xl` | 48px | Cell, stepper step |
| `2xl` | 52px | Default button |
| `3xl` | 56px | Default input/select |

```scss
.button { height: om-component-height(md); } // var(--om-component-height-md, 40px)
```

---

## Opacity

`om-opacity($key)` — Standardized opacity values.

| Key | Value |
|-----|-------|
| `subtle` | 0.05 |
| `light` | 0.1 |
| `medium` | 0.2 |
| `disabled-light` | 0.3 |
| `overlay` | 0.4 |
| `disabled` | 0.5 |
| `disabled-heavy` | 0.6 |

```scss
.disabled { opacity: om-opacity(disabled); } // 0.5
```

---

## Responsive Mixins

Mobile-first breakpoint helpers using `max-width` media queries.

### `@include om-down($breakpoint)`

| Breakpoint | Max-width |
|------------|-----------|
| `lg` | 1279.98px |
| `md` | 1023.98px |
| `sm` | 767.98px |

```scss
.sidebar {
  width: 280px;
  @include om-down(md) { width: 200px; }
  @include om-down(sm) { display: none; }
}
```

### Other Responsive Mixins

```scss
@include om-up($bp)              // min-width
@include om-between($lo, $hi)    // min-width and max-width
@include om-only($bp)            // exact range for one breakpoint
@include om-respond($bp)         // alias for om-down
```

---

## Variant DSL

Use the variant helpers when a component has multiple color/status modifiers that differ only by a set of token values. The DSL eliminates repetitive `&-{variant}` blocks by declaring a schema once and generating all modifier classes automatically.

### Concepts

1. **Schema** — maps CSS custom property names to token keys inside each variant payload. Use `om-variant-schema($component, $keys...)` to auto-generate this from the component name and key list.
2. **Variants map** — keyed by string variant names, each value is a token map matching the schema
3. **Mixins** — `om-variant-default` sets the base, `om-variant-classes` generates all modifier classes

### Basic Example

```scss
@use '@/styles/api' as *;

$component: 'badge';
// Auto-generates: (--om-badge-text: text, --om-badge-bg: bg)
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

.#{$prefix}-#{$component} {
  // Set default variant values + validate all variants against schema
  @include om-variant-default($badge-variants, 'info', $badge-variant-schema);

  color: var(--om-badge-text);
  background-color: var(--om-badge-bg);

  // Generate modifier classes, skipping 'info' (already set as default)
  @include om-variant-classes($badge-variants, $badge-variant-schema, $default: 'info');
}
```

### Extending a Base Variant

Use `om-variant-extend` when variants share a common base:

```scss
$base: (
  text: om-text('default'),
  bg: om-bg('default'),
  hover-bg: om-bg('default-hover'),
);

$variants: (
  'default': $base,
  'active': om-variant-extend($base, (
    bg: om-bg('brand'),
    hover-bg: om-bg('brand-hover'),
  )),
);
```

### Available Helpers

| Helper | Description |
|--------|-------------|
| `om-variant-schema($component, $keys...)` | Auto-generates a schema map from component name + token key list |
| `om-variant($variants, $name)` | Returns a variant token map; errors on unknown names |
| `om-variant-value($tokens, $key)` | Returns a token value; errors on missing keys |
| `om-variant-extend($base, $overrides)` | Creates a new variant by merging overrides into a base |
| `om-variant-apply($schema, $tokens)` | Emits CSS declarations for one variant payload |
| `om-variant-default($variants, $name, $schema)` | Validates all variants against schema, then applies the default |
| `om-variant-classes($variants, $schema, $default, $selector-prefix)` | Validates and generates modifier classes; `$default` skips the default variant |

### Compile-Time Safety

Both `om-variant-default` and `om-variant-classes` validate that every variant contains all token keys required by the schema. A missing key triggers a Sass `@error` at build time.

### Naming Conventions

- Schema variable: `$component-variant-schema`
- Variants map: `$component-variants`
- Individual variant (if extracted): `$component-{name}-variant`
- Always quote variant names: `'white'`, `'black'`, `'grey'` (prevents Sass color literal issues)

---

## Generic Scale Accessor

### `om($scale, $key, $variant: null)`

A universal accessor that works with **any** registered scale. Use this for scales that don't have a dedicated function (e.g., new custom scales), or as a shorter alternative to `om-token()`.

```scss
// Simple scales — equivalent to om-radius(300), om-shadow(100)
border-radius: om(radius, 300);
box-shadow: om(shadow, 100);

// Semantic scales — equivalent to om-bg('brand', 'hover')
background: om(bg, 'brand', 'hover');
color: om(text, 'default');

// New custom scales — no dedicated function needed
z-index: om(zindex, 'modal');
border-width: om(border-w, 'thin');
```

When `$variant` is provided, `$key` and `$variant` are joined with a hyphen (e.g., `om(bg, 'brand', 'hover')` → resolves `'brand-hover'`).

> **Convention**: Existing scales retain their dedicated functions (`om-bg`, `om-radius`, etc.) for backward compatibility. New scales should use `om()` unless adopted by 5+ components, at which point a dedicated function can be added.

---

## Core Theme Accessors

Low-level functions for advanced use cases. Most components should use the semantic helpers or `om()` above.

```scss
om-scale-map($scale-name)             // Returns the full scale map
om-scale-has($scale-name, $key)       // Boolean: key exists in scale?
om-scale-value($scale-name, $key)     // Raw value (no CSS var)
om-theme-var-name($scale-name, $key)  // CSS variable name string (e.g., '--om-bg-brand')
om-theme-ref($scale-name, $key)       // CSS var() with fallback
om-token($scale-name, $key)           // Generic resolver (CSS var or raw value)
```

**Registered scales**: `spacing`, `radius`, `shadow`, `sizing`, `component-height`, `bg`, `text`, `icon`, `border`

---

## Architecture

The style system has three layers:

1. **Tokens** (`src/styles/tokens/`): Raw primitives — colors, spacing multipliers, font sizes, scale maps
2. **Theme** (`src/styles/theme/`): Functions that resolve tokens to CSS variables or raw values, breakpoint mixins, typography mixin
3. **System** (`src/styles/system/`): The `om-sx` mixin — a compact shorthand API for layout (used in business code, **not** in component SCSS)

All three layers are exposed through the single `@use '@/styles/api' as *;` import.

---

## Quick Decision Table

| Figma concept | SCSS function |
|---------------|---------------|
| Background fill | `om-bg('key')` |
| Text color | `om-text('key')` |
| Icon color | `om-icon('key')` |
| Border color | `om-border('key')` |
| Padding/margin | `om-spacing(key)` or `om-component-padding(key)` |
| Gap between items | `om-gap(key)` |
| Section padding | `om-section-padding(key)` |
| Corner radius | `om-radius(key)` |
| Box shadow/elevation | `om-shadow(key)` |
| Component height | `om-component-height(key)` |
| Font styles | `@include om-typography(cat, size)` |
| Opacity/disabled | `om-opacity(key)` |
| Width/height % | `om-sizing(key)` |
| Responsive breakpoint | `@include om-down(bp)` |
| Multi-variant color scheme | Variant DSL: `om-variant-default` + `om-variant-classes` |
| Custom/new token scale | `om(scale, key)` — generic accessor for any registered scale |
