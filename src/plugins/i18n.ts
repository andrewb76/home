import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    en: 'en',
    ru: 'ru',
    mainMenu: {
      home: 'home',
      projects: 'projects',
      about: 'about',
    },
  },
  ru: {
    en: 'en',
    ru: 'рус',
    mainMenu: {
      home: 'домой',
      projects: 'проекты',
      about: 'обо мне',
    },
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'ru', // set fallback locale
  messages, // set locale messages
});

export default i18n;
