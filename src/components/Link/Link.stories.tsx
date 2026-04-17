import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './index';
import { LINK_COLORS, LINK_SIZES, LINK_DEFAULT_COLOR, LINK_DEFAULT_SIZE } from './constants';

import './style';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    color: { control: 'radio', options: [...LINK_COLORS] },
    size: { control: 'radio', options: [...LINK_SIZES] },
    disabled: { control: 'boolean' },
    href: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    children: 'Link',
    color: LINK_DEFAULT_COLOR,
    size: LINK_DEFAULT_SIZE,
    disabled: false,
    href: '#',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Link>;

const STATES = ['default', 'hover', 'disabled'] as const;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {LINK_COLORS.map((color) => (
        <div key={color}>
          <h3 style={{ marginBottom: 12, textTransform: 'capitalize' }}>{color}</h3>
          {LINK_SIZES.map((size) => (
            <div
              key={`${color}-${size}`}
              style={{
                display: 'flex',
                gap: 48,
                alignItems: 'center',
                marginBottom: 8,
              }}
            >
              <span style={{ width: 64, fontSize: 12, textTransform: 'capitalize' }}>{size}</span>
              {STATES.map((state) => (
                <div
                  key={`${color}-${size}-${state}`}
                  style={{ display: 'flex', flexDirection: 'column', gap: 4 }}
                >
                  <span style={{ fontSize: 10, color: '#888', textTransform: 'capitalize' }}>
                    {state}
                  </span>
                  <Link
                    {...args}
                    color={color}
                    size={size}
                    disabled={state === 'disabled'}
                  >
                    Link
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  args: {
    children: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {LINK_COLORS.map((color) => (
        <Link {...args} key={color} color={color}>
          {color}
        </Link>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {LINK_SIZES.map((size) => (
        <Link {...args} key={size} size={size}>
          {size}
        </Link>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled link',
  },
};

export const ExternalLink: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: 'Open in new tab',
  },
};
