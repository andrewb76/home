import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import i18n from '@/plugins/i18n';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const VIcon = require('vue-tailwind-icons');
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

Vue.use(VIcon)
Vue.config.productionTip = false

Sentry.init({
  logErrors: true,
  Vue,
  dsn: "https://9d31a37298fb4cfe92a8ba060605625b@o4503967457935360.ingest.sentry.io/4503967461343232",
  integrations: [
    new BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
