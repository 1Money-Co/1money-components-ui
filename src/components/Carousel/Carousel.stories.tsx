import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './index';

import './style';

const SLIDE_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 200,
  borderRadius: 8,
  fontSize: 24,
  fontWeight: 600,
  color: '#fff',
};

const SLIDE_COLORS = ['#073387', '#2563eb', '#7c3aed', '#059669'] as const;

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    autoPlay: { control: 'boolean' },
    loop: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
    autoPlayInterval: { control: 'number' },
  },
  args: {
    autoPlay: false,
    loop: false,
    showIndicators: true,
    autoPlayInterval: 3000,
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Carousel {...args}>
        {SLIDE_COLORS.map((color, i) => (
          <div key={i} style={{ ...SLIDE_STYLE, backgroundColor: color }}>
            Slide {i + 1}
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

export const AutoPlay: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Carousel {...args} autoPlay loop>
        {SLIDE_COLORS.map((color, i) => (
          <div key={i} style={{ ...SLIDE_STYLE, backgroundColor: color }}>
            Slide {i + 1}
          </div>
        ))}
      </Carousel>
    </div>
  ),
};

export const TwoSlides: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <Carousel {...args}>
        <div style={{ ...SLIDE_STYLE, backgroundColor: SLIDE_COLORS[0] }}>
          Slide 1
        </div>
        <div style={{ ...SLIDE_STYLE, backgroundColor: SLIDE_COLORS[1] }}>
          Slide 2
        </div>
      </Carousel>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 400 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default</h3>
        <Carousel>
          {SLIDE_COLORS.map((color, i) => (
            <div key={i} style={{ ...SLIDE_STYLE, backgroundColor: color }}>
              Slide {i + 1}
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Auto Play + Loop</h3>
        <Carousel autoPlay loop autoPlayInterval={2000}>
          {SLIDE_COLORS.map((color, i) => (
            <div key={i} style={{ ...SLIDE_STYLE, backgroundColor: color }}>
              Slide {i + 1}
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>No Indicators</h3>
        <Carousel showIndicators={false} defaultActiveIndex={1}>
          {SLIDE_COLORS.map((color, i) => (
            <div key={i} style={{ ...SLIDE_STYLE, backgroundColor: color }}>
              Slide {i + 1}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};
