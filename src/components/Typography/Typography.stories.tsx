import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  TYPOGRAPHY_BODY_SIZES,
  TYPOGRAPHY_COLORS,
  TYPOGRAPHY_DISPLAY_SIZES,
  TYPOGRAPHY_HEADLINE_SIZES,
  TYPOGRAPHY_LABEL_SIZES,
  TYPOGRAPHY_LINK_SIZES,
  TYPOGRAPHY_TITLE_SIZES,
} from './interface';
import { Typography } from './index';
import './style';

const STORY_LAYOUT_STYLE = {
  display: 'grid',
  gap: 24,
};

const STORY_SECTION_STYLE = {
  display: 'grid',
  gap: 12,
};

const TRUNCATED_CONTAINER_STYLE = {
  display: 'grid',
  gap: 8,
  width: 240,
};

const TRUNCATED_FRAME_STYLE = {
  width: '100%',
  padding: 12,
  borderRadius: 12,
  background: 'rgba(15, 23, 42, 0.03)',
  boxShadow: 'inset 0 0 0 1px rgba(15, 23, 42, 0.12)',
};

const LONG_TEXT =
  'Settlement updates often include enough detail to overflow smaller UI slots, so typography needs robust truncation and copy affordances.';

const meta: Meta<typeof Typography.Body> = {
  title: 'Components/Typography',
  component: Typography.Body,
  argTypes: {
    size: { control: 'radio', options: [...TYPOGRAPHY_BODY_SIZES] },
    strong: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    disabled: { control: 'boolean' },
    as: { control: 'text' },
    ellipsis: { control: false },
    copyable: { control: false },
  },
  args: {
    children: 'Typography body sample',
    size: 'md',
    strong: false,
    italic: false,
    underline: false,
    delete: false,
    disabled: false,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Typography.Body>;

export const Primary: Story = {
  render: args => <Typography.Body {...args} />,
};

export const SemanticScale: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_DISPLAY_SIZES.map(size => (
          <Typography.Display key={size} size={size}>
            Display {size}
          </Typography.Display>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_HEADLINE_SIZES.map(size => (
          <Typography.Headline key={size} size={size}>
            Headline {size}
          </Typography.Headline>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_TITLE_SIZES.map(size => (
          <Typography.Title key={size} size={size}>
            Title {size}
          </Typography.Title>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_BODY_SIZES.map(size => (
          <Typography.Body key={size} size={size}>
            Body {size} brings readable, content-first copy into forms, lists, and dense product surfaces.
          </Typography.Body>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LABEL_SIZES.map(size => (
          <Typography.Label key={size} size={size}>
            Label {size}
          </Typography.Label>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LINK_SIZES.map(size => (
          <Typography.Link key={size} size={size} href="https://ant.design/components/typography/" target="_blank">
            Link {size}
          </Typography.Link>
        ))}
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const StrongSupport: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_TITLE_SIZES.map(size => (
          <Typography.Title key={size} size={size} strong>
            Strong title {size}
          </Typography.Title>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_BODY_SIZES.map(size => (
          <Typography.Body key={size} size={size} strong>
            Strong body {size}
          </Typography.Body>
        ))}
      </div>

      <div style={STORY_SECTION_STYLE}>
        {TYPOGRAPHY_LABEL_SIZES.map(size => (
          <Typography.Label key={size} size={size} strong>
            Strong label {size}
          </Typography.Label>
        ))}
      </div>
    </div>
  ),
};

export const Decorations: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <Typography.Body size="md" italic>
        Italic body copy
      </Typography.Body>
      <Typography.Body size="md" underline>
        Underlined body copy
      </Typography.Body>
      <Typography.Body size="md" delete>
        Deleted body copy
      </Typography.Body>
      <Typography.Body size="md" underline delete>
        Underlined and deleted body copy
      </Typography.Body>
      <Typography.Link size="md" href="https://ant.design/components/typography/" underline delete>
        Link with combined decoration
      </Typography.Link>
      <Typography.Label size="md" disabled>
        Disabled label
      </Typography.Label>
    </div>
  ),
};

export const SemanticTags: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <Typography.Display size="sm" as="h1">
        Display rendered as h1
      </Typography.Display>
      <Typography.Headline size="md" as="h2">
        Headline rendered as h2
      </Typography.Headline>
      <Typography.Title size="lg" as="h3">
        Title rendered as h3
      </Typography.Title>
      <Typography.Body size="md" as="p">
        Body rendered as p for longer narrative content.
      </Typography.Body>
      <Typography.Label size="sm" htmlFor="typography-story-input">
        Email address
      </Typography.Label>
      <input id="typography-story-input" placeholder="Input target for label" />
    </div>
  ),
};

export const SingleLineEllipsis: Story = {
  render: () => (
    <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Label size="xs" color="default-secondary">
        Constrained to 240px width
      </Typography.Label>
      <div style={TRUNCATED_FRAME_STYLE}>
        <Typography.Body size="md" ellipsis>
          {LONG_TEXT}
        </Typography.Body>
      </div>
    </div>
  ),
};

export const MultiLineEllipsisWithTooltip: Story = {
  render: () => (
    <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Label size="xs" color="default-secondary">
        Constrained to 240px width
      </Typography.Label>
      <div style={TRUNCATED_FRAME_STYLE}>
        <Typography.Body size="md" ellipsis={{ rows: 2, tooltip: true }}>
          {LONG_TEXT}
        </Typography.Body>
      </div>
    </div>
  ),
};

export const CopyableContent: Story = {
  render: () => (
    <Typography.Body size="md" copyable>
      Wallet address copied from the original, untruncated content.
    </Typography.Body>
  ),
};

export const EllipsisAndCopyable: Story = {
  render: () => (
    <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Title
        size="sm"
        strong
        ellipsis={{ rows: 2, tooltip: true }}
        copyable={{ duration: 1200 }}
      >
        {LONG_TEXT}
      </Typography.Title>
    </div>
  ),
};

export const CopyableLink: Story = {
  render: () => (
    <div style={TRUNCATED_CONTAINER_STYLE}>
      <Typography.Link
        size="md"
        href="https://ant.design/components/typography/"
        target="_blank"
        ellipsis={{ tooltip: true }}
        copyable={{ text: 'https://ant.design/components/typography/' }}
      >
        https://ant.design/components/typography/
      </Typography.Link>
    </div>
  ),
};

export const ColorPalette: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      {TYPOGRAPHY_COLORS.map(color => (
        <Typography.Body key={color} size="md" color={color}>
          {color}
        </Typography.Body>
      ))}
    </div>
  ),
};
