import 'jsdom-global/register';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Typography } from '../index';

const originalConsoleError = console.error;

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

describe('Typography', () => {
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
});
