<template>
	<div>
		<div>欢迎  {{account}} , 登陆成功</div>
		<button @click='edit'>退出</button>
	</div>
</template>
<script>
	export default {
		name: 'home',
		data (){
			return {
				account: ''
			}
		},
		created(){
			this.account = this.$router.query.name
		},
		methods:{
			edit(){
				this.$router.push({
					name: 'login'
				});
			}
		}
	}
</script>