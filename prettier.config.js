import alloy from 'eslint-config-alloy/.prettierrc.js';

/** @type {import("prettier").Config} */
export default {
  ...alloy,
  plugins: ['prettier-plugin-organize-imports', 'prettier-plugin-packagejson', 'prettier-plugin-tailwindcss'],
};
