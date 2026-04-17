# Cell Component

**Date:** 2026-04-17

## Context

The goal is to add a public `Cell` component to `@1money/components-ui` based on the Figma design system node `37237:14008` (`Cell`). The design shows a single-line interactive row with four visual states: `Default`, `Hover`, `Active`, and `Disable`.

The existing library already contains internal table cell renderers, but it does not expose a reusable public `Cell` primitive for navigation-style or action-row usage. The requested component should match the Figma design exactly in visual structure and interaction model while still fitting the library's existing component, icon, SCSS, and export conventions.

## Discussion

Three directions were considered during design review:

| Approach | Description | Verdict |
|----------|-------------|---------|
| A. Exact-match action row | Semantic button, narrow API, one-row layout, explicit interaction states | Selected |
| B. Configurable action row | Same shell with extra slots and broader composition options | Rejected for v1 as unnecessary scope |
| C. Generic polymorphic surface | Render as `button`, `a`, or `div` | Rejected for v1 as over-engineered |

The selected direction is **Approach A**: build `Cell` as a semantic interactive row component with a narrow API and exact visual parity with the Figma design.

This preserves the design intent while keeping the component appropriately focused for a first release. Reuse is still supported through an `icon` prop and consumer-provided text content, but the component will not become a generic surface or slot-heavy layout primitive in v1.

## Approach

### Component Semantics

`Cell` should render as a native `<button type="button">`.

Reasons:

- The Figma source includes `hover`, `active`, and `disabled` states, which clearly indicates interactive behavior.
- The row includes a trailing disclosure arrow, reinforcing action-row semantics.
- Native button semantics provide the correct keyboard and accessibility behavior without custom event handling complexity.

### Public API

The v1 API should stay intentionally narrow:

```ts
interface CellProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  ref?: Ref<HTMLButtonElement>;
  prefixCls?: string;
  className?: string;
  icon?: IconName;
  active?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}
```

API decisions:

- `children` is the content API for the label text. No separate `label` prop is included in v1.
- `icon?: IconName` controls the leading icon.
- `active?: boolean` represents the persistent selected/current state shown in Figma. It is **not** a transient pressed-state abstraction.
- `disabled?: boolean` disables click interaction and switches the component to the disabled visual state.
- `prefixCls` and `className` follow library conventions.

### Icon Strategy

- The trailing icon should always use the existing `Icons` component with `name="arrowRight"`.
- The leading icon should use the existing `Icons` component with the consumer-supplied `icon` prop.
- Storybook examples should use `icon="security"` and text `Authenticator app` to mirror the Figma design.
- No new SVG assets should be added for this component in v1 because the required visual language already exists in the icon set.

## Architecture

### Render Structure

`Cell` should use a two-zone internal layout:

```tsx
<button type="button" className="...">
  <span className="...-content">
    {icon && <Icons name={icon} size={20} />}
    <span className="...-label">{children}</span>
  </span>
  <Icons name="arrowRight" size={20} className="...-arrow" />
</button>
```

Layout rules:

- Root is a horizontal flex container.
- Content area stretches to fill available width.
- Label remains single-line.
- Trailing arrow stays right-aligned and does not shrink.

### State Model

`Cell` has no internal open/selected state. It is a presentational interactive primitive with these state sources:

- `default`: `active === false` and `disabled === false`
- `hover`: CSS `:hover` when not disabled and not active
- `active`: explicit `active` prop
- `disabled`: explicit `disabled` prop

State precedence:

1. `disabled`
2. `active`
3. `hover`
4. default

## Visual Specification

### Layout and Sizing

The component should match the Figma row geometry:

- `min-height: 64px`
- `padding: 16px`
- internal gap: `8px`
- border radius: `12px`
- icon size: `20px`

Implementation should use the internal token system:

- height: `theme.spacing(scale, 1600)`
- padding: `theme.spacing(scale, 400)`
- gap: `theme.spacing(gap, 200)`
- radius: `theme.shape(300)`

The component itself should not hardcode the Figma width of `340px`. Instead:

- the component should fill the available horizontal space
- Storybook should wrap it in a `340px` container to demonstrate Figma parity

### Typography

The Figma node specifies a 16px medium-weight Inter title style. The closest existing library token is:

- `@include theme.typography(title, md)`

This should be used for the label text to preserve consistency with the design system typography map.

The label should:

- remain single-line
- truncate overflow with ellipsis if the container becomes narrow

### Color and State Mapping

The Figma variable extraction maps cleanly to the library semantic token system:

| State | Background | Text | Icon |
|------|------------|------|------|
| Default | `theme.palette(bg, 'default-secondary')` | `theme.palette(text, 'default')` | `theme.palette(icon, 'default')` |
| Hover | `theme.palette(bg, 'default-secondary-hover')` | `theme.palette(text, 'default')` | `theme.palette(icon, 'default')` |
| Active | `theme.palette(bg, 'brand-tertiary')` | `theme.palette(text, 'default')` | `theme.palette(icon, 'default')` |
| Disabled | `theme.palette(bg, 'default-secondary-hover')` | `theme.palette(text, 'disabled')` | `theme.palette(icon, 'disabled')` |

Additional state rules:

- disabled should not rely on custom opacity tricks
- disabled should use explicit disabled semantic colors
- no border, shadow, badge, subtitle, or extra status accent is part of v1

## Accessibility and Error Handling

### Accessibility

The component should inherit native button accessibility behavior:

- keyboard activation through Enter/Space
- `disabled` mapped to the native `disabled` attribute
- no custom role is needed

Decorative icons should not create duplicate spoken output. The label text should remain the accessible name source.

### Error Handling

The component has minimal runtime complexity. Expected graceful behaviors:

- when `icon` is omitted, the row still renders correctly with text and trailing arrow
- when `children` is empty, the component still renders without throwing, though Storybook and docs should demonstrate text usage
- when `disabled` is true, click interaction should not fire

No async behavior, portals, or controlled/uncontrolled value logic is required in v1.

## File Structure

The implementation should create the full component scaffold:

```text
src/components/Cell/
├── Cell.tsx
├── interface.ts
├── index.ts
├── Cell.stories.tsx
├── README.md
├── style/
│   ├── Cell.scss
│   └── index.ts
└── __test__/
    └── index.test.tsx
```

It should also update:

- `src/index.ts` for named export and type export
- `package.json` subpath exports if required by the current package export structure

## Storybook Plan

Storybook should include a focused set of stories:

| Story | Purpose |
|-------|---------|
| Default | Base visual state matching Figma |
| Active | Persistent selected state |
| Disabled | Disabled state and non-interactive behavior |
| AllStates | Side-by-side reference view for default, hover-style reference, active, and disabled |

Story content should use the Figma example:

- icon: `security`
- text: `Authenticator app`

`AllStates` should render inside a fixed `340px` container to match the Figma artboard width.

## Test Plan

At minimum, the test suite should include:

| Test | Purpose |
|------|---------|
| Snapshot render | Lock the base structure and classes |
| Disabled behavior | Verify `disabled` blocks interaction |
| Active state class | Verify active styling modifier is applied |

The test scope should stay minimal for v1. This component does not need complex behavior tests because its logic is intentionally shallow.

## Non-Goals

The following are explicitly out of scope for v1:

- polymorphic rendering as `a` or `div`
- multi-line descriptions or subtitles
- trailing custom actions or badges
- loading state
- custom end icon override
- navigation-group composition
- adding new SVG icon assets specifically for `Cell`

## Summary

`Cell` v1 should be a narrow, semantic, button-based action row component that matches the Figma design exactly in structure and state treatment. It should reuse the existing icon system, use SCSS semantic tokens throughout, expose only the minimum necessary props, and ship with a full component scaffold including Storybook and tests.
