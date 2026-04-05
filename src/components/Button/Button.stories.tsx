import React from 'react';
import { fn } from '@storybook/test';
import { Icons } from '@/components/Icons';

import type { Meta, StoryObj } from '@storybook/react';
import {
  BUTTON_COLORS,
  BUTTON_DEFAULT_COLOR,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_SIZES,
  BUTTON_VARIANT,
  BUTTON_VARIANTS,
} from './constants';
import { Button } from './index';

import './style';
import '@/components/Spinner/style';

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
    size: { control: 'radio', options: [...BUTTON_SIZES] },
    color: { control: 'radio', options: [...BUTTON_COLORS] },
    variant: { control: 'radio', options: [...BUTTON_VARIANTS] },
  },
  args: {
    children: 'Button',
    disabled: false,
    loading: false,
    rounded: false,
    size: BUTTON_DEFAULT_SIZE,
    color: BUTTON_DEFAULT_COLOR,
    variant: BUTTON_DEFAULT_VARIANT,
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={columnStyle}>
      {BUTTON_SIZES.map((size) => (
        <div key={size}>
          <h3 style={sectionHeaderStyle}>{size}</h3>
          <div style={rowStyle}>
            {BUTTON_COLORS.map((color) => (
              <Button {...args} key={`${size}-${color}`} size={size} color={color}>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ ...rowStyle, marginTop: 8 }}>
            {BUTTON_COLORS.map((color) => (
              <Button {...args} key={`${size}-${color}-disabled`} size={size} color={color} disabled>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ ...rowStyle, marginTop: 8 }}>
            {BUTTON_COLORS.map((color) => (
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
      {BUTTON_COLORS.map((color) => (
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
      {BUTTON_SIZES.map((size) => (
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
      {BUTTON_SIZES.map((size) => (
        <div key={size}>
          <h3 style={sectionHeaderStyle}>Text - {size}</h3>
          <div style={rowStyle}>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size}>
              Button
            </Button>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size} disabled>
              Disabled
            </Button>
            <Button {...args} variant={BUTTON_VARIANT.text} size={size} loading>
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
    variant: BUTTON_VARIANT.text,
    children: 'Text Button',
  },
};

export const TextWithIcon: Story = {
  render: (args) => (
    <Button {...args} variant={BUTTON_VARIANT.text} iconEnd={<Icons name="arrowRight" />}>
      Learn More
    </Button>
  ),
};
