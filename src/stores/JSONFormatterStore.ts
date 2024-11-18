import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface JSONFormatterStore {
  value: string | null;
  setValue: (value: string) => void;
}

const useJSONFormatterStore = create<JSONFormatterStore>()(
  persist(
    (set) => ({
      value: null,
      setValue: (value: string) =>
        set(() => {
          return { value: value };
        }),
    }),
    { name: "json-formatter", storage: createJSONStorage(() => localStorage) },
  ),
);

export default useJSONFormatterStore;
