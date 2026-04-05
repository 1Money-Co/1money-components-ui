import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from './index';
import { notification } from '@/components/Notification';

import './style';
import { fail } from 'assert';

const COPY_SUCCESS = () =>
  notification.success({
    title: 'Success',
    body: 'Copied to clipboard',
    duration: 1.5,
  });

const COPY_ERROR = () =>
  notification.error({
    title: 'Error',
    body: 'Failed to copy',
    duration: 1.5,
  });

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    iconSize: { control: 'number' },
    contained: { control: 'boolean' },
  },
  args: {
    value: '0x96789C2b0f47B3F7BbEcbB5C12a2d0eA5d9afd89',
    prefixCls: 'copy',
    onSuccess: COPY_SUCCESS,
    onError: COPY_ERROR,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Copy>;

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <p style={{ marginBottom: 8 }}>Default</p>
        <Copy {...args} contained/>
      </div>
      <div>
        <Copy {...args} contained={false} />
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
