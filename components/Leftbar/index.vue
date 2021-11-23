<template>
	<div 
	:class="{ open: rightMenu }"
	class="leftbar">
		<div class="leftbar-wrap">
			<div 
			@click="hideRightMenu"
			class="leftbar__close">
				<IconClose></IconClose>
			</div>
			
			
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
	import { mapGetters } from 'vuex'
	export default {
		props: {
			showBurgerIcon: false
		},
		data() {
			return {
				showLeftbar: false
			}
		},
		computed: {
			...mapGetters({
				rightMenu: 'nav/rightMenu'
			})
		},
		methods: {
			hideRightMenu() {
				this.$store.commit('nav/hideRightMenu')
			},
		}
		
	}
</script>