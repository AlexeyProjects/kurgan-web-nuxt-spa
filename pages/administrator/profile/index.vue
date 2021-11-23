<template>	
	<div class="main">
		<Topbar
		:title="'Профиль'"
		:history="true"
		>
			<div slot="history" class="">
				<NuxtLink to="/">
					Панель информации
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
	  middleware: 'ADMIN',
	  layout: 'admin',
	}
</script>