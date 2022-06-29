<template>
    <div class="reset">
        <div class="login-form">
            <div class="login-form__title title">
                Восстановление пароля
            </div>
            <div class="login-form-inputs">
                <label class="col login-form-inputs__label" for="password">Пароль
                </label>
                <InputPassword
                @inputChange="getFirstPass"
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
                :class="!passwordValid ? 'dissable' : ''"
                class="login-form-buttons__item auth act btn">
                    {{ btnLabel }}

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
	.reset {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-form-buttons {
        justify-content: center;
    }
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
                firstPass: '',
                firstPassMd: '',
                secondPass: '',
				errors: {
					password: false
				},
        btnLabel: 'Изменить пароль'
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
					this.$router.push({ path: `/` })
          btnLabel = 'Успешно'
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

			},
            getFirstPass(val) {
                this.firstPassMd = md5(val)
                this.firstPass = val
            },
		},
		computed: {
			...mapGetters({
				USER: 'login/USER'
			}),
            getUuid() {
                return this.$router.currentRoute.query.uuid
            },
            passwordValid() {
                if ( this.firstPassMd === this.userData.passwordHash && this.firstPassMd !== "d41d8cd98f00b204e9800998ecf8427e" && this.firstPass.length >= 6 ) {
                    return true
                }
                else {
                    return false
                }
            }
		}
	}
</script>