<template>
	<div class="popup">
		
		<div 
		v-if="type === 'simple-gallery'"
		class="popup-body image single"
		slot="body" >
		<!-- v-click-outside="hide" -->
			<div 
			
			class="popup-body__content">
				<slot 
				name="body">
					
				</slot>
				<div 
				@click="hidePopup"
				>
					<IconClose></IconClose>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script>
	import ClickOutside from 'vue-click-outside'

	export default {
		props: {
			type: ''
		},
		methods: {
			hidePopup: function() {
				console.log('s')
				this.$emit('hidePopup')
			}
		},
		mounted() {
			this.popupItem = this.$el
		},
		directives: {
		    ClickOutside
		}
	}
</script>