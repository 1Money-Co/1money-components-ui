import React, { useState } from 'react';

import type { CSSProperties, FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './index';
import type { TooltipPlacement } from './interface';

import './style';

const PLACEMENTS: TooltipPlacement[] = [
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

const ANCHOR_WRAPPER_STYLE: CSSProperties = {
  padding: 80,
  textAlign: 'center',
};

const CONTROL_ROW_STYLE: CSSProperties = {
  marginTop: 16,
  display: 'flex',
  gap: 8,
  justifyContent: 'center',
};

const PREVIEW_GRID_STYLE: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: 24,
  alignItems: 'start',
  width: '100%',
  maxWidth: 960,
};

const PREVIEW_CARD_STYLE: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  background: '#f8fafc',
  border: '1px dashed #d7dee7',
  borderRadius: 12,
};

const PREVIEW_LABEL_STYLE: CSSProperties = {
  margin: 0,
  color: '#55606f',
  fontSize: 12,
  fontWeight: 600,
  lineHeight: '16px',
  textAlign: 'left',
};

const PREVIEW_FRAME_STYLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 180,
  padding: 32,
};

const LONG_BODY =
  'This is a long tooltip body used to verify the maximum width, text wrapping, and spacing between title and body in the design system.';

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

interface TooltipPreviewCardProps {
  body: string;
  label: string;
  placement?: TooltipPlacement;
  title?: string;
}

const TooltipPreviewCard: FC<TooltipPreviewCardProps> = ({
  label,
  title,
  body,
  placement = 'top',
}) => {
  const storyId = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const anchorId = `tooltip-preview-anchor-${storyId}`;

  return (
    <div style={PREVIEW_CARD_STYLE}>
      <p style={PREVIEW_LABEL_STYLE}>{label}</p>
      <div style={PREVIEW_FRAME_STYLE}>
        <button id={anchorId}>Anchor</button>
        <Tooltip
          id={`tooltip-preview-${storyId}`}
          anchorSelect={`#${anchorId}`}
          open
          placement={placement}
          title={title}
          body={body}
        />
      </div>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-default">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-default" />
    </div>
  ),
  args: {
    body: 'Tooltip body text',
  },
};

export const WithTitle: Story = {
  render: (args) => (
    <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-title">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-title" />
    </div>
  ),
  args: {
    title: 'Tooltip title',
    body: 'Tooltip body text with more detail.',
  },
};

export const NoArrow: Story = {
  render: (args) => (
    <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-no-arrow">Hover me</button>
      <Tooltip {...args} anchorSelect="#tooltip-no-arrow" />
    </div>
  ),
  args: {
    body: 'Tooltip without arrow',
    arrow: false,
  },
};

export const ClickTrigger: Story = {
  render: (args) => (
    <div style={ANCHOR_WRAPPER_STYLE}>
      <button id="tooltip-click">Click me</button>
      <Tooltip
        {...args}
        anchorSelect="#tooltip-click"
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
      <div style={ANCHOR_WRAPPER_STYLE}>
        <button id="tooltip-controlled">Anchor</button>
        <div style={CONTROL_ROW_STYLE}>
          <button onClick={() => setOpen(true)}>Open</button>
          <button onClick={() => setOpen(false)}>Close</button>
          <button onClick={() => setOpen((v) => !v)}>Toggle</button>
        </div>
        <Tooltip
          anchorSelect="#tooltip-controlled"
          title="Controlled"
          body="This tooltip is controlled externally."
          open={open}
          onOpenChange={setOpen}
        />
      </div>
    );
  },
};

export const VisualSpec: Story = {
  render: () => (
    <div style={PREVIEW_GRID_STYLE}>
      <TooltipPreviewCard label="Title + body / left aligned" title="Title" body="Body text" />
      <TooltipPreviewCard label="Minimum width 48px" body="Hi" />
      <TooltipPreviewCard label="Maximum width 400px on web" title="Long title" body={LONG_BODY} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Always-open design spec preview for left alignment, minimum width, and desktop maximum width.',
      },
    },
  },
};

export const H5WidthSpec: Story = {
  render: () => (
    <TooltipPreviewCard
      label="Maximum width 300px on H5"
      title="Long title"
      body={LONG_BODY}
    />
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      description: {
        story: 'Switches to a mobile viewport so the tooltip max width drops from 400px to 300px.',
      },
    },
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
          <button id={`tooltip-${placement}`}>{placement}</button>
          <Tooltip {...args} placement={placement} anchorSelect={`#tooltip-${placement}`} />
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
