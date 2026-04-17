import 'jsdom-global/register';
import * as React from 'react';
import fs from 'node:fs';
import path from 'node:path';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cell } from '../index';

const originalConsoleError = console.error;
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

describe('Cell', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Cell iconStart="security" iconEnd="arrowRight">
        Authenticator app
      </Cell>,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders iconStart and iconEnd slots', () => {
    const { container } = render(
      <Cell iconStart="security" iconEnd="chevronRight">
        Authenticator app
      </Cell>,
    );

    expect(container.querySelector('.om-component-ui-cell-icon-start')).toBeInTheDocument();
    expect(container.querySelector('.om-component-ui-cell-icon-end')).toBeInTheDocument();
  });

  it('applies the active modifier class', () => {
    const { getByRole } = render(
      <Cell iconStart="security" iconEnd="arrowRight" active>
        Authenticator app
      </Cell>,
    );

    expect(getByRole('button')).toHaveClass('om-component-ui-cell-active');
  });

  it('blocks click interaction when disabled', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Cell
        iconStart="security"
        iconEnd="arrowRight"
        disabled
        onClick={handleClick}
      >
        Authenticator app
      </Cell>,
    );

    const button = getByRole('button');

    expect(button).toBeDisabled();

    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it('keeps the active background color on hover in the stylesheet', () => {
    const scss = fs.readFileSync(
      path.resolve(__dirname, '../style/Cell.scss'),
      'utf8',
    );

    expect(scss).toContain('&-active:hover:not(:disabled)');
    expect(scss).toContain("background-color: theme.palette(bg, 'brand-tertiary');");
  });
});
