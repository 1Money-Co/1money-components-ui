import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Notification, NOTIFICATION_STATUSES } from './index';

import './style';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    status: { control: 'radio', options: [...NOTIFICATION_STATUSES] },
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
    body: 'You can now link multiple accounts to manage your finances all in one place.',
    onClose: fn(),
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Notification>;

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      {NOTIFICATION_STATUSES.map(status => (
        <Notification
          {...args}
          key={status}
          status={status}
          title={`${status.charAt(0).toUpperCase()}${status.slice(1)} Notification`}
        />
      ))}
    </div>
  ),
  args: {
    title: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

export const WithLink: Story = {
  args: {
    status: 'info',
    title: 'Account linked',
    body: 'Your bank account has been successfully connected.',
    link: { label: 'View details', onClick: fn() },
  },
};

export const WithHref: Story = {
  args: {
    status: 'info',
    title: 'New feature',
    body: 'You can now explore the updated help center.',
    link: {
      label: 'Open help center',
      href: 'https://example.com/help-center',
      target: '_blank',
    },
  },
};

export const BodyOnly: Story = {
  args: {
    status: 'success',
    title: undefined,
    body: 'Settings saved successfully.',
  },
};

export const NoIcon: Story = {
  args: {
    showIcon: false,
    title: 'No icon notification',
    body: 'This notification has no status icon.',
  },
};

export const NotClosable: Story = {
  args: {
    closable: false,
    status: 'warning',
    title: 'Persistent notification',
    body: 'This notification cannot be dismissed.',
  },
};
