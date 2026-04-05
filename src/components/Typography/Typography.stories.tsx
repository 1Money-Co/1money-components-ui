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

const SENDER_ID = '814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f5e4d3c2b1a0f9e8d7c6b749f';
const RECIPIENT_ID = '3e83b3c59a1d4f8e7b6c2a0d5f9e8d7c6b4a3f2e1d0c9b8a7f6e5d4c3b2a40bb';

const CONSTRAINED_STYLE = { maxWidth: 200 };
const ROW_STYLE = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 24,
  padding: '16px 0',
  borderBottom: '1px solid rgba(15, 23, 42, 0.08)',
};

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

export const MiddleEllipsis: Story = {
  render: () => (
    <div style={{ ...STORY_LAYOUT_STYLE, maxWidth: 480 }}>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Sender ID</Typography.Label>
        <div style={CONSTRAINED_STYLE}>
          <Typography.Body size="md" ellipsis={{ tooltip: true }} copyable>
            {SENDER_ID}
          </Typography.Body>
        </div>
      </div>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Recipient name</Typography.Label>
        <Typography.Body size="md">Apextech LLC</Typography.Body>
      </div>
      <div style={ROW_STYLE}>
        <Typography.Label size="md" color="default-secondary">Recipient ID</Typography.Label>
        <div style={CONSTRAINED_STYLE}>
          <Typography.Body size="md" ellipsis={{ tooltip: true }} copyable>
            {RECIPIENT_ID}
          </Typography.Body>
        </div>
      </div>
    </div>
  ),
};

export const EllipsisCustomChars: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <Typography.Label size="xs" color="default-secondary">start=6, end=6</Typography.Label>
      <div style={CONSTRAINED_STYLE}>
        <Typography.Body size="md" ellipsis={{ start: 6, end: 6, tooltip: true }}>
          {SENDER_ID}
        </Typography.Body>
      </div>

      <Typography.Label size="xs" color="default-secondary">start=10, end=8</Typography.Label>
      <div style={CONSTRAINED_STYLE}>
        <Typography.Body size="md" ellipsis={{ start: 10, end: 8, tooltip: true }}>
          {SENDER_ID}
        </Typography.Body>
      </div>
    </div>
  ),
};

export const CopyableText: Story = {
  render: () => (
    <div style={STORY_LAYOUT_STYLE}>
      <Typography.Body size="md" copyable>
        Plain text with copy action
      </Typography.Body>
      <Typography.Body size="md" copyable={{ text: 'custom-override-value' }}>
        Copy uses a different value
      </Typography.Body>
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
