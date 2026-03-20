import React from 'react';
import { fn } from '@storybook/test';
import { Icons } from '@/components/Icons';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './index';

import './style';

const COLORS = ['primary', 'secondary', 'grey', 'black', 'white', 'danger', 'warning'] as const;
const SIZES = ['large', 'medium', 'small'] as const;
const TYPES = ['button', 'submit', 'reset'] as const;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    rounded: { control: 'boolean' },
    size: { control: 'radio', options: [...SIZES] },
    color: { control: 'radio', options: [...COLORS] },
    type: { control: 'radio', options: [...TYPES] },
  },
  args: {
    disabled: false,
    loading: false,
    rounded: false,
    size: 'medium',
    color: 'primary',
    type: 'button',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {SIZES.map(size => (
        <div key={size}>
          <h3 style={{ marginBottom: 12 }}>{size}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
            {COLORS.map(color => (
              <Button {...args} key={`${size}-${color}`} size={size} color={color}>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8 }}>
            {COLORS.map(color => (
              <Button {...args} key={`${size}-${color}-disabled`} size={size} color={color} disabled>
                {color}
              </Button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginTop: 8 }}>
            {COLORS.map(color => (
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

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {SIZES.map(size => (
        <Button {...args} key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Button {...args} iconStart={<Icons name="add" size={16} />}>
          Icon Start
        </Button>
        <Button {...args} iconEnd={<Icons name="arrowRight" size={16} />}>
          Icon End
        </Button>
        <Button
          {...args}
          iconStart={<Icons name="add" size={16} />}
          iconEnd={<Icons name="arrowRight" size={16} />}
        >
          Both Icons
        </Button>
      </div>
    </div>
  ),
};
