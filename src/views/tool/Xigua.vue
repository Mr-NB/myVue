<template>
	<div id="xiguaPage">
		<el-row type="flex" class="row-bg" justify="center" :gutter="10" style="top:10%">
			<!-- <el-col :span="6">
				<div class="grid-content bg-purple">
					<el-input placeholder="请输入内容" v-model="input1">
						<template slot="prepend">Http://</template>
					</el-input>
				</div>
			</el-col>
			<el-col :span="2">
				<el-button type="primary">提交</el-button>
			</el-col>-->

			<el-form
				:inline="true"
				:model="formInline"
				ref="formInline"
				class="demo-ruleForm"
				:rules="rules"
			>
				<el-form-item prop="vedioUrl">
					<!-- <el-input v-model="formInline.user" placeholder="审批人"></el-input> -->
					<el-input placeholder="请输入视频链接" v-model="formInline.vedioUrl">
						<template slot="prepend">Http://</template>
					</el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="getVedioPlayUrl('formInline')" :loading="loading">提交</el-button>
				</el-form-item>
			</el-form>
		</el-row>

		<el-row type="flex" class="row-bg" justify="center" style="top:20%">
			<el-col :span="18">
				<el-table
					:data="commitHistory.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
					style="width: 100%"
					:default-sort="{prop: 'createDate', order: 'descending'}"
				>
					<el-table-column label="Date" prop="createDate" sortable></el-table-column>
					<el-table-column label="Title" prop="title"></el-table-column>
					<el-table-column align="right" prop="vedioUrlList">
						<template slot="header" slot-scope="scope">
							<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
						</template>
						<template slot-scope="scope">
							<el-button
								size="mini"
								v-for="(bItem,bIndex) in scope.row.playUrl"
								:key="bIndex"
								type="success"
							>
								<el-link
									:href="bItem.url"
									target="_blank"
									rel="noopener noreferrer"
									download="1.mp4"
								>{{bItem.definition}}</el-link>
							</el-button>
							<!-- <el-button size="mini" type="danger" @click="handleDelete(scope)">Delete</el-button> -->
						</template>
					</el-table-column>
				</el-table>
			</el-col>
		</el-row>
	</div>
</template>


<style>
.el-select .el-input {
	width: 130px;
}
.input-with-select .el-input-group__prepend {
	background-color: #fff;
}

#xiguaPage {
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
}
</style>


<script>
// @ is an alias to /src

export default {
	name: "Xigua",
	components: {},
	data() {
		return {
			loading: false,
			commitHistory: [],
			search: "",
			formInline: {
				vedioUrl: ""
			},
			rules: {
				vedioUrl: [
					{
						required: true,
						message: "请输入视频链接",
						trigger: "blur"
					},
					{ type: "url", message: "非法链接" }
				]
			}
		};
	},
	methods: {
		getCommitHistory() {
			this.$http({
				url: "/tool/xigua/commitHistory",
				showMessage: false
			}).then(data => {
				this.commitHistory = data;
			});
		},

		getVedioPlayUrl(formInline) {
			this.$refs[formInline].validate(valid => {
				if (valid) {
					this.loading = true;

					this.$http({
						url: "/tool/xigua/downloadUrl",
						method: "post",
						params: {
							url: this.formInline.vedioUrl
						},
						successmMessage: "提交成功"
					}).then(data => {
						this.getCommitHistory();
						this.loading = false;
						this.formInline.vedioUrl = "";
					});
				} else {
					return false;
				}
			});
		},

		handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete(index) {
			console.log(index);
		},
		downloadVedio(url) {
			// this.$http.get(url).then(res => {
			console.log(url);
			// 	this.commitHistory = res.data.data;
			// });

			// this.$http({ method: "get", url: url, responseType: "blob",headers:{"cookie":'_ga=GA1.2.2146124606.1586674506; _gid=GA1.2.732669475.1587276099; RT="z=1&dm=ixigua.com&si=ojc4uxcnose&ss=k96nb1av&sl=1&tt=0&nu=cd167837df4150899c74e99d87136b0d&cl=2p78m&obo=1&ld=2p78x&r=77ace23a271858b0808e84db56c44238&ul=2p78z&hd=2p7gr"'} }).then(res=>{

			//     console.log(res)
			// });
		}
	},
	mounted: function() {
		this.getCommitHistory();
	},
	filters: {
		numFilter(data, n) {
			return n;
		}
	},
	computed: {
		totalCount() {
			var n = 0;
			this.commitHistory.forEach((item, index) => {
				n += item.count;
			});
			return n;
		}
	}
};
</script>
