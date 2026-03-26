import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

import './style';

const STATUSES = ['info', 'success', 'warning', 'error'] as const;

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    status: { control: 'radio', options: [...STATUSES] },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
  },
  args: {
    status: 'info',
    closable: true,
    showIcon: true,
    title: 'Title',
    body: 'Body text.',
    link: { label: 'Link', onClick: fn() },
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      {STATUSES.map(status => (
        <Alert {...args} key={status} status={status} />
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const Info: Story = {
  args: {
    status: 'info',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const WithAction: Story = {
  args: {
    status: 'info',
    action: <button type="button" style={{ fontSize: 12, padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer' }}>Button</button>,
  },
};

export const TitleOnly: Story = {
  args: {
    title: 'Alert with title only',
    body: undefined,
    link: undefined,
  },
};

export const NoCLose: Story = {
  args: {
    closable: false,
  },
};
