<template>
	 <div class="photo-load">
	 	<label :for="name">
	 		<IconFileload></IconFileload>
	 		{{ title }}
	 	</label>
	 	<input 

	 	type="file" 
	 	:id="name" 
	 	:name="name"
	 	size="2621440"
	 	:multiple="multiple"
	 	@change="loadPreviewGallery"
	 	accept="image/x-png,image/jpeg">

	 </div>
</template>

<script>
	export default {
		data() {
			return {

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
				let images = event.target.files
				var fileBuffer=[];

				images.forEach((item) => {
					var _this = this;
					let errors = {

					}
					item.src = URL.createObjectURL(item)
					// _this.$set(item, 'errors')
					
					if ( item.size >= 2621440 ) {
						
						// _this.$set(item.errors, 'size', true)
						item.errors.size = true
					}
					else {
						// _this.$set(item.errors, 'size', false)
						item.errors.size = false
					}
					var reader = new FileReader();
			        reader.onload = function (e) {
			            var img = new Image;
			            img.onload = function() {
			              item.dimensions = {}
			              item.dimensions.width = img.width
			              item.dimensions.height = img.height
			              let format = img.width/img.height
			              if ( format === (16/9) || format === (1/1) || format === (4/3) ) {
			              	item.errors.format = false
			              	// _this.$set(item.errors, 'format', false)
			              }
			              else {
			              	item.errors.format = true
			              	// _this.$set(item.errors, 'format', true)
			              }
			              item.format = format
			            };
			            img.src = reader.result;
			        };
			        reader.readAsDataURL(item);
				})

				Array.prototype.push.apply( fileBuffer, images );
				// this.gallery.images = fileBuffer
				console.log(images)
				
				console.log(fileBuffer)
				this.$emit('unloadPhoto', fileBuffer)
			},
		},
		computed: {
			
		}
	}
</script>