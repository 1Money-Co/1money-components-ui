import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { Drawer } from './index';
import type { Meta, StoryObj } from '@storybook/react';
import type { DrawerPlacement } from './interface';

import './style';
import '../Button/style';
import '../Icons/style';

const PLACEMENTS = ['right', 'left', 'top', 'bottom'] as const;

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      control: 'radio',
      options: PLACEMENTS,
    },
    width: { control: 'number' },
    height: { control: 'number' },
    maskClosable: { control: 'boolean' },
    showCloseIcon: { control: 'boolean' },
    open: { control: false },
    footer: { control: false },
    closeIcon: { control: false },
  },
  args: {
    title: 'Drawer Title',
    placement: 'right',
    width: 373,
    height: 373,
    maskClosable: true,
    showCloseIcon: true,
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerLauncher = (args: React.ComponentProps<typeof Drawer>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        {...args}
        open={open}
        onClose={() => {
          args.onClose?.();
          setOpen(false);
        }}
      />
    </>
  );
};

export const Basic: Story = {
  args: {
    title: 'Basic Drawer',
    children: (
      <>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </>
    ),
  },
  render: (args) => <DrawerLauncher {...args} />,
};

export const Placement: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState<DrawerPlacement>('right');

    const openDrawer = (p: DrawerPlacement) => {
      setPlacement(p);
      setOpen(true);
    };

    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button onClick={() => openDrawer('top')}>Top</Button>
        <Button onClick={() => openDrawer('right')}>Right</Button>
        <Button onClick={() => openDrawer('bottom')}>Bottom</Button>
        <Button onClick={() => openDrawer('left')}>Left</Button>
        <Drawer
          open={open}
          placement={placement}
          title={`${placement} drawer`}
          onClose={() => setOpen(false)}
          width={373}
          height={300}
        >
          <p>Drawer slides in from the {placement}.</p>
        </Drawer>
      </div>
    );
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Form Drawer',
    children: <p>Fill in the form content here...</p>,
    footer: (
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <Button color="grey">Cancel</Button>
        <Button color="primary">Save</Button>
      </div>
    ),
  },
  render: (args) => <DrawerLauncher {...args} />,
};

export const NoCloseIcon: Story = {
  args: {
    title: 'No Close Icon',
    showCloseIcon: false,
    children: <p>Close this drawer by clicking the mask or pressing Escape.</p>,
  },
  render: (args) => <DrawerLauncher {...args} />,
};

export const MaskNotClosable: Story = {
  args: {
    title: 'Mask Not Closable',
    maskClosable: false,
    children: <p>Clicking the mask will not close this drawer. Use the close icon or Escape key.</p>,
  },
  render: (args) => <DrawerLauncher {...args} />,
};
