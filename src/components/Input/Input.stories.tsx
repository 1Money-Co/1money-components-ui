import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './index';

import './style';

const SIZES = ['large', 'small'] as const;
const STATUSES = ['default', 'error', 'warning', 'success'] as const;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    size: { control: 'radio', options: [...SIZES] },
    status: { control: 'radio', options: [...STATUSES] },
    label: { control: 'text' },
    description: { control: 'text' },
    feedback: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: {
    disabled: false,
    allowClear: true,
    size: 'large',
    status: 'default',
    label: 'Label',
    description: 'Description',
    feedback: 'Feedback',
    placeholder: 'Value',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {SIZES.map((size) => (
        <div key={size} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h3 style={{ margin: 0 }}>{size}</h3>
          {STATUSES.map((status) => (
            <Input
              {...args}
              key={`${size}-${status}`}
              size={size}
              status={status}
            />
          ))}
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const Default: Story = {};

export const Error: Story = {
  args: {
    status: 'error',
    feedback: 'This field is required',
  },
};

export const WithPrefixSuffix: Story = {
  args: {
    defaultValue: '100',
    prefix: <span>USD</span>,
    suffix: <span>Max</span>,
  },
};

export const Password: Story = {
  render: (args) => <Input.Password {...args} defaultValue="secret" />,
};

export const Search: Story = {
  render: (args) => (
    <Input.Search
      {...args}
      defaultValue="USDT"
      onSearch={fn()}
    />
  ),
};

export const TextArea: Story = {
  render: (args) => (
    <Input.TextArea
      {...args}
      defaultValue="Longer memo value"
      rows={4}
      showCount
      maxLength={120}
    />
  ),
};

export const OTP: Story = {
  render: (args) => (
    <Input.OTP
      {...args}
      length={6}
      defaultValue="123"
      onComplete={fn()}
    />
  ),
};
