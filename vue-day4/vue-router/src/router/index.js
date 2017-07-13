// 引入vue
import Vue from 'vue'
// 1.引入vue-router
import Router from 'vue-router'
// 引入Home组件->components是在webpack.base.cof.js中配置的别名
import Home from 'components/Home'
// 引入Cart组件
import Cart from 'components/Cart'
import Mine from 'components/Mine'

// 2.使用vue-router
Vue.use(Router)

// 3.实例化Router这个类并导出
export default new Router({
	// 设置为不显示#/
	mode: 'history',
	// 6.配置,做映射,什么样的地址,跳转到什么样的页面
	routes:[
		{
			// 路径->/根目录
			path: '/',
			// 跳转的页面（组件）
			component: Home
		},
		{
			path: '/cart',
			component: Cart
		},
		{
			path: '/mine',
			component: Mine
		}
	]
})

