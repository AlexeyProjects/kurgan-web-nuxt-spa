<template>	
	<div class="main">
		<Topbar
		:title="'Помощь'"
		:history="true"
		>
			<div slot="history" class="">
				<NuxtLink to="/">
					Панель информации/
				</NuxtLink>
			
			</div>
		</Topbar>
		<Help class="main-content full"></Help>
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