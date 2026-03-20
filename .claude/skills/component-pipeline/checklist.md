# Component Pipeline Polish Checklist

Walk through each item after `1money-component-dev` completes. Read the generated file, compare against the reference, fix violations inline.

## classnames Utility

Reference: `src/components/Button/Button.tsx`

- [ ] Imports `classnames` (default export) from `@/utils/classnames`
- [ ] Imports `joinCls` (named export) from `@/utils/classnames`
- [ ] Creates `classes` via `const classes = classnames(prefixCls)`
- [ ] Root element className uses `classes(void 0, joinCls(classes(variant), classes(size), className))`
- [ ] Variant modifier classes use `classes('variant-name')`
- [ ] Sub-element classes use `classes('sub-element-name')`

## Variant DSL (SCSS)

Reference: `src/components/Button/style/Button.scss`

- [ ] Schema generated via `om-variant-schema($component, $key1, $key2, ...)` — not hand-written
- [ ] Schema variable named `${component}-variant-schema` (e.g., `$button-beta-variant-schema`)
- [ ] Variants map variable named `${component}-variants` (e.g., `$button-beta-variants`)
- [ ] All variant names are quoted strings (e.g., `'primary'`, `'white'`)
- [ ] `om-variant-default` called on root selector with default variant name and schema
- [ ] `om-variant-classes` called with `$default:` param to skip the default variant
- [ ] Base styles consume variant values via `var(--om-{component}-{key})` — not direct token calls

## Size Variants (SCSS)

Reference: `src/components/Button/style/Button.scss`

- [ ] Size variants use `&-{size}` nesting (e.g., `&-medium`, `&-small`)
- [ ] Size variants are separate from color Variant DSL
- [ ] Padding uses `om-component-padding()` token function
- [ ] Border radius uses `om-radius()` token function
- [ ] Typography uses `@include om-typography(label, {size})`

## Disabled & Hover States (SCSS)

Reference: `src/components/Checkbox/style/Checkbox.scss`, `src/components/Button/style/Button.scss`

- [ ] Disabled state targets `.p-disabled` class (PrimeReact convention)
- [ ] Disabled styles match Figma design exactly — no invented opacity or color dimming
- [ ] Hover states use `&:hover:not(.p-disabled)` guard

## Hooks

Reference: `src/components/Checkbox/Checkbox.tsx`

- [ ] Controlled/uncontrolled components use `useControlledState` from `@1money/hooks`
- [ ] Event handlers use `useEventCallback` or `useMemoizedFn` from `@1money/hooks`
- [ ] No `useCallback` with long dependency arrays
- [ ] All hooks imported from `@1money/hooks` — not from `@1money/components-ui` or external packages

## Component Structure

Reference: All existing components

- [ ] Default export wrapped in `memo()`: `export default memo({Name})`
- [ ] Named export also available: `export const {Name}: FC<...> = ...`
- [ ] `prefixCls` prop has default matching kebab-case component name
- [ ] Remaining PrimeReact props spread via `{...rest}`
- [ ] Constants extracted — no magic strings

## Stories

Reference: `src/components/Button/Button.stories.tsx`

- [ ] Style imported via `import './style';` (not full path)
- [ ] Variant constants defined as `as const` arrays outside the story (e.g., `const COLORS = [...] as const`)
- [ ] `AllVariants` story has `tags: ['!autodocs', 'dev']`
- [ ] `AllVariants` shows matrix of all size x variant combinations
- [ ] Meta has `tags: ['autodocs']`
- [ ] Mock handlers use `fn()` from `@storybook/test`

## Tests

Reference: `src/components/Spinner/__test__/index.test.tsx`

- [ ] Imports `jsdom-global/register` as first import
- [ ] Console error suppression for `Could not parse CSS stylesheet` and `findDOMNode is deprecated`
- [ ] Mocks `lottie-web` if component dependency chain includes it
- [ ] Has `describe('{Name}')` with at least `it('renders correctly')` + `toMatchSnapshot()`

## SCSS Foundation

Reference: All component SCSS files

- [ ] First line: `@use '@/styles/api' as *;`
- [ ] `$component: '{kebab-name}';` defined at top
- [ ] Root selector: `.#{$prefix}-#{$component}`
- [ ] Zero raw hex values
- [ ] Zero raw pixel values for design tokens (spacing, radius, heights)
- [ ] Zero raw font-family declarations
- [ ] No `om-color()` usage (removed, compile-time error)
- [ ] No `om-sx` usage (business code only, not component SCSS)

## Icons

Reference: `src/components/Tag/Tag.tsx`

- [ ] All icons use `<Icons name="..." />` from `@/components/Icons`
- [ ] Icon props typed as `IconName` from `@/components/Icons` — not `string` or `ReactNode`
- [ ] No inline SVGs or external icon libraries (exception: custom icons specific to component like Checkbox check/minus)

## Barrel Exports

Reference: `src/index.ts` (read actual file first)

- [ ] Import statement added matching existing format in `src/index.ts`
- [ ] Export pattern matches actual file structure — only imports, no exports (exports defined in component index.ts)
- [ ] `package.json` exports entry exists for tree-shakeable import

## Anti-Pattern Scan

Scan all generated files for these violations:

- [ ] No `om-sx` in component SCSS
- [ ] No `om-color()` anywhere
- [ ] No raw `useState` where `useControlledState` or `useSafeState` should be used
- [ ] No hooks imported from `@1money/components-ui` (use `@1money/hooks`)
- [ ] No inline SVGs for icons that exist in `Icons` component (except custom component-specific icons)
- [ ] No `enum` — only union types + `as const`
- [ ] No `type` for object structures — only `interface`
- [ ] No imports from `@1money/components-ui` inside the library
