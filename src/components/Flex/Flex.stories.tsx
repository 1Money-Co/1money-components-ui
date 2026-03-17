import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './index';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_PREFIX, FLEX_WRAP } from './constants';
import './style';

const FLEX_ALIGN_OPTIONS = Object.values(FLEX_ALIGN);
const FLEX_JUSTIFY_OPTIONS = Object.values(FLEX_JUSTIFY);
const FLEX_WRAP_OPTIONS = Object.values(FLEX_WRAP);
const FLEX_GAP_OPTIONS = Object.values(FLEX_GAP);
const DEMO_PADDING = 16;
const DEMO_BORDER = '1px dashed currentColor';
const DEMO_BOX_STYLE = { padding: DEMO_PADDING, border: DEMO_BORDER };
const DEMO_SECTION_GAP = 16;
const DEMO_SECTION_STYLE = { display: 'grid', gap: DEMO_SECTION_GAP };
const DEMO_PAGE_STYLE = { ...DEMO_SECTION_STYLE, padding: DEMO_PADDING, border: DEMO_BORDER, borderRadius: 8 };
const DEMO_BAR_STYLE = { ...DEMO_BOX_STYLE, minHeight: 56, display: 'flex', alignItems: 'center' as const, width: '100%' };
const DEMO_PANEL_STYLE = {
  ...DEMO_BOX_STYLE,
  minHeight: 220,
  display: 'flex',
  alignItems: 'flex-start' as const,
  width: '100%'
};
const DEMO_ITEM_STYLE = { ...DEMO_BOX_STYLE, minWidth: 120, textAlign: 'center' as const };
const DEMO_TAG_STYLE = { ...DEMO_BOX_STYLE, padding: '4px 12px' };
const WRAP_ENABLED = FLEX_WRAP.wrap;
const WRAP_DISABLED = FLEX_WRAP.nowrap;
const GAP_SMALL = FLEX_GAP.small;
const GAP_MIDDLE = FLEX_GAP.middle;
const GAP_LARGE = FLEX_GAP.large;

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  argTypes: {
    gap: { control: 'select', options: FLEX_GAP_OPTIONS },
    align: { control: 'select', options: FLEX_ALIGN_OPTIONS },
    justify: { control: 'select', options: FLEX_JUSTIFY_OPTIONS },
    vertical: { control: 'boolean' },
    wrap: { control: 'select', options: FLEX_WRAP_OPTIONS },
    prefixCls: { control: 'text' }
  },
  args: {
    gap: FLEX_GAP.middle,
    align: FLEX_ALIGN.center,
    justify: FLEX_JUSTIFY.spaceBetween,
    vertical: false,
    wrap: FLEX_WRAP.nowrap
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  render: (args) => (
    <Flex {...args}>
      <div style={DEMO_BOX_STYLE}>One</div>
      <div style={DEMO_BOX_STYLE}>Two</div>
      <div style={DEMO_BOX_STYLE}>Three</div>
    </Flex>
  )
};

export const Vertical: Story = {
  render: () => (
    <Flex vertical gap={GAP_SMALL}>
      <div style={DEMO_BOX_STYLE}>Top</div>
      <div style={DEMO_BOX_STYLE}>Bottom</div>
    </Flex>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Flex
        gap={GAP_MIDDLE}
        align={FLEX_ALIGN.center}
        justify={FLEX_JUSTIFY.spaceBetween}
        wrap={WRAP_DISABLED}
        prefixCls={FLEX_PREFIX}
      >
        <div style={DEMO_BOX_STYLE}>Align</div>
        <div style={DEMO_BOX_STYLE}>Justify</div>
      </Flex>

      <Flex vertical gap={GAP_LARGE} wrap={WRAP_ENABLED} prefixCls={FLEX_PREFIX}>
        <div style={DEMO_BOX_STYLE}>Vertical</div>
        <div style={DEMO_BOX_STYLE}>Wrap</div>
      </Flex>
    </div>
  )
};

export const DashboardHeaderLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Common header layout with left brand area, center navigation, and right-side actions using justify/align.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Flex
        gap={GAP_MIDDLE}
        align={FLEX_ALIGN.center}
        justify={FLEX_JUSTIFY.spaceBetween}
        wrap={WRAP_DISABLED}
        prefixCls={FLEX_PREFIX}
      >
        <div style={DEMO_BAR_STYLE}>Brand / Logo</div>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Overview</div>
          <div style={DEMO_ITEM_STYLE}>Accounts</div>
          <div style={DEMO_ITEM_STYLE}>Transactions</div>
        </Flex>
        <Flex gap={GAP_SMALL} align={FLEX_ALIGN.center}>
          <div style={DEMO_ITEM_STYLE}>Search</div>
          <div style={DEMO_ITEM_STYLE}>Notification</div>
          <div style={DEMO_ITEM_STYLE}>Profile</div>
        </Flex>
      </Flex>
    </div>
  )
};

export const SidebarContentLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Sidebar and content layout using horizontal Flex outside and vertical Flex inside for title, body, and footer actions.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Flex gap={GAP_MIDDLE} align={FLEX_ALIGN.start} justify={FLEX_JUSTIFY.start} wrap={WRAP_DISABLED}>
        <Flex vertical gap={GAP_SMALL} style={{ ...DEMO_PANEL_STYLE, minWidth: 220 }}>
          <div style={DEMO_ITEM_STYLE}>Menu Group A</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group B</div>
          <div style={DEMO_ITEM_STYLE}>Menu Group C</div>
        </Flex>

        <Flex vertical gap={GAP_MIDDLE} style={{ ...DEMO_PANEL_STYLE, flex: 1 }}>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.spaceBetween}>
            <div style={DEMO_ITEM_STYLE}>Page Title</div>
            <Flex gap={GAP_SMALL}>
              <div style={DEMO_ITEM_STYLE}>Export</div>
              <div style={DEMO_ITEM_STYLE}>Create</div>
            </Flex>
          </Flex>
          <div style={DEMO_PANEL_STYLE}>Main Content</div>
          <Flex align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.end} gap={GAP_SMALL}>
            <div style={DEMO_ITEM_STYLE}>Cancel</div>
            <div style={DEMO_ITEM_STYLE}>Save</div>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
};

export const TagGroupWrapLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Wrapping tag group layout using wrap + gap for dense filter/status tag scenarios.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Flex wrap={WRAP_ENABLED} gap={GAP_SMALL} align={FLEX_ALIGN.center} justify={FLEX_JUSTIFY.start}>
        <div style={DEMO_TAG_STYLE}>Pending</div>
        <div style={DEMO_TAG_STYLE}>Approved</div>
        <div style={DEMO_TAG_STYLE}>Rejected</div>
        <div style={DEMO_TAG_STYLE}>In Review</div>
        <div style={DEMO_TAG_STYLE}>Manual Check</div>
        <div style={DEMO_TAG_STYLE}>Needs Update</div>
        <div style={DEMO_TAG_STYLE}>Completed</div>
        <div style={DEMO_TAG_STYLE}>Escalated</div>
      </Flex>
    </div>
  )
};
