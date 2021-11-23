<template>
	<div class="container">
		<Leftbar>
			<Logotype slot="logotype" class="logotype"></Logotype>
			<Nav slot="nav">
				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/business/infoservice'" 
				class="active" 
				:drop="false" 
				:title="'Моя услуга'">
					<IconCity class="nav-item__header__icon" slot="icon"></IconCity>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/business/createevent'" 
				:drop="false" 
				:title="'Организовать мероприятие'">
					<IconEvents class="nav-item__header__icon" slot="icon"></IconEvents>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/business/help'" 
				:title="'Помощь'">
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
		name: 'business',
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'BUSINESS',
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				'nav/GET_NAV'
			])
		},
		mounted() {
			this.$store.dispatch('nav/GET_NAV')
		}
	}
</script>