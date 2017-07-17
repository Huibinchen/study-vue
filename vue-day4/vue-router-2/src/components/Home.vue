<template>
	<div class="home">
		<h1>我是home</h1>
		<ul>
			<li v-for="(item,index) in userList" :key="item.userId">
				姓名：<router-link :to="{path:'/userDetail',query:{id:item.userId}}">{{item.userName}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			userList: [
				{ 'userId' : 1001, userName : '李达康', userAge : 18},
				{ 'userId' : 1002, userName : '高玉良', userAge : 20},
				{ 'userId' : 1003, userName : '祁同伟', userAge : 16},
				{ 'userId' : 1004, userName : '侯亮平', userAge : 22},
				{ 'userId' : 1005, userName : '白百何', userAge : 33}
			]
		}
	}
}	
</script>