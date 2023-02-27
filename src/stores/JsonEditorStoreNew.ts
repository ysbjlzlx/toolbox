import { Content, Mode } from 'vanilla-jsoneditor';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface JsonEditorInterface {
  mode: Mode;
  content: Content;
}

interface JsonEditorStore {
  tabs: Map<string, JsonEditorInterface>;
  setTab: (key: string, value: JsonEditorInterface) => void;
  getTab: (key: string) => JsonEditorInterface | undefined | null;
}

const useJsonEditorStore = create<JsonEditorStore>()(
  persist(
    (set, get) => ({
      tabs: new Map(),
      setTab: (key, value) =>
        set(() => {
          return { tabs: new Map(get().tabs).set(key, value) };
        }),
      getTab: (key) => {
        return get().tabs.get(key);
      },
    }),
    { name: 'json-editor-store', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJsonEditorStore;
