import React from 'react';
import { fn } from '@storybook/test';
import { Icons } from '@/components/Icons';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import './style';

const COLORS = ['primary', 'secondary', 'grey', 'black', 'white', 'danger', 'warning'] as const;
const SIZES = ['large', 'medium', 'small'] as const;
const VARIANTS = ['contained', 'text'] as const;

const columnStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 32 };
const sectionHeaderStyle: React.CSSProperties = { marginBottom: 12 };
const rowStyle: React.CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' };

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    size: { control: 'radio', options: [...SIZES] },
    color: { control: 'radio', options: [...COLORS] },
    variant: { control: 'radio', options: [...VARIANTS] },
  },
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
    rounded: false,
    size: 'medium',
    color: 'primary',
    variant: 'contained',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={columnStyle}>
      {SIZES.map((size) => (
        <div key={size}>
          <h3 style={sectionHeaderStyle}>{size}</h3>
          <div style={rowStyle}>
            {COLORS.map((color) => (
              <Button {...args} key={`${size}-${color}`} size={size} color={color}>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ ...rowStyle, marginTop: 8 }}>
            {COLORS.map((color) => (
              <Button {...args} key={`${size}-${color}-disabled`} size={size} color={color} disabled>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ ...rowStyle, marginTop: 8 }}>
            {COLORS.map((color) => (
              <Button {...args} key={`${size}-${color}-loading`} size={size} color={color} loading>
                {color}
              </Button>
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

export const Default: Story = {};

export const Colors: Story = {
  render: (args) => (
    <div style={rowStyle}>
      {COLORS.map((color) => (
        <Button {...args} key={color} color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={rowStyle}>
      {SIZES.map((size) => (
        <Button {...args} key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const WithIconStart: Story = {
  render: (args) => (
    <Button {...args} iconStart={<Icons name="add" />}>
      Icon Start
    </Button>
  ),
};

export const WithIconEnd: Story = {
  render: (args) => (
    <Button {...args} iconEnd={<Icons name="arrowRight" />}>
      Icon End
    </Button>
  ),
};

export const WithBothIcons: Story = {
  render: (args) => (
    <Button {...args} iconStart={<Icons name="add" />} iconEnd={<Icons name="arrowRight" />}>
      Both Icons
    </Button>
  ),
};

export const TextVariant: Story = {
  render: (args) => (
    <div style={columnStyle}>
      {SIZES.map((size) => (
        <div key={size}>
          <h3 style={sectionHeaderStyle}>Text - {size}</h3>
          <div style={rowStyle}>
            <Button {...args} variant="text" size={size}>
              Button
            </Button>
            <Button {...args} variant="text" size={size} disabled>
              Disabled
            </Button>
            <Button {...args} variant="text" size={size} loading>
              Loading
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    children: undefined,
  },
};

export const TextDefault: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const TextWithIcon: Story = {
  render: (args) => (
    <Button {...args} variant="text" iconEnd={<Icons name="arrowRight" />}>
      Learn More
    </Button>
  ),
};
