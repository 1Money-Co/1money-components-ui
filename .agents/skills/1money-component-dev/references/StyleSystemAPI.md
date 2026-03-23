# Style System API Reference

Internal SCSS authoring reference for `@1money/components-ui` component development.

## Import

```scss
@use '@/styles/api' as theme;
@use '@/styles/recipes/variants' as variants;
```

Components use **namespaced** imports:
- `theme.*` for all token functions, semantic helpers, typography mixins, and responsive mixins
- `variants.*` for the Variant DSL helpers
- `theme.$prefix` for the BEM prefix (`om-react-ui`)

---

## Token Functions

### `theme.spacing($domain, $key)` — Spacing

Domain determines the spacing group. Available domains: `scale`, `gap`, `component-padding`, `section-padding`.

#### `theme.spacing(scale, $key)` — Raw Spacing Scale

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
.element { padding: theme.spacing(scale, 400); } // 16px
```

#### `theme.spacing(gap, $key)` — Gap Spacing

Allowed keys: `050`, `100`, `200`, `300`, `400`, `600`, `1600`

```scss
.stack { gap: theme.spacing(gap, 400); } // 16px
```

#### `theme.spacing(component-padding, $key)` — Component Internal Padding

Allowed keys: `050`, `100`, `200`, `300`, `400`, `600`, `800`

```scss
.button { padding: theme.spacing(component-padding, 400); }
```

#### `theme.spacing(section-padding, $key)` — Page Section Padding

Allowed keys: `800`, `1600`, `2400`, `4000`

```scss
.section { padding: theme.spacing(section-padding, 1600); }
```

### `theme.shape($key)` — Border Radius

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
.element { border-radius: theme.shape(300); } // 12px
.pill { border-radius: theme.shape('full'); } // 9999px
```

### `theme.shadows($key)` — Box Shadow

| Key | Value |
|-----|-------|
| `0` | none |
| `100` | `0 4px 8px rgba(65, 91, 130, 12%)` |
| `200` | `0 10px 22px rgba(0, 0, 0, 10%)` |

```scss
.element { box-shadow: theme.shadows(100); }
```

### `theme.sizing($domain, $key)` — Sizing

Domain determines the sizing group. Available domains: `scale`, `component-height`.

#### `theme.sizing(scale, $key)` — Percentage Sizing

| Key | Value |
|-----|-------|
| `25` | 25% |
| `33` | 33.333% |
| `50` | 50% |
| `66` | 66.667% |
| `75` | 75% |
| `100` | 100% |
| `auto` | auto |

#### `theme.sizing(component-height, $key)` — Component Heights

Standardized heights for interactive elements.

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
.button { height: theme.sizing(component-height, 'md'); } // 40px
.icon-circle { width: theme.sizing(component-height, 'sm'); height: theme.sizing(component-height, 'sm'); } // 32px
```

### `theme.opacity($key)` — Opacity

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
.disabled { opacity: theme.opacity('disabled'); } // 0.5
```

---

## Semantic Color Functions

### `theme.palette($domain, $token, $state?)` — All Color Domains

A single function handles all four color domains: `bg`, `text`, `icon`, `border`.

When called with three arguments, `$token` and `$state` are concatenated with a hyphen (e.g., `theme.palette(bg, 'brand', 'hover')` → resolves key `'brand-hover'`). When called with two arguments, `$token` is used as the key directly.

```scss
// Background colors
.card { background-color: theme.palette(bg, 'brand'); }
.card:hover { background-color: theme.palette(bg, 'brand-hover'); }
.card:hover { background-color: theme.palette(bg, 'brand', 'hover'); } // equivalent

// Text colors
.label { color: theme.palette(text, 'default'); }
.label-muted { color: theme.palette(text, 'default-tertiary'); }
.on-dark { color: theme.palette(text, 'on-neutral'); }

// Icon colors
.icon { color: theme.palette(icon, 'default'); }
.icon-brand { color: theme.palette(icon, 'brand'); }

// Border colors
.input { border-color: theme.palette(border, 'default'); }
.input:focus { border-color: theme.palette(border, 'brand'); }
.input.error { border-color: theme.palette(border, 'danger'); }
```

See `SemanticColors.md` for the complete key list for each domain.

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

### `@include theme.typography($category, $size, [$strong: false])`

Emits all CSS properties as `var()` references: `font-family`, `font-size`, `line-height`, `letter-spacing`, `font-weight`.

```scss
.body { @include theme.typography(body, md); }
// Compiles to:
//   font-size: var(--om-body-md-font-size);
//   font-family: var(--om-body-md-font-family);
//   line-height: var(--om-body-md-line-height);
//   letter-spacing: var(--om-body-md-letter-spacing);
//   font-weight: var(--om-body-md-font-weight);

.body-bold { @include theme.typography(body, md, $strong: true); }
// font-weight: var(--om-body-md-strong-font-weight);

.link { @include theme.typography(link, md); }
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

---

## Responsive Mixins

Mobile-first breakpoint helpers using `max-width` media queries.

### `@include theme.down($breakpoint)`

| Breakpoint | Max-width |
|------------|-----------|
| `lg` | 1279.98px |
| `md` | 1023.98px |
| `sm` | 767.98px |

```scss
.sidebar {
  width: 280px;
  @include theme.down(md) { width: 200px; }
  @include theme.down(sm) { display: none; }
}
```

### Other Responsive Mixins

```scss
@include theme.up($bp)              // min-width
@include theme.between($lo, $hi)    // min-width and max-width
@include theme.only($bp)            // exact range for one breakpoint
@include theme.respond($bp)         // alias for theme.down
```

---

## Variant DSL

Use the variant helpers when a component has multiple color/status modifiers that differ only by a set of token values. The DSL eliminates repetitive `&-{variant}` blocks by declaring a schema once and generating all modifier classes automatically.

**Import**: `@use '@/styles/recipes/variants' as variants;`

### Concepts

1. **Schema** — maps CSS custom property names to token keys inside each variant payload. Use `variants.om-variant-schema($component, $keys...)` to auto-generate this from the component name and key list.
2. **Variants map** — keyed by string variant names, each value is a token map matching the schema
3. **Mixins** — `variants.om-variant-default` sets the base, `variants.om-variant-classes` generates all modifier classes

### Basic Example

```scss
@use '@/styles/api' as theme;
@use '@/styles/recipes/variants' as variants;

$component: 'badge';
// Auto-generates: (--om-badge-text: text, --om-badge-bg: bg)
$badge-variant-schema: variants.om-variant-schema($component, text, bg);

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

.#{theme.$prefix}-#{$component} {
  // Set default variant values + validate all variants against schema
  @include variants.om-variant-default($badge-variants, 'info', $badge-variant-schema);

  color: var(--om-badge-text);
  background-color: var(--om-badge-bg);

  // Generate modifier classes, skipping 'info' (already set as default)
  @include variants.om-variant-classes($badge-variants, $badge-variant-schema, $default: 'info');
}
```

### Extending a Base Variant

Use `variants.om-variant-extend` when variants share a common base:

```scss
$base: (
  text: theme.palette(text, 'default'),
  bg: theme.palette(bg, 'default'),
  hover-bg: theme.palette(bg, 'default-hover'),
);

$variants: (
  'default': $base,
  'active': variants.om-variant-extend($base, (
    bg: theme.palette(bg, 'brand'),
    hover-bg: theme.palette(bg, 'brand-hover'),
  )),
);
```

### Available Helpers

| Helper | Description |
|--------|-------------|
| `variants.om-variant-schema($component, $keys...)` | Auto-generates a schema map from component name + token key list |
| `variants.om-variant($variants, $name)` | Returns a variant token map; errors on unknown names |
| `variants.om-variant-value($tokens, $key)` | Returns a token value; errors on missing keys |
| `variants.om-variant-extend($base, $overrides)` | Creates a new variant by merging overrides into a base |
| `@include variants.om-variant-apply($schema, $tokens)` | Emits CSS declarations for one variant payload |
| `@include variants.om-variant-default($variants, $name, $schema)` | Validates all variants against schema, then applies the default |
| `@include variants.om-variant-classes($variants, $schema, $default, $selector-prefix)` | Validates and generates modifier classes; `$default` skips the default variant |

### Compile-Time Safety

Both `variants.om-variant-default` and `variants.om-variant-classes` validate that every variant contains all token keys required by the schema. A missing key triggers a Sass `@error` at build time.

### Naming Conventions

- Schema variable: `$component-variant-schema`
- Variants map: `$component-variants`
- Individual variant (if extracted): `$component-{name}-variant`
- Always quote variant names: `'white'`, `'black'`, `'grey'` (prevents Sass color literal issues)

---

## Architecture

The style system has three layers:

1. **Tokens** (`src/styles/tokens/`): Raw primitives — colors, spacing multipliers, font sizes, scale maps
2. **Theme** (`src/styles/theme/`): Functions that resolve tokens to CSS variables or raw values, breakpoint mixins, typography mixin
3. **System** (`src/styles/system/`): The `om-sx` mixin — a compact shorthand API for layout (used in business code, **not** in component SCSS)

All three layers are exposed through the `@use '@/styles/api' as theme;` import (namespaced under `theme`).

The Variant DSL lives in `src/styles/recipes/` and is imported separately: `@use '@/styles/recipes/variants' as variants;`.

---

## Quick Decision Table

| Figma concept | SCSS function |
|---------------|---------------|
| Background fill | `theme.palette(bg, 'key')` |
| Text color | `theme.palette(text, 'key')` |
| Icon color | `theme.palette(icon, 'key')` |
| Border color | `theme.palette(border, 'key')` |
| Padding/margin | `theme.spacing(scale, key)` or `theme.spacing(component-padding, key)` |
| Gap between items | `theme.spacing(gap, key)` |
| Section padding | `theme.spacing(section-padding, key)` |
| Corner radius | `theme.shape(key)` |
| Box shadow/elevation | `theme.shadows(key)` |
| Component height | `theme.sizing(component-height, key)` |
| Font styles | `@include theme.typography(cat, size)` |
| Opacity/disabled | `theme.opacity(key)` |
| Width/height % | `theme.sizing(scale, key)` |
| Responsive breakpoint | `@include theme.down(bp)` |
| Multi-variant color scheme | Variant DSL: `variants.om-variant-default` + `variants.om-variant-classes` |
