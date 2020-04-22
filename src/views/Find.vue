<template>
	<div class="findPage">
		<!-- <Banner :bannerImageList="bannerImageList" /> -->
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Find",
	components: {},
	data() {
		return {
			timer: null,
			n: 0,
			lists: [
				{ title: "美食1111", icon: "icon-zan", color: "#f60" },
				{ title: "美食1", icon: "icon-rili", color: "#f60" },
				{ title: "美食1", icon: "icon-kaiguan", color: "#f60" }
			],
			bannerImageList: [
				require("../assets/banner/1.png"),
				require("../assets/banner/2.png"),
				require("../assets/banner/3.png")
			]
		};
	},
	methods: {
		getList() {
			this.$http.get("/api/config/get").then(res => {
				console.log(res);
			});
		}
	},
	mounted: function() {
		this.getList();
	}
};
</script>
