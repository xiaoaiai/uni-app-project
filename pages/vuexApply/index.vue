<template>
	<view class="container">
		<view class="common-title">vuex</view>
		<view>vuex官网地址：<a>https://vuex.vuejs.org/zh/</a></view>
		<view>vuex中的store分模块管理，需要在store的index.js中引入各个模块，
		为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，之后在不
		同页面中引入getter、actions、mutations时，需要加上所属的模块名
		</view>
		<view>vuex主入口文件内容：</view>
		<img width="100%" src="/static/img/mainVuex.png"/>
		<view>vuex分模块入口文件内容：</view>
		<img width="100%" src="/static/img/splitModule.PNG"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		computed: {
		},
		methods: {
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

