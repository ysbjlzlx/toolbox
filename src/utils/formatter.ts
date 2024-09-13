import groovyBeautify from "groovy-beautify";
import prettierPluginsBabel from "prettier/plugins/babel";
import prettierPluginsEstree from "prettier/plugins/estree";
import prettierPluginsYaml from "prettier/plugins/yaml";
import prettier from "prettier/standalone";
import xmlFormat from "xml-formatter";

export type parser = "json" | "json5" | "yaml" | "xml" | "groovy";
export const format = async (value: string, parser: parser) => {
  if (parser === "groovy") {
    return groovyBeautify(value);
  }
  if (parser === "xml") {
    return xmlFormat(value, {
      collapseContent: true,
    });
  }
  try {
    return await prettier.format(value, {
      parser,
      plugins: [prettierPluginsEstree, prettierPluginsBabel, prettierPluginsYaml],
    });
  } catch (e) {
    console.error(e);
  }
  return value;
};
