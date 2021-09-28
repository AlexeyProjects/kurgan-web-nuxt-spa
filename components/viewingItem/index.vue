<template>
	<div class="viewing">
		<div class="viewing-wrap">
			<div class="viewing-body">
				<div class="viewing-body-wrap">
					<div class="viewing-body-header">
						<div class="viewing-body-header__title ">
							Предварительный просмотр
						</div>
						<div 
						@click="previewHide"
						class="viewing-body-header__btn btn act">
							Завершить просмотр
						</div>
					</div>
					<div class="viewing-body-content">
						<div class="viewing-body-content__title title">
							{{ card.title }}
						</div>

						<div class="viewing-body-content-gallery">
							<div class="viewing-body-content-gallery__cover">
								<img src="@/assets/images/gallery/service/cover.png" alt="" class="viewing-body-content-gallery__cover">
							</div>
							<div class="viewing-body-content-gallery__images">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
							</div>
						</div>

						<div class="viewing-body-content-panel">
							<div class="viewing-body-content-panel__item">

								<IconMap></IconMap>  {{ card.address.address }}
							</div>
							<div class="viewing-body-content-panel__item">
								<IconPhone></IconPhone>  +7 (900) 000-00-00
							</div>
							<div class="viewing-body-content-panel__item">
								<IconClock></IconClock> с 8:00 до 21:00
							</div>
						</div>

						<div class="viewing-body-content-descrp">
							{{ card.description }}




						</div>

					</div>
				</div>
				
				
				
			</div>
			<div 
			@click="previewHide"
			class="viewing-body-wrap__close">
				<IconViewingclose></IconViewingclose>
			</div>
		</div>
		
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			card: []
		},
		data() {
			return {

			}
		},
		methods: {
			previewHide: function() {
				this.$emit('previewHide')
			}
		}
	}
</script>