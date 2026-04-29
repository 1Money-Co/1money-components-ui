import React, { useState } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { NavigationStepper } from './NavigationStepper';
import type { NavigationStepperStep } from './interface';

import './style';

const meta: Meta<typeof NavigationStepper> = {
  title: 'Components/NavigationStepper',
  component: NavigationStepper,
  argTypes: {},
  args: {
    onLogoClick: fn(),
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ height: 800, display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NavigationStepper>;

// ── Default: matches the original onboarding flow ──
export const Default: Story = {
  args: {
    steps: [
      { key: '1', label: '1. Business Overview', status: 'done' },
      { key: '2', label: '2. Business Address', status: 'active' },
      { key: '3', label: '3. Tax Information', status: 'done-active' },
      { key: '4', label: '4. Business Details', status: 'todo' },
      { key: '5', label: '5. Compliance Details', status: 'todo', disabled: true },
    ],
    footer: <span>Auto-saved at 12:30, 25 Jan 2025</span>,
  },
};

// ── Interactive: click a step to advance ──
const InteractiveTemplate = () => {
  const labels = [
    '1. Business Overview',
    '2. Business Address',
    '3. Tax Information',
    '4. Business Details',
    '5. Compliance Details',
  ];
  const [activeKey, setActiveKey] = useState('2');

  const steps: NavigationStepperStep[] = labels.map((label, i) => {
    const key = String(i + 1);
    const activeIndex = labels.findIndex((_, j) => String(j + 1) === activeKey);
    let status: NavigationStepperStep['status'];
    if (key === activeKey) status = 'active';
    else if (i < activeIndex) status = 'done';
    else status = 'todo';

    return {
      key,
      label,
      status,
      onClick: ({ key: clicked }) => setActiveKey(clicked),
    };
  });

  return <NavigationStepper steps={steps} footer={<span>Auto-saved at 12:30, 25 Jan 2025</span>} />;
};

export const Interactive: Story = {
  render: () => <InteractiveTemplate />,
};

// ── Status matrix: every status side-by-side ──
export const StatusMatrix: Story = {
  args: {
    steps: [
      { key: 'todo', label: 'todo', status: 'todo' },
      { key: 'active', label: 'active', status: 'active' },
      { key: 'done', label: 'done', status: 'done' },
      { key: 'done-active', label: 'done-active', status: 'done-active' },
      { key: 'disabled', label: 'disabled', status: 'todo', disabled: true },
    ],
  },
};

// ── No footer ──
export const WithoutFooter: Story = {
  args: {
    steps: [
      { key: '1', label: '1. Identity', status: 'done' },
      { key: '2', label: '2. Verification', status: 'active' },
      { key: '3', label: '3. Review', status: 'todo' },
    ],
  },
};
