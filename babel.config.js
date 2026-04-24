/* eslint-disable */
'use strict';

module.exports = function (api) {
  api.cache(false);
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties'
  ];

  const env = {
    es: {
      presets: [
        [
          '@babel/preset-env',
          { modules: false }
        ]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          { useESModules: true }
        ]
      ]
    }
  };

  return {
    presets,
    plugins,
    env
  };
};
