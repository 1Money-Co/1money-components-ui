import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { CoachMark } from './index';
import { Icons } from '@/components/Icons';
import type { CoachMarkPlacement } from './interface';

import './style';

const PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;

const meta: Meta<typeof CoachMark> = {
  title: 'Components/CoachMark',
  component: CoachMark,
  argTypes: {
    placement: {
      control: 'select',
      options: PLACEMENTS,
    },
    steps: { control: { type: 'number', min: 1, max: 10 } },
    dismissible: { control: 'boolean' },
  },
  args: {
    heading: 'Text Heading',
    body: 'Body text that describes this feature in detail.',
    steps: 4,
    defaultActiveStep: 0,
    dismissible: true,
    placement: 'top',
    onChange: fn(),
    onFinish: fn(),
    onDismiss: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CoachMark>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <Icons name="dashboard" size={24} />,
  },
};

export const MiddleStep: Story = {
  args: {
    defaultActiveStep: 1,
    icon: <Icons name="dashboard" size={24} />,
  },
};

export const LastStep: Story = {
  args: {
    defaultActiveStep: 3,
    icon: <Icons name="dashboard" size={24} />,
  },
};

export const SingleStep: Story = {
  args: {
    steps: 1,
    heading: 'Welcome!',
    body: 'This is a single-step coach mark.',
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, padding: 60 }}>
      {PLACEMENTS.map((placement: CoachMarkPlacement) => (
        <div key={placement} style={{ display: 'flex', justifyContent: 'center' }}>
          <CoachMark
            heading="Text Heading"
            body="Body text"
            steps={4}
            defaultActiveStep={1}
            placement={placement}
            icon={<Icons name="dashboard" size={24} />}
          />
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const AllSequences: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, alignItems: 'center' }}>
      <div>
        <h3 style={{ marginBottom: 16, color: '#666' }}>First Step (Back disabled)</h3>
        <CoachMark
          heading="Text Heading"
          body="Body text"
          steps={4}
          defaultActiveStep={0}
          icon={<Icons name="dashboard" size={24} />}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, color: '#666' }}>Middle Step</h3>
        <CoachMark
          heading="Text Heading"
          body="Body text"
          steps={4}
          defaultActiveStep={1}
          icon={<Icons name="dashboard" size={24} />}
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 16, color: '#666' }}>Last Step (Finish button)</h3>
        <CoachMark
          heading="Text Heading"
          body="Body text"
          steps={4}
          defaultActiveStep={3}
          icon={<Icons name="dashboard" size={24} />}
        />
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
