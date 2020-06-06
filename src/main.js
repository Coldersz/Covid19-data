import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/style.css';
import router from './router'
import Api from './services/api';

Vue.use(Api);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
