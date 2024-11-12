import { ProCard } from "@ant-design/pro-components";
import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertAdmonition,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  type MDXEditorMethods,
  Separator,
  StrikeThroughSupSubToggles,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { type FC, useRef } from "react";

import "@mdxeditor/editor/style.css";
import { Button } from "antd";

export const Component: FC = () => {
  const editorRef = useRef<MDXEditorMethods>(null);
  const plugins = [
    headingsPlugin(),
    listsPlugin(),
    linkPlugin(),
    linkDialogPlugin(),
    quotePlugin(),
    markdownShortcutPlugin(),
    imagePlugin(),
    tablePlugin(),
    thematicBreakPlugin(),
    codeBlockPlugin({ defaultCodeBlockLanguage: "txt" }),
    codeMirrorPlugin({
      codeBlockLanguages: { js: "JavaScript", css: "CSS", json: "JSON", txt: "TEXT", tsx: "TypeScript" },
    }),
    directivesPlugin({ directiveDescriptors: [AdmonitionDirectiveDescriptor] }),
    diffSourcePlugin({ viewMode: "rich-text" }),
    toolbarPlugin({
      toolbarClassName: "my-classname",
      toolbarContents: () => (
        <>
          <DiffSourceToggleWrapper options={["rich-text", "source"]}>
            <UndoRedo />
            <Separator />
            <BoldItalicUnderlineToggles />
            <CodeToggle />
            <Separator />
            <StrikeThroughSupSubToggles />
            <Separator />
            <ListsToggle />
            <Separator />
            <BlockTypeSelect />
            <Separator />
            <CreateLink />
            <InsertImage />
            <Separator />
            <InsertTable />
            <InsertThematicBreak />
            <Separator />
            <InsertCodeBlock />
            <Separator />
            <InsertAdmonition />
            <Separator />
          </DiffSourceToggleWrapper>
        </>
      ),
    }),
  ];
  return (
    <div>
      <ProCard>
        <div className="mt-4 mb-4 flex gap-4">
          <Button onClick={() => editorRef.current?.insertMarkdown("new markdown to insert")}>
            Insert new markdown
          </Button>
          <Button onClick={() => console.log(editorRef.current?.getMarkdown())}>Get markdown</Button>
        </div>

        <MDXEditor
          ref={editorRef}
          contentEditableClassName="prose max-full"
          markdown="# Hello world"
          plugins={plugins}
        />
      </ProCard>
    </div>
  );
};
