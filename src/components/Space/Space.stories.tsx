import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Space } from './index';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from './constants';
import './style';

const SPACE_ALIGN_OPTIONS = Object.values(SPACE_ALIGN);
const SPACE_DIRECTION_OPTIONS = Object.values(SPACE_DIRECTION);
const SPACE_SIZE_OPTIONS = Object.values(SPACE_SIZE);

const DEMO_PADDING = 8;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const DEMO_SECTION_GAP = 16;
const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };
const DEMO_PAGE_STYLE = { ...DEMO_SECTION_STYLE, padding: 16, border: DEMO_BORDER, borderRadius: 8 };
const DEMO_INLINE_ITEM_STYLE = { ...DEMO_BOX_STYLE, display: 'inline-flex', alignItems: 'center' as const };
const DEMO_CHIP_ITEM_STYLE = { ...DEMO_BOX_STYLE, padding: '4px 12px', display: 'inline-flex' };
const DEMO_PANEL_STYLE = { ...DEMO_BOX_STYLE, minHeight: 44, width: '100%' };
const DEMO_COLUMN_STYLE = { ...DEMO_BOX_STYLE, minWidth: 220 };

const meta: Meta<typeof Space> = {
  title: 'Components/Space',
  component: Space,
  argTypes: {
    size: { control: 'select', options: SPACE_SIZE_OPTIONS },
    align: { control: 'select', options: SPACE_ALIGN_OPTIONS },
    direction: { control: 'select', options: SPACE_DIRECTION_OPTIONS },
    wrap: { control: 'boolean' },
    split: { control: false },
    prefixCls: { control: 'text' }
  },
  args: {
    size: SPACE_SIZE.small,
    align: SPACE_ALIGN.center,
    direction: SPACE_DIRECTION.horizontal,
    wrap: false
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Space>;

export const Primary: Story = {
  render: (args) => (
    <Space {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Space>
  )
};

export const Vertical: Story = {
  render: () => (
    <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Space>
  )
};

export const CustomSizeAndWrap: Story = {
  render: () => (
    <Space size={[8, 16]} wrap style={{ maxWidth: 240 }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <div style={DEMO_BOX_STYLE} key={index}>
          Item {index + 1}
        </div>
      ))}
    </Space>
  )
};

export const Split: Story = {
  render: () => (
    <Space split={<span>|</span>} size={SPACE_SIZE.large}>
      <span>Alpha</span>
      <span>Beta</span>
      <span>Gamma</span>
    </Space>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Space size={SPACE_SIZE.middle} align={SPACE_ALIGN.center}>
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Center</div>
      </Space>
      <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.large}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Large</div>
      </Space>
    </div>
  )
};

export const ToolbarSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toolbar layout with left filter group and right action group, using Space to keep consistent in-group spacing.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <div style={{ ...DEMO_PANEL_STYLE, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Date Range</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Status</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Currency</div>
        </Space>
        <Space size={SPACE_SIZE.small} align={SPACE_ALIGN.center}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Export</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Refresh</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Create</div>
        </Space>
      </div>
    </div>
  )
};

export const FilterWrapSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Filter wrapping layout: Space + wrap for tags and variable-length multi-filter items.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Space size={[8, 12]} wrap style={{ maxWidth: 640 }}>
        <div style={DEMO_CHIP_ITEM_STYLE}>All</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>High Risk</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>KYC Pending</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Manual Review</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Today</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>This Week</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>Large Amount</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USDT</div>
        <div style={DEMO_CHIP_ITEM_STYLE}>USD</div>
      </Space>
    </div>
  )
};

export const DetailPanelSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Detail panel composition: vertical field group on the left and vertical status group on the right with layered spacing.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Space size={SPACE_SIZE.large} align={SPACE_ALIGN.start} style={{ width: '100%' }}>
        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <div style={DEMO_INLINE_ITEM_STYLE}>Business Name</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Registration Number</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Country</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Created At</div>
        </Space>

        <Space direction={SPACE_DIRECTION.vertical} size={SPACE_SIZE.middle} style={DEMO_COLUMN_STYLE}>
          <Space split={<span>|</span>} size={SPACE_SIZE.small}>
            <span>Risk: Medium</span>
            <span>KYB: Reviewing</span>
            <span>AML: Passed</span>
          </Space>
          <div style={DEMO_INLINE_ITEM_STYLE}>Operator: Derrick</div>
          <div style={DEMO_INLINE_ITEM_STYLE}>Last Updated: 2026-02-09</div>
        </Space>
      </Space>
    </div>
  )
};
