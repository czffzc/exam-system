import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import {getCookie,setCookie,delCookie} from '@/util/util'
Vue.prototype.$cookieStore = {setCookie,getCookie,delCookie}
Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL : 'http://localhost:3001/api',
  timeout : 5000
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
