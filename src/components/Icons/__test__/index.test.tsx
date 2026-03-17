import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icons, IconWrapper } from '../index';

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

describe('Icons', () => {
  it('renders correctly', () => {
    const Icon = render(
      <Icons name='deposit' />
    );
    const wrapperIcon = render(
      <IconWrapper />
    );
    expect(Icon).toMatchSnapshot();
    expect(wrapperIcon).toMatchSnapshot();
  });

  it('renders figma alias names', () => {
    const { container } = render(
      <>
        <Icons name='depositFiatCrypto' />
        <Icons name='personalSettings' />
        <Icons name='security2' />
        <Icons name='iconPix' />
        <Icons name='noApiKeys' />
      </>
    );

    expect(container.querySelectorAll('svg')).toHaveLength(5);
  });
});
