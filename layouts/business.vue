<template>
	<div class="container">
		<Leftbar>
			<Logotype slot="logotype" class="logotype"></Logotype>
			<Nav slot="nav">
				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/business/services'" 
				class="active" 
				:drop="false" 
				:title="'Моя услуга'">
					<IconCity class="nav-item__header__icon" slot="icon"></IconCity>
					<!-- <div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div> -->
					<NuxtLink 
					to="/business/infoservice"
					class="nav-item-drop__item nav-item-drop__item--child" slot="nav_drop">
						Добавить услугу
					</NuxtLink>
				</NavItem>

				<NavItem 
				slot="nav-item" 
				:navlink="true" 
				:navurl="'/business/events'" 
				:drop="false" 
				:title="'Организовать мероприятие'">
					<IconEvents class="nav-item__header__icon" slot="icon"></IconEvents>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
					
				</NavItem>

				<!-- <NavItem 
				slot="nav-item" 
				:drop="false" 
				:navlink="true" 
				:navurl="'/business/help'" 
				:title="'Помощь'">
					<IconHelp class="nav-item__header__icon" slot="icon"></IconHelp>
					<div class="nav-item-drop__item" slot="nav_drop">Опубликованые </div>
					<div class="nav-item-drop__item" slot="nav_drop">На модерации </div>
				</NavItem> -->
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
			...mapActions({				
				queryData: 'service/getData'
			}),
			getServiceInfo() {
				let params = {}
				params.params = `service/1`
				this.queryData(params)
				.then((res) => {
					console.log(res)
				})
			}
		},
		mounted() {
			this.getServiceInfo()
		}
	}
</script>