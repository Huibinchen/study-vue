import Vue from 'vue'
import App from './App'
import router from './router'
// vuex
import store from './store'
// axios
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
