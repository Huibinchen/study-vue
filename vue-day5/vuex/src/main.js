import Vue from 'vue'
import App from './App'

// 引入vuex
import Vuex from 'vuex'
// 在Vue中使用（安装）vuex
Vue.use(Vuex)

// 实例化Vuex
const store = new Vuex.Store({
	// 声明状态
	state: {
		// 所有商品的总数量
		total: 0
	},
	// 行为，异步的操作
	actions: {
		// 增加数量,context->就是传过来的store
		inc(context,price){
			console.log(price)
			// 执行一些异步的操作
			setTimeout(function (){
				// 第一个参数放的是mutations操作的方法
				context.commit('INC',price)
			},300)
		},
		// 减少数量的行为
		dec(context,price){
			setTimeout(function (){

				context.commit('DEC',price)
			},300)
		}
	},
	// 操作状态必须在这里执行->同步
	mutations: {
		// mutations里的方法用大写,state->状态
		INC(state,price){
			state.total += price
		},
		DEC(state,price){
			state.total -= price
		}
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 在vue实例中添加store
  store,
  render: h => h(App)
})
