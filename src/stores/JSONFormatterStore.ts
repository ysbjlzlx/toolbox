import type { editor } from "monaco-editor";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface JSONFormatterStore {
  value: string;
  options: editor.IEditorOptions & editor.IGlobalEditorOptions;
  language: string;
  setValue: (value: string) => void;
  setOptions: (options: editor.IStandaloneEditorConstructionOptions) => void;
  setLanguage: (language: string) => void;
}

const useJSONFormatterStore = create<JSONFormatterStore>()(
  persist(
    (set) => ({
      value: "// some code here",
      options: { tabSize: 2 },
      language: "json",
      setValue: (value: string) => set(() => ({ value: value })),
      setOptions: (options) => set(() => ({ options })),
      setLanguage: (language: string) => set(() => ({ language })),
    }),
    { name: "json-formatter", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJSONFormatterStore;
