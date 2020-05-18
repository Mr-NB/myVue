<template>
	<div id="userLoginLog">
		<Table :dataList="dataList" :columns="columns"/>
	</div>
</template>

<style scoped>
#userLoginLog {
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>

<script>
import Table from "@/components/table";
export default {
    components: { Table },
	data() {
		return {
			columns: [],
			dataList: []
		};
	},
	methods: {
		getDataList() {
            console.log(this.$route.params)
			let config = window.localStorage.getItem("config");
			this.columns = JSON.parse(config).adminTap.userLoginInfoTable;
			console.log(this.columns);
			this.$http({
				url: "/admin/log/user",
				showMessage: false
			}).then(data => {
				this.dataList = data;
				console.log(this.dataList);
			});
		}
	},
	mounted: function() {
		this.getDataList();
	}
};
</script>