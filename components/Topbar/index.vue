<template>
	<div class="topbar">
		
		<div class="topbar-history">
			<div 
			@click="showRightMenu()"
			class="topbar__burger">
				<IconBurger></IconBurger>
			</div>
			<div class="topbar-history__title title">
				{{ title }}
			</div>
			<div v-if="history"  class="topbar-history__list">
				<slot ref="history" name="history">
					
				</slot>
				<span ref="active" class="active">{{ title }}</span>
			</div>
		</div>
		<slot name="panel"></slot>
	</div>
</template>

<style lang="scss">
	.topbar {
		align-items: center;
		&__burger {
			width: 3rem;
			height: 3rem;
			margin-right: 1.5rem;
		}
	}
</style>

<script>
	
	export default {
		props: {
			title: '',
			history: true
		},
		computed : {

		},
		methods: {
			showRightMenu() {
				this.$store.commit('nav/showRightMenu')
			},
			hideRightMenu() {
				this.$store.commit('nav/hideRightMenu')
			},
		}
	}
</script>