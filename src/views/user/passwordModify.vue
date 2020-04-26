<template>
	<div id="passwordModifyPage">
		<el-row type="flex" justify="center" style="top:30%">
			<el-col :span="8">
				<el-form
					:model="ruleForm"
					status-icon
					:rules="rules"
					ref="ruleForm"
					label-width="100px"
					class="demo-ruleForm"
				>
					<el-form-item label="原密码" prop="oldPassword">
						<el-input type="password" v-model="ruleForm.oldPassword" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="新密码" prop="newPassword">
						<el-input type="password" v-model="ruleForm.newPassword" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="tNewPassword">
						<el-input type="password" v-model="ruleForm.tNewPassword"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<style>
#passwordModifyPage {
	width: 100%;
	height: 100%;
}
</style>


<script>
export default {
	data() {
		var validatePass2 = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请再次输入密码"));
			} else if (value !== this.ruleForm.newPassword) {
				callback(new Error("两次输入密码不一致!"));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				oldPassword: "",
				newPassword: "",
				tNewPassword: ""
			},
			rules: {
				oldPassword: [
					{
						trigger: "blur",
						required: true,
						message: "请输入原始密码"
					}
				],
				newPassword: [
					{
						trigger: "blur",
						required: true,
						message: "请输入新密码"
					},
					{
						min: 6,
						max: 20,
						message: "长度在 6 到 20 个字符",
						trigger: "blur"
					}
				],
				tNewPassword: [
					{
						validator: validatePass2,
						trigger: "blur",
						required: true
					},
					{
						min: 6,
						max: 20,
						message: "长度在 6 到 20 个字符",
						trigger: "blur"
					}
				]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					this.$http({
						url: "/user/password/modify",
						method: "post",
						params: {
							oldPassword: this.ruleForm.oldPassword,
							newPassword: this.ruleForm.newPassword,
							userName: this.$store.state.user.user
						}
					}).then(data => {

						if (!data.code){
							this.$router.push('/tool/xigua')
						}
					});
				} else {
					return false;
				}
			});
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
};
</script>
