import React from 'react';
import { fn } from '@storybook/test';

import type { Meta, StoryObj } from '@storybook/react';
import type { RadioChangeEvent } from './interface';
import { Radio, RadioGroup } from './index';

import './style';

const DIRECTIONS = ['left', 'right'] as const;
const VARIANTS = ['default', 'cell'] as const;
const SIZES = ['large', 'medium', 'small'] as const;
const ORIENTATIONS = ['horizontal', 'vertical'] as const;
const ICONS = ['swift', 'language', 'usd'] as const;

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
    checked: { control: 'boolean' },
    variant: { control: 'radio', options: [...VARIANTS] },
    size: { control: 'radio', options: [...SIZES] },
    orientation: { control: 'radio', options: [...ORIENTATIONS] },
    direction: { control: 'radio', options: [...DIRECTIONS] },
    label: { control: 'text' },
    description: { control: 'text' },
    tag: { control: 'text' },
    icon: { control: 'radio', options: [...ICONS] },
  },
  args: {
    disabled: false,
    checked: false,
    variant: 'default',
    size: 'large',
    orientation: 'horizontal',
    direction: 'left',
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
        <h3 style={{ marginBottom: 12 }}>Direction: Right</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio label="Unchecked" direction="right" />
          <Radio label="Checked" direction="right" checked />
          <Radio
            label="With description"
            description="Helper text"
            direction="right"
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
            orientation="horizontal"
            label="Wire transfer"
            description="Receive via SWIFT"
            style={{ width: 320 }}
          />
          <Radio
            variant="cell"
            size="medium"
            orientation="horizontal"
            icon="usd"
            label="USD1"
            style={{ width: 180 }}
          />
          <Radio
            checked
            variant="cell"
            size="large"
            orientation="vertical"
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
      <RadioGroup value={value} onChange={handleChange} layout="horizontal">
        <Radio value="sm" label="Small" />
        <Radio value="md" label="Medium" />
        <Radio value="lg" label="Large" />
      </RadioGroup>
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

export const GroupDirectionRight: Story = {
  render: () => {
    const [value, setValue] = React.useState<string | number>('a');
    const handleChange = (event: RadioChangeEvent) => {
      if (event.target.value !== undefined) {
        setValue(event.target.value);
      }
    };

    return (
      <RadioGroup value={value} onChange={handleChange} direction="right">
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
        orientation="horizontal"
        label="Checked"
        description="Primary selection"
        style={{ width: 300 }}
      />
      <Radio
        checked
        variant="cell"
        size="medium"
        orientation="horizontal"
        label="Medium"
        style={{ width: 180 }}
      />
      <Radio
        checked
        variant="cell"
        size="small"
        orientation="horizontal"
        label="Small"
        style={{ width: 180 }}
      />
      <Radio
        checked
        disabled
        variant="cell"
        size="large"
        orientation="horizontal"
        label="Disabled checked"
        description="Disabled state"
        style={{ width: 300 }}
      />
    </div>
  ),
};

export const CellVertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <Radio
        checked
        variant="cell"
        size="large"
        orientation="vertical"
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
        orientation="vertical"
        icon="usd"
        label="USD1"
        style={{ width: 200 }}
      />
      <Radio
        checked
        variant="cell"
        size="small"
        orientation="vertical"
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
        <h3 style={{ marginBottom: 12 }}>Horizontal</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <Radio
            checked
            variant="cell"
            size="large"
            orientation="horizontal"
            label="Large"
            description="Description"
            style={{ width: 300 }}
          />
          <Radio
            checked
            variant="cell"
            size="medium"
            orientation="horizontal"
            label="Medium"
            style={{ width: 180 }}
          />
          <Radio
            checked
            variant="cell"
            size="small"
            orientation="horizontal"
            label="Small"
            style={{ width: 180 }}
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: 12 }}>Vertical</h3>
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Radio
            checked
            variant="cell"
            size="large"
            orientation="vertical"
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
            orientation="vertical"
            icon="usd"
            label="Medium"
            style={{ width: 200 }}
          />
          <Radio
            checked
            variant="cell"
            size="small"
            orientation="vertical"
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
        orientation="horizontal"
        layout="horizontal"
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

export const GroupCellSequences: Story = {
  render: () => {
    const [verticalValue, setVerticalValue] = React.useState<string | number>('checked');
    const [horizontalValue, setHorizontalValue] = React.useState<string | number>('checked');

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
        <div style={{ width: 300 }}>
          <h3 style={{ marginBottom: 12 }}>Sequence Vertical</h3>
          <RadioGroup
            value={verticalValue}
            variant="cell"
            size="large"
            orientation="horizontal"
            layout="vertical"
            onChange={handleVerticalChange}
            options={options}
          />
        </div>
        <div style={{ width: 612 }}>
          <h3 style={{ marginBottom: 12 }}>Sequence Horizontal</h3>
          <RadioGroup
            value={horizontalValue}
            variant="cell"
            size="large"
            orientation="horizontal"
            layout="horizontal"
            onChange={handleHorizontalChange}
            options={options}
          />
        </div>
      </div>
    );
  },
};
