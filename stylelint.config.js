/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'block-no-empty': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'plugin', 'theme'],
      },
    ],
    'no-empty-source': null,
    'custom-property-pattern':'breakpoint-.+'
  },
};
