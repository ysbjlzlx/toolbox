import { DiffEditor, type DiffOnMount, type Monaco } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { type FC, useRef } from "react";

import { FullContainer } from "@/components/FullContainer.tsx";
import { LanguageSelect } from "@/components/monaco-editor/LanguageSelect.tsx";
import { cn } from "@/lib/utils.ts";
import useJsonDiffStore from "@/stores/JsonDiffStore.ts";

export const Component: FC = () => {
  const editorRef = useRef<editor.IStandaloneDiffEditor>(undefined);
  const monacoRef = useRef<Monaco>(undefined);
  const { original, modified, language, setOriginal, setModified, setLanguage } = useJsonDiffStore();

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
      <div className={cn("h-full")}>
        <div className="h-[48px] p-2">
          <LanguageSelect value={language} onChange={setLanguage} />
        </div>
        <div className="h-[calc(100%-48px)]">
          <DiffEditor language={language} onMount={onMount} options={{ originalEditable: true, readOnly: false }} />
        </div>
      </div>
    </FullContainer>
  );
};
