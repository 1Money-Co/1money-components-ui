# Semantic Colors Reference

Complete key listing for all 4 semantic color functions. Source: `src/styles/tokens/color/_semantic-color.scss`.

All functions accept `($group, $variant: null)`. Single-key calls like `om-bg('brand-hover')` and two-param calls like `om-bg('brand', 'hover')` are equivalent — the group and variant are concatenated with a hyphen internally.

---

## `om-bg($group, $variant: null)` — Background Colors (40 keys)

| Key | Primitive | Group |
|-----|-----------|-------|
| `default` | white | Base |
| `default-hover` | grey-100 | Base |
| `default-secondary` | grey-50 | Base |
| `default-secondary-hover` | grey-200 | Base |
| `default-tertiary` | grey-200 | Base |
| `default-tertiary-hover` | grey-300 | Base |
| `disabled` | grey-100 | Disabled |
| `disabled-brand` | blue-300 | Disabled |
| `disabled-black` | black @ 10% | Disabled |
| `brand` | blue-700 | Brand |
| `brand-hover` | blue-800 | Brand |
| `brand-secondary` | blue-100 | Brand |
| `brand-secondary-hover` | blue-200 | Brand |
| `brand-tertiary` | blue-50 | Brand |
| `brand-tertiary-hover` | blue-100 | Brand |
| `neutral` | grey-900 | Neutral |
| `neutral-hover` | grey-800 | Neutral |
| `neutral-secondary` | grey-200 | Neutral |
| `neutral-secondary-hover` | grey-300 | Neutral |
| `neutral-tertiary` | grey-100 | Neutral |
| `neutral-tertiary-hover` | grey-200 | Neutral |
| `positive` | green-700 | Positive |
| `positive-hover` | green-800 | Positive |
| `positive-secondary` | green-700 @ 10% | Positive |
| `positive-secondary-hover` | green-700 @ 20% | Positive |
| `positive-tertiary` | green-700 @ 5% | Positive |
| `positive-tertiary-hover` | green-700 @ 10% | Positive |
| `warning` | yellow-500 | Warning |
| `warning-hover` | yellow-400 | Warning |
| `warning-secondary` | yellow-500 @ 10% | Warning |
| `warning-secondary-hover` | yellow-500 @ 20% | Warning |
| `warning-tertiary` | yellow-500 @ 5% | Warning |
| `warning-tertiary-hover` | yellow-500 @ 10% | Warning |
| `danger` | red-600 | Danger |
| `danger-hover` | red-700 | Danger |
| `danger-secondary` | red-600 @ 10% | Danger |
| `danger-secondary-hover` | red-600 @ 20% | Danger |
| `danger-tertiary` | red-600 @ 5% | Danger |
| `danger-tertiary-hover` | red-600 @ 10% | Danger |

---

## `om-text($group, $variant: null)` — Text Colors (36 keys)

| Key | Primitive | Group |
|-----|-----------|-------|
| `default` | grey-900 | Base |
| `default-secondary` | grey-800 | Base |
| `default-tertiary` | grey-700 | Base |
| `disabled` | grey-400 | Disabled |
| `disabled-black` | grey-400 | Disabled |
| `disabled-white` | grey-50 | Disabled |
| `brand` | blue-700 | Brand |
| `brand-secondary` | blue-300 | Brand |
| `brand-tertiary` | blue-200 | Brand |
| `on-brand` | blue-100 | Brand (on) |
| `on-brand-secondary` | blue-800 | Brand (on) |
| `on-brand-tertiary` | blue-900 | Brand (on) |
| `neutral` | grey-800 | Neutral |
| `neutral-secondary` | grey-500 | Neutral |
| `neutral-tertiary` | grey-400 | Neutral |
| `on-neutral` | white | Neutral (on) |
| `on-neutral-secondary` | grey-800 | Neutral (on) |
| `on-neutral-tertiary` | grey-700 | Neutral (on) |
| `positive` | green-700 | Positive |
| `positive-secondary` | green-700 @ 20% | Positive |
| `positive-tertiary` | green-700 @ 10% | Positive |
| `on-positive` | green-700 @ 5% | Positive (on) |
| `on-positive-secondary` | green-800 | Positive (on) |
| `on-positive-tertiary` | green-900 | Positive (on) |
| `warning` | yellow-700 | Warning |
| `warning-secondary` | yellow-500 @ 20% | Warning |
| `warning-tertiary` | yellow-500 @ 10% | Warning |
| `on-warning` | yellow-500 @ 5% | Warning (on) |
| `on-warning-secondary` | yellow-300 | Warning (on) |
| `on-warning-tertiary` | yellow-700 | Warning (on) |
| `danger` | red-600 | Danger |
| `danger-secondary` | red-600 @ 20% | Danger |
| `danger-tertiary` | red-600 @ 10% | Danger |
| `on-danger` | red-600 @ 5% | Danger (on) |
| `on-danger-secondary` | red-700 | Danger (on) |
| `on-danger-tertiary` | red-800 | Danger (on) |

---

## `om-icon($group, $variant: null)` — Icon Colors (36 keys)

| Key | Primitive | Group |
|-----|-----------|-------|
| `default` | grey-900 | Base |
| `default-secondary` | grey-800 | Base |
| `default-tertiary` | grey-700 | Base |
| `disabled` | grey-300 | Disabled |
| `on-disabled` | grey-400 | Disabled |
| `brand` | blue-700 | Brand |
| `brand-secondary` | blue-300 | Brand |
| `brand-tertiary` | blue-200 | Brand |
| `on-brand` | blue-100 | Brand (on) |
| `on-brand-secondary` | blue-800 | Brand (on) |
| `on-brand-tertiary` | blue-900 | Brand (on) |
| `neutral` | grey-800 | Neutral |
| `neutral-secondary` | grey-500 | Neutral |
| `neutral-tertiary` | grey-400 | Neutral |
| `on-neutral` | white | Neutral (on) |
| `on-neutral-secondary` | grey-800 | Neutral (on) |
| `on-neutral-tertiary` | grey-700 | Neutral (on) |
| `positive` | green-700 | Positive |
| `positive-secondary` | green-700 @ 20% | Positive |
| `positive-tertiary` | green-700 @ 10% | Positive |
| `on-positive` | green-700 @ 5% | Positive (on) |
| `on-positive-secondary` | green-800 | Positive (on) |
| `on-positive-tertiary` | green-900 | Positive (on) |
| `warning` | yellow-700 | Warning |
| `warning-secondary` | yellow-500 | Warning |
| `warning-tertiary` | yellow-500 @ 20% | Warning |
| `on-warning` | yellow-500 @ 10% | Warning (on) |
| `on-warning-secondary` | yellow-300 | Warning (on) |
| `on-warning-tertiary` | yellow-700 | Warning (on) |
| `danger` | red-600 | Danger |
| `danger-secondary` | red-600 @ 20% | Danger |
| `danger-tertiary` | red-600 @ 10% | Danger |
| `on-danger` | red-600 @ 5% | Danger (on) |
| `on-danger-secondary` | red-700 | Danger (on) |
| `on-danger-tertiary` | red-800 | Danger (on) |

---

## `om-border($group, $variant: null)` — Semantic Border Colors (19 keys)

| Key | Primitive | Group |
|-----|-----------|-------|
| `default` | grey-300 | Base |
| `default-secondary` | grey-500 | Base |
| `default-tertiary` | grey-800 | Base |
| `disabled` | grey-200 | Disabled |
| `brand` | blue-700 | Brand |
| `brand-secondary` | blue-300 | Brand |
| `brand-tertiary` | blue-100 | Brand |
| `neutral` | grey-200 | Neutral |
| `neutral-secondary` | grey-100 | Neutral |
| `neutral-tertiary` | grey-50 | Neutral |
| `positive` | green-700 | Positive |
| `positive-secondary` | green-700 @ 20% | Positive |
| `positive-tertiary` | green-700 @ 10% | Positive |
| `warning` | yellow-700 | Warning |
| `warning-secondary` | yellow-500 | Warning |
| `warning-tertiary` | yellow-500 @ 10% | Warning |
| `danger` | red-600 | Danger |
| `danger-secondary` | red-600 @ 10% | Danger |
| `danger-tertiary` | red-600 @ 5% | Danger |

---

## Quick-Reference Tables

For variant-specific token selection guidance (suffix rules, common component patterns, state pairing rules), see **`src/styles/README.md` → "Semantic Color Token Reference"** section. It provides lookup tables extracted from ButtonBeta and NotificationBeta real-world usage.

---

## Common Patterns

### Button-like components

```scss
// Primary variant
color: om-text('on-neutral');
background-color: om-bg('brand');
&:hover:not(.p-disabled) { background-color: om-bg('brand-hover'); }
&.p-disabled { color: om-text('disabled-white'); background-color: om-bg('disabled-brand'); }

// Secondary variant
color: om-text('brand');
background-color: om-bg('brand-secondary');
&:hover:not(.p-disabled) { background-color: om-bg('brand-secondary-hover'); }

// Danger variant
color: om-text('danger');
background-color: om-bg('danger-secondary');
&:hover:not(.p-disabled) { background-color: om-bg('danger-secondary-hover'); }
```

### Input-like components

```scss
border-color: om-border('default');
&:focus { border-color: om-border('brand'); }
&.error { border-color: om-border('danger'); }
&.p-disabled { border-color: om-border('disabled'); }
```

### Disabled states

```scss
&.p-disabled {
  cursor: not-allowed;
  opacity: om-opacity(disabled); // if using opacity approach
  // OR use specific disabled color tokens:
  color: om-text('disabled');
  background-color: om-bg('disabled');
}
```
