<template>
	<div class="leftbar">
		<div class="leftbar-wrap">
			<NuxtLink to="/">
				<slot name="logotype"></slot>
			</NuxtLink>
			
			<slot name="nav"></slot>
			<LeftbarPanel class="leftbar-wrap-panel" ></LeftbarPanel>
		</div>
		
	</div>
</template>

<style>
	
</style>

<script>
	
</script>