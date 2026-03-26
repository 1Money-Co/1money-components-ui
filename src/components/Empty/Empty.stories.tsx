import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from './index';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';

import './style';

const VARIANTS = ['stroke', 'fill'] as const;

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  argTypes: {
    variant: { control: 'radio', options: [...VARIANTS] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Empty>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {VARIANTS.map((variant) => (
        <div key={variant}>
          <h3 style={{ marginBottom: 12 }}>{variant}</h3>
          <Empty {...args} variant={variant} />
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const StrokeWithTitle: Story = {
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for',
  },
};

export const StrokeWithoutTitle: Story = {
  args: {
    variant: 'stroke',
    icon: 'transactions',
    title: undefined,
    description: 'Try adjusting your filters to find the record you are looking for',
  },
};

export const FillVariant: Story = {
  args: {
    variant: 'fill',
    icon: 'transactions',
    title: 'No record found',
    description: 'Try adjusting your filters to find the record you are looking for',
  },
};

export const WithAction: Story = {
  args: {
    variant: 'stroke',
    icon: 'bank',
    title: undefined,
    description: "You don't have any bank accounts linked",
    action: (
      <Button
        color="primary"
        size="medium"
        iconStart={<Icons name="add" size={20} color="currentColor" />}
      >
        Add new bank account
      </Button>
    ),
  },
};

export const CustomIcon: Story = {
  args: {
    variant: 'stroke',
    icon: <Icons name="bank" size={24} color="#646465" />,
    title: undefined,
    description: "You don't have any bank accounts linked",
  },
};
