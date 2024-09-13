import type { PlaceholderConfig } from "./index";

const defaultConfig = (): PlaceholderConfig => {
  return {
    width: 150,
    height: 150,
    suffix: ".png",
    bgColor: "#cccccc",
    textColor: "#969696",
    text: "",
  };
};

const resolveConfig = (input: PlaceholderConfig): PlaceholderConfig => {
  const config: PlaceholderConfig = defaultConfig();
  if (input.width && input.width > 0) {
    config.width = input.width;
  }
  if (input.height && input.height > 0) {
    config.height = input.height;
  }
  if (input.suffix) {
    config.suffix = input.suffix;
  }
  if (input.bgColor) {
    config.bgColor = input.bgColor;
  }
  if (input.textColor) {
    config.textColor = input.textColor;
  }
  if (input.text && input.text !== "") {
    config.text = input.text;
  }
  return config;
};

export { defaultConfig, resolveConfig };
