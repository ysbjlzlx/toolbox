import LowlightCodeBlock from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);

export const CodeBlock = LowlightCodeBlock.configure({
  defaultLanguage: "javascript",
  lowlight,
});
