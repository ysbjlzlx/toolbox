"use client";

import { PageContainer } from "@ant-design/pro-components";
import { Editor, type OnChange, type OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { type FC, useRef } from "react";

export const Component: FC = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();

  const handleEditorDidMount: OnMount = (editor, _monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange: OnChange = (value, _event) => {
    console.log(value);
    editorRef.current?.getAction("editor.action.formatDocument")?.run();
  };

  return (
    <PageContainer title={false}>
      <Editor
        height="100dvh"
        defaultLanguage="json"
        options={{ tabSize: 2 }}
        theme="vs-dark"
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </PageContainer>
  );
};
