import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { CoachMark } from './index';
import type { CoachMarkPlacement } from './interface';

import './style';

const PLACEMENTS = ['top', 'bottom', 'left', 'right'] as const;

const meta: Meta<typeof CoachMark> = {
  title: 'Components/CoachMark',
  component: CoachMark,
  argTypes: {
    placement: { control: 'select', options: PLACEMENTS },
    dismissible: { control: 'boolean' },
  },
  args: {
    steps: [
      { heading: 'Text Heading', body: 'Body text that describes this feature in detail.' },
      { heading: 'Second Step', body: 'More details about this feature.' },
    ],
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

export const Default: Story = {
  args: {
    steps: [
      { icon: <span style={{ fontSize: 24 }}>👋</span>, heading: 'Welcome', body: 'Get started with the dashboard.' },
      { icon: <span style={{ fontSize: 24 }}>🔍</span>, heading: 'Search', body: 'Find anything quickly.' },
      { icon: <span style={{ fontSize: 24 }}>💳</span>, heading: 'Balance', body: 'Track all accounts.' },
    ],
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, padding: 60 }}>
      {PLACEMENTS.map((p: CoachMarkPlacement) => (
        <div key={p} style={{ display: 'flex', justifyContent: 'center' }}>
          <CoachMark
            steps={[
              { icon: <span style={{ fontSize: 24 }}>👋</span>, heading: 'Welcome', body: 'Get started with the dashboard.' },
              { icon: <span style={{ fontSize: 24 }}>🔍</span>, heading: 'Search', body: 'Find anything quickly.' },
              { icon: <span style={{ fontSize: 24 }}>💳</span>, heading: 'Balance', body: 'Track all accounts.' },
            ]}
            placement={p}
          />
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
