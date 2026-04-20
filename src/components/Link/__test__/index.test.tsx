import 'jsdom-global/register';
import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Link } from '../index';

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

describe('Link', () => {
  it('renders correctly', () => {
    const wrapper = render(<Link href="#">Link</Link>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all color variants', () => {
    const wrapper = render(
      <>
        <Link color="primary" href="#">Primary</Link>
        <Link color="black" href="#">Black</Link>
        <Link color="grey" href="#">Grey</Link>
      </>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('applies size modifier class', () => {
    const { getByText, rerender } = render(
      <Link size="large" href="#">Large</Link>,
    );
    expect(getByText('Large')).toHaveClass('om-component-ui-link-large');

    rerender(<Link size="small" href="#">Small</Link>);
    expect(getByText('Small')).toHaveClass('om-component-ui-link-small');
  });

  it('invokes onClick when not disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Link href="#" onClick={handleClick}>
        Click
      </Link>,
    );
    fireEvent.click(getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('blocks navigation and onClick when disabled', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Link href="/target" disabled onClick={handleClick}>
        Disabled
      </Link>,
    );
    const anchor = getByText('Disabled');

    expect(anchor).toHaveClass('om-component-ui-link-disabled');
    expect(anchor).toHaveAttribute('aria-disabled', 'true');
    expect(anchor).not.toHaveAttribute('href');
    expect(anchor).toHaveAttribute('tabindex', '-1');

    fireEvent.click(anchor);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('defaults rel to "noopener noreferrer" for target="_blank"', () => {
    const { getByText } = render(
      <Link href="https://example.com" target="_blank">
        External
      </Link>,
    );
    expect(getByText('External')).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
