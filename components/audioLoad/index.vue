<template>
	 <div class="photo-load">
	 	<label :for="name">
	 		<slot name="icon"></slot>
	 		
	 		{{ title }}
	 	</label>
	 	<input 

	 	type="file" 
	 	:id="name" 
	 	:name="name"
	 	size="2621440"
	 	:multiple="multiple"
	 	@change="loadPreviewGallery"
	 	accept=".mp3,audio/*">

	 </div>
</template>

<script>
	export default {
		data() {
			return {
				fileBuffer: []
			}
		},
		watch: {

		},
		props: {
			title: '',
			multiple: false,
			name: ''
			
		},
		methods: {
			previewFiles(event) {

				
			},
			loadPreviewGallery(event) {
				console.log(event.target.files)
				let images = event.target.files
				var fileBuffer=[];

				

				Array.prototype.push.apply( this.fileBuffer, images );
				// this.gallery.images = fileBuffer
				console.log(images)
				
				console.log(fileBuffer)
				this.$emit('unloadPhoto', this.fileBuffer)
				this.fileBuffer = []
			},
		},
		computed: {
			
		}
	}
</script>