<template>
	<div id="vpnPage">
		<el-row justify="center" type="flex" style="top:20%">
			<el-col :span="20">
				<el-table :data="vpnList" style="width: 100%" :row-class-name="tableRowClassName" border>
					<el-table-column
						:prop="col.prop"
						:label="col.label"
						v-for="(col,index) in colList"
						:key="index"
					></el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>


<style scope>
#vpnPage {
	height: 100%;
	width: 100%;
}
</style>

<script>
export default {
	data() {
		return {
			colList: JSON.parse(window.localStorage.getItem("config")).toolTap
				.vpn,
			vpnList: []
		};
	},
	methods: {
		tableRowClassName({ row, rowIndex }) {
			if (rowIndex === 1) {
				return "warning-row";
			} else if (rowIndex === 3) {
				return "success-row";
			}
			return "";
		},
		getVpnList() {
			this.$http({ url: "/tool/vpn/get", showMessage: false }).then(
				data => {
					this.vpnList = data;
				}
			);
		}
	},

	mounted: function() {
		this.getVpnList();
	}
};
</script>