import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Segment } from './index';

import './style';

const meta: Meta<typeof Segment> = {
  title: 'Components/Segment',
  component: Segment,
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Segment>;

const DEFAULT_ITEMS = [
  { value: 'overview', label: 'Overview' },
  { value: 'transactions', label: 'Transactions' },
  { value: 'analytics', label: 'Analytics' },
];

export const Default: Story = {
  render: () => <Segment items={DEFAULT_ITEMS} />,
};

export const WithDefaultValue: Story = {
  render: () => <Segment defaultValue="transactions" items={DEFAULT_ITEMS} />,
};

export const WithDisabled: Story = {
  render: () => (
    <Segment
      items={[
        { value: 'tab1', label: 'Overview' },
        { value: 'tab2', label: 'Transactions' },
        { value: 'tab3', label: 'Analytics', disabled: true },
        { value: 'tab4', label: 'Settings' },
      ]}
    />
  ),
};

export const FiveItems: Story = {
  render: () => (
    <Segment
      items={[
        { value: 'tab1', label: 'Label' },
        { value: 'tab2', label: 'Label' },
        { value: 'tab3', label: 'Label' },
        { value: 'tab4', label: 'Label' },
        { value: 'tab5', label: 'Label' },
      ]}
    />
  ),
};

export const NoAnimation: Story = {
  render: () => <Segment items={DEFAULT_ITEMS} animated={false} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default (3 items)</h3>
        <Segment items={DEFAULT_ITEMS} />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>5 items</h3>
        <Segment
          items={[
            { value: '1', label: 'Label' },
            { value: '2', label: 'Label' },
            { value: '3', label: 'Label' },
            { value: '4', label: 'Label' },
            { value: '5', label: 'Label' },
          ]}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With disabled item</h3>
        <Segment
          items={[
            { value: '1', label: 'Active' },
            { value: '2', label: 'Normal' },
            { value: '3', label: 'Disabled', disabled: true },
          ]}
        />
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
