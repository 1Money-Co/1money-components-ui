# Figma Extraction Checklist

Checklist for extracting design data from Figma when building new `@1money/components-ui` library components. Adapted for library-internal development where Figma tokens must map to the internal style system (not consumer-facing Foundation tokens).

---

## Pre-flight

- [ ] Figma URL is a design or node link (not a prototype or FigJam board)
- [ ] Node ID is known, or top-level frames have been listed and the user has selected one
- [ ] Component name confirmed (PascalCase)

## Extraction Steps

### Step 1 — Get Design Context

```
mcp__figma__get_design_context(nodeId, fileKey)
```

- [ ] Call returned valid data (code + screenshot)
- [ ] If MCP returned empty or errors, retried once before reporting failure
- [ ] Noted the reference code structure (React+Tailwind hints) for mapping guidance

### Step 2 — Get Screenshot

```
mcp__figma__get_screenshot(nodeId, fileKey)
```

- [ ] Called for any frame where layout, spacing, or alignment is ambiguous
- [ ] Screenshot reviewed for: padding, gap, border-radius, shadow, alignment
- [ ] Visual hierarchy and nesting structure understood

### Step 3 — Get Variable Definitions

```
mcp__figma__get_variable_defs(nodeId, fileKey)
```

- [ ] Design tokens retrieved (colors, spacing, radii, typography)
- [ ] Figma variable names noted for mapping to internal style system

### Step 4 — Get Metadata (if no Node ID)

```
mcp__figma__get_metadata(nodeId, fileKey)
```

- [ ] Top-level frames listed
- [ ] User selected the target frame
- [ ] Re-run Steps 1-3 with the selected Node ID

## Token Mapping Phase

Map every Figma design value to the internal style system. Consult `StyleSystemAPI.md` and `SemanticColors.md`.

### Colors

- [ ] Background fills mapped to `theme.palette(bg, ...)` keys
- [ ] Text colors mapped to `theme.palette(text, ...)` keys
- [ ] Icon colors mapped to `theme.palette(icon, ...)` keys
- [ ] Border colors mapped to `theme.palette(border, ...)` keys
- [ ] No raw hex values remain unmapped

### Spacing

- [ ] Padding values mapped to `theme.spacing(component-padding, key)` or `theme.spacing(scale, key)`
- [ ] Gap values mapped to `theme.spacing(gap, key)`
- [ ] Margin values mapped to `theme.spacing(scale, key)`
- [ ] No raw pixel values for spacing remain unmapped

### Typography

- [ ] Font family, size, weight, line-height identified per text layer
- [ ] Mapped to `@include theme.typography(category, size)` — find the closest match from:
  - `display`: xl/lg/md/sm/xs (Aeonik)
  - `headline`: lg/md/sm/xs (Aeonik)
  - `title`: lg/md/sm (Inter, strong=700)
  - `body`: lg/md/sm (Inter, strong=500)
  - `link`: md/sm (Inter)
  - `label`: xl/lg/md/sm/xs (Inter, strong=600-700)
- [ ] Any `$strong: true` variants identified

### Visual Properties

- [ ] Border-radius mapped to `theme.shape(key)` keys (0/100/200/300/400/600/full)
- [ ] Box-shadow mapped to `theme.shadows(key)` keys (0/100/200)
- [ ] Opacity mapped to `theme.opacity(key)` keys
- [ ] Component heights mapped to `theme.sizing(component-height, key)` keys (xs/sm/md/lg/xl/2xl/3xl)

## Variant Identification

- [ ] All visual variants listed (e.g., color variants: primary, secondary, danger, etc.)
- [ ] All size variants listed (e.g., large, medium, small)
- [ ] Variant naming aligned with existing library conventions (check Button for reference)
- [ ] Each variant's token mapping documented

## Slot Identification

- [ ] Content slots identified (e.g., `children`, `label`, `description`)
- [ ] Icon slots identified (e.g., `iconStart`, `iconEnd`, `icon`)
- [ ] Custom render slots identified (e.g., `header`, `footer`, `prefix`, `suffix`)
- [ ] Each slot typed as `ReactNode` in the interface

## State Coverage Assessment

### Required States (implement even if not in Figma)

- [ ] **Default**: Normal resting state
- [ ] **Hover**: `:hover:not(.p-disabled)` interaction
- [ ] **Focus**: `:focus-visible` interaction (if applicable)
- [ ] **Active**: `:active` interaction (if applicable)
- [ ] **Disabled**: `.p-disabled` class with `cursor: not-allowed` and muted colors
- [ ] **Loading**: Spinner integration (if applicable)

### Conditional States (implement if component type requires)

- [ ] **Error/Danger**: Validation error state with danger colors
- [ ] **Warning**: Warning state with warning colors
- [ ] **Success/Positive**: Success state with positive colors
- [ ] **Selected/Active**: Toggle or selection state
- [ ] **Empty**: Empty/placeholder state

## Unmapped Items

- [ ] All Figma nodes that could not be mapped are listed explicitly
- [ ] Blocking ambiguities escalated to the user before implementation
- [ ] Asset placeholders documented for images/icons without a component match

## Summary Table Template

Use this table format to document the mapping:

```markdown
| Figma Element | Figma Value | Style System Function | Key |
|---------------|-------------|----------------------|-----|
| Background | #1D4ED8 | `theme.palette(bg, ...)` | `brand` |
| Text | #FFFFFF | `theme.palette(text, ...)` | `on-neutral` |
| Padding | 16px | `theme.spacing(component-padding, ...)` | `400` |
| Border radius | 12px | `theme.shape(...)` | `300` |
| Height | 52px | `theme.sizing(component-height, ...)` | `2xl` |
| Typography | Inter 14/500 | `theme.typography(...)` | `label, md` |
```
