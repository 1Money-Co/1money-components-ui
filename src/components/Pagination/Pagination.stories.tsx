import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './index';

import './style';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    disabled: { control: 'boolean' },
    total: { control: 'number' },
    pageSize: { control: 'number' },
    defaultCurrent: { control: 'number' },
    boundaryCount: { control: 'number' },
    middlePageCount: { control: 'number' },
  },
  args: {
    total: 680,
    pageSize: 10,
    defaultCurrent: 1,
    disabled: false,
    boundaryCount: 1,
    middlePageCount: 3,
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {};

export const MiddlePage: Story = {
  args: {
    defaultCurrent: 32,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
