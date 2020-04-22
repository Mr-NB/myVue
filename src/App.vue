<template>
	<div id="app">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="24">
				<Navigation :menuList="menuList" />
			</el-col>
		</el-row>

		<router-view />
	</div>
</template>

<script>
import Navigation from "./components/navigation";
export default {
	name: "App",
	components: { Navigation },
	data() {
		return {
			menuList: []
		};
	},
	methods: {
		getMenuList() {
			console.log(process.env.VUE_APP_API_BASE_URL)
			this.$http.get("/config/get").then(res => {
				this.menuList = res.data.myVueSite.menuList;
			});
		}
	},
	mounted: function() {
		this.getMenuList();
	}
};
</script>


<style>
html,
body,
#app {
	/*设置内部填充为0，几个布局元素之间没有间距*/
	padding: 0px;
	/*外部间距也是如此设置*/
	margin: 0px;
	/*统一设置高度为100%*/
	height: 100%;
	
}
</style>
