import 'jsdom-global/register';
import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Upload, UploadFileBar } from '../index';

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

jest.mock('lottie-web', () => ({
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    pause: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('Upload', () => {
  it('renders correctly', () => {
    const wrapper = render(<Upload />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with label and description', () => {
    const wrapper = render(
      <Upload label="Upload Document" description="Max 10MB" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('UploadFileBar', () => {
  it('renders success state', () => {
    const wrapper = render(<UploadFileBar fileName="test.pdf" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders error state with message', () => {
    const wrapper = render(
      <UploadFileBar fileName="test.pdf" status={1} message="Upload failed" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
