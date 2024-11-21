"use client";

import { cn } from "@/lib/utils.ts";
import useJSONFormatterStore from "@/stores/JSONFormatterStore.ts";
import { PageContainer } from "@ant-design/pro-components";
import type { Monaco, OnChange, OnMount, OnValidate } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";
import { Divider } from "antd";
import type { editor } from "monaco-editor";
import { type FC, useEffect, useRef, useState } from "react";

export const Component: FC = () => {
  const [editorStatus, setEditorStatus] = useState({ lineNumber: 0, column: 0, tabSize: 2, language: "json" });
  const editorRef = useRef<editor.IStandaloneCodeEditor>();
  const monacoRef = useRef<Monaco>();
  const { value, setValue, options } = useJSONFormatterStore();

  useEffect(() => {
    editorRef.current?.updateOptions(options);
  }, [options]);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // 光标变化
    editor.onDidChangeCursorPosition((event) => {
      setEditorStatus((oldVal) => {
        return { ...oldVal, lineNumber: event.position.lineNumber, column: event.position.column };
      });
    });

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
    });
  };

  const handleEditorChange: OnChange = (value, _event) => {
    setValue(value || "");
    // editorRef.current?.getAction("editor.action.formatDocument")?.run();
  };

  const handleEditorValidate: OnValidate = (markers) => {
    console.log(markers);
  };

  return (
    <PageContainer title={false}>
      <div className="h-[calc(100dvh-56px)] md:h-dvh">
        <Editor
          height="calc(100% - 22px)"
          defaultLanguage={editorStatus.language}
          options={{
            automaticLayout: true,
            tabSize: editorStatus.tabSize,
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
          onValidate={handleEditorValidate}
        />
        <div className={cn("h-[22px] px-4 text-sm tabular-nums")}>
          <span>{`Ln ${editorStatus.lineNumber}, Col ${editorStatus.column}`}</span>
          <Divider type={"vertical"} />
          <span>{`Space ${editorStatus.tabSize}`}</span>
          <Divider type={"vertical"} />
          <span>JSON with Comments</span>
        </div>
      </div>
    </PageContainer>
  );
};
