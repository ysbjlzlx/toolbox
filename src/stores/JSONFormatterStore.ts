import type { editor } from "monaco-editor";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface JSONFormatterStore {
  value: string | null;
  options: editor.IEditorOptions & editor.IGlobalEditorOptions;
  setValue: (value: string) => void;
  setOptions: (options: editor.IStandaloneEditorConstructionOptions) => void;
}

const useJSONFormatterStore = create<JSONFormatterStore>()(
  persist(
    (set) => ({
      value: null,
      options: {},
      setValue: (value: string) =>
        set(() => {
          return { value: value };
        }),
      setOptions: (options) =>
        set(() => {
          return { ...options };
        }),
    }),
    { name: "json-formatter", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJSONFormatterStore;
