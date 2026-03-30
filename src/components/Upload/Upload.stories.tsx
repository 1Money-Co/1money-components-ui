import React, { useState } from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Upload, UploadFileBar } from './index';

import './style';

const meta: Meta<typeof Upload> = {
  title: 'Components/Upload',
  component: Upload,
  argTypes: {
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    feedback: { control: 'text' },
    buttonLabel: { control: 'text' },
    accept: { control: 'text' },
    multiple: { control: 'boolean' },
  },
  args: {
    disabled: false,
    multiple: false,
    buttonLabel: 'Upload file',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const Primary: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'Upload Document',
    description: 'Accepted formats: PDF, PNG, JPG. Max 10MB.',
  },
};

export const WithFileBar: Story = {
  render: () => (
    <Upload label="Upload Document">
      <UploadFileBar fileName="report-2026.pdf" onClickRemove={fn()} />
    </Upload>
  ),
};

export const WithError: Story = {
  render: () => (
    <Upload label="Upload Document" feedback="File size exceeds the limit.">
      <UploadFileBar
        fileName="large-file.pdf"
        status={1}
        message="Upload failed"
        onClickRemove={fn()}
      />
    </Upload>
  ),
};

export const FileBarSuccess: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <UploadFileBar fileName="document.pdf" />
    </div>
  ),
};

export const FileBarError: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <UploadFileBar
        fileName="document.pdf"
        status={1}
        message="Upload failed. Please try again."
      />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Basic Upload</h3>
        <Upload />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With Label & Description</h3>
        <Upload
          label="Document"
          description="PDF, PNG or JPG up to 10MB"
        />
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Disabled</h3>
        <Upload label="Document" disabled />
      </div>
      <div style={{ width: 400 }}>
        <h3 style={{ marginBottom: 12 }}>File Bar States</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <UploadFileBar fileName="report.pdf" onClickRemove={fn()} />
          <UploadFileBar
            fileName="very-long-file-name-that-should-truncate.pdf"
            onClickRemove={fn()}
          />
          <UploadFileBar
            fileName="failed.pdf"
            status={1}
            message="System error"
            onClickRemove={fn()}
          />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
