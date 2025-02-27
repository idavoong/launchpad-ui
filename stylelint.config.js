/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const fg = require('fast-glob');

let cssPaths = [];
(async () => {
  cssPaths = await fg([path.resolve(__dirname, `packages/**/src/**/*.css`), '!**/node_modules']);
})();

module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-value-no-unknown-custom-properties'],
  rules: {
    'declaration-no-important': true,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'hue-degree-notation': 'number',
    'alpha-value-notation': 'number',
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          path.resolve(__dirname, 'packages/tokens/dist/index.css'),
          path.resolve(__dirname, 'packages/tokens/dist/themes.css'),
          ...cssPaths,
        ],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'value'],
      },
    ],
    'selector-not-notation': 'simple',
    'import-notation': 'string',
    'media-feature-range-notation': 'prefix',
  },
};
