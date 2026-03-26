import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './index';

import './style';

const VARIANTS = ['fill', 'stroke'] as const;
const SIZES = ['large', 'small'] as const;

const SAMPLE_ITEMS = [
  {
    key: '1',
    title: 'What is 1Money Network?',
    children:
      'The 1Money Network addresses the fundamental challenge facing global payments today: the need for a purpose-built infrastructure that makes stablecoin transactions as simple and efficient as traditional payments.',
  },
  {
    key: '2',
    title: 'How does it work?',
    children:
      'With stablecoins now processing over $27 trillion annually — surpassing Visa and Mastercard combined — we\'ve built the first Layer 1 protocol designed exclusively for stablecoin payments.',
  },
  {
    key: '3',
    title: 'What are the benefits?',
    children:
      'Our mission is to eliminate the complexity, unpredictable costs, and technical barriers that prevent mainstream stablecoin adoption, making digital payments accessible to everyone from individuals to enterprises.',
  },
  {
    key: '4',
    title: 'Getting started',
    children:
      'Start by creating an account and connecting your wallet. The onboarding process takes less than 5 minutes.',
  },
  {
    key: '5',
    title: 'Is it secure?',
    children:
      'Security is our top priority. We use state-of-the-art encryption and multi-signature wallets to protect your assets.',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    variant: { control: 'radio', options: [...VARIANTS] },
    size: { control: 'radio', options: [...SIZES] },
    multiple: { control: 'boolean' },
  },
  args: {
    variant: 'fill',
    size: 'large',
    multiple: false,
    items: SAMPLE_ITEMS,
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {};

export const FillLarge: Story = {
  args: {
    variant: 'fill',
    size: 'large',
    defaultActiveKeys: ['1'],
  },
};

export const FillSmall: Story = {
  args: {
    variant: 'fill',
    size: 'small',
    defaultActiveKeys: ['1'],
  },
};

export const StrokeLarge: Story = {
  args: {
    variant: 'stroke',
    size: 'large',
    defaultActiveKeys: ['1'],
  },
};

export const StrokeSmall: Story = {
  args: {
    variant: 'stroke',
    size: 'small',
    defaultActiveKeys: ['1'],
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    defaultActiveKeys: ['1', '3'],
  },
};

export const WithDisabled: Story = {
  args: {
    defaultActiveKeys: ['1'],
    items: SAMPLE_ITEMS.map((item, i) =>
      i === 2 ? { ...item, disabled: true } : item,
    ),
  },
};

export const AllVariants: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
      {VARIANTS.map(variant => (
        <div key={variant}>
          {SIZES.map(size => (
            <div key={`${variant}-${size}`} style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>
                {variant} / {size}
              </h3>
              <Accordion
                {...args}
                variant={variant}
                size={size}
                items={SAMPLE_ITEMS.slice(0, 3)}
                defaultActiveKeys={['1']}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  args: {
    items: undefined as any,
  },
  tags: ['!autodocs', 'dev'],
};
