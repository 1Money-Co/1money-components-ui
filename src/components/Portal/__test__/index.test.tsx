import 'jsdom-global/register';
import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Portal } from '../index';

describe('Portal', () => {
  it('renders children into document.body by default', async () => {
    render(
      <Portal>
        <div>Portal body content</div>
      </Portal>,
    );

    expect(await screen.findByText('Portal body content')).toBeInTheDocument();
    expect(document.body).toContainElement(screen.getByText('Portal body content'));
  });

  it('renders children into a custom container', async () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'portal-root');
    document.body.appendChild(container);

    render(
      <Portal container={container}>
        <div>Portal container content</div>
      </Portal>,
    );

    expect(await screen.findByText('Portal container content')).toBeInTheDocument();
    expect(container).toContainElement(screen.getByText('Portal container content'));
  });

  it('renders inline when disablePortal is true', () => {
    const { container } = render(
      <Portal disablePortal>
        <div>Inline portal content</div>
      </Portal>,
    );

    expect(container).toContainElement(screen.getByText('Inline portal content'));
  });
});
