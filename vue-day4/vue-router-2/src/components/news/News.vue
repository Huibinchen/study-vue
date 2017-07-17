<template>
	<div class="news">
		<h1>网易新闻主页</h1>
		<router-link to="/news/hot">头条</router-link>
		<router-link to="/news/important">要闻</router-link>
		<div class="news-router">
			<transition name="bounce">
				<!-- 缓存已访问的组件 -->
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>
<style>
/*.fa-enter-active, .fa-leave-active {
  transition: all .5s
}
.fa-enter, .fa-leave-active {
  transform: translate(-200px,0);
}*/
.bounce-enter-active{
	animation: flipInY 1s;
}
.bounce-leave-active {
  animation: flipOutY 1s;
}


.news-router{
	position: relative;
}
.news-router>div{
	position: absolute;
	left: 40px;
}



</style>