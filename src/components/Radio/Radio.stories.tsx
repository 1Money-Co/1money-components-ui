import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './index';

import './style';

const DIRECTIONS = ['left', 'right'] as const;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    direction: { control: 'radio', options: [...DIRECTIONS] },
    label: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    disabled: false,
    checked: false,
    direction: 'left',
    label: 'Radio label',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" />
          <Radio label="Checked" checked />
          <Radio label="Disabled unchecked" disabled />
          <Radio label="Disabled checked" checked disabled />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With Description</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" description="Helper text" />
          <Radio label="Checked" description="Helper text" checked />
          <Radio
            label="Disabled unchecked"
            description="Helper text"
            disabled
          />
          <Radio
            label="Disabled checked"
            description="Helper text"
            checked
            disabled
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Direction: Right</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" direction="right" />
          <Radio label="Checked" direction="right" checked />
          <Radio
            label="With description"
            description="Helper text"
            direction="right"
          />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio label="Unchecked" />
      <Radio label="Checked" checked />
      <Radio label="Disabled unchecked" disabled />
      <Radio label="Disabled checked" checked disabled />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio label="Option 1" description="Description for option 1" />
      <Radio
        label="Option 2"
        description="Description for option 2"
        checked
      />
    </div>
  ),
};

// ── RadioGroup Stories ──

export const GroupBasic: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    return (
      <RadioGroup value={value} onChange={setValue}>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
        <Radio value="c" label="Option C" />
      </RadioGroup>
    );
  },
};

export const GroupWithOptions: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('email');
    return (
      <RadioGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'email', label: 'Email', description: 'Receive via email' },
          { value: 'sms', label: 'SMS', description: 'Receive via text message' },
          { value: 'push', label: 'Push notification', description: 'Receive on your device' },
        ]}
      />
    );
  },
};

export const GroupHorizontal: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('sm');
    return (
      <RadioGroup value={value} onChange={setValue} layout="horizontal">
        <Radio value="sm" label="Small" />
        <Radio value="md" label="Medium" />
        <Radio value="lg" label="Large" />
      </RadioGroup>
    );
  },
};

export const GroupDisabled: Story = {
  render: () => (
    <RadioGroup value="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupDirectionRight: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    return (
      <RadioGroup value={value} onChange={setValue} direction="right">
        <Radio value="a" label="Option A" description="Description A" />
        <Radio value="b" label="Option B" description="Description B" />
      </RadioGroup>
    );
  },
};
