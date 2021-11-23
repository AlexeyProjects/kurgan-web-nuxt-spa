<template>
	<div class="profile main-content">
		<div class="profile-role">
			<div class="profile-role__text">
				{{ getRole }}
			</div>
			<div class="profile-role__answers">
				Есть вопросы? <a href="#">Напишите нам</a>
			</div>
		</div>
		<div class="card-data-content ">
			<div class="card-data-header__title">
				Данные об аккаунте
			</div>
			<div class="card-data-content row">
				<div class="card-data-content__field field">
					<label for="">E-mail</label>
					<input placeholder="vsheml@mail.com" type="text">
				</div>

				<div class="card-data-content__field field password">
					<label for="">Пароль</label>
					<input placeholder="•••••••••••••••" type="password">
					<div class="card-data-content__field__btn btn unhover">
						Сменить пароль
					</div>
				</div>
			</div>
			
		
		</div>
	</div>
</template>

<style>	

</style>

<script>	
	export default {
		data() {
			return {

			}
		},
		computed: {
			getRole() {
				let result = ''

				let roleKey =  JSON.parse(localStorage.getItem('user'))
				switch(roleKey.role) {
					case 'BUSINESS' :
						result = 'Бизнес-пользователь'
						break;
					case 'MODERATOR' :
						result = 'Модератор'
						break;
					case 'ADMINISTRATOR' :
						console.log("Oranges are $0.59 a pound.");
						result = 'Главный администратор'
						break;
				}
				
				// return roleKey
				return result		
			}
		}
	}
</script>	