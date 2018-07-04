<template>
	<div>
		<el-row>
		  <el-col :span="24">
		  	<el-col :span="2">账号:</el-col>
		  	<el-col :span="22">
		  		<el-input v-model="account" type="text" placeholder="请输入账号"></el-input>
		  	</el-col>
		  </el-col>
		  <el-col :span="24">
		  	<el-col :span="2">密码:</el-col>
		  	<el-col :span="22">
		  		<el-input v-model="pwd" placeholder="请输入密码"></el-input>
		  	</el-col>
		  </el-col>
		</el-row>
		<el-button @click='login' type="primary">登录</el-button>
		<el-button @click='reg' type="danger">注册</el-button>
	</div>
</template>
<script>
	export default {
		name:  'login',
		data () {
			return {
				account: '',
				pwd: ''
			}
		},
		watch: {

		},
		methods:{
			reg(){
				this.$router.push({
					name: 'out'
				});
			},
			login(){
				var url = '/api/login';
				this.$http.post(url, {
					name: this.account,
					age: this.pwd
				}, {}).then(data => {
					if(data.code == 200){
						this.$router.push({
							name: 'home',
							query: {
								name: this.account
							}
						});
					}else{
						alert('登录失败');
					}
				});
			}
		}
	}
</script>