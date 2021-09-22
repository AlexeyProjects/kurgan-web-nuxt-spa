<template>	
	<div class="main">
		<Topbar
		:title="'Помощь'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		
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