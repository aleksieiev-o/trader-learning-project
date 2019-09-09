import Vue from 'vue'
import axios from 'axios'

import router from './router'
import store from './store/store'

import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.axios = axios

new Vue({
  router,
  store,
  axios,
  render: h => h(App),
}).$mount('#app')
