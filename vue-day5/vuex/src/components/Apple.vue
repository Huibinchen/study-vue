<template>
	<div>
		<h1>苹果</h1>
		<button @click="addOne()">添加一个苹果</button>
		<button @click="decOne()">减少一个苹果</button>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			price: 2
		}
	},
	methods: {
		addOne(){
			// 调用vuex下actions的inc方法
			// dispatch（调用的方法名）
			this.$store.dispatch('inc',this.price)
		},
		decOne(){
			this.$store.dispatch('dec',this.price)
		}
	}
}	
</script>