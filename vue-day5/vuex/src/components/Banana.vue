<template>
	<div>
		<h1>香蕉</h1>
		<button @click="addOne()">添加一个香蕉</button>
		<button @click="decOne()">减少一个香蕉</button>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			price: 5
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