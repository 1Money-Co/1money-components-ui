import React, { useMemo, useState } from 'react';
import { fn } from '@storybook/test';
import { Alert } from '@/components/Alert';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Icons } from '@/components/Icons';
import { Input } from '@/components/Input';
import { TypographyBody } from '@/components/Typography';
import type { Meta, StoryObj } from '@storybook/react';
import type { Placement } from '@floating-ui/react';
import { joinCls } from '@/utils/classnames';
import { Dropdown } from './index';

import '../Alert/style';
import '../Button/style';
import '../Checkbox/style';
import '../Icons/style';
import '../Input/style';
import './style';

/* ------------------------------------------------------------------ */
/*  Shared styles                                                      */
/* ------------------------------------------------------------------ */

const panelContentStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  minWidth: 160,
};


const groupHeaderStyle: React.CSSProperties = {
  padding: '8px 0',
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.08,
  color: '#131313',
};

const itemTitleStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 500,
  lineHeight: 1.4,
  color: '#131313',
  margin: 0,
};

const itemSubtitleStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.4,
  color: '#404042',
  margin: 0,
};

const itemAmountStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 400,
  lineHeight: 1.4,
  color: '#404042',
  textAlign: 'right',
  margin: 0,
};

const selectedBarStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 4,
  width: '100%',
};

const addressItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  minHeight: 40,
  padding: '16px 12px',
  borderRadius: 8,
  border: '1px solid #f0f0f0',
  cursor: 'pointer',
  background: 'transparent',
  width: '100%',
  textAlign: 'left',
};

const addressItemSelectedStyle: React.CSSProperties = {
  ...addressItemStyle,
  backgroundColor: '#f8f8f8',
};

const panelTitleStyle: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 600,
  lineHeight: 1.08,
  color: '#131313',
  padding: '8px 0',
  margin: 0,
};

const panelFooterStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  paddingTop: 12,
  paddingBottom: 4,
  borderTop: '1px solid #f0f0f0',
};

const footerBtnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  flex: 1,
  padding: '8px 12px',
  borderRadius: 8,
  border: 'none',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.33,
  cursor: 'pointer',
};

const clearAllBtnStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#ae0000',
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.33,
  padding: 0,
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface CurrencyItem {
  code: string;
  name: string;
  flag: string;
  amount: string;
  amountUsd?: string;
  group: string;
}

const CURRENCIES: CurrencyItem[] = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', amount: '$2,500.00 USD', group: 'Fiat Currencies' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', amount: '€1,720.00 EUR', amountUsd: '$1,857.60 USD', group: 'Fiat Currencies' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧', amount: '£1,000.00 GBP', amountUsd: '$1,275.00 USD', group: 'Fiat Currencies' },
  { code: 'USDT', name: 'Tether', flag: '₮', amount: '2,500.00 USDT', amountUsd: '$2,500.00 USD', group: 'Stablecoins' },
  { code: 'USDC', name: 'USD Coin', flag: '◎', amount: '1,200.00 USDC', amountUsd: '$1,200.00 USD', group: 'Stablecoins' },
  { code: 'ETH', name: 'Ethereum', flag: 'Ξ', amount: '1.25 ETH', amountUsd: '$4,687.50 USD', group: 'Crypto' },
  { code: 'SOL', name: 'Solana', flag: '◎', amount: '50.00 SOL', amountUsd: '$7,500.00 USD', group: 'Crypto' },
];

const SIMPLE_ITEMS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];

interface NetworkItem {
  code: string;
  name: string;
  icon: string;
  time: string;
}

const NETWORKS: NetworkItem[] = [
  { code: 'ETH', name: 'ETH - Ethereum', icon: 'Ξ', time: '4 mins' },
  { code: 'BNB', name: 'BNB Smart Chain (BEP20)', icon: '⬡', time: '4 mins' },
  { code: 'MATIC', name: 'Polygon POS', icon: '⬟', time: '4 mins' },
];

interface AddressItem {
  id: string;
  label: string;
  address: string;
  token: string;
}

const ADDRESSES: AddressItem[] = [
  { id: '1', label: "Jack's wallet", address: '0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1', token: 'USD1' },
  { id: '2', label: "Jack's wallet", address: '0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1', token: 'USD1' },
  { id: '3', label: "Jack's wallet", address: '0x893599fc371F88C1f72aEb86fCA84a3e76674Ae1', token: 'USD1' },
];

/* ------------------------------------------------------------------ */
/*  Shared components for stories                                      */
/* ------------------------------------------------------------------ */

function MenuContent({ onClose }: { onClose?: () => void }) {
  return (
    <div style={panelContentStyle}>
      <button type="button" className="om-dropdown-item" onClick={onClose}>
        Edit
      </button>
      <button type="button" className="om-dropdown-item" onClick={onClose}>
        Duplicate
      </button>
      <button type="button" className="om-dropdown-item" onClick={onClose}>
        Archive
      </button>
      <button
        type="button"
        className="om-dropdown-item"
        style={{ color: '#e53935' }}
        onClick={onClose}
      >
        Delete
      </button>
    </div>
  );
}

/** Dropdown item row with optional left/center/right content + checkmark */
function DropdownItem({
  selected,
  left,
  title,
  subtitle,
  right,
  onClick,
}: {
  selected?: boolean;
  left?: React.ReactNode;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={joinCls('om-dropdown-item', selected && 'om-dropdown-item--selected')}
      onClick={onClick}
    >
      {left && <div style={{ flexShrink: 0 }}>{left}</div>}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={itemTitleStyle}>{title}</p>
        {subtitle && <p style={itemSubtitleStyle}>{subtitle}</p>}
      </div>
      {right && <div style={{ flexShrink: 0, textAlign: 'right' }}>{right}</div>}
      {selected !== undefined && (
        <div style={{ flexShrink: 0, width: 16 }}>
          {selected && <Icons name="check" size={16} color="#131313" />}
        </div>
      )}
    </button>
  );
}

/** Currency icon placeholder */
function CurrencyIcon({ flag }: { flag: string }) {
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        fontSize: 18,
        lineHeight: 1,
        borderRadius: '50%',
      }}
    >
      {flag}
    </span>
  );
}

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    trigger: { control: 'radio', options: ['click', 'hover'] },
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
    },
    showArrow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    offset: { control: 'number' },
  },
  args: {
    trigger: 'click',
    placement: 'bottom-start',
    showArrow: false,
    disabled: false,
    offset: 4,
    onOpenChange: fn(),
    onOpen: fn(),
    onClose: fn(),
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: (args) => (
    <Dropdown {...args} content={<MenuContent />}>
      <Button>Actions</Button>
    </Dropdown>
  ),
};

export const HoverTrigger: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      trigger="hover"
      hoverDelay={{ open: 100, close: 200 }}
      content={<MenuContent />}
    >
      <Button>Hover me</Button>
    </Dropdown>
  ),
};

export const Placements: Story = {
  render: (args) => {
    const placements: Placement[] = [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'left',
      'left-start',
      'left-end',
      'right',
      'right-start',
      'right-end',
    ];

    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          padding: 120,
          justifyContent: 'center',
        }}
      >
        {placements.map((placement) => (
          <Dropdown
            {...args}
            key={placement}
            placement={placement}
            content={
              <div style={{ padding: 8, fontSize: 13, whiteSpace: 'nowrap' }}>
                {placement}
              </div>
            }
          >
            <Button size="small">{placement}</Button>
          </Dropdown>
        ))}
      </div>
    );
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Dropdown
          {...args}
          open={open}
          onOpenChange={(nextOpen) => {
            setOpen(nextOpen);
            args.onOpenChange?.(nextOpen);
          }}
          content={<MenuContent onClose={() => setOpen(false)} />}
        >
          <Button>Controlled</Button>
        </Dropdown>
        <Button color="grey" size="small" onClick={() => setOpen((prev) => !prev)}>
          Toggle: {open ? 'Open' : 'Closed'}
        </Button>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Dropdown {...args} disabled content={<MenuContent />}>
      <Button disabled>Disabled</Button>
    </Dropdown>
  ),
};

export const CustomStyling: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      overlayClassName="custom-dropdown-panel"
      overlayStyle={{ minWidth: 240 }}
      content={<MenuContent />}
    >
      <Button>Custom Style</Button>
    </Dropdown>
  ),
};

/* ================================================================== */
/*  Rich content stories (matching Figma design)                       */
/* ================================================================== */

/**
 * Dropdown with a search input at the top of the panel for filtering items.
 */
export const WithSearch: Story = {
  render: (args) => {
    const [query, setQuery] = useState('');
    const filtered = SIMPLE_ITEMS.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 240 }}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Input.Search
              size="small"
              placeholder="Search"
              value={query}
              onChange={setQuery}
              allowClear
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {filtered.length === 0 && (
                <p style={{ ...itemSubtitleStyle, padding: '8px 12px' }}>
                  No results found
                </p>
              )}
              {filtered.map((item) => (
                <DropdownItem key={item} title={item} />
              ))}
            </div>
          </div>
        }
      >
        <Button>Search Items</Button>
      </Dropdown>
    );
  },
};

/**
 * Grouped dropdown items under section headers, similar to the Figma design.
 */
export const GroupedItems: Story = {
  render: (args) => {
    const groups = useMemo(() => {
      const map = new Map<string, CurrencyItem[]>();
      CURRENCIES.forEach((c) => {
        const list = map.get(c.group) ?? [];
        list.push(c);
        map.set(c.group, list);
      });
      return map;
    }, []);

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 380 }}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {Array.from(groups.entries()).map(([group, items]) => (
              <div key={group} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={groupHeaderStyle}>{group}</div>
                {items.map((item) => (
                  <DropdownItem
                    key={item.code}
                    left={<CurrencyIcon flag={item.flag} />}
                    title={item.code}
                    subtitle={item.name}
                    right={
                      <p style={itemAmountStyle}>
                        {item.amount}
                        {item.amountUsd && (
                          <>
                            <br />
                            {item.amountUsd}
                          </>
                        )}
                      </p>
                    }
                  />
                ))}
              </div>
            ))}
          </div>
        }
      >
        <Button>Currency List</Button>
      </Dropdown>
    );
  },
};

/**
 * Multi-select dropdown with a "N selected" header and "Clear all" action.
 */
export const MultiSelect: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(['Apple', 'Cherry', 'Fig']);

    const toggle = (item: string) => {
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
      );
    };

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 260 }}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {selected.length > 0 && (
              <div style={selectedBarStyle}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#131313' }}>
                  {selected.length} selected
                </span>
                <button
                  type="button"
                  style={clearAllBtnStyle}
                  onClick={() => setSelected([])}
                >
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {SIMPLE_ITEMS.map((item) => (
                <DropdownItem
                  key={item}
                  title={item}
                  selected={selected.includes(item)}
                  onClick={() => toggle(item)}
                />
              ))}
            </div>
          </div>
        }
      >
        <Button>
          {selected.length > 0 ? `${selected.length} selected` : 'Select items'}
        </Button>
      </Dropdown>
    );
  },
};

/**
 * Multi-select dropdown with Checkbox for each item.
 */
export const MultiSelectWithCheckbox: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(['Banana', 'Date']);

    const toggle = (item: string) => {
      setSelected((prev) =>
        prev.includes(item) ? prev.filter((v) => v !== item) : [...prev, item],
      );
    };

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 260 }}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {selected.length > 0 && (
              <div style={selectedBarStyle}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#131313' }}>
                  {selected.length} selected
                </span>
                <button
                  type="button"
                  style={clearAllBtnStyle}
                  onClick={() => setSelected([])}
                >
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {SIMPLE_ITEMS.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 8,
                    fontSize: 14,
                    backgroundColor: selected.includes(item) ? '#f8f8f8' : 'transparent',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => toggle(item)}>
                   <Checkbox
                      checked={selected.includes(item)}
                      onChange={() => toggle(item)}
                   />
                    <TypographyBody>{item}</TypographyBody>
                  </div>

                </div>
              ))}
            </div>
          </div>
        }
      >
        <Button>
          {selected.length > 0 ? `${selected.length} selected` : 'Select items'}
        </Button>
      </Dropdown>
    );
  },
};

/**
 * Full-featured dropdown matching the Figma design:
 * search + grouped items + multi-select + rich content (icons, amounts, checkmarks) + clear all.
 */
export const FullFeatured: Story = {
  render: (args) => {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<string[]>(['USD', 'USDT', 'SOL']);

    const toggle = (code: string) => {
      setSelected((prev) =>
        prev.includes(code) ? prev.filter((v) => v !== code) : [...prev, code],
      );
    };

    const filtered = CURRENCIES.filter(
      (c) =>
        c.code.toLowerCase().includes(query.toLowerCase()) ||
        c.name.toLowerCase().includes(query.toLowerCase()),
    );

    const groups = useMemo(() => {
      const map = new Map<string, CurrencyItem[]>();
      filtered.forEach((c) => {
        const list = map.get(c.group) ?? [];
        list.push(c);
        map.set(c.group, list);
      });
      return map;
    }, [filtered]);

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 420 }}
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Selected bar */}
            {selected.length > 0 && (
              <div style={selectedBarStyle}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#131313' }}>
                  {selected.length} selected
                </span>
                <button
                  type="button"
                  style={clearAllBtnStyle}
                  onClick={() => setSelected([])}
                >
                  <Icons name="cross" size={16} color="#ae0000" />
                  Clear all
                </button>
              </div>
            )}

            {/* Search */}
            <div style={{ padding: '8px 0' }}>
              <Input.Search
                size="small"
                placeholder="Search"
                value={query}
                onChange={setQuery}
                allowClear
              />
            </div>

            {/* Grouped items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {Array.from(groups.entries()).map(([group, items]) => (
                <div key={group} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={groupHeaderStyle}>{group}</div>
                  {items.map((item) => (
                    <DropdownItem
                      key={item.code}
                      selected={selected.includes(item.code)}
                      left={<CurrencyIcon flag={item.flag} />}
                      title={item.code}
                      subtitle={item.name}
                      right={
                        <p style={itemAmountStyle}>
                          {item.amount}
                          {item.amountUsd && (
                            <>
                              <br />
                              {item.amountUsd}
                            </>
                          )}
                        </p>
                      }
                      onClick={() => toggle(item.code)}
                    />
                  ))}
                </div>
              ))}
              {filtered.length === 0 && (
                <p style={{ ...itemSubtitleStyle, padding: '8px 12px' }}>
                  No results found
                </p>
              )}
            </div>
          </div>
        }
      >
        <Button>
          {selected.length > 0 ? `${selected.length} currencies selected` : 'Select currencies'}
        </Button>
      </Dropdown>
    );
  },
};

/**
 * Dropdown with single-select behavior — selecting an item closes the panel.
 */
export const SingleSelect: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 380 }}
        content={({ close }) => (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {CURRENCIES.slice(0, 4).map((item) => (
              <DropdownItem
                key={item.code}
                selected={selected === item.code}
                left={<CurrencyIcon flag={item.flag} />}
                title={item.code}
                subtitle={item.name}
                right={<p style={itemAmountStyle}>{item.amount}</p>}
                onClick={() => {
                  setSelected(item.code);
                  close();
                }}
              />
            ))}
          </div>
        )}
      >
        <Button>
          {selected
            ? `${CURRENCIES.find((c) => c.code === selected)?.flag} ${selected}`
            : 'Choose currency'}
        </Button>
      </Dropdown>
    );
  },
};

/**
 * Nested dropdown — a dropdown item opens another dropdown.
 */
export const Nested: Story = {
  render: (args) => (
    <Dropdown
      {...args}
      content={
        <div style={panelContentStyle}>
          <button type="button" className="om-dropdown-item">
            Profile
          </button>
          <Dropdown
            placement="right-start"
            content={
              <div style={panelContentStyle}>
                <button type="button" className="om-dropdown-item">
                  English
                </button>
                <button type="button" className="om-dropdown-item">
                  中文
                </button>
                <button type="button" className="om-dropdown-item">
                  日本語
                </button>
              </div>
            }
          >
            <button type="button" className="om-dropdown-item" style={{ justifyContent: 'space-between' }}>
              Language
              <Icons name="chevronRight" size={14} color="#9fa3a3" />
            </button>
          </Dropdown>
          <button type="button" className="om-dropdown-item">
            Settings
          </button>
          <button type="button" className="om-dropdown-item" style={{ color: '#e53935' }}>
            Sign out
          </button>
        </div>
      }
    >
      <Button>Menu</Button>
    </Dropdown>
  ),
};

/**
 * Network selector dropdown with a warning alert banner at the top.
 * Matches the Figma design: Alert + selectable network items with icon, name, and estimated time.
 */
export const NetworkSelector: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('BNB');

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 420 }}
        content={({ close }) => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Alert
              status="warning"
              body="Please only top up through supported networks, otherwise you may lose your funds"
              closable={false}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {NETWORKS.map((network) => (
                <DropdownItem
                  key={network.code}
                  selected={selected === network.code}
                  left={<CurrencyIcon flag={network.icon} />}
                  title={network.code}
                  subtitle={network.name}
                  right={<p style={itemAmountStyle}>{network.time}</p>}
                  onClick={() => {
                    setSelected(network.code);
                    close();
                  }}
                />
              ))}
            </div>
          </div>
        )}
      >
        <Button>
          {selected ? `${NETWORKS.find((n) => n.code === selected)?.icon} ${selected}` : 'Select Network'}
        </Button>
      </Dropdown>
    );
  },
};

/**
 * Address history dropdown with a title header, bordered address items, and a footer action button.
 * Matches the Figma design: title + address list with wallet name, address, token tag + "New address" button.
 */
export const AddressHistory: Story = {
  render: (args) => {
    const [selected, setSelected] = useState('1');

    return (
      <Dropdown
        {...args}
        overlayStyle={{ minWidth: 420 }}
        content={({ close }) => (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Title */}
            <p style={panelTitleStyle}>Address History</p>

            {/* Address list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {ADDRESSES.map((addr) => (
                <button
                  key={addr.id}
                  type="button"
                  style={selected === addr.id ? addressItemSelectedStyle : addressItemStyle}
                  onClick={() => {
                    setSelected(addr.id);
                    close();
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={itemTitleStyle}>{addr.label}</p>
                    <p style={{ ...itemSubtitleStyle, wordBreak: 'break-all' }}>
                      {addr.address}
                    </p>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <p style={itemAmountStyle}>{addr.token}</p>
                  </div>
                  <div style={{ flexShrink: 0, width: 16 }}>
                    {selected === addr.id && (
                      <Icons name="check" size={16} color="#131313" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Footer action */}
            <div style={panelFooterStyle}>
              <button
                type="button"
                style={{
                  ...footerBtnStyle,
                  backgroundColor: '#dde6f4',
                  color: '#073387',
                }}
              >
                <Icons name="add" size={16} color="#073387" />
                New address
              </button>
            </div>
          </div>
        )}
      >
        <Button>Select Address</Button>
      </Dropdown>
    );
  },
};
