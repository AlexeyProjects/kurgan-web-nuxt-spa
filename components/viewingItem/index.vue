<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
				<div class="viewing-body">
					<div 
					v-if="type === 'infoservice'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header__title ">
								Предварительный просмотр
							</div>

							<div class="viewing-body-header__translate ">
								Предварительный просмотр
							</div>

							<div class="viewing-body-header__btn act ">
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

					<div 
					v-if="type === 'editor'"
					class="viewing-body-wrap viewing-body-wrap--editor">
						<div 
						class="
						viewing-body-header 
						viewing-body-header--editor">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Предварительный просмотр
								</div>
								<div class="viewing-body-translate__btn translate act ">
									<div 
									@click="changeCardLang('rus')"
									:class="{ active: langCard == 'rus' }"
									class="translate__item translate__item--editor">
										Рус
									</div>
									<div 
									@click="changeCardLang('eng')"
									:class="{ active: langCard == 'eng' }"
									class="translate__item translate__item--editor">
										Анг
									</div>
								</div>
								<div 
								@click="previewHide"
								class="viewing-body-header__btn btn act ">
									Завершить просмотр
								</div>
							</div>
							
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								{{ langCard === 'rus' ? data.name : data.nameEn }}
							</div>

							
							<div class="viewing-body-content-wrap viewing-body-content-wrap--editor">
								<div 
								v-html="langCard === 'rus' ? data.history : data.historyEn"
								class="">
									
								</div>
							</div>




							

						</div>
					</div>
					<div 
					v-if="type === 'sight'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="status[0].title"
									:multiple="false"
									:items="status"
									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								@click="sendService('place/1')"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									Сохранить
								</div>
							</div>
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Обложка достопримечательности
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									v-for="(itemCover,key,index) in cover.images"
									:class="{ error: itemCover.error_size || itemCover.error_format }"
									class="gallery-list__item"
									
									>

										<img :src="itemCover.src" alt="">
										<div 
										@click="deleteImage(key, cover.images)"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										<div
										v-if="itemCover.error_size || itemCover.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemCover.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemCover.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div>

									</div>
									<Photoload 
									v-if="cover.images <= 0"
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить фото'"
									:multiple="false"
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									></Photoload>
									<div 
									v-if="cover.images <= 0"
									class="photo-requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>


							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Фотографии достопримечательности
									</div>
									<div 
									v-if="gallery.images.length != 0"
									class="gallery-header__qty">
										Загружено {{ gallery.images.length }} из 14 фото
									</div>
								</div>
								
								<div 
								:class="{ show : gallery.showMoreGallery } "
								class="gallery-list hidden">
									<!-- <GalleryPhoto
									v-for="(itemGallery,key,index) in gallery.images"
									
									:item="itemGallery"
									:errors="itemGallery.errors"
									:arr="gallery.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 

									v-for="(itemGallery, key, index) in gallery.images" 
									:class="{ error: itemGallery.error_format }"
									
									class="gallery-list__item">
										<img 
										:src = "itemGallery.src"
										 alt="">
										<div 
										@click="deleteImage(key, gallery.images)"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										<div
										v-if="itemGallery.error_size || itemGallery.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemGallery.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemGallery.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div>
									</div>

									<Photoload 
									v-if="gallery.images.length <= 14"
									class="gallery-list__item__load" 
									:title="'Загрузить несколько фото'"
									@unloadPhoto="loadPreviewGallery" 
									:multiple="true"
									@refreshPhoto="refreshPhotos"
									:name="'medias'"
									>
										
									</Photoload>
									<div 
									v-if="gallery.images.length <= 14"
									class="photo-requirements gallery-list__item__requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>
								<div 
								@click="showAllGallery"
								
								class="gallery-list__more">
									<div 
									v-if="!gallery.showMoreGallery"
									class="">
										Показать остальные фото
									</div>
									<div 
									v-if="gallery.showMoreGallery"
									class="">
										Скрыть остальные фото
									</div>
								</div>

								
							</div>

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Данные услуги
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										v-model="sight.title"
										placeholder="Введите название услуги" 
										 type="text">
									</div>
									<div class="card-data-content__field geo">
										<label for="">Введите местоположение</label>
										<div class="input-icon">
											<IconGeo></IconGeo>
											<input 
											placeholder="Введите местоположение" 
											v-model="sight.address.address" type="text">
										</div>
										
									</div>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="sight.description" 
										class="input-textarea" 
										name="" 
										id="" 
										cols="30" 
										placeholder="Введите описание" 
										rows="10">
										
										</textarea>
										
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										placeholder="Enter name of service" 
										v-model="sight.titleEn" type="text">
									</div>
									<div class="card-data-content__field geo">
										<label for="">Введите местоположение</label>
										<div class="input-icon">
											<IconGeo></IconGeo>
											<input v-model="sight.address.address" placeholder="Enter address" type="text">
										</div>
										
									</div>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="sight.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
										
										" id="" cols="30" rows="10">
										
										</textarea>
									</div>
								</div>
							</div>
							<Loader
							v-if="globalLoading"
							></Loader>
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
			data: {},
			type: '',
			show: '',
			choosedSight: {}
			

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
				cover: {
					images: [],
				},
				gallery: {
					images: [],
					showMoreGallery: false
				},
				sight: {
					title: 'юра',
					titleEn: 'yura',
					address: {
						address: 'Пушкина 228',
						latitude: 90,
     					longitude: 180
					},
					status: 'MODERATION',
					description: 'Описание юры',
					descriptionEn: 'Yura description'
				},
				status: [
					{
						"title": 'На модерации',
						"key":'MODERATION'
					},
					{
						"title": 'Опубликовать',
						"key":'PUBLISHED'
					},
					{
						"title": 'Отклонить',
						"key":'REJECTED'
					}
				],	
				langCard: 'rus'
			}
		},
		computed: {

		},
		methods: {
			previewHide: function() {
				this.$emit('previewHide')
			},
			changeCardLang: function(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			},
			loadPreviewCover(images) {
				this.cover.images = images
				console.log(this.cover.images[0])
				
			},
			loadPreviewGallery(images) {
				console.log(images)
				
				
				for ( let key in images ) {
					this.gallery.images.push(images[key])
					console.log(images[key])
				}
			   	console.log(this.gallery.images)
			   	console.log(typeof this.gallery.images)
			   	console.log(Array.isArray(this.gallery.images))
			   	
			},
			deleteImage(key, arr) {

				arr.splice(key, 1);
			},
			refreshPhotos() {
				this.refreshGallery = !this.refreshGallery 
			},
			showAllGallery() {
				this.gallery.showMoreGallery = !this.gallery.showMoreGallery
			},
			chooseCategory(val) {
				console.log(val)
				this.sight.status = val.key
			},
			sendService(params) {
				let formData = new FormData();
				let obj = this.sight
				let paramsQuery = {}
				const json = JSON.stringify(obj);
				formData.append('place', new Blob([json], {
				  type: 'application/json',
				}));

				formData.append('medias', new Blob([JSON.stringify(this.gallery.images)], {
				  type: 'application/json',
				}));

				formData.append("cover", this.cover.images[0]);

				console.log(formData)
				paramsQuery = {
					params: params,
					data: formData
				}
				console.log(paramsQuery)
				this.$store.dispatch('service/send', paramsQuery )
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {	
					console.log(err)
				})
			},
		},
		mounted() {

		}
	}
</script>