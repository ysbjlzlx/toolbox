import { Content, Mode } from 'vanilla-jsoneditor';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface JsonEditorStore {
  mode: Mode;
  content: Content;
  setMode: (val: Mode) => void;
  setContent: (val: Content) => void;
}

const useJsonEditorStore = create<JsonEditorStore>()(
  persist(
    (set) => ({
      mode: Mode.text,
      content: { text: '' },
      setMode: (val: Mode) =>
        set(() => {
          return { mode: val };
        }),
      setContent: (val: Content) =>
        set(() => {
          return { content: val };
        }),
    }),
    { name: 'json-editor-store', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJsonEditorStore;
