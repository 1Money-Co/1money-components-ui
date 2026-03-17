import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Space } from '../index';
import { SPACE_ALIGN, SPACE_DIRECTION, SPACE_SIZE } from '../constants';

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

describe('Space', () => {
  it('renders horizontal spacing with split', () => {
    const { container } = render(
      <Space
        size={SPACE_SIZE.middle}
        align={SPACE_ALIGN.center}
        direction={SPACE_DIRECTION.horizontal}
        wrap
        split={<span>|</span>}
      >
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
      </Space>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders vertical spacing with numeric sizes', () => {
    const { container } = render(
      <Space direction={SPACE_DIRECTION.vertical} size={[8, 16]}>
        <div>Top</div>
        <div>Bottom</div>
      </Space>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
