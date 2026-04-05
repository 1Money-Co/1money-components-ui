import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import type { RadioChangeEvent } from './interface';
import { Radio, RadioGroup } from './index';
import {
  RADIO_ALIGNMENTS,
  RADIO_DEFAULT_ALIGNMENT,
  RADIO_DEFAULT_SIZE,
  RADIO_DEFAULT_VARIANT,
  RADIO_SIZES,
  RADIO_VARIANTS,
} from './constants';

import './style';

const ICONS = ['swift', 'language', 'usd'] as const;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    variant: { control: 'radio', options: [...RADIO_VARIANTS] },
    size: { control: 'radio', options: [...RADIO_SIZES] },
    alignment: { control: 'radio', options: [...RADIO_ALIGNMENTS] },
    label: { control: 'text' },
    description: { control: 'text' },
    tag: { control: 'text' },
    icon: { control: 'radio', options: [...ICONS] },
  },
  args: {
    disabled: false,
    checked: false,
    variant: RADIO_DEFAULT_VARIANT,
    size: RADIO_DEFAULT_SIZE,
    alignment: RADIO_DEFAULT_ALIGNMENT,
    label: 'Radio label',
    icon: 'swift',
    onChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Default</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" />
          <Radio label="Checked" checked />
          <Radio label="Disabled unchecked" disabled />
          <Radio label="Disabled checked" checked disabled />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>With Description</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" description="Helper text" />
          <Radio label="Checked" description="Helper text" checked />
          <Radio
            label="Disabled unchecked"
            description="Helper text"
            disabled
          />
          <Radio
            label="Disabled checked"
            description="Helper text"
            checked
            disabled
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Alignment: Right</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" alignment="right" />
          <Radio label="Checked" alignment="right" checked />
          <Radio
            label="With description"
            description="Helper text"
            alignment="right"
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Cell</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio
            checked
            variant="cell"
            size="large"
            alignment="left"
            label="Wire transfer"
            description="Receive via SWIFT"
            style={{ width: 320 }}
          />
          <Radio
            variant="cell"
            size="medium"
            alignment="left"
            icon="usd"
            label="USD1"
            style={{ width: 180 }}
          />
          <Radio
            checked
            variant="cell"
            size="large"
            alignment="center"
            icon="language"
            tag="Popular"
            label="Global account"
            description="Use for international settlement"
            style={{ width: 220 }}
          />
        </div>
      </div>
    </div>
  ),
  tags: ['!autodocs', 'dev'],
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio label="Unchecked" />
      <Radio label="Checked" checked />
      <Radio label="Disabled unchecked" disabled />
      <Radio label="Disabled checked" checked disabled />
    </div>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio label="Option 1" description="Description for option 1" />
      <Radio
        label="Option 2"
        description="Description for option 2"
        checked
      />
    </div>
  ),
};

// ── RadioGroup Stories ──

export const GroupBasic: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup value={value} onChange={handleChange}>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
        <Radio value="c" label="Option C" />
      </RadioGroup>
    );
  },
};

export const GroupWithOptions: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('email');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup
        value={value}
        onChange={handleChange}
        options={[
          { value: 'email', label: 'Email', description: 'Receive via email' },
          { value: 'sms', label: 'SMS', description: 'Receive via text message' },
          { value: 'push', label: 'Push notification', description: 'Receive on your device' },
        ]}
      />
    );
  },
};

export const GroupHorizontal: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('sm');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup value={value} onChange={handleChange} direction="horizontal">
        <Radio value="sm" label="Small" />
        <Radio value="md" label="Medium" />
        <Radio value="lg" label="Large" />
      </RadioGroup>
    );
  },
};

export const GroupDirections: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string | number>('a');
    const [horizontalValue, setHorizontalValue] = React.useState<string | number>('a');

    const handleVerticalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setVerticalValue(event.target.value);
      }
    };

    const handleHorizontalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setHorizontalValue(event.target.value);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <h3 style={{ marginBottom: 12 }}>Direction Vertical</h3>
          <RadioGroup value={verticalValue} onChange={handleVerticalChange} direction="vertical">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>
        <div>
          <h3 style={{ marginBottom: 12 }}>Direction Horizontal</h3>
          <RadioGroup value={horizontalValue} onChange={handleHorizontalChange} direction="horizontal">
            <Radio value="a" label="Option A" />
            <Radio value="b" label="Option B" />
            <Radio value="c" label="Option C" />
          </RadioGroup>
        </div>
      </div>
    );
  },
};

export const GroupDisabled: Story = {
  render: () => (
    <RadioGroup value="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
      <Radio value="c" label="Option C" />
    </RadioGroup>
  ),
};

export const GroupAlignmentRight: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup value={value} onChange={handleChange} alignment="right">
        <Radio value="a" label="Option A" description="Description A" />
        <Radio value="b" label="Option B" description="Description B" />
      </RadioGroup>
    );
  },
};

export const CellStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio
        checked
        variant="cell"
        size="large"
        alignment="left"
        label="Checked"
        description="Primary selection"
        style={{ width: 300 }}
      />
      <Radio
        checked
        variant="cell"
        size="medium"
        alignment="left"
        label="Medium"
        style={{ width: 180 }}
      />
      <Radio
        checked
        variant="cell"
        size="small"
        alignment="left"
        label="Small"
        style={{ width: 180 }}
      />
      <Radio
        checked
        disabled
        variant="cell"
        size="large"
        alignment="left"
        label="Disabled checked"
        description="Disabled state"
        style={{ width: 300 }}
      />
    </div>
  ),
};

export const CellCentered: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Radio
        checked
        variant="cell"
        size="large"
        alignment="center"
        icon="language"
        tag="Tag"
        label="Global account"
        description="International transfers"
        style={{ width: 200 }}
      />
      <Radio
        checked
        variant="cell"
        size="medium"
        alignment="center"
        icon="usd"
        label="USD1"
        style={{ width: 200 }}
      />
      <Radio
        checked
        variant="cell"
        size="small"
        alignment="center"
        icon="usd"
        label="USD1"
        style={{ width: 200 }}
      />
    </div>
  ),
};

export const CellSizeMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <h3 style={{ marginBottom: 12 }}>Alignment Left</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio
            checked
            variant="cell"
            size="large"
            alignment="left"
            label="Large"
            description="Description"
            style={{ width: 300 }}
          />
          <Radio
            checked
            variant="cell"
            size="medium"
            alignment="left"
            label="Medium"
            style={{ width: 180 }}
          />
          <Radio
            checked
            variant="cell"
            size="small"
            alignment="left"
            label="Small"
            style={{ width: 180 }}
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Alignment Center</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Radio
            checked
            variant="cell"
            size="large"
            alignment="center"
            icon="language"
            tag="Tag"
            label="Large"
            description="Description"
            style={{ width: 200 }}
          />
          <Radio
            checked
            variant="cell"
            size="medium"
            alignment="center"
            icon="usd"
            label="Medium"
            style={{ width: 200 }}
          />
          <Radio
            checked
            variant="cell"
            size="small"
            alignment="center"
            icon="usd"
            label="Small"
            style={{ width: 200 }}
          />
        </div>
      </div>
    </div>
  ),
};

export const GroupCellOptions: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('swift');

    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup
        value={value}
        variant="cell"
        size="large"
        alignment="left"
        direction="horizontal"
        onChange={handleChange}
        options={[
          {
            value: 'swift',
            label: 'SWIFT',
            description: 'Receive via bank rails',
          },
          {
            value: 'global',
            label: 'Global account',
            description: 'International settlement',
            icon: 'language',
          },
        ]}
      />
    );
  },
};

export const GroupCellDirections: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string | number>('swift');
    const [horizontalValue, setHorizontalValue] = React.useState<string | number>('swift');

    const options = [
      {
        value: 'swift',
        label: 'SWIFT',
        description: 'Receive via bank rails',
      },
      {
        value: 'global',
        label: 'Global account',
        description: 'International settlement',
        icon: 'language',
      },
    ];

    const handleVerticalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setVerticalValue(event.target.value);
      }
    };

    const handleHorizontalChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setHorizontalValue(event.target.value);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: 320 }}>
          <h3 style={{ marginBottom: 12 }}>Cell Direction Vertical</h3>
          <RadioGroup
            value={verticalValue}
            variant="cell"
            size="large"
            alignment="left"
            direction="vertical"
            onChange={handleVerticalChange}
            options={options}
          />
        </div>
        <div>
          <h3 style={{ marginBottom: 12 }}>Cell Direction Horizontal</h3>
          <RadioGroup
            value={horizontalValue}
            variant="cell"
            size="large"
            alignment="left"
            direction="horizontal"
            onChange={handleHorizontalChange}
            options={options}
          />
        </div>
      </div>
    );
  },
};

export const GroupCellAlignments: Story = {
  render: () => {
    const [leftValue, setLeftValue] = React.useState<string | number>('checked');
    const [centerValue, setCenterValue] = React.useState<string | number>('checked');

    const options = [
      {
        value: 'checked',
        label: 'Label',
        description: 'Description',
      },
      {
        value: 'unchecked',
        label: 'Label',
        description: 'Description',
        icon: 'swift',
      },
    ];

    const handleLeftChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setLeftValue(event.target.value);
      }
    };

    const handleCenterChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setCenterValue(event.target.value);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ width: 300 }}>
          <h3 style={{ marginBottom: 12 }}>Alignment Left</h3>
          <RadioGroup
            value={leftValue}
            variant="cell"
            size="large"
            alignment="left"
            direction="vertical"
            onChange={handleLeftChange}
            options={options}
          />
        </div>
        <div style={{ width: 300 }}>
          <h3 style={{ marginBottom: 12 }}>Alignment Center</h3>
          <RadioGroup
            value={centerValue}
            variant="cell"
            size="large"
            alignment="center"
            direction="vertical"
            onChange={handleCenterChange}
            options={options}
          />
        </div>
      </div>
    );
  },
};
