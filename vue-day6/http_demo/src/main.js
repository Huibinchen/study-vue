import Vue from 'vue'
import App from './App'
/*// 引入vue-resource
import Resource from 'vue-resource'

// 使用vue-resourece
Vue.use(Resource)*/

// 引入axios
import axios from 'axios'
// 使用axios
//将axios添加到vue的原型中
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
