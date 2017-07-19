import Vue from 'vue'
import App from './App'
// 引入
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 调用
Vue.use(VueAwesomeSwiper)

import VueLazyload from 'vue-lazyload'

// 使用lazyload
Vue.use(VueLazyload)
// 配置lazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: './assets/404.png',
  loading: './assets/loading.gif',
  attempt: 1
})

/*// 引入element-ui
import ElementUI from 'element-ui'
// 引入element-ui的css
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)*/

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
