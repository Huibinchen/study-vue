// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 4.导入router
import zhangsan from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 5.将router添加到vue实例中,键名必须是小写的router
  router:zhangsan,
  template: '<App/>',
  components: { App }
})
