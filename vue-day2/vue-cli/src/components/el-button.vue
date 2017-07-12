<template>
	<div class="el-button" @click="clickFn()">
		<div class="message" :class="{'active':showBol}">{{msg}}</div>
		<slot>内容分发</slot>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			showBol: false
		}
	},
	methods:{
		clickFn(){
			this.showBol = true
			var _this = this
			setTimeout(function (){
				_this.showBol = false
			}, 2000)
		}
	},
	props:["msg"]
}
</script>
<style scoped>
.message{
	position: fixed;
	top: -100px;
	/*top: 0;*/
	left: 50%;
	-webkit-transform: translate(-50%,0%);
	-ms-transform: translate(-50%,0%);
	-o-transform: translate(-50%,0%);
	transform: translate(-50%,0%);
	-webkit-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
}
.message.active{
	top: 20px;
}
.el-button{
	display: inline-block;
	padding: 14px;
	border: 1px solid #ccc;
	border-radius: 7px;
}
.el-button:hover{
	border-color: blue;
	color: blue;
}
</style>