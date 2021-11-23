<template>
	<div class="main">
		<Topbar
		:title="'Панель информации'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div 
		:class="{ loading: globalLoading }"
		class="main-content dashboard">
			<div 
			v-if="!globalLoading"
			class="dashboard-list">
				
				<div class="dashboard-list__item services">
					<div class="dashboard-list__item__title">
						Информация о городе
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content__subtitle dashboard-list__item-content__status
						accept">
							<IconAccept></IconAccept>Заполнено
						</div>
						<div class="dashboard-list__item-content__text">
							последнее изменение 26.09.2021
						</div>
						<div class="dashboard-list__item-content__panel">
							
						</div>
					</div>
				</div>

				<div class="dashboard-list__item events">
					<div class="dashboard-list__item__title">
						Достопримечательности
					</div>
					<div class="dashboard-list__item-content">
						
						<div class="dashboard-list__item-content-events__item__numb publish subtitle">
							{{ responseData.place.PUBLISHED }}
						</div>

						<div class="dashboard-list__item-content__panel">
							

						<div class="dashboard-list__item-content__panel__text">
							опубликовано
						</div>
						</div>
					</div>
				</div>

				<div class="dashboard-list__item events">
					<div class="dashboard-list__item__title">
						События в городе
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb wait subtitle">
									{{ responseData.event.MODERATION }}
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									
									Ожидают модерации
								</div>	
							</div>
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle publish">
									{{ responseData.event.PUBLISHED }}
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									опубликовано
								</div>
							</div>
						</div>
						
						<div class="dashboard-list__item-content__panel">
							<div class="dashboard-list__item-content__panel__btn check btn act">
								Проверить неопубликованные
							</div>
							<div class="dashboard-list__item-content__panel__btn btn grey add">
								<IconPlusBlack></IconPlusBlack>
							</div>
						</div>
					</div>
				</div>

				<div class="dashboard-list__item events">
					<div class="dashboard-list__item__title">
						Услуги
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb wait subtitle">
									{{ responseData.service.MODERATION }}
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									ожидают модерации
								</div>	
							</div>
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle publish">
									{{ responseData.service.PUBLISHED }}
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									опубликовано
								</div>
							</div>
						</div>
						
						<div class="dashboard-list__item-content__panel">
							
							<div class="dashboard-list__item-content__panel__btn btn grey icon add">
								<IconPlusBlack></IconPlusBlack>
								Добавить услугу
							</div>
						</div>
					</div>
				</div>

				<div class="dashboard-list__item users">
					<div class="dashboard-list__item__title">
						Услуги
						<IconArmor></IconArmor>
					</div>
					<div class="dashboard-list__item-content">
						
						
						<div class="dashboard-list__item-content__panel">
							
							<div class="dashboard-list__item-content__panel__btn btn blue width--auto">
								• {{ responseData.USER }} пользователей
							</div>
							<div class="dashboard-list__item-content__panel__btn btn blue width--auto">
								• {{ responseData.MODERATOR }} модераторов
							</div>
							<div class="dashboard-list__item-content__panel__btn btn blue width--auto">
								• {{ responseData.BUSINESS }} бизнес-пользователей
							</div>
						</div>
					</div>
				</div>

				<NuxtLink 
				to="/administrator/audiogid/"
				class="dashboard-list__item halfpart onlyicon help">
					<div class="dashboard-list__item__title">
						<IconAudiogid class="big"></IconAudiogid>	
						
					</div>
					<div class="dashboard-list__item-content">
						
						
						Аудиогид
					</div>
					<!-- <div class="dashboard-list__item__title">
						<IconHelpBig></IconHelpBig>
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content__subtitle">
							Помощь
						</div>
						<div class="dashboard-list__item-content__text">
							
						</div>
						<div class="dashboard-list__item-content__panel">
						
						</div>
					</div> -->
				</NuxtLink>

				<NuxtLink  
				to="/administrator/museumgid/"
				class="dashboard-list__item halfpart onlyicon help">
					<div class="dashboard-list__item__title">
						<IconMusemgid class="big"></IconMusemgid>	
						
					</div>
					<div class="dashboard-list__item-content">
						
						
						Музейный гид
					</div>
					<!-- <div class="dashboard-list__item__title">
						<IconHelpBig></IconHelpBig>
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content__subtitle">
							Помощь
						</div>
						<div class="dashboard-list__item-content__text">
							
						</div>
						<div class="dashboard-list__item-content__panel">
						
						</div>
					</div> -->
				</NuxtLink >
			</div>
			<Loader
			v-if="globalLoading"
			></Loader>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'ADMIN',
	  	data() {
	  		return {
	  			responseData: {
					  	place: {},
						event: {},
						service: {}
				  }
	  		}
	  	},
	  	computed: {
			...mapGetters({
				globalLoading: 'globalLoading'
			}),
	  	},
	  	methods: {
	  		...mapActions({
	  			getQuery: 'service/getData'
	  		}),
			async getAllQuery() {
				console.log('async')
				this.$store.commit('showLoading')
				this.getData({
				  "type": "place",
				  "status": "PUBLISHED"
				});
				this.getData({
				  "type": "place",
				  "status": "MODERATION"
				});
				this.getData({
					"type": "event",
					"status": "PUBLISHED"
				});
				this.getData({
					"type": "event",
					"status": "MODERATION"
				});
				this.getData({
					"type": "service",
					"status": "PUBLISHED"
				});
				this.getData({
					"type": "service",
					"status": "MODERATION"
				})
				this.getUsers({
					"type": "MODERATOR",
					
				})
				this.getUsers({
					"type": "USER",
					
				})
				this.getUsers({
					"type": "BUSINESS",
					
				})
				
				setTimeout(() => this.$store.commit('hideLoading'), 1500)
				
			},
	  		getData(options) {
	  			let params = {}
	  			params.params = `${options.type}?cityId=1&status=${options.status}`
	  			this.getQuery(params)
	  			.then((res) => {
					console.log(options)
	  				this.responseData[options.type][options.status] = res.data.total
					console.log(this.responseData)
	  			})
				  
	  		},
			getUsers(options) {
	  			let params = {}
	  			params.params = `admin/users/?role=${options.type}`
	  			this.getQuery(params)
	  			.then((res) => {
					console.log(options)
	  				this.responseData[options.type] = res.data.total
					console.log(this.responseData)
	  			})
				  
	  		}
	  	},
	  	mounted() {
	  		this.getAllQuery()
				
	  	}
	}
</script>