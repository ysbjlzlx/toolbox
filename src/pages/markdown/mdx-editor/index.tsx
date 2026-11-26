import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  codeBlockPlugin,
  codeMirrorPlugin,
  DiffSourceToggleWrapper,
  diffSourcePlugin,
  directivesPlugin,
  headingsPlugin,
  InsertAdmonition,
  InsertCodeBlock,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  imagePlugin,
  ListsToggle,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  MDXEditor,
  type MDXEditorMethods,
  markdownShortcutPlugin,
  quotePlugin,
  Separator,
  StrikeThroughSupSubToggles,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { Button } from "antd";
import { type FC, useRef } from "react";

import { Card, CardHeader } from "@/components/ui/card";

import "@mdxeditor/editor/style.css";

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
      <Card>
        <CardHeader>
          <div className="mt-4 mb-4 flex gap-4">
            <Button onClick={() => editorRef.current?.insertMarkdown("new markdown to insert")}>
              Insert new markdown
            </Button>
            <Button onClick={() => console.log(editorRef.current?.getMarkdown())}>Get markdown</Button>
          </div>
        </CardHeader>

        <MDXEditor
          ref={editorRef}
          contentEditableClassName="prose max-full"
          markdown="# Hello world"
          plugins={plugins}
        />
      </Card>
    </div>
  );
};
