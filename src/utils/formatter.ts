import prettierBabelPlugin from 'prettier/parser-babel';
import parserYaml from 'prettier/parser-yaml';
import prettier from 'prettier/standalone';
import xmlFormat from 'xml-formatter';

export type parser = 'json' | 'json5' | 'yaml' | 'xml';
export const format = (value: string, parser: parser) => {
  if (parser === 'xml') {
    return xmlFormat(value);
  }
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
