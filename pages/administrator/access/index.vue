<template>
	<div class="main">
		<Topbar
		:title="'Управление доступом '"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content dashboard">
			<div class="dashboard-list">

				<div class="dashboard-list__item events access">
					<div class="dashboard-list__item__title">
						Модераторы
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle">
									14
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									пользователей с правами модератора
								</div>	
							</div>
							
						</div>
						
						<div class="dashboard-list__item-content__panel">
							<NuxtLink to="/administrator/access/moderators" class="dashboard-list__item-content__panel__btn check btn withicon grey">
								<IconEyebold></IconEyebold>
								Список модераторов
							</NuxtLink>
							
						</div>
					</div>
				</div>

				<div class="dashboard-list__item events access">
					<div class="dashboard-list__item__title">
						Бизнес пользователи
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle">
									34
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									пользователя, предоставляющих услуги
								</div>	
							</div>
							
						</div>
						
						<div class="dashboard-list__item-content__panel">
							<NuxtLink to="/administrator/access/business" class="dashboard-list__item-content__panel__btn check btn withicon grey">
								<IconEyebold></IconEyebold>
								Список бизнес-пользователей
							</NuxtLink>
							
						</div>
					</div>
				</div>

				<div class="dashboard-list__item events access">
					<div class="dashboard-list__item__title">
						Пользователи
					</div>
					<div class="dashboard-list__item-content">
						<div class="dashboard-list__item-content-events">
							<div class="dashboard-list__item-content-events__item ">
								<div class="dashboard-list__item-content-events__item__numb subtitle">
									120 000
								</div>
								<div class="dashboard-list__item-content-events__item__text">
									уникальных пользователей
								</div>	
							</div>
							
						</div>
						
						<div class="dashboard-list__item-content__panel">
							<NuxtLink to="/administrator/access/users" class="dashboard-list__item-content__panel__btn check btn withicon grey">
								<IconEyebold></IconEyebold>
								Список пользователей
							</NuxtLink>
							
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