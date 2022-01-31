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
				:navurl="'/'" 
				:title="'Данные приложения'">
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/moderator/cityinfo'" 
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
				:navurl="'/moderator/sight'" 
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
				:navurl="'/moderator/events'" 
				:title="'События в городе'">
					<IconEvents class="nav-item__header__icon" slot="icon"></IconEvents>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="true" 
				:navlink="true" 
				:navurl="'/moderator/services'" 
				:title="'Услуги'">
					<IconServices class="nav-item__header__icon" slot="icon"></IconServices>
					<NuxtLink 
					:to="'/moderator/services/category'"
					class="nav-item-drop__item nav-item-drop__item--child" slot="nav_drop">
						Категории 
					</NuxtLink>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/moderator/audiogid'" 
				:title="'Аудиогид'">
					<IconAudiogid class="nav-item__header__icon" slot="icon"></IconAudiogid>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="true" 
				:navlink="true" 
				:navurl="'/moderator/museumgid'" 
				:title="'Музейный гид'">
					<IconMusemgid class="nav-item__header__icon" slot="icon"></IconMusemgid>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<!--  -->

				

				

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/moderator/help'" 
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
	import { mapActions, mapGetters } from 'vuex'
	export default {
		name: 'admin',
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'MODERATOR',
		data() {
			return {

			}
		},
		computed: {
			...mapGetters({
				globalLoading: 'globalLoading'
			})
		},
		methods: {
			...mapActions([
				// 'admin/service/getServices',
				// 'admin/users/getServices'
			])
		},
		mounted() {
			// this.$store.dispatch('admin/service/getServices')
			console.log(this.globalLoading)		
		}
	}
</script>