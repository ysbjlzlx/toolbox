import type { InitOptions } from 'i18next';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import ChainedBackend from 'i18next-chained-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next';

const initOptions: InitOptions = {
  load: 'languageOnly',
  backend: {
    backends: [resourcesToBackend((lng: string, ns: string) => import(`./locales/${lng}/${ns}.json`))],
  },
  // lng: 'zh-Hans', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  fallbackLng: {
    en: ['en'],
    zh: ['zh-CN'],
    default: ['zh-CN'],
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};

i18next
  .use(I18nextBrowserLanguageDetector)
  .use(ChainedBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(initOptions);
