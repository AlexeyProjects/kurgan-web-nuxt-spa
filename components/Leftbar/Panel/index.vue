<template>
	<div class="leftbar-wrap-panel">
		<div class="leftbar-wrap-panel-wrap">
			<div 
			@click="droped = !droped"
			class="leftbar-wrap-panel-header">
				<div class="leftbar-wrap-panel-header__title">
					<div class="leftbar-wrap-panel-header__title__role">
						{{ setRole }}
					</div>
					<div class="leftbar-wrap-panel-header__title__email">
						{{ setEmail }}
					</div>
				</div>
				<div class="leftbar-wrap-panel-header">
					<IconArrowDropDown></IconArrowDropDown>
				</div>
			</div>
			<transition name="slide">
				<div v-if="droped" class="leftbar-wrap-panel-drop">
					<div 
					@click="goProfile"
					class="leftbar-wrap-panel-drop__info">
						Информация о профиле
					</div>
					<div 
					@click="logout"
					class="leftbar-wrap-panel-drop__logout">
						Выйти из системы
					</div>
				</div>
			</transition>
			
		</div>
		
	</div>
</template>

<style scoped>
	
</style>

<script>
	export default {
		data() {
			return {
				droped: false,
				user: JSON.parse(localStorage.getItem('user'))
			}
		},
		computed: {
			setRole: function() {
				if ( this.user.role === 'BUSINESS' ) {
					return 'Бизнес-пользователь'
				}
				else if ( this.user.role === 'MODERATOR' ) {
					return 'Модератор'
				}
				else if ( this.user.role === 'ADMINISTRATOR' ) {
					return 'Администратор'
				}
			},
			setEmail: function() {
				return this.user.email
			},
		},
		methods: {
			showDroped: function() {

			},
			logout: function() {
				this.$store.dispatch('login/logout')
				.then((res) => {
					console.log(res)
					this.$router.push({ path: `/login` })
				})
				.catch((err) => {
					if ( err.response.status === 401 ) {
						this.errors.password = true
						console.log('Не верный пароль')
					}
				})
			},
			goProfile: function() {
				let user = JSON.parse(window.localStorage.getItem('user'))
				console.log(user)
				let lowUppercase = ''
				lowUppercase = user.role.toLowerCase()
				this.$router.push({ path: `/${lowUppercase}/profile` })
			}
		}
	}
</script>