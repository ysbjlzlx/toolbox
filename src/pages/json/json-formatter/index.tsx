"use client";

import type { Monaco, OnChange, OnMount, OnValidate } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";
import { Divider } from "antd";
import type { editor } from "monaco-editor";
import { type FC, useEffect, useRef, useState } from "react";
import { LanguageSelect } from "@/components/monaco-editor/LanguageSelect.tsx";
import { cn } from "@/lib/utils.ts";
import useJSONFormatterStore from "@/stores/JSONFormatterStore.ts";

export const Component: FC = () => {
  const [editorStatus, setEditorStatus] = useState({
    lineNumber: 0,
    column: 0,
  });
  const editorRef = useRef<editor.IStandaloneCodeEditor>(undefined);
  const monacoRef = useRef<Monaco>(undefined);
  const { value, setValue, options, language, setLanguage } = useJSONFormatterStore();

  useEffect(() => {
    editorRef.current?.updateOptions(options);
  }, [options]);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // 光标变化
    editor.onDidChangeCursorPosition((event) => {
      setEditorStatus((oldVal) => {
        return {
          ...oldVal,
          lineNumber: event.position.lineNumber,
          column: event.position.column,
        };
      });
    });

    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
    });

    monaco.languages.html.registerHTMLLanguageService(
      "xml",
      {},
      {
        documentFormattingEdits: true,
      },
    );
  };

  const handleEditorChange: OnChange = (value, _event) => {
    setValue(value || "");
    // editorRef.current?.getAction("editor.action.formatDocument")?.run();
  };

  const handleEditorValidate: OnValidate = (markers) => {
    console.log(markers);
  };

  return (
    <div className="h-full">
      <div className="h-[48px] p-2">
        <LanguageSelect value={language} onChange={setLanguage} />
      </div>
      <Editor
        height="calc(100% - 70px)"
        language={language}
        options={{
          automaticLayout: true,
          tabSize: options.tabSize,
          //  formatOnPaste: true,
          formatOnType: true,
          stickyTabStops: true,
          stickyScroll: {
            enabled: true,
            maxLineCount: 10,
            defaultModel: "foldingProviderModel",
          },
        }}
        theme="light"
        defaultValue={value}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        onValidate={handleEditorValidate}
      />
      <div className={cn("h-[22px] px-4 text-sm tabular-nums")}>
        <span>{`Ln ${editorStatus.lineNumber}, Col ${editorStatus.column}`}</span>
        <Divider orientation={"vertical"} />
        <span>{`Space ${options.tabSize}`}</span>
        <Divider orientation={"vertical"} />
        <span>JSON with Comments</span>
      </div>
    </div>
  );
};
