import 'jsdom-global/register';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { clipboard } from '@/utils/clipboard';
import { Typography } from '../index';

jest.mock('@/utils/clipboard', () => ({
  __esModule: true,
  clipboard: jest.fn(),
  default: jest.fn(),
}));

jest.mock('@/components/Tooltip', () => ({
  __esModule: true,
  Tooltip: ({
    body,
    placement,
    middlewares,
  }: {
    body?: React.ReactNode;
    placement?: string;
    middlewares?: unknown[];
  }) =>
    body ? (
      <div
        data-testid="typography-tooltip"
        data-placement={placement}
        data-middlewares={middlewares ? middlewares.length : undefined}
      >
        {body}
      </div>
    ) : null,
}));

const originalConsoleError = console.error;
const clipboardMock = clipboard as jest.MockedFunction<typeof clipboard>;
const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
const originalScrollWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollWidth');
const originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
const originalScrollHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollHeight');
const readTypographyStylesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Typography.scss'), 'utf8');
const readSemanticColorSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../../../styles/tokens/color/_semantic-color.scss'), 'utf8');

const mockElementMetrics = ({
  clientWidth = 120,
  scrollWidth = 120,
  clientHeight = 20,
  scrollHeight = 20,
}: {
  clientWidth?: number;
  scrollWidth?: number;
  clientHeight?: number;
  scrollHeight?: number;
} = {}) => {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => clientWidth,
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    get: () => scrollWidth,
  });
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
    configurable: true,
    get: () => clientHeight,
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollHeight', {
    configurable: true,
    get: () => scrollHeight,
  });
};

const restoreElementMetrics = () => {
  if (originalClientWidth) {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  }
  if (originalScrollWidth) {
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', originalScrollWidth);
  }
  if (originalClientHeight) {
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClientHeight);
  }
  if (originalScrollHeight) {
    Object.defineProperty(HTMLElement.prototype, 'scrollHeight', originalScrollHeight);
  }
};

beforeAll(() => {
  console.error = (message, ...optionalParams) => {
    const errorMessage = typeof message === 'string' ? message : String(message);
    if (
      errorMessage.includes('Could not parse CSS stylesheet') ||
      errorMessage.includes('findDOMNode is deprecated and will be removed')
    ) {
      return;
    }
    originalConsoleError(message, ...optionalParams);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});

afterEach(() => {
  clipboardMock.mockReset();
  restoreElementMetrics();
  jest.useRealTimers();
});

describe('Typography', () => {
  it('maps neutral on-colors to the Figma semantic token values', () => {
    const semanticColorSource = readSemanticColorSource();

    expect(semanticColorSource).toContain("'on-neutral-secondary': p.$grey-300");
    expect(semanticColorSource).toContain("'on-neutral-tertiary': p.$grey-200");
  });

  it('inherits text color by default', () => {
    const stylesSource = readTypographyStylesSource();

    expect(stylesSource).toContain('color: inherit;');
  });

  it('renders semantic variants with expected default tags', () => {
    const { container } = render(
      <div>
        <Typography.Display size="xl">Display</Typography.Display>
        <Typography.Headline size="md">Headline</Typography.Headline>
        <Typography.Title size="sm" strong>
          Title
        </Typography.Title>
        <Typography.Body size="md" strong underline delete>
          Body
        </Typography.Body>
        <Typography.Label size="xs">Label</Typography.Label>
        <Typography.Link size="sm" href="https://example.com">
          Link
        </Typography.Link>
      </div>,
    );

    expect(screen.getByText('Display').tagName).toBe('DIV');
    expect(screen.getByText('Headline').tagName).toBe('DIV');
    expect(screen.getByText('Title').tagName).toBe('DIV');
    expect(screen.getByText('Body').tagName).toBe('SPAN');
    expect(screen.getByText('Label').tagName).toBe('LABEL');
    expect(screen.getByText('Link').tagName).toBe('A');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('supports semantic tag overrides and disables link interaction', async () => {
    const onClick = jest.fn();

    render(
      <div>
        <Typography.Title size="lg" as="h2">
          Section title
        </Typography.Title>
        <Typography.Link
          size="md"
          href="https://example.com"
          disabled
          onClick={onClick}
        >
          Disabled link
        </Typography.Link>
      </div>,
    );

    const heading = screen.getByText('Section title');
    const link = screen.getByText('Disabled link');
    const user = userEvent.setup();

    expect(heading.tagName).toBe('H2');
    expect(link).toHaveAttribute('aria-disabled', 'true');
    expect(link).not.toHaveAttribute('href');

    await user.click(link);

    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies single-line and multi-line ellipsis classes', () => {
    const { rerender } = render(
      <Typography.Body size="md" ellipsis>
        Single line ellipsis
      </Typography.Body>,
    );

    expect(screen.getByText('Single line ellipsis')).toHaveClass('om-react-ui-typography-ellipsis');

    rerender(
      <Typography.Body size="md" ellipsis={{ rows: 2 }}>
        Multi line ellipsis
      </Typography.Body>,
    );

    expect(screen.getByText('Multi line ellipsis')).toHaveClass(
      'om-react-ui-typography-ellipsis',
      'om-react-ui-typography-ellipsis-multiline',
    );
  });

  it('only renders the ellipsis tooltip when overflow is detected', () => {
    mockElementMetrics();
    const { unmount } = render(
      <Typography.Body size="md" ellipsis={{ tooltip: true }}>
        Compact content
      </Typography.Body>,
    );

    expect(screen.getAllByText('Compact content')).toHaveLength(1);
    unmount();

    mockElementMetrics({ clientWidth: 80, scrollWidth: 160 });
    render(
      <Typography.Body size="md" ellipsis={{ tooltip: true }}>
        Overflow content
      </Typography.Body>,
    );

    expect(screen.getAllByText('Overflow content')).toHaveLength(2);
    expect(screen.getByTestId('typography-tooltip')).toHaveAttribute('data-placement', 'top');
    expect(screen.getByTestId('typography-tooltip')).toHaveAttribute('data-middlewares', '0');
  });

  it('prefers ellipsis tooltip config over the default top placement', () => {
    mockElementMetrics({ clientWidth: 80, scrollWidth: 160 });

    render(
      <Typography.Body size="md" ellipsis={{ tooltip: { placement: 'bottom' } }}>
        Configured placement
      </Typography.Body>,
    );

    expect(screen.getByTestId('typography-tooltip')).toHaveAttribute('data-placement', 'bottom');
  });

  it('copies the full source text and resets the feedback state after the configured duration', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Typography.Body size="md" copyable={{ duration: 10 }}>
        Copiable body text
      </Typography.Body>,
    );

    const copyButton = screen.getByRole('button', { name: 'Copy text' });

    await user.click(copyButton);

    expect(clipboardMock).toHaveBeenCalledWith('Copiable body text', expect.any(Function));

    act(() => {
      const callback = clipboardMock.mock.calls[0]?.[1];
      callback?.(true);
    });

    expect(screen.getByRole('button', { name: 'Copied' })).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(10);
    });

    expect(screen.getByRole('button', { name: 'Copy text' })).toBeInTheDocument();
  });

  it('uses the configured copy text override', async () => {
    const user = userEvent.setup();

    render(
      <Typography.Body size="md" copyable={{ text: 'override copy value' }}>
        Visible body text
      </Typography.Body>,
    );

    await user.click(screen.getByRole('button', { name: 'Copy text' }));

    expect(clipboardMock).toHaveBeenCalledWith('override copy value', expect.any(Function));
  });

  it('shows copy failure feedback without mounting a tooltip when tooltips are disabled', async () => {
    jest.useFakeTimers();
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    render(
      <Typography.Body size="md" copyable={{ tooltips: false, duration: 10 }}>
        Copy failure example
      </Typography.Body>,
    );

    await user.click(screen.getByRole('button', { name: 'Copy text' }));

    act(() => {
      const callback = clipboardMock.mock.calls[0]?.[1];
      callback?.(false);
    });

    expect(screen.getByRole('button', { name: 'Copy failed' })).toBeInTheDocument();
    expect(screen.queryByTestId('typography-tooltip')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(10);
    });

    expect(screen.getByRole('button', { name: 'Copy text' })).toBeInTheDocument();
  });

  it('uses a block wrapper when body text is rendered as a paragraph and copyable', () => {
    render(
      <Typography.Body size="md" as="p" copyable>
        Paragraph copy
      </Typography.Body>,
    );

    const copyButton = screen.getByRole('button', { name: 'Copy text' });
    const paragraph = screen.getByText('Paragraph copy');

    expect(paragraph.tagName).toBe('P');
    expect(copyButton.parentElement?.tagName).toBe('DIV');
    expect(copyButton.parentElement?.firstChild).toBe(paragraph);
  });

  it('keeps disabled link behavior while exposing copyable support', async () => {
    const onClick = jest.fn();
    const user = userEvent.setup();

    render(
      <Typography.Link
        size="md"
        href="https://example.com"
        disabled
        onClick={onClick}
        copyable
      >
        Disabled copyable link
      </Typography.Link>,
    );

    await user.click(screen.getByText('Disabled copyable link'));
    await user.click(screen.getByRole('button', { name: 'Copy text' }));

    expect(onClick).not.toHaveBeenCalled();
    expect(clipboardMock).toHaveBeenCalledWith('Disabled copyable link', expect.any(Function));
  });
});
