import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';

import './style';

const DIRECTIONS = ['left', 'right'] as const;

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    direction: { control: 'radio', options: [...DIRECTIONS] },
    label: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    disabled: false,
    direction: 'left',
    label: 'Label',
    description: 'Description',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {DIRECTIONS.map((direction) => (
        <div key={direction}>
          <h3 style={{ marginBottom: 12 }}>Direction: {direction}</h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Default states */}
            <div style={{ display: 'flex', gap: 24 }}>
              <Checkbox
                {...args}
                direction={direction}
                label="Unchecked"
              />
              <Checkbox
                {...args}
                direction={direction}
                defaultChecked
                label="Checked"
              />
              <Checkbox
                {...args}
                direction={direction}
                indeterminate
                label="Indeterminate"
              />
            </div>
            {/* Disabled states */}
            <div style={{ display: 'flex', gap: 24 }}>
              <Checkbox
                {...args}
                direction={direction}
                disabled
                label="Disabled"
              />
              <Checkbox
                {...args}
                direction={direction}
                checked
                disabled
                label="Disabled Checked"
              />
              <Checkbox
                {...args}
                direction={direction}
                indeterminate
                disabled
                label="Disabled Indeterminate"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  args: {
    label: undefined,
    description: 'Description',
  },
  tags: ['!autodocs', 'dev'],
};

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'Description',
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    label: 'Label',
    description: 'Description',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Label',
    description: 'Description',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Label',
    description: 'Description',
  },
};

export const DisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Label',
    description: 'Description',
  },
};

export const DirectionRight: Story = {
  args: {
    defaultChecked: true,
    direction: 'right',
    label: 'Label',
    description: 'Description',
  },
};

export const WithoutDescription: Story = {
  args: {
    defaultChecked: true,
    label: 'Label only',
    description: undefined,
  },
};

export const WithoutLabel: Story = {
  args: {
    defaultChecked: true,
    label: undefined,
    description: undefined,
    'aria-label': 'Checkbox without visible label',
  },
};
