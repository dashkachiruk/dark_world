import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ru: {
    message: {
      hello: 'привет мир  '
    }
  }
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
