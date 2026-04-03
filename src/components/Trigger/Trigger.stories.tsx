import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import type { Placement } from '@floating-ui/react';
import { Trigger } from './index';

import '../Button/style';
import './style';

const panelContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 160,
};

const menuItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '8px 12px',
  fontSize: 14,
  lineHeight: '20px',
  color: '#131313',
  background: 'transparent',
  border: 'none',
  borderRadius: 8,
  cursor: 'pointer',
  textAlign: 'left',
  width: '100%',
};

function MenuContent({ onClose }: { onClose?: () => void }) {
  return (
    <div style={panelContentStyle}>
      <button type="button" style={menuItemStyle} onClick={onClose}>
        Edit
      </button>
      <button type="button" style={menuItemStyle} onClick={onClose}>
        Duplicate
      </button>
      <button type="button" style={menuItemStyle} onClick={onClose}>
        Archive
      </button>
      <button
        type="button"
        style={{ ...menuItemStyle, color: '#e53935' }}
        onClick={onClose}
      >
        Delete
      </button>
    </div>
  );
}

const meta: Meta<typeof Trigger> = {
  title: 'Components/Trigger',
  component: Trigger,
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
    placement: {
      control: 'select',
      options: [
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
      ],
    },
    role: {
      control: 'select',
      options: ['dialog', 'tooltip', 'menu', 'alertdialog', 'listbox'],
    },
    showArrow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    offset: { control: 'number' },
  },
  args: {
    trigger: 'click',
    placement: 'bottom-start',
    role: 'dialog',
    showArrow: false,
    disabled: false,
    offset: 4,
    onOpenChange: fn(),
    onOpen: fn(),
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Trigger>;

export const ClickTrigger: Story = {
  render: (args) => (
    <Trigger {...args} content={<MenuContent />}>
      <Button>Click me</Button>
    </Trigger>
  ),
};

export const HoverTrigger: Story = {
  render: (args) => (
    <Trigger
      {...args}
      trigger="hover"
      hoverDelay={{ open: 100, close: 200 }}
      content={<MenuContent />}
    >
      <Button>Hover me</Button>
    </Trigger>
  ),
};

export const FocusTrigger: Story = {
  render: (args) => (
    <Trigger {...args} trigger="focus" content={<MenuContent />}>
      <Button>Focus me (Tab)</Button>
    </Trigger>
  ),
};

export const CombinedTriggers: Story = {
  render: (args) => (
    <Trigger
      {...args}
      trigger={['click', 'hover']}
      hoverDelay={{ open: 200, close: 300 }}
      content={<MenuContent />}
    >
      <Button>Click or Hover</Button>
    </Trigger>
  ),
};

export const Placements: Story = {
  render: (args) => {
    const placements: Placement[] = [
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

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          padding: 120,
          justifyContent: 'center',
        }}
      >
        {placements.map((placement) => (
          <Trigger
            {...args}
            key={placement}
            placement={placement}
            content={
              <div style={{ padding: 8, fontSize: 13, whiteSpace: 'nowrap' }}>
                {placement}
              </div>
            }
          >
            <Button size="small">{placement}</Button>
          </Trigger>
        ))}
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Trigger
          {...args}
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            args.onOpenChange?.(nextOpen);
          }}
          content={<MenuContent onClose={() => setOpen(false)} />}
        >
          <Button>Controlled</Button>
        </Trigger>
        <Button
          color="grey"
          size="small"
          onClick={() => setOpen((prev) => !prev)}
        >
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
      </div>
    );
  },
};

export const RenderFunction: Story = {
  render: (args) => (
    <Trigger
      {...args}
      content={({ close }) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            minWidth: 200,
          }}
        >
          <p style={{ margin: 0, fontSize: 14, lineHeight: '20px' }}>
            Are you sure you want to delete this item?
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button size="small" color="grey" onClick={close}>
              Cancel
            </Button>
            <Button size="small" color="red" onClick={close}>
              Delete
            </Button>
          </div>
        </div>
      )}
    >
      <Button color="red">Delete Item</Button>
    </Trigger>
  ),
};

export const CustomRole: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      <Trigger
        {...args}
        role="tooltip"
        trigger="hover"
        content={<div style={{ fontSize: 13 }}>Tooltip content</div>}
      >
        <Button size="small">role=tooltip</Button>
      </Trigger>
      <Trigger
        {...args}
        role="menu"
        content={<MenuContent />}
      >
        <Button size="small">role=menu</Button>
      </Trigger>
      <Trigger
        {...args}
        role="alertdialog"
        content={
          <div style={{ fontSize: 13, maxWidth: 200 }}>
            This action cannot be undone.
          </div>
        }
      >
        <Button size="small">role=alertdialog</Button>
      </Trigger>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Trigger {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Trigger>
  ),
};

export const WithoutPortal: Story = {
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Trigger {...args} portal={false} content={<MenuContent />}>
        <Button>No Portal</Button>
      </Trigger>
    </div>
  ),
};
