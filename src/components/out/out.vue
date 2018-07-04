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
		<el-button @click='reg' type="danger">注册</el-button>
		<el-button @click='login' type="primary">登录</el-button>
	</div>
</template>

<script>
	export default {
		name:  'out',
		data () {
			return {
				account: '',
				pwd: ''
			}
		},
		watch: {

		},
		methods:{
			login(){
				this.$router.push({
					name: 'login'
				});
			},
			reg(){
				var url = '/api/addUser';
				this.$http.post(url, {
					name: this.account,
					age: this.pwd
				}, {}).then(data => {
					if(data.code==200){
						this.$router.push({
							name: 'home',
							query: {
								name: this.account
							}
						});
					}else{
						alert('注册失败');
					}
				});
			}
		}
	}
</script>