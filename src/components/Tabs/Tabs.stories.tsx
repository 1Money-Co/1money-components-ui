import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './index';

import './style';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    activeKey: { control: 'text' },
  },
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const DEFAULT_ITEMS = [
  { key: 'tab1', label: 'Overview' },
  { key: 'tab2', label: 'Transactions' },
  { key: 'tab3', label: 'Analytics' },
  { key: 'tab4', label: 'Settings' },
  { key: 'tab5', label: 'Reports' },
];

export const Default: Story = {
  render: () => <Tabs items={DEFAULT_ITEMS} />,
};

export const WithBadges: Story = {
  render: () => (
    <Tabs
      items={[
        { key: 'tab1', label: 'Overview', badge: 5 },
        { key: 'tab2', label: 'Transactions', badge: 12 },
        { key: 'tab3', label: 'Analytics' },
        { key: 'tab4', label: 'Settings', badge: 3 },
      ]}
    />
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs
      items={[
        { key: 'tab1', label: 'Overview' },
        { key: 'tab2', label: 'Transactions' },
        { key: 'tab3', label: 'Analytics', disabled: true },
        { key: 'tab4', label: 'Settings' },
      ]}
    />
  ),
};

export const WithContent: Story = {
  render: () => (
    <Tabs
      defaultActiveKey="tab1"
      items={[
        { key: 'tab1', label: 'Overview', children: <div>Overview content goes here</div> },
        { key: 'tab2', label: 'Transactions', children: <div>Transactions content goes here</div> },
        { key: 'tab3', label: 'Analytics', children: <div>Analytics content goes here</div> },
      ]}
    />
  ),
};

export const NoAnimation: Story = {
  render: () => <Tabs items={DEFAULT_ITEMS} animated={false} />,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default</h3>
        <Tabs
          items={[
            { key: 'tab1', label: 'Label' },
            { key: 'tab2', label: 'Label' },
            { key: 'tab3', label: 'Label' },
          ]}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With Badges</h3>
        <Tabs
          items={[
            { key: 'tab1', label: 'Label', badge: 10 },
            { key: 'tab2', label: 'Label', badge: 5 },
            { key: 'tab3', label: 'Label', badge: 20 },
          ]}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With Disabled</h3>
        <Tabs
          items={[
            { key: 'tab1', label: 'Label' },
            { key: 'tab2', label: 'Label', disabled: true },
            { key: 'tab3', label: 'Label' },
          ]}
        />
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
