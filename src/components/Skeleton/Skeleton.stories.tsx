import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './index';

import './style';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    shape: { control: 'radio', options: ['rectangle', 'circle'] },
    animation: { control: 'radio', options: ['wave', 'none'] },
    width: { control: 'text' },
    height: { control: 'text' },
    size: { control: 'text' },
    borderRadius: { control: 'text' },
  },
  args: {
    shape: 'rectangle',
    animation: 'wave',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Table: Story = {
  render: args => {
    const contentCount = 3;
    const headerStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
    };
    const rowStyle: React.CSSProperties = {
      ...headerStyle,
    };
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          border: '1px solid #e5e7eb',
          borderRadius: 24,
          backgroundColor: '#f9fafb',
          padding: 24,
          width: '100%',
        }}
      >
        <div style={headerStyle}>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} width="15%" height="16px" borderRadius="8px" animation={args.animation} />
          ))}
        </div>
        <div style={{ width: '100%', height: 1, backgroundColor: '#e5e7eb' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {Array.from({ length: contentCount }).map((_, i) => (
            <div key={i} style={rowStyle}>
              {Array.from({ length: 6 }).map((_, j) => (
                <Skeleton key={j} width="15%" height="24px" borderRadius="12px" animation={args.animation} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  },
  tags: ['!autodocs', 'dev'],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 48 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3>Rectangle</h3>
        <Skeleton />
        <Skeleton width="10rem" />
        <Skeleton width="5rem" />
        <Skeleton height="2rem" />
        <Skeleton width="10rem" height="4rem" />

        <h3 style={{ marginTop: 8 }}>Rounded</h3>
        <Skeleton borderRadius="16px" />
        <Skeleton width="10rem" borderRadius="16px" />
        <Skeleton width="5rem" borderRadius="16px" />
        <Skeleton height="2rem" borderRadius="16px" />
        <Skeleton width="10rem" height="4rem" borderRadius="16px" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <h3>Square</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <Skeleton size="2rem" />
          <Skeleton size="3rem" />
          <Skeleton size="4rem" />
          <Skeleton size="5rem" />
        </div>

        <h3 style={{ marginTop: 8 }}>Circle</h3>
        <div style={{ display: 'flex', gap: 8 }}>
          <Skeleton shape="circle" size="2rem" />
          <Skeleton shape="circle" size="3rem" />
          <Skeleton shape="circle" size="4rem" />
          <Skeleton shape="circle" size="5rem" />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
