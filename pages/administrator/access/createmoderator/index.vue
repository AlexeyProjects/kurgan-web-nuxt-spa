<template>
	<div class="main">
		<Topbar
		:title="'Модераторы '"
		:history="true"
		>
			<div slot="history" class="">
				<NuxtLink to="/administrator/access/moderators">
					Панель управления/ Управление доступом/
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content profile">
			<div 
			v-show="!globalLoading"
			class="card-data-content ">
				<div class="card-data-header__title">
					Данные об аккаунте
				</div>
				<div class="card-data-content row">
					<div class="card-data-content__field field">
						<label for="">E-mail</label>
						<input 
						v-model="data.login"
						placeholder="Введите email" type="text">
					</div>

					<div 
					v-if="true"
						class="card-data-content__field field password">
						<label for="">Пароль</label>
						<input 
						v-model="data.password"
						placeholder="•••••••••••••••" type="password">
						<div 
						@click='createModerator'
						class="card-data-content__field__btn btn unhover">
							Отправить пароль
						</div>
					</div>
				</div>
			</div>
			<Loader
			v-if="globalLoading"
			></Loader>
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
				this.$store.commit('showLoading')
				this.$store.dispatch('admin/users/createModerator', { 
					email: this.data.login,
					passwordHash: this.passHashing
				})
				.then(() => {
					this.$store.commit('hideLoading')
				})
			}
		},
	  	computed: {
	  		passHashing() {
	  			return md5(this.data.password)
	  		},
	  		...mapGetters({
				  globalLoading: 'globalLoading'
			  })
	  	}
	}
</script>