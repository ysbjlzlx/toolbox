export default {
  'package.json': ['prettier --write'],
  '**/*.css': ['stylelint --fix', 'prettier --write --ignore-unknown'],
  '*.md': 'prettier --parser markdown --write --ignore-unknown',
  '**/*.js?(x)': (filenames) =>
    filenames
      .map((filename) => [`eslint --fix '${filename}'`, `prettier --write --ignore-unknown '${filename}'`])
      .flat(),
  '**/*.ts?(x)': (filenames) =>
    filenames
      .map((filename) => [
        `eslint --fix '${filename}'`,
        `prettier --parser typescript --write --ignore-unknown '${filename}'`,
      ])
      .flat(),
};
