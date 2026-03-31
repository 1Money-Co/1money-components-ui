import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './index';

import './style';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    count: { control: { type: 'number', min: 1, max: 10 } },
    defaultActiveIndex: { control: 'number' },
  },
  args: {
    count: 4,
    defaultActiveIndex: 0,
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {};

export const ActiveSecond: Story = {
  args: {
    defaultActiveIndex: 1,
  },
};

export const TwoDots: Story = {
  args: {
    count: 2,
  },
};

export const FiveDots: Story = {
  args: {
    count: 5,
    defaultActiveIndex: 2,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {[2, 3, 4, 5].map(count => (
        <div key={count} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span style={{ width: 60, fontSize: 14, color: '#666' }}>{count} dots</span>
          <Carousel count={count} defaultActiveIndex={0} />
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
