import Vue from 'vue';
import infiniteScroll from 'vue-infinite-scroll';
import Vuetify from 'vuetify';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import ApiService from './services/api.service';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

ApiService.init(process.env.VUE_APP_ROOT_API);
Vue.use(infiniteScroll);
Vue.use(Vuetify);
Vue.prototype.moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
