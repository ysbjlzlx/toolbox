import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface JsonDiffStore {
  original?: string;
  modified?: string;
  language?: string;

  setOriginal: (value: string) => void;
  setModified: (value: string) => void;
  setLanguage: (value: string) => void;
}

const useJsonDiffStore = create<JsonDiffStore>()(
  persist(
    (set) => ({
      original: "one\n" + "twod\n" + "three\n" + "four\n" + "five",
      modified: "one\n" + "Twod\n" + "Three\n" + "four\n" + "fiveSix",
      language: "json",
      setOriginal: (value) =>
        set(() => {
          return { original: value };
        }),
      setModified: (value) =>
        set(() => {
          return { modified: value };
        }),
      setLanguage: (value) =>
        set(() => {
          return { language: value };
        }),
    }),
    { name: "json-diff", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJsonDiffStore;
