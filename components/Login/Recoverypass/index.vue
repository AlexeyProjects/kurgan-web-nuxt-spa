<template>
	<div class="login-form login-recovery">
		<div class="login-form__title login-recovery__title title">
			Восстановление пароля
		</div>
		<div class="login-form__descr">	
			Укажите e-mail, на который зарегистрирован аккаунт, мы отправим на него ссылку для нового пароля
		</div>
		<div class="login-form-inputs">
			<label  class="col login-form-inputs__label" for="email">E-mail
				
			</label>
			<input 
			placeholder="E-mail" 
			class="input login-form-inputs__item" 
			name="email" type="text"
			v-model="emailForRecovery"
			>
			<NuxtLink to="/login/register" class="login-forgotPass">
				Зарегистрироваться
			</NuxtLink>
			
			
		</div>
		<div class="login-form-buttons row">
			<div 
			@click = recoveryPassWithEmail()
			class="login-form-buttons__item auth btn">
				Сбросить пароль
			</div>
			<NuxtLink to="/login" class="login-form-buttons__item register btn">
				Назад ко входу
			</NuxtLink>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		data() {
			return {
				emailForRecovery: '',
				firstPassVal: '',
				secondPassVal: '',
				noRememberShow: false,
				validationNewPass: {
					highRegister: false,
					hasNumber: false,
					moreSixSymbol: false
				}
			}
		},
		watch: {
			secondPassVal: function(val) {
				if ( val != this.firstPassVal ) {
					this.noRememberShow = true
				}
				else {
					this.noRememberShow = false
				}
				
				

			},
			firstPassVal: function(val) {
				if ( val != this.secondPassVal ) {
					this.noRememberShow = true
				}
				else {
					this.noRememberShow = false
				}
				// let splitValue = val.split('')

				// splitValue.forEach((item) => {
				// 	console.log( item.toLowerCase() === item.toUpperCase() )

				//   	if ( !isNaN(item) ) {
				//   		this.validationNewPass.hasNumber = true
				//   	}
				//   	else {
				//   		this.validationNewPass.hasNumber = false
				//   	}

				  

				  

				// })	
			}
		},
		computed: {
			checkRemember: function() {

			},
			checkFirstPass: function() {

			}
		},
		methods: {
			...mapActions({
            	sendEmailForRecovery: 'login/recovery/recoveryPasswordEmail'
        	}),
			firstPass: function(e) {
				this.firstPassVal = e
			},
			secondPass: function(e) {
				this.secondPassVal = e
			},
			recoveryPassWithEmail() {
				this.sendEmailForRecovery(this.emailForRecovery)
			}
		}
	}
</script>