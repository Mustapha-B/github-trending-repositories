import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import App from './App.vue';
import router from './router';
import ApiService from './services/api.service';

Vue.config.productionTip = false;
ApiService.init(process.env.VUE_APP_ROOT_API);
Vue.use(infiniteScroll);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
