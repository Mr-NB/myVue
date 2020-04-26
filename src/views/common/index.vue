<template>
	<div id="commonPage">
		<el-row
			type="flex"
			class="row-bg"
			justify="center"
			v-if="$store.state.user.token && $store.state.user.role!=1"
		>
			<el-col :span="21">
				<Navigation :menuList="menuList" />
			</el-col>

			<el-col :span="3">
				<Navigation :menuList="userMenuList" />
			</el-col>
		</el-row>
		<router-view></router-view>
	</div>
</template>


<script>
import Navigation from "@/components/navigation";
export default {
	name: "User",
	components: { Navigation },
	data() {
		return {
			menuList: [],
			userMenuList: [],
			adminMenuList: []
		};
	},
	methods: {
		getMenuList() {
			let config = JSON.parse(window.localStorage.getItem("config"));
			this.menuList = config.menuList;

			let userMenuList = config.userMenuList;
			let adminMenuList = config.adminMenuList;

			userMenuList[0].title = window.localStorage.getItem("user");
			this.userMenuList = userMenuList;
			this.adminMenuList = adminMenuList;
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted: function() {



		if (window.localStorage.getItem("token")) {
			this.getMenuList();
		}
	}

};
</script>

<style scope>
#commonPage{
	height: 100%;
	width: 100%;
}
</style>
