<template>
	<div 
	v-if = "renderComponent"
	:class="haserror"
	class="gallery-list__item"
	
	>

		<img :src="item.src" alt="">
		<div 
		@click="deleteImage(keyArr, arr)"
		class="gallery-list__item__delete">
			<IconDeleteimage></IconDeleteimage>
		</div>
		<div
		v-show="errors.size === true || errors.format === true"
		class="gallery-list__item-errors">
			<div class="gallery-list__item-errors__icon">
				<IconErrorImage></IconErrorImage> 
			</div>
			<div class="gallery-list__item-errors__text">
				<div 
				v-if="item.errors.size == true"
				class="gallery-list__item-errors__text--size">
					Неверный размер
				</div>
				<div 
				v-if="item.errors.format == true"
				class="gallery-list__item-errors__text--format">
					Неверный формат
				</div>
			</div>
		</div>

	</div>
</template>

<style type="text/css">
	
</style>

<script>
	
	export default {
		props: {
			item: {},
			arr: [],
			keyArr: 0,
			errors: {
				size: false,
				format: false
			},

		},
		watch: {
			errors(newVal, oldVal) {
				console.log(newVal)
			}
		},
		data() {
			return {
				renderComponent: true,
				haserror: ''
			}
		},
		methods: {
			deleteImage(key, arr) {
				this.$emit('deleteImage', key, arr)
			},
			forceRerender() {
		        // Сначала скроем компонент
		        this.renderComponent = false;
		        
		        this.$nextTick(() => {
		          // А потом покажем снова
		          this.renderComponent = true;
		        });
		     }
		},
		computed: {
			checkErrors: function() {
				if ( item.errors ) {
					return 'Error'
				}
			}
		},
		created() {

		    
				if ( this.errors.format === true ) {
					this.haserror = 'error'
					console.log('Ошибка формата')
				}
				

			
		    console.log('propertyComputed will update, as this.property is now reactive.')

		  }
		// mounted() {
		// 	this.$nextTick(function () {
		// 	    if ( this.errors.format == true ) {
		// 			this.haserror = 'error'
		// 		}
		// 	})
		// 	this.$forceUpdate();
		// }

	}
</script>