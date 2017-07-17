<template>
	<div>
		<h1>橙子</h1>
		<button @click="addOne()">添加一个橙子</button>
		<button @click="decOne()">减少一个橙子</button>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			price: 8
		}
	},
	methods: {
		addOne(){
			// 调用vuex下actions的inc方法
			// dispatch（调用的方法名）
			// 如果多个参数，传的就得是对象
			/*var parmas = {
				price: this.price,
				zhangsan: '3333'
			}*/
			this.$store.dispatch('inc',this.price)
		},
		decOne(){
			this.$store.dispatch('dec',this.price)
		}
	}
}	
</script>