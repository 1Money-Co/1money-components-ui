import 'jsdom-global/register';
import fs from 'fs';
import path from 'path';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
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
const readTypographyStylesSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../style/Typography.scss'), 'utf8');
const readSemanticTypographySource = () =>
  fs.readFileSync(path.resolve(__dirname, '../../../styles/tokens/typography/_semantic-typography.scss'), 'utf8');
const readSemanticColorSource = () =>
  fs.readFileSync(path.resolve(__dirname, '../../../styles/tokens/color/_semantic-color.scss'), 'utf8');

const LONG_ADDRESS = '814f0d3a9b2c7e1f5d6a8b4c3e2f1a0d9c8b7a6f5e4d3c2b1a0f9e8d7c6b749f';

const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');
const originalScrollWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollWidth');

const mockOverflow = () => {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => 80,
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    get: () => 400,
  });
};

const mockNoOverflow = () => {
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    get: () => 400,
  });
  Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
    configurable: true,
    get: () => 120,
  });
};

const restoreMetrics = () => {
  if (originalClientWidth) {
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
  }
  if (originalScrollWidth) {
    Object.defineProperty(HTMLElement.prototype, 'scrollWidth', originalScrollWidth);
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
  restoreMetrics();
});

describe('Typography', () => {
  it('maps neutral on-colors to the Figma semantic token values', () => {
    const semanticColorSource = readSemanticColorSource();

    expect(semanticColorSource).toContain("'on-neutral-secondary': p.$grey-300");
    expect(semanticColorSource).toContain("'on-neutral-tertiary': p.$grey-200");
  });

  it('encodes Figma line-heights as discrete typography token values', () => {
    const semanticTypographySource = readSemanticTypographySource();

    [
      ['76px', '106px'],
      ['64px', '90px'],
      ['52px', '72px'],
      ['46px', '64px'],
      ['36px', '50px'],
      ['32px', '44px'],
      ['28px', '40px'],
      ['24px', '34px'],
      ['18px', '26px'],
      ['16px', '22px'],
      ['14px', '20px'],
      ['12px', '16px'],
      ['10px', '14px'],
    ].forEach(([fontSize, lineHeight]) => {
      expect(semanticTypographySource).toContain(`font-size: ${fontSize},\n    line-height: ${lineHeight},`);
    });
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

  it('shows full text when container is wide enough', () => {
    mockNoOverflow();
    render(
      <Typography.Body size="md" ellipsis>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    // Full text appears in both visible text and hidden measure span
    const matches = screen.getAllByText(LONG_ADDRESS);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('truncates text in the middle when container overflows', () => {
    mockOverflow();
    render(
      <Typography.Body size="md" ellipsis>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    expect(screen.getByText('814f0d3a...749f')).toBeInTheDocument();
  });

  it('truncates text with custom start and end when overflowed', () => {
    mockOverflow();
    render(
      <Typography.Body size="md" ellipsis={{ start: 6, end: 6 }}>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    expect(screen.getByText('814f0d...6b749f')).toBeInTheDocument();
  });

  it('shows tooltip with full text when truncated', () => {
    mockOverflow();
    render(
      <Typography.Body size="md" ellipsis={{ tooltip: true }}>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    expect(screen.getByText('814f0d3a...749f')).toBeInTheDocument();
    expect(screen.getByTestId('typography-tooltip')).toHaveTextContent(LONG_ADDRESS);
    expect(screen.getByTestId('typography-tooltip')).toHaveAttribute('data-placement', 'top');
  });

  it('does not show tooltip when text fits', () => {
    mockNoOverflow();
    render(
      <Typography.Body size="md" ellipsis={{ tooltip: true }}>
        short
      </Typography.Body>,
    );

    const matches = screen.getAllByText('short');
    expect(matches.length).toBeGreaterThanOrEqual(1);
    expect(screen.queryByTestId('typography-tooltip')).not.toBeInTheDocument();
  });

  it('prefers ellipsis tooltip config over the default top placement', () => {
    mockOverflow();
    render(
      <Typography.Body size="md" ellipsis={{ tooltip: { placement: 'bottom' } }}>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    expect(screen.getByTestId('typography-tooltip')).toHaveAttribute('data-placement', 'bottom');
  });

  it('renders a Copy component when copyable is enabled', () => {
    render(
      <Typography.Body size="md" copyable>
        Copiable body text
      </Typography.Body>,
    );

    const wrapper = screen.getByText('Copiable body text').parentElement;
    expect(wrapper).toHaveClass('om-react-ui-typography-copyable-wrapper');
  });

  it('renders a Copy component with text override via copyable config', () => {
    render(
      <Typography.Body size="md" copyable={{ text: 'override copy value' }}>
        Visible body text
      </Typography.Body>,
    );

    const wrapper = screen.getByText('Visible body text').parentElement;
    expect(wrapper).toHaveClass('om-react-ui-typography-copyable-wrapper');
  });

  it('uses a block wrapper when body text is rendered as a paragraph and copyable', () => {
    render(
      <Typography.Body size="md" as="p" copyable>
        Paragraph copy
      </Typography.Body>,
    );

    const paragraph = screen.getByText('Paragraph copy');
    expect(paragraph.tagName).toBe('P');
    expect(paragraph.parentElement).toHaveClass('om-react-ui-typography-copyable-wrapper-block');
  });

  it('copies the full text when ellipsis and copyable are combined', () => {
    mockOverflow();
    render(
      <Typography.Body size="md" ellipsis={{ tooltip: true }} copyable>
        {LONG_ADDRESS}
      </Typography.Body>,
    );

    expect(screen.getByText('814f0d3a...749f')).toBeInTheDocument();
    const wrapper = screen.getByText('814f0d3a...749f').parentElement;
    expect(wrapper).toHaveClass('om-react-ui-typography-copyable-wrapper');
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

    expect(onClick).not.toHaveBeenCalled();

    const wrapper = screen.getByText('Disabled copyable link').parentElement;
    expect(wrapper).toHaveClass('om-react-ui-typography-copyable-wrapper');
  });
});
