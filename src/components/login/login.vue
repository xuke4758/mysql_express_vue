<template>
	<div>
		<div>账号: <input v-model='account' type="text" name=""></div>
		<div>密码：<input v-model='pwd' type="password" name=""></div>
		<div>
			<button @click='login' style='margin-right:100px;'>登录</button>
			<button @click='reg'>注册</button>
		</div>
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
				var url = 'http://localhost:8088/api/login';
				this.$http.post(url, {
					name: this.account,
					age: this.pwd
				}, {}).then(response => {
					if(response.body.code == 200){
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