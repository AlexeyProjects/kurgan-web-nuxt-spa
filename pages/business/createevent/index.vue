<template>	
	<div class="main">
		<Topbar
		:title="'Организовать мероприятие'"
		:history="true"
		>
			<NuxtLink to="/" slot="history" class="">Панель информации/</NuxtLink>
		</Topbar>
		<Addevent></Addevent>
		
		
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