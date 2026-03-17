# Component Development Checklist

Use this checklist to validate every new `@1money/components-ui` component. Walk through each section before considering the component complete.

## Pre-Implementation

- [ ] Component name is PascalCase
- [ ] PrimeReact base component identified (or confirmed "from scratch")
- [ ] Figma design extracted (if URL provided) — see `references/FigmaExtractionChecklist.md`
- [ ] All Figma tokens mapped to style system functions — see `references/StyleSystemAPI.md`
- [ ] All icons matched to existing `Icons` component names (check `src/components/Icons/SVGs.tsx` first)
- [ ] Missing icons flagged to user (if any icon in the design has no match in `Icons`)
- [ ] Props interface designed with variant union types
- [ ] All required states identified (disabled, loading, hover, focus, error, etc.)
- [ ] Output mode confirmed: `Code` or `Plan`

## File Structure

- [ ] `src/components/{Name}/{Name}.tsx` exists
- [ ] `src/components/{Name}/interface.ts` exists
- [ ] `src/components/{Name}/index.ts` exists
- [ ] `src/components/{Name}/{Name}.stories.tsx` exists
- [ ] `src/components/{Name}/README.md` exists
- [ ] `src/components/{Name}/style/{Name}.scss` exists
- [ ] `src/components/{Name}/style/index.ts` exists
- [ ] `src/components/{Name}/__test__/index.test.tsx` exists

## interface.ts

- [ ] Uses `interface` (not `type`) for props definition
- [ ] Named `{Name}Props`
- [ ] Extends PrimeReact props via `Omit<PrimeXProps, ...>` (if wrapping PrimeReact)
- [ ] Includes `prefixCls?: string`
- [ ] Includes `ref?: RefObject<HTMLElement | null>` with correct element type
- [ ] Variant props use union types (e.g., `'primary' | 'secondary'`)
- [ ] No `any` types
- [ ] No `enum` — uses `as const` arrays + derived union types for constants
- [ ] All props documented with JSDoc comments for non-obvious fields

## {Name}.tsx

- [ ] Imports `memo` from `react`
- [ ] Imports PrimeReact base from `primereact/{component}` (not from `@1money/components-ui`)
- [ ] Imports `classnames` (default) and `joinCls` from `@/utils/classnames`
- [ ] Imports type `{Name}Props` from `./interface`
- [ ] Component is typed as `FC<PropsWithChildren<{Name}Props>>` (or without `PropsWithChildren` if no children)
- [ ] Destructures props with defaults: `prefixCls = '{kebab-name}'`, variant defaults
- [ ] Creates `classes` via `classnames(prefixCls)`
- [ ] Root element uses `classes(void 0, joinCls(classes(variant), classes(size), className))`
- [ ] Spreads `{...rest}` onto PrimeReact base component
- [ ] Named export: `export const {Name}: FC<...> = props => { ... }`
- [ ] Default export: `export default memo({Name})`
- [ ] Icons use `<Icons name="..." />` from `@/components/Icons` (no inline SVGs or external icon libs)
- [ ] Icon props typed as `IconName` (from `@/components/Icons`) — not `string` or `ReactNode`
- [ ] No direct DOM manipulation
- [ ] Constants extracted (no magic strings)

## Hooks Usage — see `references/HooksGuide.md`

- [ ] Controlled/uncontrolled components use `useControlledState` from `@1money/hooks`
- [ ] Event handlers use `useEventCallback` or `useMemoizedFn` (not manual `useCallback` with long deps)
- [ ] Async state updates use `useSafeState` (not raw `useState`)
- [ ] All hooks imported from `@1money/hooks` (not from `@1money/components-ui` or external packages like `ahooks`)
- [ ] No `useCallback` with stale closures — `useEventCallback` / `useMemoizedFn` preferred
- [ ] `useLatest` used when accessing current state in imperative handles or async callbacks
- [ ] `useUpdateEffect` used when effects should skip initial mount

## SCSS (`style/{Name}.scss`)

- [ ] First line: `@use '@/styles/api' as *;`
- [ ] `$component: '{kebab-name}';` defined
- [ ] Root selector: `.#{$prefix}-#{$component}`
- [ ] All colors use `om-bg()`, `om-text()`, `om-icon()`, `om-border()` (or `om()` for custom scales)
- [ ] All spacing uses `om-spacing()`, `om-gap()`, `om-component-padding()`, or `om-section-padding()`
- [ ] All border-radius uses `om-radius()`
- [ ] All box-shadow uses `om-shadow()` (keys: 0/100/200)
- [ ] All heights use `om-component-height()`
- [ ] All opacity uses `om-opacity()`
- [ ] Typography uses `@include om-typography(category, size)` (emits `var(--om-{cat}-{size}-*)` references)
- [ ] Individual typography values use accessor functions (`om-font-size()`, `om-line-height()`, etc.) which return `var()` references
- [ ] No raw hex values (e.g., `#073387`)
- [ ] No raw pixel values for design tokens (e.g., `16px` for spacing)
- [ ] No raw font-family declarations
- [ ] No use of removed `om-color()` (compile-time error) — use semantic functions (`om-bg`, `om-text`, `om-icon`, `om-border`) instead
- [ ] Color variants use the Variant DSL (`om-variant-schema` + `om-variant-default` + `om-variant-classes`)
- [ ] Variant schema generated via `om-variant-schema($component, $keys...)` (not hand-written)
- [ ] Variant schema variable named `$component-variant-schema`
- [ ] Variants map variable named `$component-variants`
- [ ] All variant names are quoted strings (e.g., `'primary'`, `'white'`)
- [ ] `om-variant-default` called with default variant name
- [ ] `om-variant-classes` called with `$default:` param to skip the default variant
- [ ] Base styles consume variant values via `var(--om-{component}-{key})`
- [ ] Size variants use `&-{size}` nesting (not the Variant DSL)
- [ ] Disabled state targets `.p-disabled` (PrimeReact convention)
- [ ] Hover states use `&:hover:not(.p-disabled)`
- [ ] Responsive styles use `@include om-down()` (if needed)

## style/index.ts

- [ ] Single line: `import './{Name}.scss';`

## index.ts

- [ ] Imports default export: `import {Name} from './{Name}';`
- [ ] Re-exports named: `export { {Name} } from './{Name}';`
- [ ] Re-exports default: `export default {Name};`
- [ ] Re-exports types: `export * from './interface';`

## Stories (`{Name}.stories.tsx`)

- [ ] Imports from `@storybook/react` (`Meta`, `StoryObj`)
- [ ] Imports `fn` from `@storybook/test` for action handlers
- [ ] Imports component from `./index`
- [ ] Imports styles: `import './style';`
- [ ] Variant constants defined as `as const` arrays
- [ ] Meta has `title: 'Components/{Name}'`
- [ ] Meta has `component: {Name}`
- [ ] Meta has `tags: ['autodocs']`
- [ ] Meta has `argTypes` with controls for all variant props
- [ ] Meta has `args` with sensible defaults
- [ ] `AllVariants` story exists with `tags: ['!autodocs', 'dev']` — shows matrix of all variants
- [ ] At least one additional story demonstrating key features (e.g., `WithIcons`, `Sizes`)
- [ ] Type alias: `type Story = StoryObj<typeof {Name}>;`

## Tests (`__test__/index.test.tsx`)

- [ ] Imports `jsdom-global/register`
- [ ] Imports `render` from `@testing-library/react`
- [ ] Imports `@testing-library/jest-dom`
- [ ] Console error suppression for `Could not parse CSS stylesheet` and `findDOMNode is deprecated`
- [ ] Mocks `lottie-web` (if component dependency chain includes it)
- [ ] `describe('{Name}')` block
- [ ] At least one `it('renders correctly')` with `toMatchSnapshot()`

## README.md

- [ ] Component name as heading
- [ ] Brief description of purpose
- [ ] Import example
- [ ] Basic usage example
- [ ] Props table with name, type, default, and description columns

## Library Registration

- [ ] `import { {Name} } from './components/{Name}';` added to `src/index.ts` import block
- [ ] `export { {Name} } from './components/{Name}';` added to named exports
- [ ] `export type { {Name}Props } from './components/{Name}';` added for props type
- [ ] `{Name},` added to default export object

## Validation

- [ ] `pnpm lint` passes with no errors
- [ ] `pnpm test` passes (snapshots created/updated)
- [ ] Component renders in Storybook (`pnpm dev`)
- [ ] All variant combinations visually verified in Storybook
- [ ] Self-review: every SCSS value cross-checked against `StyleSystemAPI.md` / `SemanticColors.md`
- [ ] Self-review: file structure and code patterns cross-checked against `ComponentPatterns.md`
- [ ] Self-review: no raw hex, px (for tokens), or font-family values in SCSS
- [ ] Self-review: no inline SVGs or external icon libraries — all icons use `<Icons name="..." />`
- [ ] Self-review: hooks usage cross-checked against `HooksGuide.md` (correct hook for each pattern)
- [ ] Self-review: no anti-patterns present (see SKILL.md Anti-Patterns section)
