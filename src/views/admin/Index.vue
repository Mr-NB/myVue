<template>
	<div id="adminIndexPage">
		<el-row type="flex" justify="center" v-if="$store.state.user.token">
			<el-col :span="21">
				<Navigation :menuList="adminMenuList" />
			</el-col>

			<el-col :span="3">
				<Navigation :menuList="adminCenterList" />
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="4" v-if="$store.state.user.role==1">
				<el-menu
					default-active="0"
					class="el-menu-vertical-demo"
					@open="handleOpen"
					@close="handleClose"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b"
					:router="true"
				>
					<el-submenu :index="i.toString()" v-for="(item,i) in adminNavigationList" :key="i">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>{{item.title}}</span>
						</template>

						<el-menu-item-group v-for="(subItem,ii) in item.data" :key="ii">
							<!-- <template slot="title">分组一</template> -->
							<el-menu-item :index="i+'-'+ii" :route="subItem.path">{{subItem.title}}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
			<!-- <el-col span="6"> -->
			<div id="adminContainer">
				<router-view></router-view>
			</div>
			<!-- </el-col> -->
		</el-row>
	</div>
</template>


<script>
import Navigation from "@/components/navigation";
export default {
	name: "AdminPage",
	components: { Navigation },
	data() {
		return {
			adminMenuList: [],
			adminCenterList: [],
			adminNavigationList: []
		};
	},
	methods: {
		getMenuList() {
			let config = JSON.parse(window.localStorage.getItem("config"));
			console.log(config)
			this.adminMenuList = config.adminMenuList;

			let adminCenterList = config.adminCenterList;

			adminCenterList[0].title = window.localStorage.getItem("user");
			this.adminCenterList = adminCenterList;
			this.adminNavigationList = config.adminNavigationList;
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	},
	mounted: function() {
		this.getMenuList();
	}
};
</script>

<style scope>
#adminIndexPage {
	height: 100%;
	width: 100%;
}

#adminContainer {
	height: 100%;
}
</style>