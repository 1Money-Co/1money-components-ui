/* eslint-disable */
'use strict';

module.exports = {
  clearMocks: true,

  coverageDirectory: 'coverage',

  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],

  roots: [
    '<rootDir>/src'
  ],

  testRegex: '(test|__test__)/.*.test.(tsx|ts|jsx|js)?$',

  testEnvironment: 'jsdom',

  transform: {
    '^.+.(tsx|ts)?$': 'ts-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^jsdom-global/register$': '<rootDir>/test/jsdom-global-register.js',
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },

  setupFiles: ['<rootDir>/setupTests.js', 'jest-canvas-mock'],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
