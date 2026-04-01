import React from 'react';
import { render } from '@testing-library/react';
import Tour from '../Tour';

// Suppress JSDOM CSS parsing warnings
const originalConsoleError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Could not parse CSS stylesheet')) return;
    if (typeof args[0] === 'string' && args[0].includes('findDOMNode is deprecated')) return;
    originalConsoleError(...args);
  };
});
afterAll(() => {
  console.error = originalConsoleError;
});

describe('Tour', () => {
  it('renders nothing when closed', () => {
    const { container } = render(
      <Tour
        open={false}
        onClose={() => {}}
        steps={[{ target: '#test', heading: 'Test', body: 'Test body' }]}
      />,
    );
    expect(container.innerHTML).toBe('');
  });

  it('renders nothing when target does not exist', () => {
    const { container } = render(
      <Tour
        open={true}
        onClose={() => {}}
        steps={[{ target: '#non-existent', heading: 'Hello', body: 'World' }]}
      />,
    );
    // No portal rendered because target not found → pos stays null
    expect(container.innerHTML).toBe('');
  });
});
