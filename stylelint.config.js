/* eslint-disable */

'use strict';

module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-less',
		'stylelint-config-css-modules',
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order',
	],
	plugins: [
		'stylelint-order',
		'stylelint-scss',
		'stylelint-less',
		'stylelint-declaration-block-no-ignored-properties'
	],
	rules: {
		'selector-no-vendor-prefix': null,
		'selector-class-pattern': null,
		'property-no-vendor-prefix': null,
		'color-function-notation': null,
		'less/color-no-invalid-hex': null,
		'no-descending-specificity': null,
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind']
			}
		],
		'plugin/declaration-block-no-ignored-properties': true,
		'number-max-precision': 10,
		'selector-id-pattern': null,
		'font-family-no-missing-generic-family-keyword': null,
		'declaration-property-value-no-unknown': null,
		'scss/function-no-unknown': [
			true,
			{
				ignoreFunctions: [
					'om',
				'om-token',
					'-om-build-system-props',
					'om-spacing',
					'om-radius',
					'om-shadow',
					'om-color',
					'om-sizing',
					'om-max-width',
					'om-breakpoint',
					'om-next-breakpoint',
					'om-scale-map',
					'om-scale-value',
					'om-scale-has',
					'om-theme-ref',
					'om-resolve-system-value',
					'om-alias-value',
					'om-spacing-token',
					'om-spacing-value',
					'-om-spacing-token',
				'-om-pick-spacing',
				'om-opacity',
				'om-bg',
				'om-text',
				'om-icon',
				'om-border',
				'-om-resolve-typography',
				'-om-typography-var-name',
				'-om-is-selector-key',
				'om-typography',
				'om-font-size',
				'om-line-height',
				'om-font-weight',
				'om-font-family',
				'om-letter-spacing',
				'om-component-height',
				'om-gap',
				'om-component-padding',
				'om-section-padding',
				'om-variant',
				'om-variant-value',
				'om-variant-extend',
				'om-variant-schema',
				'-om-variant-validate',
				'-om-variant-hint'
				]
			}
		],
		'scss/selector-no-redundant-nesting-selector': null,
		'scss/operator-no-unspaced': null
	}
};
