<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
				<div class="viewing-body">
					<div 
					v-if="type != 'user'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header__title ">
								Предварительный просмотр
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
					<div 
					v-if="type === 'user'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header__title ">
								Информация о пользователе
							</div>
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								{{ card.title }}
							</div>

							
							<div class="viewing-body-content-wrap">
								<!-- <div 
								v-for="(item,key,index) in card"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Имя:
									</div>
									<div class="viewing-body-content-wrap__value">
										Иван 
									</div>
								</div> -->
								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Имя:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.surname }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Фамилия:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.surname != null ? card.surname : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.email }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										E-mail:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.email != null ? card.email : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.phone }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Телефон:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.phone != null ? card.phone : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Зарегистрирован:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name } "
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Последняя активность:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row panel">
									<div class="viewing-body-content-wrap-row__btn btn red">
										Заблокировать
									</div>
									<div 
									@click="previewHide"
									class="viewing-body-content-wrap-row__btn btn act">
										Вернуться назад
									</div>
								</div>
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
		</transition>
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			card: [],
			type: '',
			show: false
		},
		watch: {
			show(val) {
				console.log(val)
				if ( val === false ) {
					setTimeout(() => {
					  this.$refs.viewing.style.display = 'none'
					}, 200)
					
				}
				else if ( val === true ) {
					this.$refs.viewing.style.display = 'block'
				}
			}
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