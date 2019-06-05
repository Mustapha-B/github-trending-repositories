import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ApiService from './services/api.service';

Vue.config.productionTip = false;
ApiService.init(process.env.VUE_APP_ROOT_API);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
