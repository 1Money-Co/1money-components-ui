import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './index';

import './style';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    disabled: { control: 'boolean' },
    showLabel: { control: 'boolean' },
    showDescription: { control: 'boolean' },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    valuePrefix: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    disabled: false,
    showLabel: true,
    showDescription: true,
    min: 0,
    max: 100,
    step: 1,
    valuePrefix: '$',
    label: 'Label',
    description: 'Description',
    onChange: fn(),
    onChangeEnd: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 40,
  },
};

export const NotStarted: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithCustomFormat: Story = {
  args: {
    defaultValue: 50,
    formatValue: (val) => `${val}%`,
    valuePrefix: '',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 400 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Not Started</h3>
        <Slider
          label="Label"
          description="Description"
          valuePrefix="$"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default (value=40)</h3>
        <Slider
          label="Label"
          description="Description"
          valuePrefix="$"
          defaultValue={40}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Disabled</h3>
        <Slider
          label="Label"
          description="Description"
          valuePrefix="$"
          disabled
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Without Label</h3>
        <Slider
          description="Description"
          showLabel={false}
          defaultValue={60}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Without Description</h3>
        <Slider
          label="Label"
          valuePrefix="$"
          showDescription={false}
          defaultValue={75}
        />
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
