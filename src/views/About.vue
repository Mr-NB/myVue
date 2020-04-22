<template>
	<el-container>
		<el-header>
			<div class="line"></div>
			<el-menu
				:default-active="activeIndex2"
				class="el-menu-demo"
				mode="horizontal"
				@select="handleSelect"
				background-color="#545c64"
				text-color="#fff"
				active-text-color="#ffd04b"
			>
				<!-- <div v-for="(item,i) in menuList" :key="i">
					<el-menu-item index="i" v-if="item.childrens.length==0">处理中心</el-menu-item>

					<el-submenu index="i" v-else>
						<template slot="title">{{item.name}}</template>
						<el-menu-item index="i-{cIndex}" v-for="(child,cIndex) in item.childrens" :key="cIndex">>{{child.name}}</el-menu-item>

					</el-submenu>
				</div> -->

				<el-submenu index="2">
					<template slot="title">我的工作台</template>
					<el-menu-item index="2-{item}" v-for="(item,i) in selectedList" :key="i">>选项{{item}}</el-menu-item>

					<el-submenu index="2-4">
						<template slot="title">选项4</template>
						<el-menu-item index="2-4-1">选项1</el-menu-item>
						<el-menu-item index="2-4-2">选项2</el-menu-item>
						<el-menu-item index="2-4-3">选项3</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-menu-item index="3" disabled>消息中心</el-menu-item>
				<el-menu-item index="4">
					<a href="https://www.ele.me" target="_blank">订单管理</a>
				</el-menu-item>
			</el-menu>
		</el-header>
		<el-footer>foot</el-footer>
	</el-container>
</template>


<script>
export default {
	data() {
		return {
			activeIndex: "1",
			activeIndex2: "1",
			menuList: [
				{
					name: "Tool",
					childrens: [
						{ name: "XiGua" },
						{ name: "test1" },
						{ name: "test1" }
					]
				},
				{ name: "My" },
				{ name: "About" }
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>