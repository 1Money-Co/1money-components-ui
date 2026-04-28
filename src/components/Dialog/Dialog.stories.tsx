import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { TypographyBody } from '@/components/Typography';
import { DIALOG_SIZE, DIALOG_SIZES } from './constants';
import { Dialog } from './index';
import type { Meta, StoryObj } from '@storybook/react';

import './style';
import '../Button/style';
import '../Icons/style';
import '../Typography/style';

const MediaPlaceholder = () => (
  <div
    style={{
      aspectRatio: '284 / 160',
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      padding: 20,
      backgroundColor: '#e3e4e4',
      backgroundImage:
        'radial-gradient(circle at 1px 1px, rgba(187, 189, 193, 0.2) 1px, transparent 0)',
      backgroundSize: '26px 26px',
      color: '#bbbdc1',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '19.44px',
    }}
  >
    16:9 • sm
  </div>
);

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    size: {
      control: 'radio',
      options: DIALOG_SIZES,
    },
    open: {
      control: false,
    },
    footer: {
      control: false,
    },
    media: {
      control: false,
    },
    illustration: {
      control: false,
    },
    closeIcon: {
      control: false,
    },
    backIcon: {
      control: false,
    },
  },
  args: {
    title: 'Text Heading',
    onOk: fn(),
    onCancel: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const DialogLauncher = (args: React.ComponentProps<typeof Dialog>) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        {...args}
        open={open}
        onBack={args.onBack}
        onOk={() => {
          args.onOk?.();
          setOpen(false);
        }}
        onCancel={() => {
          args.onCancel?.();
          setOpen(false);
        }}
      />
    </>
  );
};

export const Small: Story = {
  args: {
    size: DIALOG_SIZE.small,
    illustration: 'illus2FA',
    okText: 'Button',
    cancelText: 'Button',
  },
  render: (args) => <DialogLauncher {...args} />,
};

export const Large: Story = {
  args: {
    size: DIALOG_SIZE.large,
    showBackIcon: true,
    illustration: 'illus2FA',
  },
  render: (args) => <DialogLauncher {...args} />,
};

export const WithMedia: Story = {
  args: {
    size: DIALOG_SIZE.small,
    title: 'Text Heading',
    showCloseIcon: false,
    okText: 'Button',
    cancelText: 'Button',
    media: <MediaPlaceholder />,
  },
  render: (args) => <DialogLauncher {...args} />,
};

export const WithRewardsIllustration: Story = {
  args: {
    size: DIALOG_SIZE.small,
    illustration: 'illusRewards',
    title: 'Rewards',
    children: 'You have earned a reward! Check your balance for details.',
    okText: 'Claim',
    cancelText: 'Later',
  },
  render: (args) => <DialogLauncher {...args} />,
};

export const CustomContent: Story = {
  args: {
    size: DIALOG_SIZE.small,
    title: 'Security check required',
    illustration: <Icons name="illusLocked" size={74} />,
    children: (
      <>
        <TypographyBody size="md" strong color="default-secondary">
          Review the details below before continuing.
        </TypographyBody>
        <TypographyBody size="md" color="default-secondary">
          This dialog keeps the Figma shell and footer layout while allowing arbitrary content.
        </TypographyBody>
      </>
    ),
  },
  render: (args) => <DialogLauncher {...args} />,
};
