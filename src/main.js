import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import i18n from "./i18n";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue);



new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
});
