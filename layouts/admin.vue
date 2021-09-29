<template>
	<div class="container">
		<Leftbar>
			<Logotype slot="logotype" class="logotype"></Logotype>

			<Nav slot="nav">
				<NavItem 
				slot="nav-item" 
				
				class="nav-item__title" 
				:drop="false" 
				:navTitle="true"
				:navurl="'/administrator'" 
				:title="'Данные приложения'">
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/administrator/cityinfo'" 
				class="active" 
				:drop="false" 
				:title="'О городе'">
					<IconCity class="nav-item__header__icon" slot="icon"></IconCity>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/administrator/sight'" 
				:drop="false" 
				:title="'Достопримечательности'">
					<IconSight class="nav-item__header__icon" slot="icon"></IconSight>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/events'" 
				:title="'События в городе'">
					<IconEvents class="nav-item__header__icon" slot="icon"></IconEvents>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/services'" 
				:title="'Услуги'">
					<IconServices class="nav-item__header__icon" slot="icon"></IconServices>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/audiogid'" 
				:title="'Аудиогид'">
					<IconAudiogid class="nav-item__header__icon" slot="icon"></IconAudiogid>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/museumgid'" 
				:title="'Музейный гид'">
					<IconMusemgid class="nav-item__header__icon" slot="icon"></IconMusemgid>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<!--  -->

				<NavItem 
				slot="nav-item" 
				
				class="nav-item__title" 
				:drop="false" 
				:navTitle="true"
				:title="'Управление доступом'">
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/access/moderators'" 
				:title="'Модераторы'">
					<IconModerators class="nav-item__header__icon" slot="icon"></IconModerators>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/access/business'" 
				:title="'Бизнес аккаунты'">
					<IconBusiness class="nav-item__header__icon" slot="icon"></IconBusiness>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/access/users'" 
				:title="'Пользователи'">
					<IconUsers class="nav-item__header__icon" slot="icon"></IconUsers>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				
				class="nav-item__title" 
				:drop="false" 
				:navTitle="true"
				:navurl="'/administrator/additionally'"
				:title="'Дополнительно'">
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/rules'" 
				:title="'Правила путешественника'">
					<IconTraveling class="nav-item__header__icon" slot="icon"></IconTraveling>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/feedback'" 
				:title="'Обратная связь'">
					<IconFeedback class="nav-item__header__icon" slot="icon"></IconFeedback>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/info'" 
				:title="'О приложении'">
					<IconInfo class="nav-item__header__icon" slot="icon"></IconInfo>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/useraccept'" 
				:title="'Пользовательское согл.'">
					<IconUseraccept class="nav-item__header__icon" slot="icon"></IconUseraccept>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/politika'" 
				:title="'Политика конф.'">
					<IconKonf class="nav-item__header__icon" slot="icon"></IconKonf>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/administrator/additionally/help'" 
				:title="`Раздел «помощь»`">
					<IconHelp class="nav-item__header__icon" slot="icon"></IconHelp>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>



			</Nav>
		</Leftbar>
		<Nuxt />
		
	</div>
  
</template>

<style>	

</style>

<script>
	import { mapActions } from 'vuex'
	export default {
		name: 'admin',
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				// 'admin/service/getServices',
				// 'admin/users/getServices'
			])
		},
		mounted() {
			// this.$store.dispatch('admin/service/getServices')
			
		}
	}
</script>