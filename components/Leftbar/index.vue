<template>
	<div class="leftbar">
		<div class="leftbar-wrap">

			<NuxtLink to="/">
				<slot name="logotype"></slot>
			</NuxtLink>
			<div class="leftbar-wrap-content">
				<slot name="nav">
				<!-- <slot name="title"></slot> -->
				</slot>
				<LeftbarPanel
				class="leftbar-wrap-panel" 
				>
					
				</LeftbarPanel>
			</div>
			
		</div>
		
	</div>
</template>

<style>
	
</style>

<script>
	
</script>