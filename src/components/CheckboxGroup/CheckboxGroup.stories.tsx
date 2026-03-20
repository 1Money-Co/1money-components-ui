import React, { useState } from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from './index';

import './style';

const OPTIONS = [
  {
    label: 'Apple',
    value: 'apple',
  },
  {
    label: 'Pear',
    value: 'pear',
  },
  {
    label: 'Orange',
    value: 'orange',
    disabled: true,
  },
] as const;

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  argTypes: {
    disabled: { control: 'boolean' },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
  args: {
    disabled: false,
    orientation: 'horizontal',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

export const WithOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<Array<string | number>>(['apple']);

    return (
      <CheckboxGroup
        {...args}
        options={OPTIONS.map((option) => ({ ...option }))}
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
          args.onChange?.(nextValue);
        }}
      />
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    options: OPTIONS.map((option) => ({ ...option })),
    defaultValue: ['pear'],
  },
};

export const WithChildren: Story = {
  render: (args) => {
    const [value, setValue] = useState<Array<string | number>>(['beta']);

    return (
      <CheckboxGroup
        {...args}
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
          args.onChange?.(nextValue);
        }}
      >
        <Checkbox value="alpha" label="Alpha" />
        <Checkbox value="beta" label="Beta" />
        <Checkbox value="gamma" label="Gamma" disabled />
      </CheckboxGroup>
    );
  },
  tags: ['!autodocs', 'dev'],
};
