import React from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';

import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './index';

import './style';

const STATUSES = ['info', 'success', 'warning', 'error'] as const;

const previewStyle: React.CSSProperties = {
  maxWidth: 560,
};

const stackStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'Alert is an inline feedback surface for contextual messaging. It supports title/body content, inline links, and a right-side action that can coexist with the close button.',
      },
    },
  },
  decorators: [
    Story => (
      <div style={previewStyle}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: { control: 'radio', options: [...STATUSES] },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    title: { control: 'text' },
    body: { control: 'text' },
    action: { control: false },
    className: { control: false },
    icon: { control: false },
    onClose: { control: false },
    prefixCls: { control: false },
    ref: { control: false },
  },
  args: {
    status: 'info',
    closable: true,
    showIcon: true,
    title: 'Network connection restored',
    body: 'Background syncing has resumed and your data is up to date.',
    link: { label: 'View details', onClick: fn() },
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {};

export const AllVariants: Story = {
  render: (args) => (
    <div style={stackStyle}>
      <Alert
        {...args}
        status="info"
        title="Sync in progress"
        body="Large uploads may take a few more seconds to appear everywhere."
        link={{ label: 'See sync status', onClick: fn() }}
        closable={false}
      />
      <Alert
        {...args}
        status="success"
        title="Verification complete"
        body="Your account passed the latest security checks."
        link={{ label: 'Open audit log', onClick: fn() }}
        closable={false}
      />
      <Alert
        {...args}
        status="warning"
        title="Review payout details"
        body="One recipient is missing bank metadata and may fail on submission."
        link={{ label: 'Fix recipient', onClick: fn() }}
        closable={false}
      />
      <Alert
        {...args}
        status="error"
        title="Transfer failed"
        body="The quoted rate expired before settlement. Refresh and try again."
        link={{ label: 'Retry transfer', onClick: fn() }}
        closable={false}
      />
    </div>
  ),
  args: {
    link: undefined,
    onClose: undefined,
  },
  tags: ['!autodocs', 'dev'],
};

export const WithAction: Story = {
  render: (args) => (
    <Alert
      {...args}
      status="info"
      title="Payment instruction ready"
      body="Share the deposit instruction with your treasury team or copy it directly."
      link={{ label: 'Preview instruction', onClick: fn() }}
      action={<Button onClick={fn()}>Copy details</Button>}
      closable={false}
    />
  ),
};

export const ActionAndClose: Story = {
  render: (args) => (
    <Alert
      {...args}
      status="warning"
      title="New compliance checklist"
      body="A new checklist item is required before the next outbound transfer can be approved."
      link={{ label: 'Open checklist', onClick: fn() }}
      action={<Button onClick={fn()}>Review now</Button>}
      closable
      onClose={fn()}
    />
  ),
};

export const WithoutIcon: Story = {
  args: {
    showIcon: false,
    closable: false,
    title: 'Quiet inline message',
    body: 'Use this version when the surrounding layout already provides enough visual emphasis.',
    link: { label: 'Learn when to use it', onClick: fn() },
  },
};

export const CustomIcon: Story = {
  render: (args) => (
    <Alert
      {...args}
      status="info"
      title="Manual review queued"
      body="This alert uses a custom icon to reflect a workflow-specific state instead of the default status glyph."
      icon={<Icons name="notificationWarning" size={32} />}
      link={{ label: 'Open queue', onClick: fn() }}
    />
  ),
};

export const TitleOnly: Story = {
  args: {
    title: 'Alert with title only',
    body: undefined,
    link: undefined,
    closable: false,
  },
};

export const BodyOnly: Story = {
  args: {
    title: undefined,
    body: 'Alert with body only.',
    link: undefined,
    closable: false,
  },
};
