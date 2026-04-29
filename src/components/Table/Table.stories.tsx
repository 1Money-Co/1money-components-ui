import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { TypographyBody, TypographyLabel, TypographyTitle } from '@/components/Typography';
import { Table, VirtualTable } from './index';
import type { TableColumn, TableProps } from './interface';
import './style';

interface BankAccountRow {
  id: string;
  bankName: string;
  rail: string;
  status: 'active' | 'pending';
  countryFlag: string;
}

interface WalletGroup {
  id: string;
  title: string;
  accounts: BankAccountRow[];
}

interface WalletRegistryRow {
  id: string;
  walletName: string;
  walletSummary: string;
  countryFlag: string;
  groups: WalletGroup[];
}

interface PortfolioRow {
  id: string;
  wallet: string;
  owner: string;
  network: string;
  status: 'active' | 'hold' | 'review';
  balance: number;
  actionLabel: string;
  countryFlag: string;
}

interface WalletListRow {
  id: string;
  walletName: string;
  walletLabel: string;
  address: string;
}

interface ActivityLedgerDetailRow {
  id: string;
  ruleName: string;
  cryptoAmount: string;
  fiatAmount: string;
  status: 'completed';
}

interface ActivityLedgerRow extends ActivityLedgerDetailRow {
  groupLabel: string;
  stepCount: number;
  details?: ActivityLedgerDetailRow[];
}

const TABLE_VARIANTS = ['fill', 'stroke'] as const;
const TABLE_SIZES = ['large', 'small'] as const;

const stackStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
};

const sectionTitleStyle: CSSProperties = {
  marginBottom: 8,
};

const hintStyle: CSSProperties = {
  marginBottom: 12,
  display: 'block'
};

const figmaFrameStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
};

const walletCellStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const expandButtonStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  background: 'transparent',
  border: 0,
  color: '#131313',
  cursor: 'pointer',
};

const flagBadgeBaseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '999px',
  overflow: 'hidden',
  background: '#ffffff',
  boxShadow: 'inset 0 0 0 1px #f0f0f0',
  lineHeight: 1,
};

const expandedPanelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '0 0 16px 24px',
};

const groupStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
};

const accountCardStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '396fr 360fr 120fr',
  alignItems: 'center',
  background: '#ffffff',
  borderRadius: 12,
};

const accountCardCellStyle: CSSProperties = {
  padding: '12px',
};

const accountActionsStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 8,
};

const portfolioActionStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const panelHeaderTitleStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const panelHeaderIconBadgeStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: '#f0f0f0',
  color: '#131313',
};

const walletListCellStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
};

const walletListPrimaryStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const walletListSecondaryStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 4,
};

const walletListActionsStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 8,
};

const activityGroupCellStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const activityRuleCellStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
};

const activityRuleIconStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 24,
  height: 24,
  borderRadius: '50%',
  background: '#f0f0f0',
  color: '#646465',
  flexShrink: 0,
};

const activityAmountCellStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
};

const activityStatusCellStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const activityDetailsPanelStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 -16px',
  background: '#f8f8f8',
};

const activityDetailRowStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '280fr 360fr 360fr 88fr',
  alignItems: 'center',
  columnGap: 0,
};

const activityDetailCellStyle: CSSProperties = {
  padding: '16px 12px',
};

const BANK_ACCOUNT_GROUPS: WalletGroup[] = [
  {
    id: 'bank-accounts-primary',
    title: 'Bank accounts',
    accounts: [
      {
        id: 'boa-swift',
        bankName: 'Bank of America',
        rail: 'International Wire (SWIFT)',
        status: 'active',
        countryFlag: '🇺🇸',
      },
      {
        id: 'boa-ach',
        bankName: 'Bank of America',
        rail: 'ACH Transfer',
        status: 'active',
        countryFlag: '🇺🇸',
      },
      {
        id: 'citi-usd',
        bankName: 'Citibank',
        rail: 'Domestic USD Payout',
        status: 'pending',
        countryFlag: '🇺🇸',
      },
    ],
  },
  {
    id: 'bank-accounts-settlement',
    title: 'Settlement accounts',
    accounts: [
      {
        id: 'jpm-wire',
        bankName: 'JPMorgan Chase',
        rail: 'International Wire (SWIFT)',
        status: 'active',
        countryFlag: '🇺🇸',
      },
      {
        id: 'hsbc-local',
        bankName: 'HSBC',
        rail: 'Local USD Settlement',
        status: 'active',
        countryFlag: '🇺🇸',
      },
      {
        id: 'wells-fargo',
        bankName: 'Wells Fargo',
        rail: 'Vendor Payout',
        status: 'pending',
        countryFlag: '🇺🇸',
      },
    ],
  },
];

const walletRegistryRows: WalletRegistryRow[] = [
  {
    id: 'wallet-primary',
    walletName: 'Big Tom',
    walletSummary: '2 banks, 3 wallets',
    countryFlag: '🇺🇸',
    groups: BANK_ACCOUNT_GROUPS,
  },
  {
    id: 'wallet-ops',
    walletName: 'Big Tom',
    walletSummary: '2 banks, 3 wallets',
    countryFlag: '🇺🇸',
    groups: BANK_ACCOUNT_GROUPS,
  },
  {
    id: 'wallet-growth',
    walletName: 'Big Tom',
    walletSummary: '2 banks, 3 wallets',
    countryFlag: '🇺🇸',
    groups: BANK_ACCOUNT_GROUPS,
  },
  {
    id: 'wallet-reserve',
    walletName: 'Big Tom',
    walletSummary: '2 banks, 3 wallets',
    countryFlag: '🇺🇸',
    groups: BANK_ACCOUNT_GROUPS,
  },
];

const createExpandableListAccount = (id: string): BankAccountRow => ({
  id,
  bankName: 'Bank of America',
  rail: 'International Wire (SWIFT)',
  status: 'active',
  countryFlag: '🇺🇸',
});

const EXPANDABLE_LIST_GROUPS: WalletGroup[] = [
  {
    id: 'expandable-list-bank-accounts-1',
    title: 'Bank accounts',
    accounts: [
      createExpandableListAccount('expandable-list-account-1'),
      createExpandableListAccount('expandable-list-account-2'),
      createExpandableListAccount('expandable-list-account-3'),
    ],
  },
  {
    id: 'expandable-list-bank-accounts-2',
    title: 'Bank accounts',
    accounts: [
      createExpandableListAccount('expandable-list-account-4'),
      createExpandableListAccount('expandable-list-account-5'),
      createExpandableListAccount('expandable-list-account-6'),
    ],
  },
];

const expandableListRows: WalletRegistryRow[] = [
  {
    id: 'wallet-big-tom',
    walletName: 'Big Tom',
    walletSummary: '2 banks, 3 wallets',
    countryFlag: '🇺🇸',
    groups: EXPANDABLE_LIST_GROUPS,
  },
  {
    id: 'wallet-global-treasury',
    walletName: 'Global Treasury',
    walletSummary: '2 banks, 4 wallets',
    countryFlag: '🇸🇬',
    groups: EXPANDABLE_LIST_GROUPS,
  },
  {
    id: 'wallet-merchant-settlement',
    walletName: 'Merchant Settlement',
    walletSummary: '2 banks, 2 wallets',
    countryFlag: '🇬🇧',
    groups: EXPANDABLE_LIST_GROUPS,
  },
  {
    id: 'wallet-apac-operations',
    walletName: 'APAC Operations',
    walletSummary: '2 banks, 5 wallets',
    countryFlag: '🇭🇰',
    groups: EXPANDABLE_LIST_GROUPS,
  },
];

const walletListPanelRows: WalletListRow[] = [
  {
    id: 'wallet-list-1',
    walletName: 'EVM Wallet',
    walletLabel: 'Default',
    address: '5fb51e00-b79a-400b-9cb0-cd4d24590c11',
  },
  {
    id: 'wallet-list-2',
    walletName: 'EVM Wallet',
    walletLabel: 'Default',
    address: '5fb51e00-b79a-400b-9cb0-cd4d24590c11',
  },
  {
    id: 'wallet-list-3',
    walletName: 'EVM Wallet',
    walletLabel: 'Default',
    address: '5fb51e00-b79a-400b-9cb0-cd4d24590c11',
  },
];

const ACTIVITY_LEDGER_DETAIL_ROWS: ActivityLedgerDetailRow[] = [
  {
    id: 'activity-detail-1',
    ruleName: 'Auto-Conversion Rule',
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
  },
  {
    id: 'activity-detail-2',
    ruleName: 'Auto-Conversion Rule',
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
  },
  {
    id: 'activity-detail-3',
    ruleName: 'Auto-Conversion Rule',
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
  },
];

const activityLedgerRows: ActivityLedgerRow[] = [
  {
    id: 'activity-row-1',
    groupLabel: 'Today, 14:30',
    ruleName: 'Auto-Conversion Rule',
    stepCount: 3,
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
    details: ACTIVITY_LEDGER_DETAIL_ROWS,
  },
  {
    id: 'activity-row-2',
    groupLabel: 'Today, 14:30',
    ruleName: 'Auto-Conversion Rule',
    stepCount: 3,
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
    details: ACTIVITY_LEDGER_DETAIL_ROWS,
  },
  {
    id: 'activity-row-3',
    groupLabel: 'Today, 14:30',
    ruleName: 'Auto-Conversion Rule',
    stepCount: 3,
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
    details: ACTIVITY_LEDGER_DETAIL_ROWS,
  },
  {
    id: 'activity-row-4',
    groupLabel: 'Today, 14:30',
    ruleName: 'Auto-Conversion Rule',
    stepCount: 3,
    cryptoAmount: '+2,500.00 USDC',
    fiatAmount: '-2,500.00 USD',
    status: 'completed',
    details: ACTIVITY_LEDGER_DETAIL_ROWS,
  },
];

const portfolioRows: PortfolioRow[] = [
  {
    id: '1',
    wallet: 'Primary Treasury',
    owner: 'North America settlement',
    network: 'Ethereum',
    status: 'active',
    balance: 1240000,
    actionLabel: 'Open',
    countryFlag: '🇺🇸',
  },
  {
    id: '2',
    wallet: 'Operations Wallet',
    owner: 'Card spend + payroll',
    network: 'Solana',
    status: 'hold',
    balance: 320450,
    actionLabel: 'Review',
    countryFlag: '🇺🇸',
  },
  {
    id: '3',
    wallet: 'Customer Funds',
    owner: 'Segregated client assets',
    network: 'Polygon',
    status: 'active',
    balance: 845120,
    actionLabel: 'Open',
    countryFlag: '🇺🇸',
  },
  {
    id: '4',
    wallet: 'Payroll Reserve',
    owner: 'Quarterly compensation',
    network: 'Arbitrum',
    status: 'review',
    balance: 560300,
    actionLabel: 'Inspect',
    countryFlag: '🇺🇸',
  },
  {
    id: '5',
    wallet: 'Marketing Fund',
    owner: 'Growth campaigns',
    network: 'Ethereum',
    status: 'hold',
    balance: 190075,
    actionLabel: 'Review',
    countryFlag: '🇺🇸',
  },
  {
    id: '6',
    wallet: 'Reserve Wallet',
    owner: 'Emergency liquidity',
    network: 'Solana',
    status: 'active',
    balance: 2100780,
    actionLabel: 'Open',
    countryFlag: '🇺🇸',
  },
  {
    id: '7',
    wallet: 'Grant Program',
    owner: 'Partner disbursements',
    network: 'Polygon',
    status: 'review',
    balance: 475900,
    actionLabel: 'Inspect',
    countryFlag: '🇺🇸',
  },
  {
    id: '8',
    wallet: 'Developer Treasury',
    owner: 'Protocol incentives',
    network: 'Arbitrum',
    status: 'active',
    balance: 730410,
    actionLabel: 'Open',
    countryFlag: '🇺🇸',
  },
];

const getStatusTagProps = (status: BankAccountRow['status'] | PortfolioRow['status']) => {
  switch (status) {
    case 'active':
      return { color: 'success' as const, label: 'Active' };
    case 'review':
      return { color: 'recommended' as const, label: 'Review' };
    default:
      return { color: 'warning' as const, label: 'Pending' };
  }
};

const formatBalance = (value: number) =>
  `$${value.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;

const FlagBadge = ({ flag, size = 28 }: { flag: string; size?: number }) => (
  <span
    aria-hidden="true"
    style={{
      ...flagBadgeBaseStyle,
      width: size,
      height: size,
      fontSize: size > 24 ? 18 : 15,
    }}
  >
    {flag}
  </span>
);

const WalletExpandButton = ({
  expanded,
  label,
  onToggle,
}: {
  expanded: boolean;
  label: string;
  onToggle: () => void;
}) => (
  <button
    type="button"
    aria-label={label}
    onClick={onToggle}
    style={expandButtonStyle}
  >
    <Icons name={expanded ? 'chevronUp' : 'chevronDown'} size={16} />
  </button>
);

const WalletDetailsPanel = ({ record }: { record: WalletRegistryRow }) => (
  <div style={expandedPanelStyle}>
    {record.groups.map((group) => (
      <div key={group.id} style={groupStyle}>
        <TypographyLabel size="md" color="default-tertiary">
          {group.title}
        </TypographyLabel>
        <div style={groupStyle}>
          {group.accounts.map((account) => {
            const statusTag = getStatusTagProps(account.status);

            return (
              <div
                key={account.id}
                className="om-component-ui-table-expandable-account-card"
                style={accountCardStyle}
              >
                <div style={{ ...accountCardCellStyle }}>
                  <div style={walletCellStyle}>
                    <FlagBadge flag={account.countryFlag} size={24} />
                    <TypographyTitle size="sm" strong>
                      {account.bankName}
                    </TypographyTitle>
                  </div>
                </div>
                <div style={{ ...accountCardCellStyle }}>
                  <TypographyBody size="md" color="default-tertiary">
                    {account.rail}
                  </TypographyBody>
                </div>
                <div style={{ ...accountCardCellStyle }}>
                  <div style={accountActionsStyle}>
                    <Tag
                      color={statusTag.color}
                      label={statusTag.label}
                      removable={false}
                    />
                    <Button size="small" color="grey">
                      Send
                    </Button>
                    <Button
                      size="small"
                      color="grey"
                      aria-label={`Open ${account.bankName}`}
                      iconStart={<Icons name="arrowRight" size={16} />}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ))}
  </div>
);

const createWalletRegistryColumns = ({
  expandedKeys,
  onToggle,
}: {
  expandedKeys: React.Key[];
  onToggle: (rowId: string) => void;
}): TableColumn<WalletRegistryRow>[] => [
  {
    key: 'walletName',
    dataIndex: 'walletName',
    title: 'Wallet name',
    width: 420,
    render: (_value, record) => {
      const isExpanded = expandedKeys.includes(record.id);

      return (
        <div style={walletCellStyle}>
          <WalletExpandButton
            expanded={isExpanded}
            label={`${isExpanded ? 'Collapse' : 'Expand'} ${record.walletName}`}
            onToggle={() => onToggle(record.id)}
          />
          <FlagBadge flag={record.countryFlag} />
          <TypographyTitle size="md" strong>
            {record.walletName}
          </TypographyTitle>
        </div>
      );
    },
  },
  {
    key: 'walletSummary',
    dataIndex: 'walletSummary',
    title: 'Wallet address',
    width: 360,
    render: (value) => (
      <TypographyBody size="md" color="default-tertiary">
        {value as string}
      </TypographyBody>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    width: 120,
    align: 'right',
    render: (_value, record) => (
      <Button
        size="small"
        color="grey"
        aria-label={`Open ${record.walletName}`}
        iconStart={<Icons name="arrowRight" size={16} />}
      />
    ),
  },
];

const portfolioColumns: TableColumn<PortfolioRow>[] = [
  {
    key: 'wallet',
    dataIndex: 'wallet',
    title: 'Wallet',
    width: 280,
    sorter: (a, b) => a.wallet.localeCompare(b.wallet),
    render: (value, record) => ({
      primary: value as string,
      secondary: record.owner,
      leading: <FlagBadge flag={record.countryFlag} size={24} />,
    }),
  },
  {
    key: 'network',
    dataIndex: 'network',
    title: 'Network',
    width: 160,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    width: 140,
    render: (value) => {
      const statusTag = getStatusTagProps(value as PortfolioRow['status']);

      return (
        <Tag
          color={statusTag.color}
          label={statusTag.label}
          removable={false}
        />
      );
    },
  },
  {
    key: 'balance',
    dataIndex: 'balance',
    title: 'Balance',
    width: 160,
    align: 'right',
    sorter: (a, b) => a.balance - b.balance,
    render: (value) => (
      <TypographyTitle size="sm" strong>
        {formatBalance(value as number)}
      </TypographyTitle>
    ),
  },
  {
    key: 'actions',
    title: 'Actions',
    width: 120,
    align: 'right',
    render: (_value, record) => (
      <div style={portfolioActionStyle}>
        <Button size="small" color="grey">
          {record.actionLabel}
        </Button>
      </div>
    ),
  },
];

const virtualColumns: TableColumn<PortfolioRow>[] = [
  { key: 'wallet', dataIndex: 'wallet', title: 'Wallet', width: 260 },
  { key: 'network', dataIndex: 'network', title: 'Network', width: 160 },
  { key: 'status', dataIndex: 'status', title: 'Status', width: 160 },
  {
    key: 'balance',
    dataIndex: 'balance',
    title: 'Balance',
    width: 160,
    align: 'right',
    render: (value) => formatBalance(value as number),
  },
];

const walletListPanelColumns: TableColumn<WalletListRow>[] = [
  {
    key: 'wallet',
    dataIndex: 'walletName',
    title: (
      <div style={panelHeaderTitleStyle}>
        <Icons name="chevronDown" size={16} />
        <span style={panelHeaderIconBadgeStyle}>
          <Icons name="wallet" size={14} />
        </span>
        <TypographyTitle size="md" strong>
          EVM Compatible Wallet
        </TypographyTitle>
      </div>
    ),
    render: (_value, record) => (
      <div style={walletListCellStyle}>
        <div style={walletListPrimaryStyle}>
          <TypographyTitle size="md" strong>
            {record.walletName}
          </TypographyTitle>
          <Tag
            color="recommended"
            size="small"
            label={record.walletLabel}
            removable={false}
          />
        </div>
        <div style={walletListSecondaryStyle}>
          <TypographyBody size="sm" color="default-tertiary">
            {record.address}
          </TypographyBody>
          <Icons name="copy" size={12} color="#9fa3a3" />
        </div>
      </div>
    ),
  },
  {
    key: 'actions',
    title: (
      <Button size="small" color="secondary" iconStart={<Icons name="add" size={16} />}>
        Add New Wallet
      </Button>
    ),
    width: 180,
    align: 'right',
    render: () => (
      <div style={walletListActionsStyle}>
        <Button
          size="small"
          color="white"
          aria-label="Edit wallet"
          iconStart={<Icons name="editFile" size={16} />}
        />
        <Button size="small" color="grey">
          Deposit
        </Button>
      </div>
    ),
  },
];

const ActivityStatusTag = () => (
  <Tag
    color="success"
    size="medium"
    label="Completed"
    removable={false}
  />
);

const ActivityRuleCell = ({
  ruleName,
  stepCount,
}: {
  ruleName: string;
  stepCount?: number;
}) => (
  <div style={activityRuleCellStyle}>
    <span style={activityRuleIconStyle}>
      <Icons name="deposit" size={12} />
    </span>
    <TypographyTitle size="sm">{ruleName}</TypographyTitle>
    {stepCount ? (
      <Tag
        color="neutral"
        size="small"
        label={`${stepCount} steps`}
        removable={false}
      />
    ) : null}
  </div>
);

const ActivityAmountCell = ({
  cryptoAmount,
  fiatAmount,
}: {
  cryptoAmount: string;
  fiatAmount: string;
}) => (
  <div style={activityAmountCellStyle}>
    <TypographyTitle size="sm" strong>
      {cryptoAmount}
    </TypographyTitle>
    <TypographyBody size="sm" color="default-tertiary">
      {fiatAmount}
    </TypographyBody>
  </div>
);

const ActivityLedgerDetailsPanel = ({
  details,
}: {
  details: ActivityLedgerDetailRow[];
}) => (
  <div style={activityDetailsPanelStyle}>
    {details.map((detail) => (
      <div key={detail.id} style={activityDetailRowStyle}>
        <div style={activityDetailCellStyle} />
        <div style={activityDetailCellStyle}>
          <ActivityRuleCell ruleName={detail.ruleName} />
        </div>
        <div style={activityDetailCellStyle}>
          <ActivityAmountCell
            cryptoAmount={detail.cryptoAmount}
            fiatAmount={detail.fiatAmount}
          />
        </div>
        <div style={{ ...activityDetailCellStyle, ...activityStatusCellStyle }}>
          <ActivityStatusTag />
        </div>
      </div>
    ))}
  </div>
);

const createActivityLedgerColumns = ({
  expandedKeys,
  onToggle,
}: {
  expandedKeys: React.Key[];
  onToggle: (rowId: string) => void;
}): TableColumn<ActivityLedgerRow>[] => [
  {
    key: 'groupLabel',
    dataIndex: 'groupLabel',
    title: 'Wallet name',
    width: 280,
    render: (value, record) => {
      const isExpanded = expandedKeys.includes(record.id);

      return (
        <div style={activityGroupCellStyle}>
          <WalletExpandButton
            expanded={isExpanded}
            label={`${isExpanded ? 'Collapse' : 'Expand'} ${record.groupLabel}`}
            onToggle={() => onToggle(record.id)}
          />
          <TypographyTitle size="sm">{value as string}</TypographyTitle>
        </div>
      );
    },
  },
  {
    key: 'ruleName',
    dataIndex: 'ruleName',
    title: 'Wallet address',
    width: 360,
    render: (value, record) => (
      <ActivityRuleCell
        ruleName={value as string}
        stepCount={record.stepCount}
      />
    ),
  },
  {
    key: 'amount',
    title: 'Wallet address',
    width: 360,
    render: (_value, record) => (
      <ActivityAmountCell
        cryptoAmount={record.cryptoAmount}
        fiatAmount={record.fiatAmount}
      />
    ),
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Actions',
    width: 88,
    align: 'right',
    render: () => (
      <div style={activityStatusCellStyle}>
        <ActivityStatusTag />
      </div>
    ),
  },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  args: {
    rowKey: 'id',
    columns: portfolioColumns as unknown as TableColumn<Record<string, any>>[],
    dataSource: portfolioRows,
    pagination: false,
    variant: 'stroke',
    size: 'large',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: [...TABLE_VARIANTS],
    },
    size: {
      control: 'radio',
      options: [...TABLE_SIZES],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const WalletRegistryStory = ({
  dataSource,
  defaultExpandedKeys,
}: {
  dataSource: WalletRegistryRow[];
  defaultExpandedKeys: React.Key[];
}) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(defaultExpandedKeys);

  const handleToggle = (rowId: string) => {
    setExpandedKeys((currentKeys) => (
      currentKeys.includes(rowId)
        ? currentKeys.filter((key) => key !== rowId)
        : [...currentKeys, rowId]
    ));
  };

  return (
    <div style={figmaFrameStyle}>
      <Table<WalletRegistryRow>
        rowKey="id"
        size="small"
        variant="stroke"
        pagination={false}
        columns={createWalletRegistryColumns({
          expandedKeys,
          onToggle: handleToggle,
        })}
        dataSource={dataSource}
        expandable={{
          showExpandColumn: false,
          expandedRowKeys: expandedKeys,
          expandedRowRender: (record) => (
            <WalletDetailsPanel record={record} />
          ),
        }}
      />
    </div>
  );
};

export const ExpandableList: Story = {
  render: () => (
    <WalletRegistryStory
      dataSource={expandableListRows}
      defaultExpandedKeys={['wallet-big-tom', 'wallet-global-treasury']}
    />
  ),
};

export const FigmaWalletRegistry: Story = {
  render: () => (
    <WalletRegistryStory
      dataSource={walletRegistryRows}
      defaultExpandedKeys={['wallet-ops']}
    />
  ),
};

export const FigmaAutoConversionTable: Story = {
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<React.Key[]>(['activity-row-2']);

    const handleToggle = (rowId: string) => {
      setExpandedKeys((currentKeys) => (
        currentKeys.includes(rowId)
          ? currentKeys.filter((key) => key !== rowId)
          : [...currentKeys, rowId]
      ));
    };

    return (
      <div style={figmaFrameStyle}>
        <Table<ActivityLedgerRow>
          rowKey="id"
          size="small"
          variant="stroke"
          pagination={false}
          columns={createActivityLedgerColumns({
            expandedKeys,
            onToggle: handleToggle,
          })}
          dataSource={activityLedgerRows}
          expandable={{
            showExpandColumn: false,
            expandedRowKeys: expandedKeys,
            rowExpandable: (record) => Boolean(record.details?.length),
            expandedRowRender: (record) => (
              record.details
                ? <ActivityLedgerDetailsPanel details={record.details} />
                : null
            ),
          }}
        />
      </div>
    );
  },
};

export const WalletListPanel: Story = {
  render: () => (
    <div style={figmaFrameStyle}>
      <Table<WalletListRow>
        rowKey="id"
        size="large"
        variant="stroke"
        pagination={false}
        columns={walletListPanelColumns}
        dataSource={walletListPanelRows}
      />
    </div>
  ),
};

export const WithPagination: Story = {
  args: {
    pagination: { pageSize: 4 },
  },
};

export const SelectionAndSort: Story = {
  render: (args) => {
    const [selectedKeys, setSelectedKeys] = useState<React.Key[]>(['2']);

    return (
      <div>
        <TypographyBody size="sm" color="default-tertiary" style={hintStyle}>
          Selected rows: {selectedKeys.join(', ')}
        </TypographyBody>
        <Table
          {...(args as TableProps<Record<string, any>>)}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    );
  },
};

export const FixedAndSticky: Story = {
  render: () => (
    <Table<PortfolioRow>
      rowKey="id"
      pagination={false}
      sticky
      scroll={{ x: 1120, y: 280 }}
      dataSource={portfolioRows}
      columns={[
        {
          ...portfolioColumns[0],
          fixed: 'left',
        },
        portfolioColumns[1],
        portfolioColumns[2],
        {
          key: 'owner',
          dataIndex: 'owner',
          title: 'Owner',
          width: 220,
        },
        {
          key: 'balance',
          dataIndex: 'balance',
          title: 'Balance',
          width: 160,
          align: 'right',
          render: (value) => formatBalance(value as number),
        },
        {
          ...portfolioColumns[4],
          fixed: 'right',
        },
      ]}
    />
  ),
};

export const EmptyState: Story = {
  args: {
    dataSource: [],
    pagination: false,
    empty: { icon: 'transactions', description: 'No record found' },
  },
};


export const Variants: Story = {
  render: (args) => (
    <div style={stackStyle}>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Stroke
        </TypographyTitle>
        <Table {...(args as TableProps<Record<string, any>>)} dataSource={portfolioRows.slice(0, 4)} variant="stroke" />
      </div>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Fill
        </TypographyTitle>
        <Table {...(args as TableProps<Record<string, any>>)} dataSource={portfolioRows.slice(0, 4)} variant="fill" />
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div style={stackStyle}>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Large
        </TypographyTitle>
        <Table {...(args as TableProps<Record<string, any>>)} dataSource={portfolioRows.slice(0, 3)} size="large" />
      </div>
      <div>
        <TypographyTitle size="sm" strong style={sectionTitleStyle}>
          Small
        </TypographyTitle>
        <Table {...(args as TableProps<Record<string, any>>)} dataSource={portfolioRows.slice(0, 3)} size="small" />
      </div>
    </div>
  ),
};

export const VirtualScrolling: Story = {
  render: () => {
    const largeData: PortfolioRow[] = Array.from({ length: 5000 }, (_, index) => ({
      id: `virtual-${index + 1}`,
      wallet: `Wallet ${index + 1}`,
      owner: `Desk ${index % 12}`,
      network: ['Ethereum', 'Solana', 'Polygon', 'Arbitrum'][index % 4],
      status: (['active', 'hold', 'review'] as const)[index % 3],
      balance: 200000 + (index * 1375),
      actionLabel: 'Open',
      countryFlag: index % 2 === 0 ? '🇺🇸' : '🇪🇺',
    }));

    return (
      <div>
        <TypographyBody size="sm" color="default-tertiary" style={hintStyle}>
          5,000 rows rendered with the virtualized table kernel.
        </TypographyBody>
        <VirtualTable<PortfolioRow>
          rowKey="id"
          columns={virtualColumns}
          dataSource={largeData}
          scroll={{ x: 740, y: 360 }}
          pagination={false}
        />
      </div>
    );
  },
};
