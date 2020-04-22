<template>
	<div class="detailPage">
		
		<Banner :bannerImageList="bannerImageList" />
		<a @click="goBack()">返回11111</a>
	</div>

	
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/banner";

export default {
	name: "Detail",
	components: {
		Banner
	},
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
		},
		goBack() {
			this.$router.push("/home");
		}
	},

	mounted() {
		this.id = this.$route.params.id;
	}
};
</script>
