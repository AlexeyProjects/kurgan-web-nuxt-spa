<template>	
	<div class="main">
		<Topbar
		:title="'Информация о услуги'"
		:history="true"
		>
			<NuxtLink to="/" slot="history" class="">Панель информации/</NuxtLink>
		</Topbar>
		<Infoservice>
			
		</Infoservice>
		
	</div>
</template>

<style>
	
</style>

<script>
	export default {
	  middleware: 'auth',
	  middleware: 'BUSINESS',
	  layout: 'business',
	}
</script>