<template>
	<div class="news">
		<h1>网易新闻主页</h1>
		<router-view></router-view>
		<router-link to="/news/hot">头条</router-link>
		<router-link to="/news/important">要闻</router-link>
	</div>
</template>