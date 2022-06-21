<template>
	<div class="login-form">
		<div class="login-form__title title">
			Восстановление пароля
		</div>
		<div class="login-form-inputs">
            <label class="col login-form-inputs__label" for="password">Пароль	
			</label>
			<InputPassword
			@inputChange="getPassword"
			@tabEnter="loginAuth"
			>
				<div v-show="errors.password"  class="error red">
					Пароль введен неверно 
				</div>
			</InputPassword>
			<label class="col login-form-inputs__label" for="password">Подтвердите новый пароль
				
			</label>
			<InputPassword
			@inputChange="getPassword"
			@tabEnter="loginAuth"
			>
				<div v-show="errors.password"  class="error red">
					Пароль введен неверно 
				</div>
			</InputPassword>
			
		</div>
		<div class="login-form-buttons row">
			<div 
			@click="resetPass"
			class="login-form-buttons__item auth act btn">
				Изменить пароль
			</div>
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
			...mapActions({
				getCityInfo: 'admin/cityinfo/getCityInfo'
			}),
			onEnterClick: function() {
			     alert('Enter was pressed');
			},
			getPassword(val) {
				this.userData.passwordHash = md5(val)
			},
			resetPass: function() {
                let params = {
                    uuid: this.getUuid,
                    "newPasswordHash": this.userData.passwordHash
                }
				this.$store.dispatch('login/resetPass', params)
				.then((res) => {

					this.getCityInfo()
					this.$router.push({ path: `/` })	

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
			}),
            getUuid() {
                return this.$router.currentRoute.fullPath
            }
		}
	}
</script>