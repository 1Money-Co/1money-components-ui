import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './index';
import type { TooltipBetaPlacement } from './interface';

import './style';

const PLACEMENTS: TooltipBetaPlacement[] = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
];

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: { control: 'select', options: PLACEMENTS },
    title: { control: 'text' },
    body: { control: 'text' },
    arrow: { control: 'boolean' },
  },
  args: {
    body: 'Tooltip body text',
    placement: 'top',
    arrow: true,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <button id="tooltip-beta-default">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-beta-default" />
    </div>
  ),
  args: {
    body: 'Tooltip body text',
  },
};

export const WithTitle: Story = {
  render: (args) => (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <button id="tooltip-beta-title">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-beta-title" />
    </div>
  ),
  args: {
    title: 'Tooltip title',
    body: 'Tooltip body text with more detail.',
  },
};

export const NoArrow: Story = {
  render: (args) => (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <button id="tooltip-beta-no-arrow">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-beta-no-arrow" />
    </div>
  ),
  args: {
    body: 'Tooltip without arrow',
    arrow: false,
  },
};

export const ClickTrigger: Story = {
  render: (args) => (
    <div style={{ padding: 80, textAlign: 'center' }}>
      <button id="tooltip-beta-click">Click me</button>
      <Tooltip
        {...args}
        anchorSelect="#tooltip-beta-click"
        openEvents={{ click: true, mouseover: false, mouseenter: false, focus: false }}
        closeEvents={{ click: true, mouseleave: false, mouseout: false, blur: false }}
      />
    </div>
  ),
  args: {
    title: 'Click tooltip',
    body: 'This tooltip is triggered by click.',
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: 80, textAlign: 'center' }}>
        <button id="tooltip-beta-controlled">Anchor</button>
        <div style={{ marginTop: 16, display: 'flex', gap: 8, justifyContent: 'center' }}>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => setOpen(false)}>Close</button>
          <button onClick={() => setOpen((v) => !v)}>Toggle</button>
        </div>
        <Tooltip
          anchorSelect="#tooltip-beta-controlled"
          title="Controlled"
          body="This tooltip is controlled externally."
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const AllPlacements: Story = {
  render: (args) => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 48,
        padding: 120,
        textAlign: 'center',
      }}
    >
      {PLACEMENTS.map((placement) => (
        <div key={placement}>
          <button id={`tooltip-beta-${placement}`}>{placement}</button>
          <Tooltip {...args} placement={placement} anchorSelect={`#tooltip-beta-${placement}`} />
        </div>
      ))}
    </div>
  ),
  args: {
    title: 'Title',
    body: 'Body text',
  },
  tags: ['!autodocs', 'dev'],
};
