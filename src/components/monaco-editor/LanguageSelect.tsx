import { Select, type SelectProps } from "antd";
import type { FC } from "react";

const languageSelectOptions: SelectProps["options"] = [
  { value: "typescript", label: "TypeScript" },
  { value: "javascript", label: "JavaScript" },
  { value: "css", label: "CSS" },
  { value: "less", label: "LESS" },
  { value: "scss", label: "SCSS" },
  { value: "json", label: "JSON" },
  { value: "html", label: "HTML" },
  { value: "xml", label: "XML" },
  { value: "php", label: "PHP" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "razor", label: "Razor" },
  { value: "markdown", label: "Markdown" },
  { value: "diff", label: "Diff" },
  { value: "java", label: "Java" },
  { value: "vb", label: "VB" },
  { value: "coffee", label: "CoffeeScript" },
  { value: "handlebars", label: "Handlebars" },
  { value: "bat", label: "Batch" },
  { value: "pug", label: "Pug" },
  { value: "fsharp", label: "F#" },
  { value: "lua", label: "Lua" },
  { value: "powershell", label: "Powershell" },
  { value: "python", label: "Python" },
  { value: "ruby", label: "Ruby" },
  { value: "sass", label: "SASS" },
  { value: "r", label: "R" },
  { value: "objective-c", label: "Objective-C" },
];

const onSearch: SelectProps["onSearch"] = (value) => {
  console.log("search:", value);
};

interface Props {
  value?: SelectProps["value"];
  onChange?: SelectProps["onChange"];
}

export const LanguageSelect: FC<Props> = ({ value, onChange }) => {
  return (
    <Select
      value={value}
      onSearch={onSearch}
      onChange={onChange}
      options={languageSelectOptions}
      optionFilterProp="label"
      placeholder="请选择语言"
      showSearch
      className="w-32"
    />
  );
};
