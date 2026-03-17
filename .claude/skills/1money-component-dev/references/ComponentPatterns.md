# Component Patterns Reference

Annotated templates for all 8 files in a `@1money/components-ui` component directory. Based on the canonical `ButtonBeta` component.

Replace `{Name}` with PascalCase name (e.g., `ChipBeta`) and `{kebab-name}` with kebab-case (e.g., `chip-beta`).

---

## 1. `{Name}.tsx` — Main Component

```tsx
// ---- Imports ----
import { memo } from 'react';
// Import the PrimeReact base component directly from primereact/*
import { PrimeComponent as PrimeBase } from 'primereact/{component}';
// Import internal components if needed (e.g., Spinner for loading states)
import Spinner from '@/components/Spinner';
// Import classnames utility — default export is pre-configured with 'om-react-ui' prefix
import { default as classnames, joinCls } from '@/utils/classnames';
// Import types separately using `import type`
import type { FC, PropsWithChildren } from 'react';
import type { {Name}Props } from './interface';

// ---- Constants ----
// Extract magic strings/numbers as named constants
const SOME_CONSTANT = '5';

// ---- Component ----
// Named export with explicit FC typing
// Use PropsWithChildren<> if the component accepts children, otherwise just {Name}Props
export const {Name}: FC<PropsWithChildren<{Name}Props>> = props => {
  // Destructure with defaults
  // - prefixCls defaults to kebab-case component name
  // - Variant props get sensible defaults
  // - ref is destructured but aliased to _ref (forwarded via PrimeReact's own ref handling)
  // - ...rest captures all remaining PrimeReact props
  const {
    children,
    className = '',
    prefixCls = '{kebab-name}',
    color = 'primary',
    size = 'medium',
    ref: _ref,
    ...rest
  } = props;

  // Create class generator — returns a function: (suffix?, className?) => string
  const classes = classnames(prefixCls);

  return (
    <PrimeBase
      // Spread remaining props FIRST so our overrides take precedence
      {...rest}
      // Build root className:
      // - classes(void 0, ...) generates the root class: `.om-react-ui-{kebab-name}`
      // - joinCls combines variant classes and external className
      className={classes(
        void 0,
        joinCls(classes(color), classes(size), className),
      )}
    >
      {children}
    </PrimeBase>
  );
};

// Default export MUST be wrapped in memo()
export default memo({Name});
```

### `classnames` Utility Explained

```ts
import { default as classnames, joinCls } from '@/utils/classnames';

// classnames is a curried function:
// classnames(prefix) returns a class generator

const classes = classnames('button-beta');
// classes is now: (suffix?, className?) => string

classes(void 0)           // → 'om-react-ui-button-beta'
classes('primary')        // → 'om-react-ui-button-beta-primary'
classes('icon-start')     // → 'om-react-ui-button-beta-icon-start'
classes(void 0, 'extra')  // → 'om-react-ui-button-beta extra'
classes('sm', 'extra')    // → 'om-react-ui-button-beta-sm extra'

// joinCls concatenates non-falsy class strings
joinCls(classes('primary'), classes('large'), className)
// → 'om-react-ui-button-beta-primary om-react-ui-button-beta-large my-custom'
```

---

## 2. `interface.ts` — TypeScript Interfaces

```ts
import type { ReactNode, RefObject } from 'react';
// Import PrimeReact component props
import type { PrimeComponentProps } from 'primereact/{component}';

// Use Omit<> to remove PrimeReact props that conflict with our custom API
// Common removals: 'label', 'severity', 'size', 'icon', 'className'
export interface {Name}Props extends Omit<PrimeComponentProps, 'label' | 'severity' | 'size'> {
  // Ref prop with the correct HTML element type
  ref?: RefObject<HTMLButtonElement | null>;

  // Class name prefix — allows consumers to customize the BEM namespace
  prefixCls?: string;

  // Variant props as union types
  color?: 'primary' | 'secondary' | 'grey' | 'black' | 'white' | 'danger' | 'warning';
  size?: 'large' | 'medium' | 'small';

  // Slot props for custom content
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
}
```

### Rules

- Always use `interface` (not `type`) for object structures
- Name: `{Name}Props`
- Extend PrimeReact props with `Omit<>` to avoid conflicts
- Use `ReactNode` for slot props, not `JSX.Element`
- Use `RefObject<HTMLElement | null>` for ref props
- Use literal union types for variant props (never `enum`)
- If variant values are also used in stories, define them as `as const` arrays in the stories file, not here

---

## 3. `index.ts` — Barrel Export

```ts
import {Name} from './{Name}';

export { {Name} } from './{Name}';

export default {Name};

export * from './interface';
```

### Rules

- Import default + re-export named + re-export default + re-export types
- This pattern ensures both `import {Name}` and `import { {Name} }` work
- `export *` from interface re-exports all type definitions

---

## 4. `{Name}.stories.tsx` — Storybook Stories

```tsx
import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { {Name} } from './index';

// Import styles for Storybook rendering
import './style';

// Define variant constants as `as const` for type safety and reuse
const COLORS = ['primary', 'secondary', 'grey', 'black', 'white', 'danger', 'warning'] as const;
const SIZES = ['large', 'medium', 'small'] as const;

const meta: Meta<typeof {Name}> = {
  title: 'Components/{Name}',
  component: {Name},
  argTypes: {
    // Boolean controls
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    // Radio controls for variant props — spread the const array
    size: { control: 'radio', options: [...SIZES] },
    color: { control: 'radio', options: [...COLORS] },
  },
  args: {
    // Sensible defaults for the controls panel
    disabled: false,
    loading: false,
    size: 'medium',
    color: 'primary',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof {Name}>;

// ---- AllVariants ----
// Matrix of ALL size x color combinations for visual QA
// Tagged '!autodocs' to exclude from auto-generated docs
// Tagged 'dev' for developer-only visibility
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {SIZES.map(size => (
        <div key={size}>
          <h3 style={{ marginBottom: 12 }}>{size}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {COLORS.map(color => (
              <{Name} {...args} key={`${size}-${color}`} size={size} color={color}>
                {color}
              </{Name}>
            ))}
          </div>
          {/* Disabled row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8 }}>
            {COLORS.map(color => (
              <{Name} {...args} key={`${size}-${color}-disabled`} size={size} color={color} disabled>
                {color}
              </{Name}>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

// ---- Feature-specific stories ----
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {SIZES.map(size => (
        <{Name} {...args} key={size} size={size}>
          {size}
        </{Name}>
      ))}
    </div>
  ),
};
```

### Rules

- Import `fn` from `@storybook/test` for action callbacks (not `action` from `@storybook/addon-actions`)
- Meta title follows `Components/{Name}` convention
- Meta must include `tags: ['autodocs']`
- Variant constants are `as const` arrays spread into options
- `AllVariants` story always has `tags: ['!autodocs', 'dev']`
- At minimum: `AllVariants` + one feature story

---

## 5. `style/{Name}.scss` — Component Styles

```scss
@use '@/styles/api' as *;

$component: '{kebab-name}';

// ── Variant DSL ──
// 1. Schema: auto-generate from component name + token key list
// Expands to: (--om-{kebab-name}-text: text, --om-{kebab-name}-bg: bg, ...)
$component-variant-schema: om-variant-schema(
  $component, text, bg, hover-bg, disabled-text, disabled-bg
);

// 2. Variants map: each variant defines all keys from the schema
$component-variants: (
  'primary': (
    text: om-text('on-neutral'),
    bg: om-bg('brand'),
    hover-bg: om-bg('brand-hover'),
    disabled-text: om-text('disabled-white'),
    disabled-bg: om-bg('disabled-brand'),
  ),
  'secondary': (
    text: om-text('brand'),
    bg: om-bg('brand-secondary'),
    hover-bg: om-bg('brand-secondary-hover'),
    disabled-text: om-text('brand-secondary'),
    disabled-bg: om-bg('brand-tertiary'),
  ),
  // ... more variants
);

// Root selector — generates: .om-react-ui-{kebab-name}
.#{$prefix}-#{$component} {
  // 3. Apply default variant + validate all variants against schema
  @include om-variant-default($component-variants, 'primary', $component-variant-schema);

  // ── Base styles — consume variant CSS custom properties ──
  display: inline-flex;
  gap: om-gap(200);
  align-items: center;
  justify-content: center;
  height: om-component-height('2xl');
  padding: om-component-padding(400);
  color: var(--om-{kebab-name}-text);
  background-color: var(--om-{kebab-name}-bg);
  border: none;
  border-radius: om-radius(300);
  box-shadow: none;
  cursor: pointer;

  // Typography — emits font-family, font-size, line-height, etc.
  @include om-typography(label, lg);

  // ── Disabled — reads variant custom properties ──
  &.p-disabled {
    color: var(--om-{kebab-name}-disabled-text);
    background-color: var(--om-{kebab-name}-disabled-bg);
    cursor: not-allowed;
  }

  // ── Hover — reads variant custom property ──
  &:hover:not(.p-disabled) {
    background-color: var(--om-{kebab-name}-hover-bg);
  }

  // ── Size variants ──
  // Use &-{size} for variant classes
  &-medium {
    height: om-component-height('md');
    padding: om-component-padding(300);
    border-radius: om-radius(300);
    @include om-typography(label, md);
  }

  &-small {
    height: om-component-height('sm');
    padding: om-component-padding(300);
    border-radius: om-radius(200);
    @include om-typography(label, sm);
  }

  // ── Slot styles ──
  &-icon-start,
  &-icon-end {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  // ── Color variants (Variant DSL) ──
  // Generate all modifier classes, skipping the default 'primary' variant
  @include om-variant-classes($component-variants, $component-variant-schema, $default: 'primary');

  // ── Responsive ──
  // @include om-down(md) { ... }
}
```

### SCSS Rules

- First line: `@use '@/styles/api' as *;`
- `$component` is always kebab-case
- Root: `.#{$prefix}-#{$component}` (do NOT hardcode `om-react-ui`)
- **Color variants**: Use the Variant DSL (`om-variant-schema` + `om-variant-default` + `om-variant-classes`) with CSS custom properties instead of manual `&-{variant}` blocks for each color
- **Size variants**: Use `&-{size}` nesting (these remain manual since they change structural properties, not just colors)
- Disabled: target `.p-disabled` class (PrimeReact adds this)
- Hover: `&:hover:not(.p-disabled)` to skip disabled elements
- All values use token functions — no raw hex, px (for tokens), or font-family
- Exception: `!important` overrides on third-party (PrimeReact) styles are acceptable when necessary
- Variant names must be quoted strings (e.g., `'white'`, `'black'`) to avoid Sass color literal issues

---

## 6. `style/index.ts` — Style Entry Point

```ts
import './{Name}.scss';
```

Single line. This file is imported in stories and by the build system.

---

## 7. `__test__/index.test.tsx` — Snapshot Test

```tsx
import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { {Name} } from '../index';

// Suppress known console errors from PrimeReact/JSDOM incompatibility
const originalConsoleError = console.error;
console.error = (message, ...optionalParams) => {
  const errorMessage = typeof message === 'string' ? message : String(message);
  if (
    errorMessage.includes('Could not parse CSS stylesheet') ||
    errorMessage.includes('findDOMNode is deprecated and will be removed')
  ) {
    return;
  }
  originalConsoleError(message, ...optionalParams);
};

// Mock lottie-web if any component in the dependency chain uses Loading/Spinner
jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('{Name}', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <{Name}>Test</{Name}>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
```

### Rules

- Always import `jsdom-global/register` first
- Always suppress the two known console errors
- Always mock `lottie-web` (safe even if not needed)
- At minimum: one `renders correctly` snapshot test
- Optionally add tests for variants, events, disabled state

---

## 8. `README.md` — Component Documentation

```md
# {Name}

Brief description of what the component does and when to use it.

## Import

\```tsx
import { {Name} } from '@1money/components-ui';
// or
import { {Name} } from '@1money/components-ui/{Name}';
\```

## Usage

\```tsx
<{Name} color="primary" size="medium">
  Click me
</{Name}>
\```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'secondary' \| ...` | `'primary'` | Visual color variant |
| `size` | `'large' \| 'medium' \| 'small'` | `'medium'` | Size variant |
| `disabled` | `boolean` | `false` | Disables the component |
| `loading` | `boolean` | `false` | Shows loading spinner |
| `prefixCls` | `string` | `'{kebab-name}'` | CSS class prefix |
| `className` | `string` | `''` | Additional CSS classes |
```

---

## Library Registration (`src/index.ts`)

After creating all component files, update the barrel export:

```ts
// Add to import block (alphabetical order by component name)
import { {Name} } from './components/{Name}';

// Add to named export block
export { {Name} } from './components/{Name}';
export type { {Name}Props } from './components/{Name}';

// Add to default export object
export default {
  // ... existing components
  {Name},
};
```
