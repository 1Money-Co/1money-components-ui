import React from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './index';

import './style';
import '../Icons/style';

const PROGRESS_COLORS = ['gray', 'white'] as const;
const PROGRESS_PLACEMENTS = ['left', 'right'] as const;
const PROGRESS_STATES = ['default', 'success', 'error', 'not-started'] as const;

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    color: { control: 'radio', options: [...PROGRESS_COLORS] },
    placement: { control: 'radio', options: [...PROGRESS_PLACEMENTS] },
    state: { control: 'radio', options: [...PROGRESS_STATES] },
    showInfo: { control: 'boolean' },
  },
  args: {
    percent: 25,
    color: 'gray',
    placement: 'left',
    showInfo: true,
    onClick: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Success: Story = {
  args: {
    percent: 100,
  },
};

export const Error: Story = {
  args: {
    percent: 25,
    state: 'error',
    feedback: 'Feedback',
  },
};

export const WhiteTrack: Story = {
  args: {
    percent: 25,
    color: 'white',
  },
};

export const RightAlignedInfo: Story = {
  args: {
    percent: 25,
    placement: 'right',
  },
};

export const CustomFormat: Story = {
  args: {
    percent: 25,
    format: percent => `Loaded ${percent}%`,
  },
};

export const HiddenInfo: Story = {
  args: {
    percent: 25,
    showInfo: false,
  },
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {PROGRESS_COLORS.map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ margin: 0 }}>{color}</h3>
          {PROGRESS_PLACEMENTS.map(placement => (
            <div key={`${color}-${placement}`} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h4 style={{ margin: 0 }}>{placement}</h4>
              {PROGRESS_STATES.map(state => (
                <Progress
                  {...args}
                  key={`${color}-${placement}-${state}`}
                  color={color}
                  placement={placement}
                  state={state}
                  percent={state === 'success' ? 100 : state === 'not-started' ? 0 : 25}
                  feedback={state === 'error' ? 'Feedback' : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
