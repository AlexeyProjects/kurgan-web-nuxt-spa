<template>	
	<div class="main">
		<Topbar
		:title="'Профиль'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<Profile></Profile>
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