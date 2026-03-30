import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { BUTTON_COLOR, BUTTON_SIZE } from '@/components/Button/constants';
import type { Meta, StoryObj } from '@storybook/react';
import { Popconfirm } from './index';
import {
  POPCONFIRM_DEFAULT_OFFSET,
  POPCONFIRM_DEFAULT_PLACEMENT,
  POPCONFIRM_DEFAULT_TRIGGER,
  POPCONFIRM_DEMO_COPY,
  POPCONFIRM_ICON_OPTIONS,
  POPCONFIRM_PLACEMENTS,
  POPCONFIRM_STORY_STYLE,
  POPCONFIRM_TRIGGER_OPTIONS,
} from './constants';

import './style';

const meta: Meta<typeof Popconfirm> = {
  title: 'Components/Popconfirm',
  component: Popconfirm,
  argTypes: {
    trigger: {
      control: 'select',
      options: POPCONFIRM_TRIGGER_OPTIONS,
    },
    placement: {
      control: 'select',
      options: POPCONFIRM_PLACEMENTS,
    },
    showIcon: { control: 'boolean' },
    showArrow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    offset: { control: 'number' },
    icon: {
      control: 'select',
      options: POPCONFIRM_ICON_OPTIONS,
    },
  },
  args: {
    title: POPCONFIRM_DEMO_COPY.destructive.title,
    body: POPCONFIRM_DEMO_COPY.destructive.body,
    cancelText: POPCONFIRM_DEMO_COPY.destructive.cancelText,
    confirmText: POPCONFIRM_DEMO_COPY.destructive.confirmText,
    trigger: POPCONFIRM_DEFAULT_TRIGGER,
    placement: POPCONFIRM_DEFAULT_PLACEMENT,
    showIcon: true,
    showArrow: true,
    offset: POPCONFIRM_DEFAULT_OFFSET,
    onCancel: fn(),
    onConfirm: fn(),
    onOpenChange: fn(),
    onOpen: fn(),
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  render: (args) => (
    <Popconfirm {...args}>
      <Button color={BUTTON_COLOR.danger}>{POPCONFIRM_DEMO_COPY.destructive.triggerText}</Button>
    </Popconfirm>
  ),
};

export const Placements: Story = {
  render: (args) => (
    <div style={POPCONFIRM_STORY_STYLE.placementsWrapper}>
      {POPCONFIRM_PLACEMENTS.map((placement) => (
        <Popconfirm
          {...args}
          key={placement}
          placement={placement}
          title={placement}
          body={POPCONFIRM_DEMO_COPY.placementBody}
        >
          <Button size={BUTTON_SIZE.small} color={BUTTON_COLOR.grey}>
            {placement}
          </Button>
        </Popconfirm>
      ))}
    </div>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={POPCONFIRM_STORY_STYLE.controlledWrapper}>
        <Popconfirm
          {...args}
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            args.onOpenChange?.(nextOpen);
          }}
          onCancel={(event, context) => {
            args.onCancel?.(event, context);
            setOpen(false);
          }}
          onConfirm={(event, context) => {
            args.onConfirm?.(event, context);
            setOpen(false);
          }}
        >
          <Button>{POPCONFIRM_DEMO_COPY.controlledTriggerText}</Button>
        </Popconfirm>
        <Button
          size={BUTTON_SIZE.small}
          color={BUTTON_COLOR.grey}
          onClick={() => setOpen((prev) => !prev)}
        >
          {POPCONFIRM_DEMO_COPY.toggleText}: {open
            ? POPCONFIRM_DEMO_COPY.openStateText
            : POPCONFIRM_DEMO_COPY.closedStateText}
        </Button>
      </div>
    );
  },
};

export const CustomIcon: Story = {
  args: {
    icon: POPCONFIRM_ICON_OPTIONS[1],
    title: POPCONFIRM_DEMO_COPY.archive.title,
    body: POPCONFIRM_DEMO_COPY.archive.body,
    cancelText: POPCONFIRM_DEMO_COPY.archive.cancelText,
    confirmText: POPCONFIRM_DEMO_COPY.archive.confirmText,
  },
  render: (args) => (
    <Popconfirm {...args}>
      <Button color={BUTTON_COLOR.warning}>{POPCONFIRM_DEMO_COPY.archive.triggerText}</Button>
    </Popconfirm>
  ),
};
