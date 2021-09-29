<template>
	<div class="login-form">
		<div class="login-form__title title">
			Войдите, чтобы продолжить
		</div>
		<div class="login-form-inputs">
			<label  class="col login-form-inputs__label" for="email">E-mail
				
			</label>
			<input 
			v-model="userData.email"
			placeholder="E-mail" class="input login-form-inputs__item" name="email" type="text">
			<label class="col login-form-inputs__label" for="password">Пароль
				
			</label>
			<InputPassword
			@inputChange="getPassword"
			>
				<div v-show="errors.password"  class="error red">
					Пароли введен неверно 
				</div>
			</InputPassword>
			<NuxtLink to="login/recoverypass" class="login-forgotPass">
				Забыли пароль?
			</NuxtLink>
			
		</div>
		<div class="login-form-buttons row">
			<div 
			@click="loginAuth"
			class="login-form-buttons__item auth act btn">
				Авторизоваться
			</div>
			<NuxtLink to="login/register/" class="login-form-buttons__item register btn">
				Зарегистрироваться
			</NuxtLink>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import axios from 'axios'
	import { mapActions, mapGetters } from 'vuex'
	var md5 = require("md5"); 

	export default {
		data() {
			return {
				userData: {
					email: '',
					passwordHash: ''
				},
				errors: {
					password: false
				}
			}
		},
		methods: {
			...mapActions([
				'login/auth'
			]),
			getPassword(val) {
				this.userData.passwordHash = md5(val)
			},
			loginAuth: function() {
				this.$store.dispatch('login/auth', this.userData)
				.then((res) => {
					console.log(res)
					console.log(res.headers["x-auth-token"])
					if ( this.USER ) {
						this.$router.push({ path: `/` })	
					}
					for(let entry of res.headers.entries()) {
					    console.log(entry);
					}
					// if ( this.USER.role === "BUSINESS" ) {
					// 	this.$router.push({ path: `/business` })	
					// }
					// else if ( this.USER.role === "MODERATOR" ) {
					// 	this.$router.push({ path: `/moderator` })
					// }
					
					// else if ( this.USER.role === "ADMINISTRATOR" ) {	
					// 	this.$router.push({ path: `/admin` })
					// }

					console.log('METHOD ACCEPT')
				})
				.catch((err) => {
					console.log(err)
					console.log('Ошибка в index.vue')
					if ( err.response.status === 401 ) {
						this.errors.password = true
						console.log('Не верный пароль')
					}
				})
				
			}
		},
		computed: {
			...mapGetters({
				USER: 'login/USER'
			})
		}
	}
</script>