<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		:router="true"
	>
		<template v-for="(menu,i) in menuList">
			<el-submenu :index="i.toString()" v-if="menu.children">
				<template slot="title">
					<el-avatar
						src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
						v-if="menu.icon"
						style="margin-right:10px"
					></el-avatar>
					{{menu.title}}
				</template>
				<el-menu-item
					:index="i+'-'+cIndex"
					v-for="(child,cIndex) in menu.children"
					:key="cIndex"
					:route="child.path"
					:disabled="child.disabled"
				>{{child.title}}</el-menu-item>
			</el-submenu>
			<el-menu-item
				:index="i.toString()"
				v-else
				:route="menu.path"
				:disabled="menu.active?true:false"
			>{{menu.title}}</el-menu-item>
		</template>
	</el-menu>
</template>
<script>
// import navigationItem from "./navigationItem.vue";

export default {
	name: "Navigation",
	components: {},
	props: {
		menuList: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			activeIndex: "1"
		};
	},
	methods: {
		handleSelect(key, keyPath, obj) {
			console.log(obj.route);
			if (obj.route == "/logout") {
				window.localStorage.setItem("token", "");
				window.localStorage.removeItem('config')
				this.$store.commit("user/USER_INFO", { token: "", user: "" });
			}
		}
	}
};
</script>
</script>
