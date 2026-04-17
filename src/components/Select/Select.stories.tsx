import React, { useState } from 'react';
import { fn } from '@storybook/test';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import type { SelectOption, SelectRenderOptionMeta } from './interface';
import { Select } from './index';

import '../Button/style';
import './style';

const OPTIONS = [
  { label: 'Bitcoin', value: 'btc' },
  { label: 'Ethereum', value: 'eth' },
  { label: 'USDT', value: 'usdt' },
  { label: 'USD Coin', value: 'usdc' },
  { label: 'Solana', value: 'sol' },
  { label: 'Dogecoin', value: 'doge' },
  { label: 'Cardano', value: 'ada' },
  { label: 'Polygon', value: 'matic' },
];

const GROUPED_OPTIONS = [
  {
    label: 'Stablecoins',
    options: [
      { label: 'USDT', value: 'usdt', description: 'Ethereum' },
      { label: 'USDC', value: 'usdc', description: 'Solana' },
    ],
  },
  {
    label: 'Address History',
    options: [
      { label: 'EUR', value: 'eur', description: 'Euro' },
      { label: 'GBP', value: 'gbp', description: 'British Pound' },
    ],
  },
];

const ASSET_OPTIONS = [
  { label: 'Bitcoin', value: 'btc', description: 'Bitcoin network' },
  { label: 'Ethereum', value: 'eth', description: 'Ethereum mainnet' },
  { label: 'USDT', value: 'usdt', description: 'Ethereum' },
  { label: 'USD Coin', value: 'usdc', description: 'Solana' },
  { label: 'Solana', value: 'sol', description: 'Solana network' },
  { label: 'Dogecoin', value: 'doge', description: 'Dogecoin network' },
  { label: 'MATIC', value: 'matic', description: 'Polygon PoS' },
];

const GROUPED_ASSET_OPTIONS = [
  {
    label: 'Layer 1',
    options: [
      { label: 'Bitcoin', value: 'btc', description: 'Bitcoin network' },
      { label: 'Ethereum', value: 'eth', description: 'Ethereum mainnet' },
      { label: 'Solana', value: 'sol', description: 'Solana network' },
    ],
  },
  {
    label: 'Stablecoins',
    options: [
      { label: 'USDT', value: 'usdt', description: 'Ethereum' },
      { label: 'USD Coin', value: 'usdc', description: 'Solana' },
    ],
  },
  {
    label: 'Alternative',
    options: [
      { label: 'Dogecoin', value: 'doge', description: 'Dogecoin network' },
      { label: 'MATIC', value: 'matic', description: 'Polygon PoS' },
    ],
  },
];

const storyContainerStyle: React.CSSProperties = {
  width: 280,
};

const assetOptionMainStyle: React.CSSProperties = {
  display: 'flex',
  flex: '1 1 auto',
  gap: 12,
  alignItems: 'center',
  minWidth: 0,
};

const assetOptionTextStyle: React.CSSProperties = {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  gap: 2,
  minWidth: 0,
};

const assetOptionLabelStyle: React.CSSProperties = {
  overflow: 'hidden',
  fontSize: 14,
  fontWeight: 500,
  lineHeight: '20px',
  color: '#131313',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const assetOptionDescriptionStyle: React.CSSProperties = {
  overflow: 'hidden',
  fontSize: 12,
  lineHeight: '16px',
  color: '#70757a',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

const assetFooterActionsStyle: React.CSSProperties = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  width: '100%',
};

const assetMetadataByValue: Record<
  string,
  { background: string; color?: string; glyph: string }
> = {
  btc: { background: '#f7931a', glyph: '₿' },
  eth: { background: '#f0f0f0', color: '#131313', glyph: 'Ξ' },
  usdt: { background: '#26a17b', glyph: '₮' },
  usdc: { background: '#2775ca', glyph: '$' },
  sol: { background: 'linear-gradient(135deg, #14f195 0%, #9945ff 100%)', glyph: 'S' },
  doge: { background: '#c2a633', glyph: 'Ð' },
  matic: { background: '#8247e5', glyph: 'P' },
};

function AssetMark({ value }: { value: string | number }) {
  const metadata = assetMetadataByValue[String(value)] ?? {
    background: '#073387',
    glyph: String(value).slice(0, 1).toUpperCase(),
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        color: metadata.color ?? '#fff',
        fontSize: 13,
        fontWeight: 600,
        lineHeight: '16px',
        background: metadata.background,
        borderRadius: 999,
      }}
    >
      {metadata.glyph}
    </span>
  );
}

function AssetSelectionIndicator({
  multiple,
  selected,
}: {
  multiple: boolean;
  selected: boolean;
}) {
  if (!multiple) {
    return (
      <span
        aria-hidden="true"
        style={{
          display: 'inline-flex',
          flexShrink: 0,
          alignItems: 'center',
          justifyContent: 'center',
          width: 16,
          height: 16,
          color: '#073387',
        }}
      >
        {selected && <Icons name="check" size={16} color="currentColor" />}
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-flex',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 16,
        height: 16,
        color: '#fff',
        background: selected ? '#073387' : '#fff',
        border: `1px solid ${selected ? '#073387' : '#9fa3a3'}`,
        borderRadius: 4,
      }}
    >
      {selected && <Icons name="check" size={12} color="currentColor" />}
    </span>
  );
}

function renderAssetOption(option: SelectOption, meta: SelectRenderOptionMeta) {
  return (
    <>
      <span style={assetOptionMainStyle}>
        <AssetMark value={option.value} />
        <span style={assetOptionTextStyle}>
          <span style={assetOptionLabelStyle}>{option.label}</span>
          {option.description && (
            <span style={assetOptionDescriptionStyle}>{option.description}</span>
          )}
        </span>
      </span>
      <AssetSelectionIndicator multiple={meta.multiple} selected={meta.selected} />
    </>
  );
}

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    maxVisibleValues: { control: 'number' },
    searchable: { control: 'boolean' },
    searchPlaceholder: { control: 'text' },
    size: { control: 'radio', options: ['large', 'small'] },
    status: { control: 'radio', options: ['default', 'error', 'warning', 'success'] },
    variant: { control: 'radio', options: ['fill', 'stroke', 'frameless'] },
  },
  args: {
    label: 'Label',
    placeholder: 'Value',
    options: OPTIONS.map((option) => ({ ...option })),
    size: 'large',
    status: 'default',
    variant: 'fill',
    disabled: false,
    onChange: fn(),
    onOpenChange: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('btc');

    return (
      <Select
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue as string | number | undefined);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
};

export const Placeholder: Story = {
  args: {
    value: undefined,
  },
};

export const Stroke: Story = {
  args: {
    variant: 'stroke',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    value: 'eth',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    feedback: 'Feedback',
    value: undefined,
  },
};

export const Multiple: Story = {
  render: (args) => {
    const [value, setValue] = useState<Array<string | number>>([
      'btc',
      'eth',
      'usdt',
      'usdc',
      'sol',
      'doge',
      'ada',
      'matic',
    ]);

    return (
      <Select
        {...args}
        multiple
        value={value}
        onChange={(nextValue, option) => {
          setValue((nextValue as Array<string | number>) ?? []);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    placeholder: 'Select assets',
    size: 'small',
  },
};

export const MultipleCollapsed: Story = {
  render: (args) => {
    const [value, setValue] = useState<Array<string | number>>([
      'btc',
      'eth',
      'usdt',
      'usdc',
      'sol',
      'doge',
    ]);

    return (
      <div style={{ width: 320 }}>
        <Select
          {...args}
          multiple
          value={value}
          onChange={(nextValue, option) => {
            setValue((nextValue as Array<string | number>) ?? []);
            args.onChange?.(nextValue, option);
          }}
        />
      </div>
    );
  },
  args: {
    label: undefined,
    options: ASSET_OPTIONS,
    maxVisibleValues: 1,
    placeholder: 'Select assets',
    size: 'large',
    variant: 'stroke',
  },
  tags: ['!autodocs', 'dev'],
};

export const Frameless: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('btc');

    return (
      <Select
        {...args}
        value={value}
        variant="frameless"
        prefix={<Icons name="usd" size={24} color="currentColor" />}
        onChange={(nextValue, option) => {
          setValue(nextValue as string | number | undefined);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    label: undefined,
    placeholder: 'Currency',
  },
  tags: ['!autodocs', 'dev'],
};

export const Grouped: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('usdt');

    return (
      <Select
        {...args}
        value={value}
        onChange={(nextValue, option) => {
          setValue(nextValue as string | number | undefined);
          args.onChange?.(nextValue, option);
        }}
      />
    );
  },
  args: {
    label: undefined,
    options: GROUPED_OPTIONS,
    value: 'usdt',
  },
};

export const AssetMultiSelectActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<Array<string | number>>(['btc']);
    const [draftValue, setDraftValue] = useState<Array<string | number>>(['btc']);

    return (
      <div style={storyContainerStyle}>
        <Select
          {...args}
          multiple
          open={open}
          value={open ? draftValue : value}
          renderOption={renderAssetOption}
          panelFooter={(
            <div style={assetFooterActionsStyle}>
              <Button
                color="grey"
                size="small"
                style={{ flex: 1 }}
                onClick={() => {
                  setDraftValue([]);
                }}
              >
                Reset
              </Button>
              <Button
                size="small"
                style={{ flex: 1 }}
                onClick={() => {
                  setValue(draftValue);
                  setOpen(false);
                  args.onOpenChange?.(false);
                }}
              >
                Apply
              </Button>
            </div>
          )}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            setDraftValue(value);
            args.onOpenChange?.(nextOpen);
          }}
          onChange={(nextValue, option) => {
            setDraftValue((nextValue as Array<string | number>) ?? []);
            args.onChange?.(nextValue, option);
          }}
        />
      </div>
    );
  },
  args: {
    label: undefined,
    placeholder: 'Select assets',
    options: ASSET_OPTIONS,
    size: 'small',
  },
  tags: ['!autodocs', 'dev'],
};

export const GroupedAssetOptions: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('usdt');

    return (
      <div style={storyContainerStyle}>
        <Select
          {...args}
          value={value}
          renderOption={renderAssetOption}
          onChange={(nextValue, option) => {
            setValue(nextValue as string | number | undefined);
            args.onChange?.(nextValue, option);
          }}
        />
      </div>
    );
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    options: GROUPED_ASSET_OPTIONS,
    value: 'usdt',
  },
  tags: ['!autodocs', 'dev'],
};

export const SearchOnlyFiltered: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>(undefined);
    const [searchValue, setSearchValue] = useState('');

    const trimmed = searchValue.trim().toLowerCase();
    const filteredOptions = trimmed
      ? ASSET_OPTIONS.filter((option) => {
          const label = String(option.label).toLowerCase();
          const description = String(option.description ?? '').toLowerCase();
          const optionValue = String(option.value).toLowerCase();
          return (
            label.includes(trimmed) ||
            description.includes(trimmed) ||
            optionValue.includes(trimmed)
          );
        })
      : [];

    return (
      <div style={storyContainerStyle}>
        <Select
          {...args}
          value={value}
          options={filteredOptions}
          searchValue={searchValue}
          emptyContent={trimmed ? 'No matches' : 'Type to search assets'}
          onSearchChange={(next) => {
            setSearchValue(next);
            args.onSearchChange?.(next);
          }}
          onChange={(nextValue, option) => {
            setValue(nextValue as string | number | undefined);
            args.onChange?.(nextValue, option);
          }}
        />
      </div>
    );
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    searchable: true,
    searchPlaceholder: 'Search',
  },
  tags: ['!autodocs', 'dev'],
};

export const SearchableGrouped: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | number | undefined>('usdt');

    return (
      <div style={storyContainerStyle}>
        <Select
          {...args}
          value={value}
          renderOption={renderAssetOption}
          onChange={(nextValue, option) => {
            setValue(nextValue as string | number | undefined);
            args.onChange?.(nextValue, option);
          }}
        />
      </div>
    );
  },
  args: {
    label: undefined,
    placeholder: 'Select asset',
    options: GROUPED_ASSET_OPTIONS,
    searchable: true,
    searchPlaceholder: 'Search',
    value: 'usdt',
  },
  tags: ['!autodocs', 'dev'],
};
