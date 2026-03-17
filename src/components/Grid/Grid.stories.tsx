import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Row, Col } from './index';
import { GRID_COL_PREFIX, GRID_JUSTIFY_BREAKPOINT, GRID_ROW_PREFIX, GRID_ALIGN, GRID_JUSTIFY } from './constants';
import {
  DEMO_BOX_STYLE,
  DEMO_CHART_BLOCK_STYLE,
  DEMO_FOOTER_BLOCK_STYLE,
  DEMO_FORM_ACTION_STYLE,
  DEMO_FORM_FIELD_STYLE,
  DEMO_FORM_LABEL_STYLE,
  DEMO_HEADER_BLOCK_STYLE,
  DEMO_MAIN_BLOCK_STYLE,
  DEMO_PAGE_STYLE,
  DEMO_SECTION_STYLE,
  DEMO_SIDEBAR_BLOCK_STYLE,
  DEMO_TABLE_BLOCK_STYLE,
  DEMO_WIDGET_BLOCK_STYLE
} from '../../stories/demo-styles';
import './style';

const GRID_ALIGN_OPTIONS = Object.values(GRID_ALIGN);
const GRID_JUSTIFY_OPTIONS = Object.values(GRID_JUSTIFY);
const GRID_GUTTER_HORIZONTAL = 16;
const GRID_GUTTER_VERTICAL = 16;
const GRID_GUTTER: [number, number] = [16, 16];
const GRID_GUTTER_COMPACT = 8;
const GRID_GUTTER_SPACED: [number, number] = [GRID_GUTTER_HORIZONTAL, GRID_GUTTER_VERTICAL];
const GRID_GUTTER_SM = 8;
const GRID_GUTTER_MD = 16;
const GRID_GUTTER_LG = 24;
const GRID_GUTTER_RESPONSIVE = { sm: GRID_GUTTER_SM, md: GRID_GUTTER_MD, lg: GRID_GUTTER_LG };
const GRID_GUTTER_REM = '1rem';
const SPAN_THIRD = 4;
const SPAN_BASE = 12;
const SPAN_SM = 6;
const SPAN_MD = 4;
const SPAN_LG = 3;
const SPAN_HALF = 6;
const SPAN_QUARTER = 3;
const OFFSET_SMALL = 1;
const PUSH_SMALL = 1;
const PULL_SMALL = 1;
const ORDER_FIRST = 1;
const ORDER_LAST = 2;
const FLEX_ONE = 1;
const FLEX_TWO = 2;
const WRAP_ENABLED = true;
const WRAP_DISABLED = false;
const JUSTIFY_RESPONSIVE = {
  [GRID_JUSTIFY_BREAKPOINT.sm]: GRID_JUSTIFY.start,
  [GRID_JUSTIFY_BREAKPOINT.md]: GRID_JUSTIFY.spaceBetween,
  [GRID_JUSTIFY_BREAKPOINT.lg]: GRID_JUSTIFY.end
};

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    gutter: { control: 'object' },
    align: { control: 'select', options: GRID_ALIGN_OPTIONS },
    justify: { control: 'select', options: GRID_JUSTIFY_OPTIONS },
    wrap: { control: 'boolean' },
    prefixCls: { control: 'text' }
  },
  args: {
    gutter: GRID_GUTTER,
    align: GRID_ALIGN.top,
    justify: GRID_JUSTIFY.start,
    wrap: true
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  render: (args) => (
    <Grid {...args}>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
      <Grid.Col span={SPAN_THIRD}><div style={DEMO_BOX_STYLE}>4</div></Grid.Col>
    </Grid>
  )
};

export const Responsive: Story = {
  render: () => (
    <Row gutter={GRID_GUTTER}>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>A</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>B</div></Col>
      <Col span={SPAN_BASE} sm={SPAN_SM} md={SPAN_MD} lg={SPAN_LG}><div style={DEMO_BOX_STYLE}>C</div></Col>
    </Row>
  )
};

export const ApiExamples: Story = {
  render: () => (
    <div style={DEMO_SECTION_STYLE}>
      <Row
        gutter={GRID_GUTTER_SPACED}
        align={GRID_ALIGN.middle}
        justify={GRID_JUSTIFY.spaceBetween}
        wrap={WRAP_DISABLED}
        prefixCls={GRID_ROW_PREFIX}
      >
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}><div style={DEMO_BOX_STYLE}>Span</div></Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} offset={OFFSET_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
        <Col span={SPAN_QUARTER} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Offset</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} push={PUSH_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Push</div>
        </Col>
        <Col span={SPAN_QUARTER} pull={PULL_SMALL} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Pull</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_REM} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>String Gutter</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_QUARTER} order={ORDER_LAST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
        <Col span={SPAN_QUARTER} order={ORDER_FIRST} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Order</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_COMPACT} prefixCls={GRID_ROW_PREFIX}>
        <Col flex={FLEX_ONE} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 1</div>
        </Col>
        <Col flex={FLEX_TWO} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Flex 2</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} wrap={WRAP_ENABLED} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_BASE} sm={SPAN_SM} md={{ span: SPAN_MD, offset: OFFSET_SMALL }} lg={SPAN_LG} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Responsive</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} justify={JUSTIFY_RESPONSIVE} prefixCls={GRID_ROW_PREFIX}>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
        <Col span={SPAN_HALF} prefixCls={GRID_COL_PREFIX}>
          <div style={DEMO_BOX_STYLE}>Justify Responsive</div>
        </Col>
      </Row>

    </div>
  )
};

export const DashboardLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Complete dashboard layout: top navigation, sidebar menu, KPI cards, chart area, and table area.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Header (12/12)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3} lg={3}>
          <div style={DEMO_SIDEBAR_BLOCK_STYLE}>Sidebar (12 → 3 → 3)</div>
        </Col>
        <Col span={12} md={9} lg={9}>
          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 1</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 2</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 3</div>
            </Col>
            <Col span={6} lg={3}>
              <div style={DEMO_WIDGET_BLOCK_STYLE}>KPI 4</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12} lg={8}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Main Chart (12 → 8)</div>
            </Col>
            <Col span={12} lg={4}>
              <div style={DEMO_CHART_BLOCK_STYLE}>Side Panel (12 → 4)</div>
            </Col>
          </Row>

          <Row gutter={GRID_GUTTER_SPACED}>
            <Col span={12}>
              <div style={DEMO_TABLE_BLOCK_STYLE}>Table Section (12/12)</div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer (12/12)</div>
        </Col>
      </Row>
    </div>
  )
};

export const MarketingPageLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Marketing landing page layout: hero section, feature cards, split content blocks, FAQ area, and footer.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED} justify={GRID_JUSTIFY.center}>
        <Col span={12} md={10} lg={8}>
          <div style={DEMO_CHART_BLOCK_STYLE}>Hero Section</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card A</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card B</div>
        </Col>
        <Col span={12} sm={6} lg={4}>
          <div style={DEMO_WIDGET_BLOCK_STYLE}>Feature Card C</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED} align={GRID_ALIGN.middle}>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Image / Illustration</div>
        </Col>
        <Col span={12} md={6}>
          <div style={DEMO_MAIN_BLOCK_STYLE}>Value Description</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_TABLE_BLOCK_STYLE}>FAQ / Timeline</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_FOOTER_BLOCK_STYLE}>Footer Links</div>
        </Col>
      </Row>
    </div>
  )
};

export const FormLayoutPatterns: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Form layout patterns: label/input columns, offset alignment, and action button alignment for admin pages.'
      }
    }
  },
  render: () => (
    <div style={DEMO_PAGE_STYLE}>
      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12}>
          <div style={DEMO_HEADER_BLOCK_STYLE}>Form Header</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Company Name</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={3}>
          <div style={DEMO_FORM_LABEL_STYLE}>Label: Email</div>
        </Col>
        <Col span={12} md={9}>
          <div style={DEMO_FORM_FIELD_STYLE}>Input Field (span 9)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{ span: 9, offset: 3 }}>
          <div style={DEMO_FORM_FIELD_STYLE}>Inline Help / Validation Message (offset 3)</div>
        </Col>
      </Row>

      <Row gutter={GRID_GUTTER_SPACED}>
        <Col span={12} md={{ span: 9, offset: 3 }}>
          <Row gutter={GRID_GUTTER_COMPACT} justify={GRID_JUSTIFY.end}>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Secondary Action</div>
            </Col>
            <Col span={6} md={4} lg={3}>
              <div style={DEMO_FORM_ACTION_STYLE}>Primary Action</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
};
