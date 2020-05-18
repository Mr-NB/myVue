<template>
	<el-table
		:data="dataList.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
		border
	>
		<el-table-column :label="col.label" :prop="col.prop" v-for="(col,cIndex) in columns"></el-table-column>

		<el-table-column align="right">
			<template slot="header" slot-scope="scope">
				<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
			</template>
			<template slot-scope="scope" v-if="buttonList">
				<el-button
					size="mini"
					:disabled="bItem.disabled"
					:type="bItem.type"
					@click="bItem.type(scope.$index, scope.row)"
					v-for="(bItem,bIndex) in buttonList"
				>{{bItem.text}}</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>


<script>
export default {
	data() {
		return {
			search: ""
		};
	},
	props: {
		dataList: {
			type: Array,
			required: true
		},
		columns: {
			type: Array,
			required: true
		},
		buttonList: []
	},
	methods: {
		Edit(index, row) {
			console.log(index, row);
		},
		Delete(index, row) {
			console.log(index, row);
		},
		Add(index, row) {
			console.log(index, row);
		}
	},
	mounted: function() {}
};
</script>