import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import { CellSelector } from './index';
import { CellSelectorGroup } from './CellSelectorGroup';
import { Icons } from '@/components/Icons';

import '@/components/Icons/style';
import '@/components/Radio/style';
import './style';

const SIZES = ['large', 'medium', 'small'] as const;
const DIRECTIONS = ['horizontal', 'vertical'] as const;

const meta: Meta<typeof CellSelector> = {
  title: 'Components/CellSelector',
  component: CellSelector,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'radio', options: [...SIZES] },
    direction: { control: 'radio', options: [...DIRECTIONS] },
  },
  args: {
    checked: false,
    disabled: false,
    size: 'large',
    direction: 'horizontal',
    label: 'Label',
    description: 'Description',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CellSelector>;

const SampleIcon = <Icons name="deposit" size={16} />;
const SampleIconLarge = <Icons name="deposit" size={24} />;
const SampleIconMedium = <Icons name="deposit" size={16} />;

// ── AllVariants ──
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Horizontal variants */}
      <div>
        <h3 style={{ marginBottom: 12 }}>Large Horizontal</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <CellSelector
            size="large"
            direction="horizontal"
            checked
            label="Label"
            description="Description"
            icon={SampleIcon}
          />
          <CellSelector
            size="large"
            direction="horizontal"
            label="Label"
            description="Description"
            icon={SampleIcon}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>Medium Horizontal</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <CellSelector
            size="medium"
            direction="horizontal"
            checked
            label="Label"
            icon={SampleIconMedium}
          />
          <CellSelector
            size="medium"
            direction="horizontal"
            label="Label"
            icon={SampleIconMedium}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>Small Horizontal</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <CellSelector
            size="small"
            direction="horizontal"
            checked
            label="Label"
          />
          <CellSelector
            size="small"
            direction="horizontal"
            label="Label"
          />
        </div>
      </div>

      {/* Vertical variants */}
      <div>
        <h3 style={{ marginBottom: 12 }}>Large Vertical</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <CellSelector
            size="large"
            direction="vertical"
            checked
            label="Label"
            description="Description"
            icon={SampleIconLarge}
          />
          <CellSelector
            size="large"
            direction="vertical"
            label="Label"
            description="Description"
            icon={SampleIconLarge}
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: 12 }}>Medium Vertical</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <CellSelector
            size="medium"
            direction="vertical"
            checked
            label="Label"
            icon={SampleIconLarge}
          />
          <CellSelector
            size="medium"
            direction="vertical"
            label="Label"
            icon={SampleIconLarge}
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3 style={{ marginBottom: 12 }}>Disabled</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <CellSelector
            size="large"
            checked
            disabled
            label="Label"
            description="Description"
            icon={SampleIcon}
          />
          <CellSelector
            size="large"
            disabled
            label="Label"
            description="Description"
            icon={SampleIcon}
          />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

// ── Group: Vertical layout ──
export const GroupVertical: Story = {
  render: () => (
    <CellSelectorGroup defaultValue="bank" layout="vertical" onChange={fn()}>
      <CellSelector
        value="bank"
        label="Bank Transfer"
        description="Transfer via bank account"
        icon={SampleIcon}
      />
      <CellSelector
        value="crypto"
        label="Crypto"
        description="Transfer via crypto wallet"
        icon={SampleIcon}
      />
      <CellSelector
        value="card"
        label="Credit Card"
        description="Pay with credit card"
        icon={SampleIcon}
      />
    </CellSelectorGroup>
  ),
};

// ── Group: Horizontal layout ──
export const GroupHorizontal: Story = {
  render: () => (
    <CellSelectorGroup defaultValue="option1" layout="horizontal" onChange={fn()}>
      <CellSelector
        value="option1"
        label="Option 1"
        description="First option"
        icon={SampleIcon}
      />
      <CellSelector
        value="option2"
        label="Option 2"
        description="Second option"
        icon={SampleIcon}
      />
    </CellSelectorGroup>
  ),
};

// ── Sizes ──
export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {SIZES.map((size) => (
        <CellSelector
          {...args}
          key={size}
          size={size}
          label={size}
          description="Description"
          icon={size === 'medium' ? SampleIconMedium : SampleIcon}
        />
      ))}
    </div>
  ),
};
