import prettierBabelPlugin from 'prettier/parser-babel';
import prettier from 'prettier/standalone';

export type parser = 'json' | 'json5';
export const format = (value: string, parser: parser) => {
  return prettier.format(value, {
    parser,
    plugins: [prettierBabelPlugin],
  });
};
