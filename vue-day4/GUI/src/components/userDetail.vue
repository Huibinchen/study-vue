<template>
	<div class="userDetail">
		<h1>我是详情页</h1>
		姓名：{{userInfo.userName}}
		年龄：{{userInfo.userAge}}
		id号：{{userInfo.userId}}
		<!-- <button @click="getParams()">获取参数</button> -->
	</div>
</template>
<script type="text/javascript">
export default {
	created(){
		// 获取参数并转换为number类型
		console.log(this.$route.query)
		var id = Number(this.$route.query.id)
		// 循环遍历匹配id
		for (var i=0; i<this.userList.length; i++){

			if (this.userList[i].userId === id){

				this.userInfo = this.userList[i]
			}
		}
	},
	data(){
		return {
			userInfo: {},
			userList: [
				{ 'userId' : 1001, userName : '李达康', userAge : 18},
				{ 'userId' : 1002, userName : '高玉良', userAge : 20},
				{ 'userId' : 1003, userName : '祁同伟', userAge : 16},
				{ 'userId' : 1004, userName : '侯亮平', userAge : 22},
				{ 'userId' : 1005, userName : '白百何', userAge : 33}
			]
		}
	},
	methods: {
		getParams(){
			console.log(this.$route.params.id)
		}
	}
}	
</script>