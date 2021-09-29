<template>
	<div class="main">
		<Topbar
		:title="'Управление доступом '"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content dashboard">
			<div 
			style="
			display: flex; 
			flex-direction: column;
			width: 20rem;
			" 	
			class="box">
				email	
				<input
				v-model="data.login"
				type="">
				pass
				<input
				v-model="data.password"
				type="text">
				<div 
				@click="createModerator"
				class="btn act">Отправить</div>
			</div>
			
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	var md5 = require("md5"); 
	import { mapGetters, mapActions } from 'vuex'

	export default {
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'ADMIN',
	  	data() {
	  		return {
	  			data: {
	  				login: '',
	  				password: ''
	  			}
	  			
	  		}
	  	},
	  	methods: {
			// openSettings(id) {
			// 	this.settingsShow = !this.settingsShow
			// }
			...mapActions(['admin/users/createModerator']),
			createModerator() {
				this.$store.dispatch('admin/users/createModerator', { 
							email: this.data.login,
							passwordHash: this.passHashing
				})
			}
		},
	  	computed: {
	  		passHashing() {
	  			return md5(this.data.password)
	  		},
	  		...mapGetters([''])
	  	}
	}
</script>