<template>
	<div class="main">
		<Topbar
		:title="'О городе'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content dashboard">
			
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