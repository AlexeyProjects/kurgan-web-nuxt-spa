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
		<div class="main-content dashboard">
			<div class="dashboard-list">

				<div class="dashboard-list__item services">
					<div class="dashboard-list__item__title">
						Моя услуга
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
						Мои события
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb wait subtitle">
									2
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									ожидают модерации
								</div>	
							</div>
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle publish">
									1
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
							<div class="dashboard-list__item-content__panel__btn btn add">
								<IconPlusBlack></IconPlusBlack>
							</div>
						</div>
					</div>
				</div>

				<div class="dashboard-list__item help">
					<div class="dashboard-list__item__title">
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	import { mapGetters } from 'vuex'
	export default {
		layout: 'business',
	  	middleware: 'auth',
	  	middleware: 'BUSINESS',
	  	data() {
	  		return {

	  		}
	  	},
	  	computed: {
	  	...mapGetters([
	  		['nav/BUSINESS']
	  	])
	  }
	}
</script>