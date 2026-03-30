import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { DRAWER_PLACEMENTS } from './constants';
import { Drawer } from './index';
import type { Meta, StoryObj } from '@storybook/react';
import type { DrawerPlacement } from './interface';

import './style';
import '../Button/style';
import '../Icons/style';

const FOOTER_ACTIONS_STYLE: React.CSSProperties = { display: 'flex', gap: 12, width: '100%' };

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      control: 'radio',
      options: DRAWER_PLACEMENTS,
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
    title: 'Title',
    placement: 'right',
    width: 360,
    height: 360,
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
          width={360}
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
    children: <p>Fill in the form content here...</p>,
    footer: (
      <div style={FOOTER_ACTIONS_STYLE}>
        <Button color="secondary" size="medium" style={{ flex: 1 }}>
          Cancel
        </Button>
        <Button color="primary" size="medium" style={{ flex: 1 }}>
          Confirm
        </Button>
      </div>
    ),
  },
  render: (args) => <DrawerLauncher {...args} />,
};

export const WithBackControl: Story = {
  args: {
    showBackIcon: true,
    children: <p>Use the back control to return to the previous step.</p>,
    onBack: fn(),
    footer: (
      <div style={FOOTER_ACTIONS_STYLE}>
        <Button color="secondary" size="medium" style={{ flex: 1 }}>
          Cancel
        </Button>
        <Button color="primary" size="medium" style={{ flex: 1 }}>
          Confirm
        </Button>
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
    children: (
      <>
        <p>Clicking the mask will not close this drawer. Use the close icon or Escape key.</p>
      </>
    ),
  },
  render: (args) => <DrawerLauncher {...args} />,
};
