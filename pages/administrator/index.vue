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
							33
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
							
							<div class="dashboard-list__item-content__panel__btn btn grey icon add">
								<IconPlusBlack></IconPlusBlack>
								Добавить услугу
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
	export default {
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'ADMIN'
	}
</script>