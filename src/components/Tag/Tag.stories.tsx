import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './index';
import { TAG_COLORS, TAG_SIZES, TAG_DEFAULT_COLOR, TAG_DEFAULT_SIZE } from './constants';

import './style';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    color: { control: 'radio', options: [...TAG_COLORS] },
    size: { control: 'radio', options: [...TAG_SIZES] },
    removable: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    label: 'Tag',
    color: TAG_DEFAULT_COLOR,
    size: TAG_DEFAULT_SIZE,
    removable: true,
    icon: 'add',
    onRemove: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {TAG_SIZES.map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: 12 }}>{size}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {TAG_COLORS.map((color) => (
              <Tag
                {...args}
                key={`${size}-${color}`}
                size={size}
                color={color}
                label={color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    label: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

export const Colors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
      {TAG_COLORS.map((color) => (
        <Tag {...args} key={color} color={color} label={color} />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {TAG_SIZES.map((size) => (
        <Tag {...args} key={size} size={size} label={size} />
      ))}
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: 'add',
    label: 'Tag',
  },
};

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
    label: 'Tag',
  },
};

export const Removable: Story = {
  args: {
    removable: true,
    label: 'Removable',
  },
};

export const NotRemovable: Story = {
  args: {
    removable: false,
    icon: undefined,
    label: 'Read-only',
  },
};
