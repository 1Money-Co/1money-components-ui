import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  STEP_CUSTOM_COPY,
  STEP_ITEM_KEYS,
  STEP_RECOMMENDED_TAG_COLOR,
  STEP_SAMPLE_COPY,
  STEP_STATUS,
  STEP_STORY_WRAPPER_WIDTH,
} from './constants';
import { Step } from './index';

import './style';
import '../Icons/style';
import '../Tag/style';
import '../Typography/style';

const wrapperStyle: React.CSSProperties = {
  width: STEP_STORY_WRAPPER_WIDTH,
};

const meta: Meta<typeof Step> = {
  title: 'Components/Step',
  component: Step,
  args: {
    items: [
      {
        key: STEP_ITEM_KEYS.verifyBusiness,
        title: STEP_SAMPLE_COPY.title,
        description: STEP_SAMPLE_COPY.description,
        status: STEP_STATUS.completed,
        tag: STEP_SAMPLE_COPY.tag,
      },
      {
        key: STEP_ITEM_KEYS.verifyOwners,
        title: STEP_SAMPLE_COPY.title,
        description: STEP_SAMPLE_COPY.description,
        status: STEP_STATUS.completed,
        tag: STEP_SAMPLE_COPY.tag,
      },
      {
        key: STEP_ITEM_KEYS.reviewSubmission,
        title: STEP_SAMPLE_COPY.title,
        description: STEP_SAMPLE_COPY.description,
        status: STEP_STATUS.default,
        tag: STEP_SAMPLE_COPY.tag,
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
            key: STEP_ITEM_KEYS.start,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.default,
            tag: STEP_SAMPLE_COPY.tag,
          },
          {
            key: STEP_ITEM_KEYS.complete,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.completed,
            tag: STEP_SAMPLE_COPY.tag,
          },
          {
            key: STEP_ITEM_KEYS.error,
            title: STEP_SAMPLE_COPY.title,
            description: STEP_SAMPLE_COPY.description,
            status: STEP_STATUS.error,
            tag: STEP_SAMPLE_COPY.tag,
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
            key: STEP_ITEM_KEYS.details,
            title: STEP_CUSTOM_COPY.settlementReview,
            description: STEP_CUSTOM_COPY.uploadOwnershipDocuments,
            status: STEP_STATUS.completed,
            tag: {
              label: STEP_CUSTOM_COPY.approved,
            },
          },
          {
            key: STEP_ITEM_KEYS.verification,
            title: STEP_CUSTOM_COPY.beneficialOwnerCheck,
            description: STEP_CUSTOM_COPY.waitingForPasskeyConfirmation,
            status: STEP_STATUS.default,
            tag: {
              label: STEP_CUSTOM_COPY.pending,
              color: STEP_RECOMMENDED_TAG_COLOR,
            },
          },
          {
            key: STEP_ITEM_KEYS.finalize,
            title: STEP_CUSTOM_COPY.finalConfirmation,
            description: STEP_CUSTOM_COPY.signerRejectedAgreement,
            status: STEP_STATUS.error,
            tag: {
              label: STEP_CUSTOM_COPY.rejected,
            },
          },
        ]}
      />
    </div>
  ),
};
