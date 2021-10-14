<template>
	<div class="main-content">
		<div class="gallery">
			<div class="gallery-header">
				<div class="gallery-header__title">
					Галерея услуги
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
					Галерея услуги
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
					<label for="">Название услуги</label>
					<input 
					placeholder="Введите название услуги" 
					v-model="card.service.title" type="text">
				</div>
				<div class="card-data-content__field geo">
					<label for="">Введите местоположение</label>
					<div class="input-icon">
						<IconGeo></IconGeo>
						<input 
						placeholder="Введите местоположение" 
						v-model="card.service.address.address" type="text">
					</div>
					
				</div>
				<div class="card-data-content__field select">
					<label for="">Вид услуг</label> 
					<InputSelect
					:multiple="true"
					:lang="'rus'"
					:title="'Выберите вид услуги'"
					:items="template.category"
					@chooseSelect="chooseCategory"
					></InputSelect>
				</div>

				<div class="card-data-content__field textarea">
					<label for="">Описание</label> 
					<textarea v-model="card.service.description" 
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
					<label for="">Название услуги</label>
					<input 
					placeholder="Enter name of service" 
					v-model="card.service.titleEn" type="text">
				</div>
				<div class="card-data-content__field geo">
					<label for="">Введите местоположение</label>
					<div class="input-icon">
						<IconGeo></IconGeo>
						<input v-model="card.service.address.address" type="text">
					</div>
					
				</div>
				<div class="card-data-content__field select">
					<label for="">Вид услуг</label> 
					<InputSelect
					:multiple="true"
					:lang="'eng'"
					:titleEn="'Choose category of service'"
					:items="template.category"
					@chooseSelect="chooseCategory"
					></InputSelect>
				</div>

				<div class="card-data-content__field textarea">
					<label for="">Описание</label> 
					<textarea v-model="card.service.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
					
					" id="" cols="30" rows="10">
					
					</textarea>
				</div>
			</div>
		</div>
		<div class="card-time">
			<div class="card-time__title">
				Время работы
			</div>
			<div class="card-time-list">
				<Datatime 
				:item="itemWeek"
				v-for="(itemWeek, key, index) in card.service.availabilities"
				></Datatime>
				<!-- <Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime>
				<Datatime :data="[]"></Datatime> -->
			</div>
			
		</div>
		<div class="card-buttons">
			<div 
			@click="getCity"
			class="card-buttons__item act btn">
				получить город
			</div>
			<div 
			@click="sendService"
			class="card-buttons__item act btn">
				Сохранить
			</div>
			<div 
			@click="previewShow"
			class="card-buttons__item subact btn">
				<IconEyebold></IconEyebold>
				Предпросмотр
			</div>
		</div>
		<transition name="viewslide">
			<ViewingItem 
			@previewHide="previewHide"
			:card="card.service"
			:type="'infoservice'"
			v-if="previewShowing">
			
			</ViewingItem>
		</transition>
		
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
				card: {
					"service": {

						"title": "Ресторан «Аврора»",
						"titleEn": " Aurora",
						"description": "Ресторан аврора, это то место, где ты можешь не только вкусно покушать, но и насладиться прекрасным сервисом!",
						"descriptionEn": "Aurora restaurant is the place where you can not only have a delicious meal, but also enjoy excellent service!",
						"status": "MODERATION",
						"phone": "",
						"site": "",
						"email": "",
						"address": {
							"address": "Курган, ул. Володарского, 42",
							"latitude": 55.43887570480391,
							"longitude": 65.34238242692281
						},
						"category": {
							"title": "",
							"titleEn": ""
						},
						"availabilities": [

							{

								"enable": false,
								"day": 0,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": true,
								"day": 1,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": true,
								"day": 2,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": true,
								"day": 3,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": true,
								"day": 4,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": true,
								"day": 5,
								"start": "08:00",
								"end": "21:00"
							},
							{

								"enable": false,
								"day": 6,
								"start": "08:00",
								"end": "21:00"
							}

						]
					},
					medias: '',
					cover: ''
					
				},
				template: {
					category: [
						{
							id: 1,
							title: 'Категория 2',
							titleEn: 'Category 2 '
						}
					]
				},
				previewShowing: false,
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
			chooseCategory(val) {
				console.log(val)
				this.card.service.category = val
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
			},
			showAllGallery() {
				this.gallery.showMoreGallery = !this.gallery.showMoreGallery
			},
			sendService() {
				let formData = new FormData();
				let obj = this.card.service

				const json = JSON.stringify(obj);
				formData.append('service', new Blob([json], {
				  type: 'application/json',
				}));

				formData.append('medias', new Blob([JSON.stringify(this.gallery.images)], {
				  type: 'application/json',
				}));

				formData.append("cover", this.cover.images[0]);

				console.log(formData)
				this.$store.dispatch('service/send', formData)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {	
					console.log(err)
				})
			},
			getCity() {
				this.$store.dispatch('service/getCity')
			},
			previewShow(id) {
				document.body.classList.add('noscroll')
				this.previewShowing = true
			},
			previewHide() {
				document.body.classList.remove('noscroll')
				this.previewShowing = false
			},
			arraymove(arr, fromIndex, toIndex) {
			    var element = arr[fromIndex];
			    arr.splice(fromIndex, 1);
			    arr.splice(toIndex, 0, element);
			    console.log(arr)
			    return arr
			}

		},
		computed: {
			// availabilitiesReverse() {
			// 	function arraymove(arr, fromIndex, toIndex) {
			// 	    var element = arr[fromIndex];
			// 	    arr.splice(fromIndex, 1);
			// 	    arr.splice(toIndex, 0, element);
			// 	    console.log(arr)
			// 	    return arr
			// 	}
			// 	return arraymove(this.card.service.availabilities, 0, 6)
				
			// }
		},
		mounted() {
			this.arraymove(this.card.service.availabilities, 0, 6)
		}
	}
</script>