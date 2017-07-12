<template>
	<div class="tab">
		<a v-for="(item,index) in data" :class="{active: activeIndex==index}" @mouseover="changeIndex(index)">
			{{item.btn}}
		</a>
		<span class="slider" :style="{left: activeIndex*100+'px'}"></span>
		<div v-for="(item,index) in data" :class="{active: activeIndex==index}">
			{{item.content}}
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			activeIndex: 0
		}
	},
	props: ["data"],
	methods:{
		changeIndex(index){
			this.activeIndex = index
		}
	}
}	
</script>
<style scoped>
.tab{
	float: left;
	padding-top: 10px;
	position: relative;
}
.tab>a{
	color: black;
	font-size: 16px;
	padding: 0 10px;
	width: 80px;
	display: inline-block;
	border-right: 1px solid #ccc;
}
.tab>a:last-of-type{
	border-right: none;
}
.tab>a.active{
	color: red;
}
.tab span.slider{
	position: absolute;
	left: 0;
	top: 31px;
	height: 2px;
	width: 100px;
	background-color: red;
	-webkit-transition: all 0.4s;
	-o-transition: all 0.4s;
	transition: all 0.4s;
}
.tab>div{
	width: 100%;
	height: 200px;
	background-color: #ccc;
	display: none;
}
.tab>div.active{
	display: block;
}




	
</style>