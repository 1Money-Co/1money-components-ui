import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Cell } from './index';

import './style';

const meta: Meta<typeof Cell> = {
  title: 'Components/Cell',
  component: Cell,
  argTypes: {
    active: { control: 'boolean' },
    disabled: { control: 'boolean' },
    iconStart: { control: 'text' },
    iconEnd: { control: 'text' },
    children: { control: 'text' },
  },
  args: {
    active: false,
    disabled: false,
    iconStart: 'security',
    iconEnd: 'arrowRight',
    children: 'Authenticator app',
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Cell>;

const CELL_PREVIEW_WIDTH = 340;
const previewStackStyle: React.CSSProperties = {
  width: CELL_PREVIEW_WIDTH,
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
};

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const AllStates: Story = {
  render: (args) => (
    <div style={previewStackStyle}>
      <Cell {...args}>Authenticator app</Cell>
      <Cell {...args} className="om-component-ui-cell-hovered">
        Authenticator app
      </Cell>
      <Cell {...args} active>
        Authenticator app
      </Cell>
      <Cell {...args} disabled>
        Authenticator app
      </Cell>
    </div>
  ),
  args: {
    active: false,
    disabled: false,
  },
  tags: ['!autodocs', 'dev'],
};
