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
    defaultActiveIndex: 1,
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const ActiveSecond: Story = {};
