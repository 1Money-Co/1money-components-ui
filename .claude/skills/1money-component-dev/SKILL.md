---
name: 1money-component-dev
description: Scaffold and implement new components for @1money/components-ui. Wraps PrimeReact, uses the internal SCSS style system, and follows all library conventions. Use when building components that go INTO the library.
metadata:
  short-description: Build new @1money/components-ui library components from Figma designs
  requires:
    - spec-write-plan
---

# 1money-component-dev

## Activation

**Act when**: Building a new component (or major variant) that will be added to `@1money/components-ui`.
**Goal**: Produce a complete, lint-clean, Storybook-ready component directory following every library convention.

## Resources

*Agent must utilize these references:*

- **Checklist**: `checklist.md`
- **Style System API**: `references/StyleSystemAPI.md`
- **Semantic Colors**: `references/SemanticColors.md`
- **Component Patterns**: `references/ComponentPatterns.md`
- **Hooks Guide**: `references/HooksGuide.md`
- **Figma Extraction**: `references/FigmaExtractionChecklist.md`
- **Planning Skill**: `spec-write-plan` (Plan mode only)

## Inputs

- **Figma URL** (recommended): Design source URL for the component.
- **Node ID** (optional): Specific Figma frame. If absent, auto-explore top-level frames.
- **Component Name** (required): PascalCase name for the component (e.g., `ChipBeta`, `ToggleGroup`).
- **Output Mode** (optional, default=Code): `Code` (implement files) or `Plan` (spec-write-plan document).

## Workflow

### Phase 1 — Confirm & Extract

1. **Confirm Output Mode** *(gate)*: If the user did not explicitly state `Plan` or `Code`, ask now. Default is `Code`.

2. **Confirm Component Name** *(gate)*: Validate the name is PascalCase. If the component wraps an existing PrimeReact component that already exists in the library, suggest appending `Beta` (e.g., `ButtonBeta`, `InputBeta`) to avoid conflicts.

3. **Extract Figma Design** (if URL provided): Follow `references/FigmaExtractionChecklist.md`.
   - Call `mcp__figma__get_design_context` to retrieve node structure.
   - Call `mcp__figma__get_screenshot` when layout or spacing is ambiguous.
   - Call `mcp__figma__get_variable_defs` to retrieve design tokens.
   - If no Node ID is provided, call `mcp__figma__get_metadata` to list top-level frames and present them to the user for selection.

### Phase 2 — Analyze & Map

4. **Identify PrimeReact Base**: Determine which `primereact/*` component to wrap. Check the [PrimeReact documentation](https://primereact.org/) for available components and their props. If no suitable PrimeReact base exists, build from scratch using native HTML elements.

5. **Identify Icons**: When the design includes icons, **always check the existing `Icons` component first** (`src/components/Icons/`):
   - Read `src/components/Icons/SVGs.tsx` to browse all available icon names and their visual descriptions.
   - Match Figma icon assets to existing `IconName` entries by comparing shape/purpose (e.g., a chevron-right in Figma → `chevronRight`, a trash icon → `remove`, a copy icon → `copy`).
   - Use `<Icons name="..." />` with appropriate `size` and `color` props — do not create inline SVGs or import external icon libraries.
   - If no matching icon exists, flag it to the user and propose either: (a) adding the new icon to `SVGs.tsx` following the existing pattern, or (b) using the closest available alternative.
   - Import icons as: `import { Icons } from '@/components/Icons';` and the type as `import type { IconName } from '@/components/Icons';`.

6. **Map Design Tokens**: Using `references/StyleSystemAPI.md` and `references/SemanticColors.md`, map every visual value from the Figma design to the internal style system:
   - Colors -> `om-bg()`, `om-text()`, `om-icon()`, `om-border()` (semantic — preferred for all new components). When a component has multiple color variants, use the Variant DSL with `om-variant-schema($component, $keys...)` to auto-generate the schema, then define a variants map. See `references/StyleSystemAPI.md` for the full Variant DSL reference and `src/styles/README.md` for semantic color token quick-reference tables.
   - Spacing -> `om-spacing()`, `om-gap()`, `om-component-padding()`, `om-section-padding()`
   - Typography -> `@include om-typography(category, size)` (emits `var()` references to `--om-{cat}-{size}-*` CSS custom properties)
   - Heights -> `om-component-height()`
   - Radius -> `om-radius()`
   - Shadows -> `om-shadow()` (keys: `0`, `100`, `200`)
   - Opacity -> `om-opacity()`
   - Custom/new scales -> `om(scale, key)` — generic accessor for any registered scale without a dedicated function
   - **No raw hex, px, or font-family values in SCSS** (except `!important` overrides on third-party styles)
   - **Do NOT use `om-color()`** — it has been removed and triggers a compile-time error. Always use semantic color functions instead.

7. **Identify Hooks**: Determine which library hooks the component needs — see `references/HooksGuide.md`:
   - Controlled/uncontrolled value → `useControlledState`
   - Event handlers passed to PrimeReact or memoized children → `useEventCallback` or `useMemoizedFn`
   - Latest value in imperative handles or async callbacks → `useLatest`
   - State set from async operations → `useSafeState`
   - Skip-initial-mount effects → `useUpdateEffect`
   - Import from `@1money/hooks` — never from `@1money/components-ui`.

8. **Define Props Interface**: Design the TypeScript interface following `references/ComponentPatterns.md`:
   - Extend PrimeReact props with `Omit<PrimeXProps, ...>` to remove conflicting props.
   - Add `prefixCls?: string` for class name customization.
   - Use union types for variant props (e.g., `color`, `size`, `variant`).
   - Add `ref` prop with correct element type.
   - If the component accepts an icon, type it as `IconName` (imported from `@/components/Icons`) rather than `string` or `ReactNode`.

9. **Identify Missing States**: Proactively identify states not shown in the design but required:
   - `disabled` — **must follow the Figma design exactly**. Extract disabled colors, opacity, and cursor styles from the Figma file. Do NOT invent or assume disabled styles (e.g., generic opacity or color dimming) — if the Figma design does not specify a disabled state, ask the user for guidance.
   - `loading` — spinner integration
   - `hover` / `focus` / `active` — interaction states
   - `error` / `warning` / `success` — validation states (if applicable)

### Phase 3 — Scaffold & Implement

10. **Create All Component Files**: Generate the complete directory following `references/ComponentPatterns.md` and `checklist.md`. The 8 files are:

   ```
   src/components/{Name}/
   ├── {Name}.tsx              # Main component
   ├── interface.ts            # TypeScript interfaces
   ├── index.ts                # Barrel export
   ├── {Name}.stories.tsx      # Storybook stories
   ├── README.md               # Component documentation
   ├── style/
   │   ├── {Name}.scss         # Component styles
   │   └── index.ts            # Style import
   └── __test__/
       └── index.test.tsx      # Snapshot test
   ```

### Phase 4 — Register Exports

11. **Update Library Barrel** (`src/index.ts`):
   - Add `import { {Name} } from './components/{Name}';` to the import block.
   - Add `export { {Name} } from './components/{Name}';` to the named export block.
   - Add `export type { {Name}Props } from './components/{Name}';` for the props type.
   - Add `{Name},` to the default export object.

### Phase 5 — Generate Plan (Plan mode only)

12. **Write Plan**: If output mode is `Plan`, invoke `spec-write-plan` to generate a comprehensive implementation plan:
    - Save to `docs/plans/YYYY-MM-DD-{name}-component.md`
    - Include one task per file to create
    - Include one task per state to implement
    - Include token mapping table as a reference section

### Phase 6 — Validate

13. **Lint**: Run `pnpm lint` and fix all errors.

14. **Test**: Run `pnpm test` and ensure snapshot tests pass.

15. **Storybook**: Verify the component renders correctly in Storybook (`pnpm dev`).

16. **Self-Review** *(mandatory)*: Walk through `checklist.md` item by item. For each section, verify the implementation against the corresponding reference document:
    - SCSS values against `references/StyleSystemAPI.md` and `references/SemanticColors.md`
    - File structure and code patterns against `references/ComponentPatterns.md`
    - Token mapping completeness against `references/FigmaExtractionChecklist.md` (if Figma was used)
    - Fix all violations before presenting output to the user.

## Constraints

### SCSS Rules

- **Import**: Always use `@use '@/styles/api' as *;` — nothing else.
- **Architecture**: The API forwards three layers — tokens (raw primitives), theme (CSS var resolvers, typography mixin, breakpoint mixins), and system (`om-sx` — for business code only, not component SCSS).
- **Component variable**: Define `$component: '{kebab-case-name}';` at the top.
- **Root selector**: `.#{$prefix}-#{$component}` where `$prefix` comes from the api module (`om-react-ui`).
- **Color variants**: Use the Variant DSL (`om-variant-schema` + `om-variant-default` + `om-variant-classes` with `$default:` param) — see `references/StyleSystemAPI.md` Variant DSL section.
- **Size variants**: Use `&-{size}` nesting (e.g., `&-medium`, `&-small`).
- **Disabled state**: Target `.p-disabled` class (PrimeReact convention). Styles must match the Figma design — do not invent disabled styles. Extract exact colors, opacity, and cursor values from the design file.
- **No raw values**: Every color, spacing, radius, shadow, font, and height must use a token function.
- **No `om-color()`**: This function has been removed and triggers a compile-time error. Use semantic functions (`om-bg`, `om-text`, `om-icon`, `om-border`) for all colors.

### TypeScript Rules

- **Interface over type**: Use `interface` for all object structures.
- **No `any`**: Define types precisely.
- **No `enum`**: Use `as const` arrays + derived union types.
- **Props naming**: `{Name}Props` (e.g., `ButtonBetaProps`).
- **Component export**: Named export `export const {Name}` + `export default memo({Name})`.

### Hooks Rules

- **Use library hooks**: For controlled/uncontrolled state, stable callbacks, latest refs, and other common patterns — always use the library's custom hooks. See `references/HooksGuide.md` for the full list.
- **Import path**: `import { useXxx } from '@1money/hooks'` — never from `@1money/components-ui` or external packages (e.g., `ahooks`).
- **Controlled/uncontrolled**: Components with `value`/`defaultValue` must use `useControlledState`.
- **Event handlers**: Use `useEventCallback` for simple handlers (onChange, onClick) or `useMemoizedFn` for render callbacks and complex handlers.
- **No `useCallback` with stale closures**: Prefer `useEventCallback`/`useMemoizedFn` over manual `useCallback` with long dependency arrays.
- **Async safety**: Use `useSafeState` instead of `useState` when state may be set after unmount.

### Component Rules

- **Wrap default export in `memo()`**: Every component's default export must be memoized.
- **PrimeReact imports**: Import directly from `primereact/{component}` — never from `@1money/components-ui`.
- **classnames utility**: Import `classnames` and `joinCls` from `@/utils/classnames`. The default export is pre-configured with `om-react-ui` prefix.
- **`prefixCls` prop**: Every component must accept `prefixCls` with a sensible default.
- **Spread remaining props**: Always `{...rest}` onto the PrimeReact base component.

### Story Rules

- **File**: `{Name}.stories.tsx` in the component directory.
- **Meta title**: `Components/{Name}`.
- **Tags**: Include `['autodocs']` on meta.
- **Import style**: `import './style';` to load SCSS in Storybook.
- **Variant constants**: Define as `as const` arrays, not inline.
- **AllVariants story**: Matrix of all size x color/variant combinations with `tags: ['!autodocs', 'dev']`.

### Test Rules

- **Console suppression**: Suppress `Could not parse CSS stylesheet` and `findDOMNode is deprecated` errors.
- **Lottie mock**: Always mock `lottie-web` if any component in the dependency chain uses it.
- **Snapshot test**: At minimum, render the component and call `toMatchSnapshot()`.

### Skill Rules

- **Do NOT invoke** the `1money-components-ui` or `figma-1money-codegen` skills during this workflow. This skill is self-contained and already includes all necessary Figma extraction steps and component implementation patterns.

### Icon Rules

- **Reuse first**: Always check existing `Icons` component (`src/components/Icons/SVGs.tsx`) before creating inline SVGs or importing external icon libraries.
- **Import**: `import { Icons } from '@/components/Icons';` and `import type { IconName } from '@/components/Icons';`.
- **Usage**: `<Icons name="iconName" size={24} />` — never embed raw `<svg>` elements for icons that already exist.
- **Icon props**: When a component accepts an icon, type it as `IconName` (not `string` or `ReactNode`). Use `<Icons name={iconProp} />` to render.
- **Missing icons**: If a needed icon doesn't exist, flag it to the user before adding to `SVGs.tsx`.
- **Color**: Use the `color` prop on `<Icons>` and bind it to a semantic token via CSS `var()` or pass a style-system value.

## Anti-Patterns

- Importing from `@1money/components-ui` inside the library itself
- Using inline SVGs or external icon libraries (e.g., `react-icons`, `lucide-react`) when the icon already exists in the `Icons` component
- Using `Foundation` tokens or consumer-facing SCSS imports
- Using `om-sx` mixin in component SCSS (that's for business code layout, not component internals)
- Using removed `om-color()` (compile-time error) — always use semantic functions (`om-bg`, `om-text`, `om-icon`, `om-border`)
- Writing manual `&-{variant}` blocks for color variants instead of using the Variant DSL (`om-variant-schema` + `om-variant-default` + `om-variant-classes`)
- Hand-writing variant schema maps instead of using `om-variant-schema($component, $keys...)`
- Hardcoding colors, spacing, or fonts instead of using token functions
- Using old shadow keys (`1`, `2`, `3`) instead of the current scale (`0`, `100`, `200`)
- Creating `.css` files instead of `.scss`
- Skipping the barrel export update in `src/index.ts`
- Forgetting `memo()` on the default export
- Using `useState` + manual `useCallback` when `useControlledState` + `useEventCallback` would suffice
- Importing hooks from `@1money/components-ui` or external packages (`ahooks`, `react-use`) instead of `@1money/hooks`
- Using raw `useState` for async-set state (use `useSafeState` to prevent unmount leaks)
- Writing `useCallback` with long dependency arrays instead of `useEventCallback` / `useMemoizedFn`
- Invoking `1money-components-ui` or `figma-1money-codegen` skills (this skill handles everything)
