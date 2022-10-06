import create from 'zustand';
import { defaultLocale } from '../config/locale';

interface LocaleStore {
  locale: string;
  messages: Record<string, string>;
  setLocale: (val: string) => void;
  setMessages: (messages: Record<string, string>) => void;
}

const useLocaleStore = create<LocaleStore>()((set) => ({
  locale: localStorage.getItem('locale') || defaultLocale,
  messages: {},
  setLocale: (val) =>
    set(() => {
      localStorage.setItem('locale', val);
      return { locale: val };
    }),
  setMessages: (val) =>
    set(() => {
      return { messages: val };
    }),
}));

export default useLocaleStore;
