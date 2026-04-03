import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ResizeObserver from './ResizeObserver';
import type { SizeInfo } from './interface';


const boxStyle: React.CSSProperties = {
  border: '2px dashed #d9d9d9',
  borderRadius: 4,
  padding: 16,
  resize: 'both',
  overflow: 'auto',
  minWidth: 100,
  minHeight: 60,
  maxWidth: 600,
  background: '#fafafa',
};

const infoStyle: React.CSSProperties = {
  marginTop: 12,
  padding: 12,
  background: '#f0f0f0',
  borderRadius: 4,
  fontFamily: 'monospace',
  fontSize: 13,
};

const meta: Meta = {
  title: 'Components/ResizeObserver',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Basic: Story = {
  render: () => {
    const [size, setSize] = useState<SizeInfo | null>(null);

    return (
      <div>
        <p style={{ marginBottom: 8, color: '#666' }}>
          Drag the bottom-right corner to resize the box:
        </p>
        <ResizeObserver onResize={(sizeInfo) => setSize(sizeInfo)}>
          <div style={boxStyle}>
            Resize me!
          </div>
        </ResizeObserver>
        {size && (
          <div style={infoStyle}>
            <div>width: {size.width}px</div>
            <div>height: {size.height}px</div>
            <div>offsetWidth: {size.offsetWidth}px</div>
            <div>offsetHeight: {size.offsetHeight}px</div>
          </div>
        )}
      </div>
    );
  },
};

export const MultipleChildren: Story = {
  render: () => {
    const [sizes, setSizes] = useState<Record<string, SizeInfo>>({});

    const handleResize = (key: string) => (sizeInfo: SizeInfo) => {
      setSizes((prev) => ({ ...prev, [key]: sizeInfo }));
    };

    return (
      <div>
        <p style={{ marginBottom: 8, color: '#666' }}>
          Each box independently reports its size:
        </p>
        <div style={{ display: 'flex', gap: 16 }}>
          {['A', 'B', 'C'].map((key) => (
            <ResizeObserver key={key} onResize={handleResize(key)}>
              <div
                style={{
                  ...boxStyle,
                  minWidth: 120,
                  width: 120 + ['A', 'B', 'C'].indexOf(key) * 40,
                }}
              >
                Box {key}
                {sizes[key] && (
                  <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>
                    {sizes[key].width} × {sizes[key].height}
                  </div>
                )}
              </div>
            </ResizeObserver>
          ))}
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [disabled, setDisabled] = useState(false);
    const [resizeCount, setResizeCount] = useState(0);

    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <label>
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
            />
            {' '}Disable observer
          </label>
          <span style={{ marginLeft: 12, color: '#666' }}>
            Resize events received: {resizeCount}
          </span>
        </div>
        <ResizeObserver
          disabled={disabled}
          onResize={() => setResizeCount((c) => c + 1)}
        >
          <div style={boxStyle}>
            {disabled ? 'Observer disabled — resize events paused' : 'Resize me to trigger events'}
          </div>
        </ResizeObserver>
      </div>
    );
  },
};

export const RenderProps: Story = {
  render: () => {
    const [size, setSize] = useState<SizeInfo | null>(null);

    return (
      <div>
        <p style={{ marginBottom: 8, color: '#666' }}>
          Using render-props pattern for ref forwarding:
        </p>
        <ResizeObserver onResize={(sizeInfo) => setSize(sizeInfo)}>
          {(ref) => (
            <div ref={ref as React.RefObject<HTMLDivElement>} style={boxStyle}>
              Render-props child
              {size && (
                <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>
                  {size.width} × {size.height}
                </div>
              )}
            </div>
          )}
        </ResizeObserver>
      </div>
    );
  },
};

export const BatchResize: Story = {
  render: () => {
    const [batchInfo, setBatchInfo] = useState<string>('');

    return (
      <div>
        <p style={{ marginBottom: 8, color: '#666' }}>
          Collection batches resize events from multiple children into a single callback:
        </p>
        <ResizeObserver.Collection
          onBatchResize={(infos) => {
            setBatchInfo(
              `Batch: ${infos.length} resize(s) — ${infos.map((i) => `${i.data}: ${i.size.width}×${i.size.height}`).join(', ')}`,
            );
          }}
        >
          <div style={{ display: 'flex', gap: 16 }}>
            {['First', 'Second'].map((name) => (
              <ResizeObserver key={name} data={name}>
                <div style={{ ...boxStyle, minWidth: 150 }}>
                  {name}
                </div>
              </ResizeObserver>
            ))}
          </div>
        </ResizeObserver.Collection>
        {batchInfo && <div style={infoStyle}>{batchInfo}</div>}
      </div>
    );
  },
};
