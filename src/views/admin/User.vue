<template>
	<div id="adminUserInfo">
		<!-- <el-row type="flex" justify="center" style="top:20%">-->
		<!-- <el-col :span="20"> -->
		<!-- <el-row type="flex" justify="center"> -->

		<el-row type="flex" justify="center">
			<el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
		</el-row>

		<el-dialog title="添加用户" :visible.sync="dialogFormVisible">
			<el-form :model="form" :rules="rules">
				<el-form-item label="用户名" :label-width="formLabelWidth" prop="userName">
					<el-input v-model="form.userName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth" prop="password">
					<el-input v-model="form.password" autocomplete="off"></el-input>
				</el-form-item>

				<el-form-item label="角色" :label-width="formLabelWidth" prop="role">
					<el-select v-model="form.role" placeholder="请选择角色">
						<el-option label="管理员" value="1"></el-option>
						<el-option label="用户" value="2"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="addUser(form)">确 定</el-button>
			</div>
		</el-dialog>

		<el-table
			:data="userList.filter(data => !search || data.userName.toLowerCase().includes(search.toLowerCase()))"
			border
		>
			<el-table-column :label="col.label" :prop="col.prop" v-for="(col,cIndex) in columns"></el-table-column>

			<el-table-column align="right">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<el-button size="mini" disabled>Edit</el-button>
					<el-button size="mini" type="danger" @click="delUser(scope.$index, scope.row)">Delete</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<style scoped>
	#adminUserInfo{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>

<script>
export default {
	data() {
		return {
			columns: [],
			userList: [],
			search: "",

			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				userName: "",
				password: "",
				role: ""
			},
			formLabelWidth: "120px",
			rules: {
				userName: [
					{
						trigger: "blur",
						required: true,
						message: "请输入用户名"
					}
				],
				password: [
					{
						trigger: "blur",
						required: true,
						message: "请输入密码"
					},
					{
						min: 6,
						max: 20,
						message: "长度在 6 到 20 个字符",
						trigger: "blur"
					}
				],
				role: [
					{
						trigger: "blur",
						required: true,
						message: "请分配角色"
					}
				]
			}
		};
	},
	methods: {
		addUser() {
			this.$http({
				url: "/admin/user",
				method: "post",
				params: {
					userName: this.form.userName,
					password: this.form.password,
					role: this.form.role
				},
				showMessage: true
			}).then(data => {
				if (!data.code) {
					this.getUserList();
					this.dialogFormVisible = false;
				}
			});
		},

		handleEdit(index, row) {
			console.log(index, row);
		},
		delUser(index, row) {
			this.$http({
				url: "/admin/user",
				method: "delete",
				params: { userName: row.userName }
			}).then(data => {
				this.getUserList();
			});
		},
		getUserList() {
			let config = window.localStorage.getItem("config");
			this.columns = JSON.parse(config).adminTap.userInfoTable;
			console.log(this.columns);
			this.$http({
				url: "/admin/user",
				showMessage: false
			}).then(data => {
				this.userList = data;
				console.log(data);
			});
		}
	},
	mounted: function() {
		this.getUserList();
	}
};
</script>