<template>
	<div>
		<div>账号: <input v-model='account' type="text" name=""></div>
		<div>密码：<input v-model='pwd' type="password" name=""></div>
			<button @click='reg' style='margin-right:100px;'>注册</button>
			<button @click='login'>登录</button>
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
				var url = 'http://localhost:8088/api/addUser';
				this.$http.post(url, {
					name: this.account,
					age: this.pwd
				}, {}).then(response => {
					if(response.body.code!=300){
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