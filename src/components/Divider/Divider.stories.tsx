import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './index';

import './style';

const TYPES = ['horizontal', 'vertical'] as const;
const ORIENTATIONS = ['left', 'center', 'right'] as const;
const VARIANTS = ['solid', 'dashed', 'dotted'] as const;

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    type: { control: 'radio', options: [...TYPES] },
    orientation: { control: 'radio', options: [...ORIENTATIONS] },
    variant: { control: 'radio', options: [...VARIANTS] },
    plain: { control: 'boolean' },
  },
  args: {
    type: 'horizontal',
    orientation: 'center',
    variant: 'solid',
    plain: false,
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithText: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left">Left Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right">Right Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  ),
};

export const Plain: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider plain>Text</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  ),
};

export const Dashed: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dashed">Dashed</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  ),
};

export const Dotted: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted" />
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider variant="dotted">Dotted</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </div>
  ),
};

export const OrientationMargin: Story = {
  render: () => (
    <div>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin="0">Left (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="left" orientationMargin={50}>Left (margin 50)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider orientation="right" orientationMargin={0}>Right (margin 0)</Divider>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {VARIANTS.map(variant => (
        <div key={variant}>
          <h3 style={{ marginBottom: 8 }}>{variant}</h3>
          <Divider variant={variant} />
          <Divider variant={variant}>{variant} with text</Divider>
          <Divider variant={variant} orientation="left">Left</Divider>
          <Divider variant={variant} orientation="right">Right</Divider>
        </div>
      ))}
      <h3>Vertical</h3>
      <div>
        Text
        {VARIANTS.map(variant => (
          <React.Fragment key={variant}>
            <Divider type="vertical" variant={variant} />
            {variant}
          </React.Fragment>
        ))}
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
