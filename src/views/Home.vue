<template>
	
</template>


<style>
.home {
	display: flex;
	width: 100%;
	height: 100%;
	direction: column;
	justify-content: center;
	align-items: center;
}
</style>


<script>
// @ is an alias to /src
import Navigation from "../components/navigation";
export default {
	name: "Home",
	components: { Navigation },
	data() {
		return {
			menuList: []
		};
	},
	methods: {
		getMenuList() {
			this.$http.get("/api/config/get").then(res => {
				this.menuList = res.data.myVueSite.menuList;
			});
		}
	},
	mounted: function() {
		this.getMenuList();
	}
};
</script>
