import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './index';

import './style';

const LABEL_PLACEMENTS = ['left', 'right'] as const;

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    labelPlacement: { control: 'radio', options: [...LABEL_PLACEMENTS] },
  },
  args: {
    disabled: false,
    labelPlacement: 'left',
    onChange: fn(),
  },
  parameters: {
    docs: {
      source: { type: 'code' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: args => <Switch {...args} label="Label" />,
};

export const WithDescription: Story = {
  render: args => <Switch {...args} label="Label" description="Description" />,
};

export const Checked: Story = {
  render: args => <Switch {...args} label="Label" defaultChecked />,
};

export const Disabled: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch {...args} label="Unchecked disabled" disabled />
      <Switch {...args} label="Checked disabled" disabled defaultChecked />
    </div>
  ),
};

export const LabelRight: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Switch {...args} label="Label" description="Description" labelPlacement="right" />
      <Switch {...args} label="Label" description="Description" labelPlacement="right" defaultChecked />
    </div>
  ),
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Label Left (Default)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Switch {...args} label="Label" description="Description" />
          <Switch {...args} label="Label" description="Description" defaultChecked />
          <Switch {...args} label="Label" description="Description" disabled />
          <Switch {...args} label="Label" description="Description" disabled defaultChecked />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Label Right</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Switch {...args} label="Label" description="Description" labelPlacement="right" />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" defaultChecked />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" disabled />
          <Switch {...args} label="Label" description="Description" labelPlacement="right" disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
