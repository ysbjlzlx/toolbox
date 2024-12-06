import { DiffEditor, type DiffOnMount, type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { type FC, useRef } from "react";

import { FullContainer } from "@/components/FullContainer.tsx";
import useJsonDiffStore from "@/stores/JsonDiffStore.ts";

export const Component: FC = () => {
  const editorRef = useRef<editor.IStandaloneDiffEditor>();
  const monacoRef = useRef<Monaco>();
  const { original, modified, language, setOriginal, setModified } = useJsonDiffStore();

  const onMount: DiffOnMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    const originalEditor = editor.getOriginalEditor();
    originalEditor.setValue(original || "");
    originalEditor.onDidChangeModelContent(() => {
      setOriginal(originalEditor.getValue());
    });

    const modifiedEditor = editor.getModifiedEditor();
    modifiedEditor.setValue(modified || "");
    modifiedEditor.onDidChangeModelContent(() => {
      setModified(modifiedEditor.getValue());
    });
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      allowComments: true,
    });
  };

  return (
    <FullContainer>
      <DiffEditor language={language} onMount={onMount} options={{ originalEditable: true, readOnly: false }} />
    </FullContainer>
  );
};
