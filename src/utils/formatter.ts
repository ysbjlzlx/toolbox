import prettierBabelPlugin from 'prettier/parser-babel';
import parserYaml from 'prettier/parser-yaml';
import prettier from 'prettier/standalone';

export type parser = 'json' | 'json5' | 'yaml';
export const format = (value: string, parser: parser) => {
  try {
    return prettier.format(value, {
      parser,
      plugins: [prettierBabelPlugin, parserYaml],
    });
  } catch (e) {
    console.error(e);
  }
  return value;
};
