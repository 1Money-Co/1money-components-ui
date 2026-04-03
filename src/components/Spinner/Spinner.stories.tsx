import React from 'react';
import { Spinner } from './index';
import './style';
import type { Meta, StoryObj } from '@storybook/react';

const TYPES = ['default', 'brand', 'brand-bg'] as const;

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    type: { control: 'radio', options: [...TYPES] },
    size: { control: 'number' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    type: 'default',
    size: 32,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3>Default</h3>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <Spinner size={20} />
          <Spinner size={32} />
          <Spinner size={48} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3>Brand</h3>
        <Spinner type="brand" size={32} title="Loading" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3>Brand + BG</h3>
        <Spinner type="brand-bg" size={74} title="Loading" body="Body text" />
      </div>
    </div>
  ),
};
