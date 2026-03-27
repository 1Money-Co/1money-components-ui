import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Step } from './index';

import './style';
import '../Icons/style';
import '../Tag/style';
import '../Typography/style';

const wrapperStyle: React.CSSProperties = {
  width: 251,
};

const meta: Meta<typeof Step> = {
  title: 'Components/Step',
  component: Step,
  args: {
    items: [
      {
        key: 'verify-business',
        title: 'Text Heading',
        description: 'Body text',
        status: 'completed',
        tag: 'Tag',
      },
      {
        key: 'verify-owners',
        title: 'Text Heading',
        description: 'Body text',
        status: 'completed',
        tag: 'Tag',
      },
      {
        key: 'review-submission',
        title: 'Text Heading',
        description: 'Body text',
        status: 'default',
        tag: 'Tag',
      },
    ],
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  render: args => (
    <div style={wrapperStyle}>
      <Step {...args} />
    </div>
  ),
};

export const MixedStatus: Story = {
  render: args => (
    <div style={wrapperStyle}>
      <Step
        {...args}
        items={[
          {
            key: 'start',
            title: 'Text Heading',
            description: 'Body text',
            status: 'default',
            tag: 'Tag',
          },
          {
            key: 'complete',
            title: 'Text Heading',
            description: 'Body text',
            status: 'completed',
            tag: 'Tag',
          },
          {
            key: 'error',
            title: 'Text Heading',
            description: 'Body text',
            status: 'error',
            tag: 'Tag',
          },
        ]}
      />
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div style={wrapperStyle}>
      <Step
        items={[
          {
            key: 'details',
            title: 'Settlement review',
            description: 'Upload ownership documents',
            status: 'completed',
            tag: {
              label: 'Approved',
            },
          },
          {
            key: 'verification',
            title: 'Beneficial owner check',
            description: 'Waiting for passkey confirmation',
            status: 'default',
            tag: {
              label: 'Pending',
              color: 'recommended',
            },
          },
          {
            key: 'finalize',
            title: 'Final confirmation',
            description: 'A signer rejected the agreement',
            status: 'error',
            tag: {
              label: 'Rejected',
            },
          },
        ]}
      />
    </div>
  ),
};
