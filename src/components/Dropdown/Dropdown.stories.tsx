import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import type { Meta, StoryObj } from '@storybook/react';
import type { Placement } from '@floating-ui/react';
import { Dropdown } from './index';

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

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: { control: 'radio', options: ['click', 'hover'] },
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
    showArrow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    offset: { control: 'number' },
  },
  args: {
    trigger: 'click',
    placement: 'bottom-start',
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

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args} content={<MenuContent />}>
      <Button>Actions</Button>
    </Dropdown>
  ),
};

export const HoverTrigger: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      trigger="hover"
      hoverDelay={{ open: 100, close: 200 }}
      content={<MenuContent />}
    >
      <Button>Hover me</Button>
    </Dropdown>
  ),
};

export const WithArrow: Story = {
  render: (args) => (
    <Dropdown {...args} showArrow content={<MenuContent />}>
      <Button>With Arrow</Button>
    </Dropdown>
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
          <Dropdown
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
          </Dropdown>
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
        <Dropdown
          {...args}
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            args.onOpenChange?.(nextOpen);
          }}
          content={<MenuContent onClose={() => setOpen(false)} />}
        >
          <Button>Controlled</Button>
        </Dropdown>
        <Button color="grey" size="small" onClick={() => setOpen((prev) => !prev)}>
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
      </div>
    );
  },
};

export const RenderFunction: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      content={({ close }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}>
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
    </Dropdown>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Dropdown {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Dropdown>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      overlayClassName="custom-dropdown-panel"
      overlayStyle={{ minWidth: 240 }}
      content={<MenuContent />}
    >
      <Button>Custom Style</Button>
    </Dropdown>
  ),
};
