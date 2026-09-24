/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'block-no-empty': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'plugin', 'theme', 'custom-variant'],
      },
    ],
    'no-empty-source': null,
    "selector-class-pattern": null,
    "import-notation": "string",
    "lightness-notation": "number",
    "hue-degree-notation": "number",
    "at-rule-prelude-no-invalid": null,
    "custom-property-pattern": null

  },
};
