/* eslint-disable */
'use strict';

const path = require('path');
const { transformSync: transformWithBabel } = require('@babel/core');
const { transform } = require('@svgr/core');
const jsxPlugin = require('@svgr/plugin-jsx');

const toPascalCase = value => value
  .replace(/(^\w|[-_]\w)/g, match => match.replace(/[-_]/g, '').toUpperCase())
  .replace(/[^\w]/g, '');

module.exports = {
  process(src, filename) {
    const componentName = `${toPascalCase(path.basename(filename, '.svg')) || 'Svg'}Svg`;
    const componentCode = transform.sync(
      src,
      {
        exportType: 'default',
        jsxRuntime: 'automatic',
        plugins: [jsxPlugin],
        typescript: false,
      },
      {
        componentName,
        filePath: filename,
      },
    );

    const transformed = transformWithBabel(componentCode, {
      babelrc: false,
      filename,
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        ['@babel/preset-react', { runtime: 'automatic' }],
      ],
    });

    return { code: transformed ? transformed.code : componentCode };
  },
};
