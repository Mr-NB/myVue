<template>
	<div id="loginPage">
		<video :src="bgVedio" width="100%" autoplay loop muted style="position:absolute"></video>
		<!-- <el-row type="flex" justify="center" style="bottom":100px"> -->
		<!-- <el-col :span="6"> -->

		<!-- </el-col> -->
		<!-- </el-row> -->
		<div class="loginBox" style="position:absolute;top:40%;left:40%">
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
				<el-form-item label="账户" prop="userName">
					<el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password">
					<el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="login('ruleForm')">提交</el-button>
				</el-form-item>
			</el-form>
		</div>

		<!-- <messageBox :data="alertMessage" v-if="alertMessage" /> -->
	</div>
</template>


<style>
#loginPage {
	width: 100%;
	height: 100%;
	/* background: url("http://192.168.1.4:8083/static/images/Common/loginBackground3.png") no-repeat; */
	/* background-size: 100% 100%; */
}
</style>


<script>
// @ is an alias to /src

export default {
	name: "Login",
	components: {},
	data() {
		var validatePassword = (rule, value, callback) => {
			if (value === "") {
				callback(new Error("请输入密码"));
			} else if (value.length < 6) {
				callback(new Error("密码长度不能低于6位"));
			} else {
				callback();
			}
		};
		return {
			bgVedio:
				process.env.VUE_APP_STATIC_URL + "/static/images/Common/bg.mp4",
			menuList: [],
			ruleForm: {
				userName: "",
				password: ""
			},
			rules: {
				userName: [
					{
						required: true,
						message: "请输入账号",
						trigger: "blur"
					}
				],
				password: [
					{
						required: true,
						trigger: "blur",
						validator: validatePassword
					}
				]
			}
		};
	},
	methods: {
		login(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					{
						this.$http({
							url: "/user/login",
							method: "post",
							params: {
								userName: this.ruleForm.userName,
								password: this.ruleForm.password
							},
							errorMessage: "密码错误",
							showMessage: false
						}).then(data => {
							if (!data.code) {
								let user = this.ruleForm.userName;

								let token = data.token;
								let role = data.role;

								window.localStorage.setItem("user", user);
								window.localStorage.setItem("token", token);
								window.localStorage.setItem("role", role);

								this.$store.commit("user/USER_INFO", {
									token,
									user,
									role
								});

								this.$http({
									url: "/config/get",
									showMessage: false
								}).then(data => {
									window.localStorage.setItem(
										"config",
										JSON.stringify(data.myVueSite)
									);

									if (role == 1) {
										this.$router.push("/admin");
									} else {
										this.$router.push("/common/about");
									}
								});
							}
						});
					}
				} else {
					return false;
				}
			});
		}
	},
	mounted: function() {}
};
</script>
