import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './index';

import './style';

const LABEL_PLACEMENTS = ['left', 'right'] as const;

const columnStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 32 };
const sectionHeaderStyle: React.CSSProperties = { marginBottom: 12 };
const sectionBodyStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 16 };
const rowStyle: React.CSSProperties = { display: 'flex', gap: 24 };

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    defaultChecked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    labelPlacement: { control: 'radio', options: [...LABEL_PLACEMENTS] },
    label: { control: 'text' },
    description: { control: 'text' },
  },
  args: {
    disabled: false,
    labelPlacement: 'left',
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
    <div style={columnStyle}>
      {LABEL_PLACEMENTS.map((placement) => (
        <div key={placement}>
          <h3 style={sectionHeaderStyle}>Label Placement: {placement}</h3>
          <div style={sectionBodyStyle}>
            {/* Default states */}
            <div style={rowStyle}>
              <Checkbox
                {...args}
                labelPlacement={placement}
                label="Unchecked"
              />
              <Checkbox
                {...args}
                labelPlacement={placement}
                defaultChecked
                label="Checked"
              />
              <Checkbox
                {...args}
                labelPlacement={placement}
                indeterminate
                label="Indeterminate"
              />
            </div>
            {/* Disabled states */}
            <div style={rowStyle}>
              <Checkbox
                {...args}
                labelPlacement={placement}
                disabled
                label="Disabled"
              />
              <Checkbox
                {...args}
                labelPlacement={placement}
                checked
                disabled
                label="Disabled Checked"
              />
              <Checkbox
                {...args}
                labelPlacement={placement}
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

export const LabelPlacementRight: Story = {
  args: {
    defaultChecked: true,
    labelPlacement: 'right',
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
