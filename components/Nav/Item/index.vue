<template>
	<div class="nav-item unselectable">
		<NuxtLink v-if="navlink && !navTitle" :to="navurl"

		@click="openDrop"
		class="nav-item__header" >
			<slot name="icon" > </slot>
			<div class="nav-item__header__title">
				{{ title }}
			</div>
			<div v-if="drop"  class="nav-item__header__arrow">

				<IconDot v-if="!droped" class="nav-item__header__arrow--dot"></IconDot>
				<IconArrowNav v-if="droped" class="nav-item__header__arrow--arrow"></IconArrowNav>

			</div>
		</NuxtLink>
		<div v-if="!navlink && !navTitle"

		@click="openDrop"
		class="nav-item__header" >
			<slot name="icon" > </slot>
			<div class="nav-item__header__title">
				{{ title }}
			</div>
			<div v-if="drop"  class="nav-item__header__arrow">

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
				droped: false
			}
		},
		methods: {
			openDrop: function() {
				if ( !this.drop ) {
					return
				}
				else {
					this.droped = !this.droped
				}
				
			}
		}
	}
</script>