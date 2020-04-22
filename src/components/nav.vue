<template>
	<div class="nav-bottom">
		<remote-css href="//at.alicdn.com/t/font_1753208_c6yu1e04uyj.css"></remote-css>

		<router-link to="/">
			Home1111
			<i class="iconfont icon-fasong"></i>
		</router-link>|
		<router-link to="/about">About</router-link>|
		<router-link to="/find">Test1</router-link>|
		<router-link to="/test1">Test2</router-link>|
		<router-link to="/detail">Detail</router-link>|
	</div>
</template>

<script>
export default {
	name: "NavBottom",
	props: {
		msg: String
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* //at.alicdn.com/t/font_8d5l8fzk5b87iudi.css */

.nav-bootom {
	display: flex;
	width: 100%;
	height: 100%;
	border: solid;
	font-size: 100rpx;
}

.active {
	color: chartreuse;
}
</style>
