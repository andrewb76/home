import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import i18n from '@/plugins/i18n';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VIcon = require('vue-tailwind-icons');

Vue.use(VIcon)

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
