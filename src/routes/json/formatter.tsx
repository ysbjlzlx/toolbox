"use client";

import useJSONFormatterStore from "@/stores/JSONFormatterStore.ts";
import { PageContainer } from "@ant-design/pro-components";
import { Editor, type OnChange, type OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { type FC, useRef } from "react";

export const Component: FC = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const { value, setValue } = useJSONFormatterStore();

  const handleEditorDidMount: OnMount = (editor, _monaco) => {
    editorRef.current = editor;
  };

  const handleEditorChange: OnChange = (value, _event) => {
    setValue(value || "");
    // editorRef.current?.getAction("editor.action.formatDocument")?.run();
  };

  return (
    <PageContainer title={false}>
      <Editor
        height="100dvh"
        defaultLanguage="json"
        options={{ tabSize: 2, formatOnPaste: true, formatOnType: true }}
        theme="vs-dark"
        defaultValue={value || "// some json"}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </PageContainer>
  );
};
