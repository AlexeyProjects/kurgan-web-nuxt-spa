<template>
	<div 
	:class="{ opened: opened }"
	v-click-outside="hideSelect"
	class="input-select">
		<div 
		@click="openSelect"
		class="input-select-header row">
			<div class="input-select-header__title">
				{{  title != '' ? title : options[0] }}
			</div>
			<div class="input-select-header__icon">
				<svg 
				class="input-select-header__icon__arrow"
				:class="{ opened: opened }"
				width="2.4rem" height="2.4rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6 9L12 15L18 9" stroke="#090A0A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
		</div>
		<div 
		class="input-select-dropbar"
		
		v-if="opened"
		>
			<div
			@click="chooseOption(item)"
			class="input-select-dropbar__item"
			v-for="(item,key,index) in options"
			>
				{{ item }}
			</div>
		</div>
	</div>
</template>

<style lang="scss">

</style>

<script>
	import ClickOutside from 'vue-click-outside'

	export default {
		directives: {
		    ClickOutside
		},
		data() {
			return {
				options: ['Первый', 'Второй', 'Третий'],
				opened: false,
				choosed: '',
				title: 'Выберите'
			}
		},
		methods: {
			openSelect: function() {
				this.opened = true	
			},
			hideSelect: function() {
				this.opened = false
			},
			chooseOption: function(item) {
				this.choosed = item
				this.title = item
				this.hideSelect()
				this.$emit('chooseSelect', this.choosed)
			}
		}
	}
</script>