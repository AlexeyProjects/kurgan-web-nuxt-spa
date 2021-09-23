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
					<input v-model="card.service.title" type="text">
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
					:lang="'rus'"
					:items="template.category"
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
						<input v-model="card.service.address.address" type="text">
					</div>
					
				</div>
				<div class="card-data-content__field select">
					<label for="">Вид услуг</label> 
					<InputSelect
					:multiple="true"
					:lang="'eng'"
					:items="template.category"
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
				<Datatime 
				:item="itemWeek"
				v-for="(itemWeek, key, index) in availabilitiesReverse"
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
						title: 'Ресторан «Аврора»',
						titleEn: 'Restaurant "Aurora"',
						description: 'Ресторан аврора, это то место, где ты можешь не только вкусно покушать, но и насладиться прекрасным сервисом!',
						descriptionEn: 'Aurora restaurant is the place where you can not only have a delicious meal, but also enjoy excellent service!',
						status: 'Moderate',
						phone: '',
						site: '',
						email: '',
						cover: '',
						address: {
							id: 0,
							address: 'Курган, ул. Володарского, 42',
							latitude: 55.43887570480391,
							longitude: 65.34238242692281
						},
						category: {
							id: '',
							title: '',
							titleEn: ''
						},
						medias: [],
						cover: '',
						availabilities: [

							{
								id: 0,
								enable: false,
								day: 'Воскресенье',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 1,
								enable: true,
								day: 'Понедельник',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 2,
								enable: true,
								day: 'Вторник',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 3,
								enable: true,
								day: 'Среда',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 4,
								enable: true,
								day: 'Четверг',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 5,
								enable: true,
								day: 'Пятница',
								start: '08:00',
								end: '21:00'
							},
							{
								id: 6,
								enable: false,
								day: 'Суббота',
								start: '08:00',
								end: '21:00'
							}

						]
					},
					medias: '',
					cover: ''
					
				},
				template: {
					category: [
						{
							id: 0,
							title: 'Категория 1',
							titleEn: 'Category 1'
						},
						{
							id: 1,
							title: 'Категория 2',
							titleEn: 'Category 2 '
						},
						{
							id: 2,
							title: 'Категория 3',
							titleEn: 'Category 3 '
						},
						{
							id: 3,
							title: 'Категория 4',
							titleEn: 'Category 4 '
						}
					]
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
				// this.showAllGallery()
				this.$nextTick(() => {
			        this.showAllGallery
			   	})
			},
			deleteImage(key, arr) {

				arr.splice(key, 1);
			},
			chooseCategory(val) {
				console.log(val)
				this.card.service.category = val
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
			},
			showAllGallery() {
				this.gallery.showMoreGallery = !this.gallery.showMoreGallery
			},
			sendService() {
				let formData = new FormData();
				formData.append("service", this.card);
				formData.append("medias", this.gallery.images);
				formData.append("cover", this.cover.images);
				this.$store.dispatch('service/send', formData)
			},
			getCity() {
				this.$store.dispatch('service/getCity')
			}

		},
		computed: {
			availabilitiesReverse() {
				function arraymove(arr, fromIndex, toIndex) {
				    var element = arr[fromIndex];
				    arr.splice(fromIndex, 1);
				    arr.splice(toIndex, 0, element);
				    console.log(arr)
				    return arr
				}
				return arraymove(this.card.service.availabilities, 0, 6)
				
			}
		}
	}
</script>