<template>
	<div class="main-content">
		<div class="gallery">
			<div class="gallery__title">
				Обложка услуги
			</div>
			<div class="gallery-list cover">
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
				:class="{ error: itemCover.errors.format == true }"
				class="gallery-list__item"
				
				>

					<img :src="itemCover.src" alt="">
					<div 
					@click="deleteImage(key, cover.images)"
					class="gallery-list__item__delete">
						<IconDeleteimage></IconDeleteimage>
					</div>
					<div
					v-if="itemCover.errors.size === true || itemCover.errors.format === true"
					class="gallery-list__item-errors">
						<div class="gallery-list__item-errors__icon">
							<IconErrorImage></IconErrorImage> 
						</div>
						<div class="gallery-list__item-errors__text">
							<div 
							v-if="itemCover.errors.size == true"
							class="gallery-list__item-errors__text--size">
								Неверный размер
							</div>
							<div 
							v-if="itemCover.errors.format == true"
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
				:name="'forCover'"
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
			<div class="gallery__title">
				Галерея услуги
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
				:class="{ error: itemGallery.errors.format == true }"
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
					v-if="itemGallery.errors.size == true || itemGallery.errors.format == true"
					class="gallery-list__item-errors">
						<div class="gallery-list__item-errors__icon">
							<IconErrorImage></IconErrorImage> 
						</div>
						<div class="gallery-list__item-errors__text">
							<div 
							v-if="itemGallery.errors.size == true"
							class="gallery-list__item-errors__text--size">
								Неверный размер
							</div>
							<div 
							v-if="itemGallery.errors.format == true"
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
				:name="'forGallery'"
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
			@click="gallery.showMoreGallery = !gallery.showMoreGallery"
			
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
					<label for="">Название услуги</label>
					<input v-model="card.service.title" type="text">
				</div>
				<div class="card-data-content__field geo">
					<label for="">Введите местоположение</label>
					<div class="input-icon">
						<IconGeo></IconGeo>
						<input v-model="card.service.address.adress" type="text">
					</div>
					
				</div>
				<div class="card-data-content__field select">
					<label for="">Вид услуг</label> 
					<InputSelect
					@chooseSelect="chooseCategory"
					></InputSelect>
				</div>

				<div class="card-data-content__field textarea">
					<label for="">Описание</label> 
					<textarea v-model="card.service.description" placeholder="ВВедите" class="input-textarea" name="" id="" cols="30" rows="10">
				
					</textarea>
				</div>
			</div>
			<div v-if="langCard == 'eng'" class="card-data-content eng">
				<div class="card-data-content__field">
					<label for="">Название услуги</label>
					<input v-model="card.service.titleEn" type="text">
				</div>
				<div class="card-data-content__field geo">
					<label for="">Введите местоположение</label>
					<div class="input-icon">
						<IconGeo></IconGeo>
						<input v-model="card.service.address.adress" type="text">
					</div>
					
				</div>
				<div class="card-data-content__field select">
					<label for="">Вид услуг</label> 
					<InputSelect
					@chooseSelect="chooseCategory"
					></InputSelect>
				</div>

				<div class="card-data-content__field textarea">
					<label for="">Описание</label> 
					<textarea v-model="card.service.descriptionEn" placeholder="ВВедите" class="input-textarea" name="" id="" cols="30" rows="10">
				
					</textarea>
				</div>
			</div>
		</div>
		<div class="card-time">
			<div class="card-time__title">
				Время работы
			</div>
			<div class="card-time-list">
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
			</div>
			
		</div>
		<div class="card-buttons">
			<div class="card-buttons__item act btn">
				Сохранить
			</div>
			<div class="card-buttons__item subact btn">
				<IconEyebold></IconEyebold>
				Предпросмотр
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cover: {
					images: [],
				},
				gallery: {
					images: [],
					showMoreGallery: false
				},
				refreshGallery: false,
				card: {
					service: {
						title: '',
						titleEn: '',
						description: '',
						descriptionEn: '',
						status: '',
						phone: '',
						site: '',
						email: '',
						cover: '',
						address: {
							address: '',
							latitude: '',
							longitude: ''
						},
						category: {
							id: '',
							title: '',
							titleEn: ''
						},
						medias: [],
						cover: ''
					},
					medias: '',
					cover: ''
					
				},
				langCard: 'rus'

			}
		},
		watch: {
			gallery(val) {
				console.log('x')
				this.refreshGallery = true
			}
		},
		methods: {
			loadPreviewCover(images) {
				this.cover.images = images
				this.$nextTick(() => {
			         console.log(images)
			   	})
			},
			loadPreviewGallery(images) {
				console.log(images)
				this.gallery.images = images
				this.$nextTick(() => {
			         console.log(images)
			   	})
			},
			deleteImage(key, arr) {

				arr.splice(key, 1);
			},
			chooseCategory(val) {
				console.log(val)
				this.card.service.category.title = val
			},
			changeCardLang(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			},
			refreshPhotos() {
				this.refreshGallery = !this.refreshGallery 
			}
		},
	}
</script>