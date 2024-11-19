"use client";

import useJSONFormatterStore from "@/stores/JSONFormatterStore.ts";
import { PageContainer } from "@ant-design/pro-components";
import { Editor } from "@monaco-editor/react";
import type { Monaco, OnChange, OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { type FC, useEffect, useRef } from "react";

export const Component: FC = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const monacoRef = useRef<Monaco>();
  const { value, setValue, options } = useJSONFormatterStore();

  useEffect(() => {
    editorRef.current?.updateOptions(options);
  }, [options]);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
    });
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
        options={{
          tabSize: 2,
          formatOnPaste: true,
          formatOnType: true,
          stickyTabStops: true,
          stickyScroll: {
            enabled: true,
            maxLineCount: 10,
            defaultModel: "foldingProviderModel",
          },
        }}
        theme="light"
        defaultValue={value || "// some json"}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
      />
    </PageContainer>
  );
};
