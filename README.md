# 1Money React UI

This repository contains the source for `@1money/components-ui`, a React component library used across 1Money front-end projects.

It combines reusable UI components with a 1Money SCSS design system, Storybook for local development, and dual CommonJS/ES module builds for distribution.

## Features

- React and TypeScript component library
- Reusable UI building blocks styled for 1Money products
- SCSS design system in `src/styles/`
- Storybook development server on port `6205`
- Dual build output to `lib/` and `es/`

## Installation

Install the package and the required React dependencies:

```bash
pnpm add @1money/components-ui react react-dom primereact primeicons
```

Then import the library stylesheet once in your app entrypoint:

```tsx
import '@1money/components-ui/index.css';
```

## Quick Start

Named imports are available from the root package entry:

```tsx
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Grid,
  Icons,
  notification,
  Tag,
  Tooltip,
} from '@1money/components-ui';
import '@1money/components-ui/index.css';

export function Example() {
  return (
    <>
      <Grid gutter={[16, 16]}>
        <Grid.Col span={12} md={6}>
          <Button color="primary">Continue</Button>
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <Checkbox label="Accept terms" />
        </Grid.Col>
        <Grid.Col span={12} md={6}>
          <CheckboxGroup
            options={['Email', 'SMS']}
            defaultValue={['Email']}
          />
        </Grid.Col>
      </Grid>

      <Tag label="Active" color="success" />

      <button id="help-trigger" type="button">
        <Icons name="info" />
      </button>
      <Tooltip anchorSelect="#help-trigger" body="More details" />

      {/*
        notification is a static API. Call it from event handlers,
        effects, or other client-side actions.
      */}
      <Button
        onClick={() =>
          notification.success({
            title: 'Saved',
            body: 'Settings were updated.',
          })
        }
      >
        Show notification
      </Button>
    </>
  );
}
```

Tree-shakeable subpath imports are also supported:

```tsx
import { Button } from '@1money/components-ui/Button';
import { Spinner } from '@1money/components-ui/Spinner';
```

## Components In This Repository

The current source tree includes these component modules:

- `Accordion`
- `Alert`
- `Button`
- `Calendar`
- `Carousel`
- `Cell`
- `Checkbox`
- `CheckboxGroup`
- `CoachMark`
- `Copy`
- `Dialog`
- `Divider`
- `Drawer`
- `Dropdown`
- `Empty`
- `Flex`
- `Grid`
- `Icons`
- `Input`
- `Link`
- `Navigation`
- `Nav`
- `Notification`
- `Pagination`
- `Popconfirm`
- `Portal`
- `ProForm`
- `Progress`
- `Radio`
- `RadioGroup`
- `ResizeObserver`
- `Segment`
- `Select`
- `Skeleton`
- `Slider`
- `Space`
- `Spinner`
- `Step`
- `Switch`
- `Table`
- `VirtualTable`
- `Tabs`
- `Tag`
- `Tooltip`
- `Tour`
- `Trigger`
- `Typography`
- `Upload`
- `UploadFileBar`
- `VirtualList`

The package manifest also defines matching subpath exports for published builds.

## Styling

Consumers should import `@1money/components-ui/index.css`.

When building or updating components inside this repository, SCSS files should import the internal style API:

```scss
@use '@/styles/api' as theme;
```

The style system follows a layered boundary model:

- `theme/` = design-domain API
- `system/` = `sx` engine
- `recipes/` = library recipe helpers
- `public/` = consumer-facing facade exported by `src/styles/_api.scss`

Component SCSS should not import `system/*` or `tokens/*` directly. `theme/functions` is reserved for rare library-only reader access such as `om-line-height(...)` or `om-line-height-px(...)`. The design token and utility system is documented in `src/styles/README.md`.

## Development

Install dependencies:

```bash
pnpm install
```

Start Storybook locally:

```bash
pnpm dev
```

Storybook runs at `http://localhost:6205`.

Useful commands:

```bash
pnpm test
pnpm lint
pnpm build
pnpm new
pnpm new Button -f
```

Build output is generated in:

- `lib/` for CommonJS
- `es/` for ES modules

## Project Structure

```text
src/
├── components/   # Component source
├── styles/       # SCSS public/theme/system/recipes/internal layers
└── index.ts      # Root library exports
```

## Release Notes

- Package name: `@1money/components-ui`
- Repository: `https://github.com/1Money-Co/1money-react-ui`
- License: `MIT`
