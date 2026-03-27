import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Icons } from '@/components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';

import './style';

const OPTIONS = [
  { label: 'Bitcoin', value: 'btc' },
  { label: 'Ethereum', value: 'eth' },
  { label: 'USDT', value: 'usdt' },
  { label: 'USD Coin', value: 'usdc' },
  { label: 'Solana', value: 'sol' },
  { label: 'Dogecoin', value: 'doge' },
  { label: 'Cardano', value: 'ada' },
  { label: 'Polygon', value: 'matic' },
] as const;

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    size: { control: 'radio', options: ['large', 'small'] },
    status: { control: 'radio', options: ['default', 'error', 'warning', 'success'] },
    variant: { control: 'radio', options: ['fill', 'stroke', 'frameless'] },
  },
  args: {
    label: 'Label',
    placeholder: 'Value',
    options: OPTIONS.map((option) => ({ ...option })),
    size: 'large',
    status: 'default',
    variant: 'fill',
    disabled: false,
    onChange: fn(),
    onOpenChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('btc');

    return (
      <Select
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue as string | number | undefined);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
};

export const Placeholder: Story = {
  args: {
    value: undefined,
  },
};

export const Stroke: Story = {
  args: {
    variant: 'stroke',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    value: 'eth',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    feedback: 'Feedback',
    value: undefined,
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<Array<string | number>>([
      'btc',
      'eth',
      'usdt',
      'usdc',
      'sol',
      'doge',
      'ada',
      'matic',
    ]);

    return (
      <Select
        {...args}
        multiple
        value={value}
        onChange={(nextValue, option) => {
          setValue((nextValue as Array<string | number>) ?? []);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    placeholder: 'Select assets',
    size: 'small',
  },
};

export const Frameless: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('btc');

    return (
      <Select
        {...args}
        value={value}
        variant="frameless"
        prefix={<Icons name="usd" size={24} color="currentColor" />}
        onChange={(nextValue, option) => {
          setValue(nextValue as string | number | undefined);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    label: undefined,
    placeholder: 'Currency',
  },
  tags: ['!autodocs', 'dev'],
};
