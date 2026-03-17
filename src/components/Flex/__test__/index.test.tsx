import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Flex } from '../index';
import { FLEX_ALIGN, FLEX_GAP, FLEX_JUSTIFY, FLEX_WRAP } from '../constants';

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

describe('Flex', () => {
  it('renders with gap and alignment', () => {
    const { container } = render(
      <Flex
        gap={FLEX_GAP.middle}
        align={FLEX_ALIGN.center}
        justify={FLEX_JUSTIFY.spaceBetween}
        wrap={FLEX_WRAP.wrap}
      >
        <div>One</div>
        <div>Two</div>
      </Flex>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders vertical layout', () => {
    const GAP = 8;

    const { container } = render(
      <Flex vertical gap={GAP}>
        <div>Top</div>
        <div>Bottom</div>
      </Flex>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
