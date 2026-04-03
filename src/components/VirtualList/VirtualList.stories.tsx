import React, { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ListRef } from './VirtualList';
import { VirtualList } from './index';

import './style';

// ========================= Data =========================
interface Item {
  id: number;
  height: number;
}

function generateData(count: number): Item[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    height: 30 + (i % 3) * 10,
  }));
}

const data1000 = generateData(1000);
const data10000 = generateData(10000);

// ========================= Styles =========================
const itemStyle = (height: number): React.CSSProperties => ({
  height,
  lineHeight: `${height}px`,
  boxSizing: 'border-box',
  borderBottom: '1px solid #e8e8e8',
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const containerStyle: React.CSSProperties = {
  border: '1px solid #d9d9d9',
  borderRadius: 4,
  width: 400,
};

const btnStyle: React.CSSProperties = {
  marginRight: 8,
  marginBottom: 8,
  padding: '4px 12px',
  cursor: 'pointer',
};

// ========================= Meta =========================
const meta: Meta<typeof VirtualList> = {
  title: 'Components/VirtualList',
  component: VirtualList as any,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// ========================= Stories =========================

export const Basic: Story = {
  render: () => (
    <div style={containerStyle}>
      <VirtualList
        data={data1000}
        height={300}
        itemHeight={30}
        itemKey="id"
      >
        {(item: Item) => (
          <div style={itemStyle(item.height)}>
            <span>Item {item.id}</span>
            <span style={{ color: '#999', fontSize: 12 }}>h: {item.height}px</span>
          </div>
        )}
      </VirtualList>
    </div>
  ),
};

export const ScrollTo: Story = {
  render: () => {
    const listRef = useRef<ListRef>(null);

    return (
      <div>
        <div style={{ marginBottom: 12, flexWrap: 'wrap', display: 'flex' }}>
          <button style={btnStyle} onClick={() => listRef.current?.scrollTo(0)}>
            Scroll to top
          </button>
          <button
            style={btnStyle}
            onClick={() => listRef.current?.scrollTo({ index: 50, align: 'top' })}
          >
            Index 50 (top)
          </button>
          <button
            style={btnStyle}
            onClick={() => listRef.current?.scrollTo({ index: 50, align: 'bottom' })}
          >
            Index 50 (bottom)
          </button>
          <button
            style={btnStyle}
            onClick={() => listRef.current?.scrollTo({ index: 50, align: 'auto' })}
          >
            Index 50 (auto)
          </button>
          <button
            style={btnStyle}
            onClick={() => listRef.current?.scrollTo({ index: 999, align: 'bottom' })}
          >
            Scroll to last
          </button>
          <button
            style={btnStyle}
            onClick={() =>
              listRef.current?.scrollTo({ index: 100, align: 'top', offset: 20 })
            }
          >
            Index 100 + 20px offset
          </button>
          <button
            style={btnStyle}
            onClick={() => listRef.current?.scrollTo({ key: 200, align: 'top' })}
          >
            Key 200 (top)
          </button>
        </div>
        <div style={containerStyle}>
          <VirtualList
            ref={listRef}
            data={data1000}
            height={300}
            itemHeight={30}
            itemKey="id"
          >
            {(item: Item) => (
              <div style={itemStyle(item.height)}>
                <span>Item {item.id}</span>
              </div>
            )}
          </VirtualList>
        </div>
      </div>
    );
  },
};

export const VariableHeight: Story = {
  render: () => (
    <div style={containerStyle}>
      <VirtualList
        data={data1000}
        height={300}
        itemHeight={30}
        itemKey="id"
      >
        {(item: Item) => (
          <div style={itemStyle(item.height)}>
            <span>Item {item.id}</span>
            <span style={{ color: '#999', fontSize: 12 }}>height: {item.height}px</span>
          </div>
        )}
      </VirtualList>
    </div>
  ),
};

export const LargeDataset: Story = {
  render: () => (
    <div style={containerStyle}>
      <VirtualList
        data={data10000}
        height={400}
        itemHeight={30}
        itemKey="id"
      >
        {(item: Item) => (
          <div style={itemStyle(30)}>
            <span>Item {item.id}</span>
            <span style={{ color: '#999', fontSize: 12 }}>{item.id + 1} / 10000</span>
          </div>
        )}
      </VirtualList>
    </div>
  ),
};

export const DynamicData: Story = {
  render: () => {
    const [count, setCount] = useState(100);
    const data = generateData(count);

    return (
      <div>
        <div style={{ marginBottom: 12, display: 'flex', gap: 8 }}>
          <button style={btnStyle} onClick={() => setCount((c) => c + 100)}>
            Add 100 items ({count} total)
          </button>
          <button style={btnStyle} onClick={() => setCount((c) => Math.max(0, c - 100))}>
            Remove 100 items
          </button>
          <button style={btnStyle} onClick={() => setCount(0)}>
            Clear
          </button>
        </div>
        <div style={containerStyle}>
          <VirtualList
            data={data}
            height={300}
            itemHeight={30}
            itemKey="id"
          >
            {(item: Item) => (
              <div style={itemStyle(item.height)}>
                <span>Item {item.id}</span>
              </div>
            )}
          </VirtualList>
        </div>
      </div>
    );
  },
};

export const HorizontalScroll: Story = {
  render: () => (
    <div style={{ ...containerStyle, width: 400 }}>
      <VirtualList
        data={data1000}
        height={300}
        itemHeight={30}
        itemKey="id"
        scrollWidth={800}
      >
        {(item: Item, _index, { style, offsetX }) => (
          <div
            style={{
              ...itemStyle(30),
              ...style,
              transform: `translateX(-${offsetX}px)`,
              width: 800,
            }}
          >
            <span>Item {item.id}</span>
            <span style={{ color: '#999', fontSize: 12 }}>Wide content here →</span>
            <span style={{ marginLeft: 200 }}>End</span>
          </div>
        )}
      </VirtualList>
    </div>
  ),
};

export const NonVirtual: Story = {
  render: () => {
    const smallData = generateData(20);
    return (
      <div style={containerStyle}>
        <VirtualList
          data={smallData}
          height={300}
          itemHeight={30}
          itemKey="id"
          virtual={false}
        >
          {(item: Item) => (
            <div style={itemStyle(item.height)}>
              <span>Item {item.id} (non-virtual)</span>
            </div>
          )}
        </VirtualList>
      </div>
    );
  },
};
