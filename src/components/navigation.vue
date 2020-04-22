<template>
	<el-menu
		:default-active="activeIndex"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#545c64"
		text-color="#fff"
		active-text-color="#ffd04b"
		router="true"
	>
		<template v-for="(menu,i) in menuList">
			<el-submenu :index="i" v-if="menu.children">
				<template slot="title">{{menu.title}}</template>
				<el-menu-item
					:index="i+'-'+cIndex"
					v-for="(child,cIndex) in menu.children"
					:key="cIndex"
					:route="child.path"
				>{{child.title}}</el-menu-item>
			</el-submenu>
			<el-menu-item :index="i" v-else :route="menu.path">{{menu.title}}</el-menu-item>
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
			activeIndex: "0"
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
</script>
