import type { Preview } from '@storybook/react';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import ComponentDocsPage from '../src/stories/docs/ComponentDocsPage';
import './tailwind.css';
import '../src/stories/docs/storybook-docs.css';
import 'primeicons/primeicons.css';
import '../src/styles/index.scss';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  initialGlobals: {
    backgrounds: {
      value: 'canvas',
      grid: false,
    },
  },
  parameters: {
    backgrounds: {
      options: {
        canvas: {
          name: 'Canvas',
          value: '#F0F0F0',
        },
        white: {
          name: 'White',
          value: '#ffffff',
        },
      },
      grid: {
        disable: true,
      },
    },
    docs: {
      page: ComponentDocsPage,
    },
    controls: {
      expanded: true,
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          ['Overview', 'Design System', 'Development'],
          'Components',
        ],
      },
    },
  },
};

export default preview;
