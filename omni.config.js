/* eslint-disable */
'use strict';

const path = require('path');
const gulpfile = require('./gulpfile');

module.exports = {
  type: 'component-react', // Project type, do not modify

  dev: {
    port: 6205, // Dev server port
    host: 'localhost', // Dev server host
    serverType: 'storybook' // Dev server type
  },

  build: {
    // Automatically release project after successful build
    autoRelease: false,

    // Build source directory (must be an absolute path)
    srcDir: path.resolve('src'),

    // Output directory for compiled project (must be an absolute path)
    outDir: path.resolve('lib'),

    // ES6 module output directory (must be an absolute path)
    esmDir: path.resolve('es'),

    // Custom configuration callback called during the build process
    // Returns custom build configuration
    configuration: gulpfile,

    reserve: {
      assets: [
        path.resolve('./src/components/Loading/lottie-pure.json'),
        path.resolve('./src/components/Loading/lottie-pattern.json')
      ] // Reserve other asset paths in build output
    },

    preflight: {
      typescript: true, // Process TypeScript files during build
      test: true, // Run unit tests during build
      eslint: true, // Run ESLint check during build
      prettier: true, // Run Prettier check during build
      stylelint: true, // Run Stylelint check during build
    }
  },

  release: {
    // Automatically build project before release
    autoBuild: true,

    // Automatically set npm tag based on current version
    autoTag: false,

    // Git repository URL
    // git: 'https://github.com/1Money-Co/1money-react-ui.git',

    // npm registry URL
    // npm: 'https://registry.npmjs.org/',

    preflight: {
      test: true, // Run unit tests before release
      eslint: true, // Run ESLint check before release
      prettier: true, // Run Prettier check before release
      stylelint: true, // Run Stylelint check before release
      commitlint: true, // Run commit lint check before release
      // branch: 'master' // Only allow release from this branch; set to empty string to skip this check
    }
  },

  template: {
    // Root directory for generated templates (must be an absolute path)
    root: path.resolve('src/components/'),

    // Generate TypeScript files
    typescript: true,

    // Generate unit test files
    test: true,

    // Stylesheet type
    stylesheet: 'scss',

    // [Generate README file, file extension (md or mdx)]
    readme: [true, 'md']
  },

  plugins: []
};
