import _ from 'lodash';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface JsonTabStore {
  jsonTabs: string[];
  activeKey: string;
  addJsonTab: (key: string) => void;
  removeJsonTab: (key: string) => void;
  setActiveKey: (key: string) => void;
}

const useJsonTabStore = create<JsonTabStore>()(
  persist(
    (set, get) => ({
      jsonTabs: ['0'],
      activeKey: '0',

      addJsonTab: (key: string) =>
        set(() => {
          return { jsonTabs: _.concat(get().jsonTabs, key) };
        }),
      removeJsonTab: (key: string) =>
        set(() => {
          return { jsonTabs: _.without(get().jsonTabs, key) };
        }),
      setActiveKey: (key: string) =>
        set(() => {
          return { activeKey: key };
        }),
    }),
    { name: 'json-tab-store', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJsonTabStore;
