import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './index';

import './style';

const SIZES = ['large', 'small'] as const;

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    className: { control: 'text' },
    prefixCls: { control: 'text' },
    size: { control: 'radio', options: [...SIZES] },
    disabled: { control: 'boolean' },
    showButtonBar: { control: 'boolean' },
    invalid: { control: 'boolean' },
    appendTo: { control: 'radio', options: ['self', null] },
    contentWidth: { control: 'text' },
  },
  args: {
    size: 'large',
    disabled: false,
    invalid: false,
    appendTo: null,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Primary: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Date of Incorporation',
    message: '',
    required: true,
    invalid: false,
    success: false,
  },
};

export const Range: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Date Range',
    required: true,
    selectionMode: 'range',
    numberOfMonths: 2,
  },
};

export const Multiple: Story = {
  args: {
    size: 'large',
    disabled: false,
    label: 'Select Multiple Dates',
    required: true,
    selectionMode: 'multiple',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {SIZES.map(size => (
        <div key={size}>
          <h3 style={{ marginBottom: 12 }}>{size}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Calendar
              size={size}
              label="Default"
              required
              appendTo={null}
            />
            <Calendar
              size={size}
              label="Disabled"
              disabled
              appendTo={null}
            />
            <Calendar
              size={size}
              label="Invalid"
              invalid
              message="This field is required"
              appendTo={null}
            />
            <Calendar
              size={size}
              label="Success"
              success
              message="Looks good!"
              appendTo={null}
            />
          </div>
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
