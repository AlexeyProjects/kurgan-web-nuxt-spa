<template>
	<div 
	:class="{ opened: opened }"
	v-click-outside="hideSelect"
	class="input-select">
		<div 
		@click="openSelect"
		class="input-select-header row">

			<div v-if="multiple == false" class="input-select-header__title">
				{{  title != '' ? title : items[0].title }}
			</div>
			
			<div v-if="multiple && lang === 'rus'" class="input-select-header__title">
				{{  title != '' ? title : items[0].title }}
			</div>

			<div v-if="multiple && lang === 'eng'" class="input-select-header__title">
				{{  titleEn != '' ? titleEn : items[0].titleEn }}
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
			v-if="multiple === false && title != item.title"
			@click="chooseOption(item)"
			class="input-select-dropbar__item"
			v-for="(item,key,index) in items"
			>
				{{ item.title }}
			</div>

			<div
			v-if="multiple && lang === 'rus'"
			@click="chooseOption(item)"
			class="input-select-dropbar__item"
			v-for="(item,key,index) in items"
			>
				{{ item.title }}
			</div>

			<div
			v-if="multiple && lang === 'eng'"
			@click="chooseOption(item)"
			class="input-select-dropbar__item"
			v-for="(item,key,index) in items"
			>
				{{ item.titleEn }}
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
		props: {
			items: [],
			lang: '',
			title: '',
			titleEn: '',
			multiple: false
		},
		watch: {
			title: function(val) {
				if ( val === '' ) {
					this.choosed = this.items[0]
				}
			}
		},
		
		data() {
			return {
				opened: false,
				choosed: '',

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
				if ( !this.multiple ) {
					this.title = item.title
				}
				if ( this.lang === 'eng' && this.multiple ) {
					this.titleEn = item.titleEn
				}
				else if ( this.lang === 'rus' && this.multiple ) {
					this.title = item.title
				}
				
				this.hideSelect()
				this.$emit('chooseSelect', this.choosed)
			}
		},
		mounted() {
			if ( this.title === this.items[0].title ) {
				this.choosed = this.items[0]
			}
		}
	}
</script>