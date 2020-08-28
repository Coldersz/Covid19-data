import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/style.css';
import router from './router'
import Api from './services/api';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import './registerServiceWorker'

Vue.use(Api);
Vue.use(Buefy);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
