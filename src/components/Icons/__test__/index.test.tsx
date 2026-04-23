import 'jsdom-global/register';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
  CrossIcon,
  Icon,
  Icons,
  IllusPending,
  LogoWithWords,
  SortIcon,
} from '../index';

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
  it('keeps static, new dynamic, and compatibility entrypoints aligned', () => {
    const { container } = render(
      <>
        <CrossIcon size={16} />
        <Icon name='cross' size={16} />
        <Icons name='cross' size={16} />
      </>,
    );

    const [staticSvg, dynamicSvg, compatSvg] = Array.from(container.querySelectorAll('svg'));

    expect(staticSvg?.innerHTML).toBe(dynamicSvg?.innerHTML);
    expect(dynamicSvg?.innerHTML).toBe(compatSvg?.innerHTML);
  });

  it('resolves legacy names as first-class registry entries', () => {
    const { container } = render(
      <>
        <Icon name='depositFiatCrypto' size={16} />
        <Icon name='deposit' size={16} />
      </>,
    );

    const [legacySvg, canonicalSvg] = Array.from(container.querySelectorAll('svg'));

    expect(legacySvg?.innerHTML).toBe(canonicalSvg?.innerHTML);
  });

  it('keeps special component props on direct static exports', () => {
    const { container } = render(
      <>
        <SortIcon status='ascend' />
        <LogoWithWords logoColor='#073387' wordColor='#131313' />
        <IllusPending />
      </>,
    );

    expect(container.innerHTML).toContain('#073387');
    expect(container.innerHTML).toContain('translate(74 0) scale(-1 1)');
  });
});
