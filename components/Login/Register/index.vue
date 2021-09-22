<template>
	<div class="login-form">
		<div class="login-form__title title">
			Регистрация нового пользователя
		</div>
		<div class="login-form-inputs">
			<label  class="col login-form-inputs__label" for="email">E-mail
				
			</label>
			<input 
			placeholder="E-mail" 
			class="input login-form-inputs__item" 
			name="email" 
			v-model="userData.email"
			type="text">
			<label class="col login-form-inputs__label" for="password">Пароль
				
			</label>
			<InputPassword 
			@inputChange="firstPass"

			>
				<div class="error mustHave">
					Пароль должен иметь 
					<span 
					:class="{ 'green': validationNewPass.highRegister == true, red: validationNewPass.highRegister == false }">1 заглавную букву
					</span>, 
					<span
					:class="{ 'green': validationNewPass.hasNumber == true, red: validationNewPass.hasNumber == false }"
					>1 цифру</span>,
					 <span
					 :class="{ 'green': validationNewPass.moreSixSymbol == true, red: validationNewPass.moreSixSymbol == false }"
					 >более 6 символов</span>
				</div>
			</InputPassword>
			<label class="col remember login-form-inputs__label" for="password">Повторите пароль
				
			</label>
			<InputPassword 
			@inputChange="secondPass"
			
			:typePass="'remember'"
			:errorShow = " noRememberShow "
			>
				<div v-show="noRememberShow" class="error noRemember">
					Пароли не совпадают
				</div>
			</InputPassword>
			
		</div>
		<div class="login-form-buttons row">
			<div 
			:class = "{ dissable : checkValidationComputed == false } "
			@click="registrationUser()"
			to="/login/register/accept" class="login-form-buttons__item auth act btn">
				Создать аккаунт
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
	import { mapActions } from 'vuex'
	var md5 = require("md5"); 
	export default {
		data() {
			return {
				firstPassVal: '',
				secondPassVal: '',
				noRememberShow: false,
				validateInputs: {
					email: false,
					password: false
				},
				validationNewPass: {
					highRegister: false,
					hasNumber: false,
					moreSixSymbol: false
				},
				userData: {
					email: '',
					password: ''
				},
				checkValidation: false
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

				if ( val.match(/\d/) != null  ) {
					this.validationNewPass.hasNumber = true	
				}
				else {
					this.validationNewPass.hasNumber = false
				}

				// Проверка на букву верхнего регистра
				if ( val.match(/\p{Lu}/u) != null  ) {
					this.validationNewPass.highRegister = true	
				}
				else {
					this.validationNewPass.highRegister = false
				}
				// Проверка на кол-во
				if ( val.length >= 6 ) {
					this.validationNewPass.moreSixSymbol = true
				}
				else {
					this.validationNewPass.moreSixSymbol = false
				}

				if ( val.match(/\d/) != null && val.match(/\p{Lu}/u) != null &&  val.length >= 6 ) {
					this.validateInputs.password = true
				}
				
			},
			validationNewPass: function(val) {
				console.log(val)
			},
			'userData.password': function(val) {
				console.log(val)
				// if ( userData.email )
			}
		},
		computed: {
			checkRemember: function() {

			},
			checkFirstPass: function() {

			},
			checkValidationComputed: function() {
				this.validateInputs.email = true
				// return this.noRememberShow
				return  this.validateInputs.password && this.noRememberShow == false && this.validateInputs.email 
				// if ( this.noRememberShow == true ) {
				// 	console.log('xyu')
				// }
			}
		},
		methods: {
			firstPass: function(e) {
				this.userData.password = e
				this.firstPassVal = e
			},
			secondPass: function(e) {
				this.secondPassVal = e
			},
			...mapActions([
			    'registration/register'
			    
			]),
			registrationUser: function(e) {
				console.log(this.userData)
				let user = {
					email: this.userData.email,
					passwordHash: md5(this.userData.password),
					role: 'BUSINESS'
				}
				if ( this.checkValidationComputed ) {
					this.$store.dispatch('registration/register', user)
					.then((res) => {
						this.$router.push({ path: `/login/register/accept` })
					})
					console.log('METHOD ACCEPT')
				}
				let inputs = document.querySelectorAll('input')
				console.log(inputs)
				inputs.forEach((item) => {
				  item.value = 'xyu'
				  console.log(item.value)
				})
				for ( var key in this.validationNewPass ) {
					this.validationNewPass[key] = ''
				}
				this.userData.email = ''
				this.userData.password = ''

				
				console.log('METHOD NO ACCEPT')
			}
		}
	}
</script>