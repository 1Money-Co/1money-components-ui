import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Upload, UploadFileBar } from './index';

import './style';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const MultipleFiles: Story = {
  render: () => (
    <Upload
      label="Label"
      description="Description"
      feedback="Feedback"
      className=''
    >
       <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <UploadFileBar fileName="File name.PDF" onRemove={fn()} />
        <UploadFileBar fileName="File name.PDF" onRemove={fn()} />
        <UploadFileBar
          fileName="File name.PDF"
          status={1}
          message="Upload failed"
          onRemove={fn()}
        />
      </div>
    </Upload>
  ),
};
