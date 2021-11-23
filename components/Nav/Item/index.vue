<template>
	<div 
	
	class="nav-item unselectable">
		<div 
		class=""
		@click="openDrop(title)"
		>
		<NuxtLink 
		
		v-if="navlink && !navTitle" :to="navurl"

		
		
		class="nav-item__header" >
			<slot name="icon" > </slot>
			<div 
			
			class="nav-item__header__title">
				{{ title }}
			</div>
			<div v-if="true"  class="nav-item__header__arrow">

				<IconDot v-if="!droped" class="nav-item__header__arrow--dot"></IconDot>
				<IconArrowNav v-if="droped" class="nav-item__header__arrow--arrow"></IconArrowNav>

			</div>
		</NuxtLink>
		</div>
		<div v-if="!navlink && !navTitle"

		
		class="nav-item__header" >
			<slot name="icon" > </slot>
			<div class="nav-item__header__title">
				{{ title }}
			</div>
			<div  class="nav-item__header__arrow">

				<IconDot v-if="!droped" class="nav-item__header__arrow--dot"></IconDot>
				<IconArrowNav v-if="droped" class="nav-item__header__arrow--arrow"></IconArrowNav>

			</div>
		</div>

	
			
			
			
			<div 

			v-if="navTitle && !navurl" class="nav-item__title">
				{{ title }}
			</div>

			<NuxtLink 
			:to="navurl"
			v-if="navTitle && navurl" class="nav-item__title">
				{{ title }}
			</NuxtLink>
		

		<transition name="slide">
			<div v-if="droped" class="nav-item-drop">
				<slot name="nav_drop" >
					
				</slot>
				
			</div>
		</transition>
		
		
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			title: '',
			navlink: false,
			drop: false,
			navurl: '',
			navTitle: false
		},
		data() {
			return {
				droped: false,
				choosedItem: []

			}
		},
		methods: {
			openDrop: function(el) {
				console.log(el)
				this.choosedItem = el
				// if ( !this.drop ) {
				// 	return
				// }
				// else {
					this.drop = !this.drop
					// this.droped = !this.droped
				// }
				
			}
		}
	}
</script>