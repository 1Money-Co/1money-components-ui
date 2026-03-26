import 'jsdom-global/register';
import * as React from 'react';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Icons } from '@/components/Icons';
import { Button } from '../index';

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

describe('Button', () => {
  it('renders a native button and forwards refs', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(
      <Button
        ref={ref}
        color="secondary"
        size="small"
        rounded
        loading
        name="save"
        value="draft"
        data-testid="button"
        aria-label="Save draft"
      >
        Save
      </Button>
    );

    const button = screen.getByTestId('button');

    expect(button.tagName).toBe('BUTTON');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('name', 'save');
    expect(button).toHaveAttribute('value', 'draft');
    expect(button).toBeDisabled();
    expect(ref.current).toBe(button);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('supports native button attributes and click events', async () => {
    const onClick = jest.fn();

    render(
      <Button
        type="submit"
        form="button-form"
        data-testid="button"
        iconStart={<Icons name="add" size={16} />}
        iconEnd={<Icons name="arrowRight" size={16} />}
        onClick={onClick}
      >
        Submit
      </Button>
    );

    const button = screen.getByTestId('button');
    const user = userEvent.setup();

    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveAttribute('form', 'button-form');

    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('inherits label color and button-sized defaults for icons', () => {
    const { container } = render(
      <Button
        size="small"
        iconStart={<Icons name="add" />}
        iconEnd={<Icons name="arrowRight" />}
      >
        Submit
      </Button>
    );

    const iconWrappers = container.querySelectorAll('.om-react-ui-icons-wrapper');

    expect(iconWrappers).toHaveLength(2);
    iconWrappers.forEach(iconWrapper => {
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining('--icon-color: currentColor')
      );
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining('--icon-width: 16px')
      );
      expect(iconWrapper).toHaveAttribute(
        'style',
        expect.stringContaining('--icon-height: 16px')
      );
    });
  });

  it('preserves explicit icon color and sizing props', () => {
    const { container } = render(
      <Button
        iconStart={<Icons name="add" size={24} color="#ff0000" />}
      >
        Submit
      </Button>
    );

    const iconWrapper = container.querySelector('.om-react-ui-icons-wrapper');

    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-color: #ff0000')
    );
    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-width: 24px')
    );
    expect(iconWrapper).toHaveAttribute(
      'style',
      expect.stringContaining('--icon-height: 24px')
    );
  });
});
