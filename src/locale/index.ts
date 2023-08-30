import dayjs from 'dayjs';
import type { InitOptions } from 'i18next';
import i18next from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import I18NextHttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const initOptions: InitOptions = {
  backend: {
    // 網頁載入時去下載語言檔的位置
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  // lng: 'zh-Hans', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  fallbackLng: {
    default: ['zh-CN'],
    zh: ['zh-CN'],
  },
  supportedLngs: ['zh-CN', 'en'],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
};

i18next
  .use(I18NextHttpBackend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(initOptions);

i18next.on('languageChanged', (lng: string) => {
  if (lng === 'zh-CN') {
    dayjs.locale('zh-cn');
  } else if (lng === 'en') {
    dayjs.locale('en');
  }
});

export default i18next;
