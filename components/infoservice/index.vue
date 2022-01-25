<template>
	<div 
	:class="{ loading: globalLoading }"
	class="main-content">
		<Loader
		v-if="globalLoading"
		></Loader>
		<div 
		v-if="!globalLoading"
		class="">
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
					v-if="service.cover"
					class="gallery-list__item"
					
					>

						<vue-load-image
						
						>
							<img 
							slot="image"
							:src="service.cover.url" 
							alt=""
							/>
							<IconImageloader 
							class="popup-body__content__preloader"
							slot="preloader">
							
							</IconImageloader>
							
							<div slot="error"></div>
						</vue-load-image>
						<div 
						@click="deleteCover()"
						class="gallery-list__item__delete">
							<IconDeleteimage></IconDeleteimage>
						</div>
						<!-- <div
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
						</div> -->
					</div>
					
					<Photoload 
					v-if="!service.cover"
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
					<!-- :class="{ error: itemGallery.error_format }" -->
					<div 

					v-for="(itemGallery, key, index) in service.medias" 
					
					
					class="gallery-list__item">
						<img 
						:src='itemGallery.url'
						alt="">
						<div 
						@click="deleteImage(key, service.medias)"
						class="gallery-list__item__delete">
							<IconDeleteimage></IconDeleteimage>
						</div>
						<!-- <div
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
						</div> -->
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
						v-model="service.title" type="text">
					</div>
					<InputGeocode
					:address="service.address"
					@choosingGeocodeAddress="choosingGeocodeAddress"
					/>
					<div class="card-data-content__field select">
						<label for="">Вид услуг</label> 
						<InputSelect
						:multiple="false"
						:lang="'rus'"
						:title="service.category.title"
						:items="categoryList"
						@chooseSelect="chooseCategory"
						></InputSelect>
					</div>

					<div class="card-data-content__field textarea">
						<label for="">Описание</label> 
						<textarea v-model="service.description" 
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
						v-model="service.titleEn" type="text">
					</div>
					<InputGeocode
					:address="service.address"
					@choosingGeocodeAddress="choosingGeocodeAddress"
					/>
					
					<div class="card-data-content__field select">
						<label for="">Вид услуг</label> 
						<InputSelect
						:multiple="false"
						:lang="'rus'"
						:title="service.category.title"
						:items="categoryList"
						@chooseSelect="chooseCategory"
						></InputSelect>
					</div>

					<div class="card-data-content__field textarea">
						<label for="">Описание</label> 
						<textarea v-model="service.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
						
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
					v-for="(itemWeek, key, index) in service.availabilities"
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
				v-if="false"
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
		
		
	</div>
</template>

<script>
	import { mapActions } from 'vuex'
	import tableMixin from '@/mixins/table';

	export default {
		mixins: [
			tableMixin
		],

		data() {
			return {
				cover: {
					images: [],
				},
				gallery: {
					images: [],
					showMoreGallery: false
				},
				type: 'add',
				categoryList: [
					{
						id: 1,
						title: 'Категория 2',
						titleEn: 'Category 2 '
					}
					
				],
				"service": {
					"cover": '',
					"medias": [],
					"title": "",
					"titleEn": " ",
					"description": "",
					"descriptionEn": "",
					"status": "MODERATION",
					"phone": "",
					"site": "",
					"email": "",
					"address": {
						"address": "Выберите адрес",
						"latitude": null,
						"longitude": null,
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
				cover: '',
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
			...mapActions({
				queryData: 'service/getData'
			}),
			loadPreviewCover(images) {
				console.log(images)
				this.service.cover = images[0]
				this.cover = images
				this.service.cover.url = this.service.cover.src
				console.log(this.service.cover)
				
			},
			loadPreviewGallery(images) {
				console.log(images)
				
				
				for ( let key in images ) {
					images[key].url = images[key].src
					this.service.medias.push(images[key])
					console.log(images[key])
				}
			   	
			},
			deleteCover() {
				this.service.cover = ''
			},
			deleteImage(key, arr) {

				arr.splice(key, 1);
				console.log(key)
			},
			chooseCategory(val) {
				console.log(val)
				this.service.category = val
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
				this.$store.commit('showLoading')
				let formData = new FormData();
				let obj = this.service
				let params = {}
				let gallery = this.service.medias
				let cover = this.service.cover
				let arrForGallery = []
				let fileCover = []
				let iconSrc = this.service.icon
				let icon = []
				
				if ( this.type === 'add' ) {
					this.$store.commit('showLoading')

					this.service.medias.forEach(item => {
						formData.append("medias", item);
					}) 
					

					formData.append("cover", this.cover[0]);
					
					delete obj.cover
					delete obj.medias

					const json = JSON.stringify(obj);

					formData.append('service', new Blob([json], {
					  type: 'application/json',
					}));

					console.log(formData)
					params.params = `service/${this.cityId}`
					params.data = formData
					this.$store.dispatch('service/send', params)
					.then((res) => {
						console.log(res)
						this.$store.commit('hideLoading')
					})
					.catch((err) => {	
						console.log(err)
					})
					
				}

				if ( this.type === 'edit' ) {
					if (this.service.medias) {
						async function saveImageFile() {
							for ( let item of gallery ) {
								await fetch(item.url)
								.then((res) => res.blob())
								.then((myBlob) => {
									console.log(myBlob);
									const myFile = new File([myBlob], "image.jpeg", {
										type: myBlob.type,
									});
									console.log(myFile)
									arrForGallery.push(myFile)
								})	
								
							}

							await fetch(cover)
							.then((res) => res.blob())
							.then((myBlob) => {
								console.log(myBlob);
								const myFile = new File([myBlob], "image.jpeg", {
									type: myBlob.type,
								});
								fileCover = myFile
							});
						}

						saveImageFile()
						.then(() => {
							
							formData.append('service', new Blob([json], {
								type: 'application/json',
							}));
							
							arrForGallery.forEach((item) => {
								formData.append("medias", item);
							})
							

							formData.append("cover", fileCover);

							let paramsQuery = {}
							paramsQuery.params = `service/${this.service.id}`
							paramsQuery.data = formData

							console.log(paramsQuery)

							for (var pair of formData.entries()) {
								console.log(pair); 
							}
							
							this.$store.dispatch('service/put', paramsQuery )
							.then((res) => {
								console.log(res.data.data);
								Vue.set(this.service, 'cover', res.data.data.cover );
								Vue.set(this.service, 'medias', res.data.data.medias );
								this.$store.commit('hideLoading');
								this.$emit('refreshTable');
							})
							.catch((err) => {	
								console.log(err)
							})
						})
					}
				}

				

				
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
			},
			getCategoryList() {
				this.$store.commit('showLoading')
				let params = {}
            	params.params = `category?cityId=${this.cityId}&offset=0&limit=20`
				this.queryData(params)
				.then((res) => {
					console.log('Этот метод')
					this.categoryList = res.data.rows
					console.log(res.data)

					this.$store.commit('hideLoading')
				})
				.catch((error) => {
					if ( error.response.data.errors[0].code === 1001 || error.response.data.errors[0].code === 1002 ) {
						this.$router.push({ path: `/login` })
						localStorage.setItem('isLogged', false)
						localStorage.removeItem('user')
						localStorage.removeItem('token')
					}              
				})
			},

			getServiceInfo() {
				let params = {}
				params.params = `service/1`
				this.queryData(params)
				.then((res) => {
					console.log(res)
					this.service = res.data.data
					console.log(this.serivce)
					if (res.data.data === []) {
						this.type = 'add'
					}
					else {
						// this.type = 'edit'
					}
				})
			},

			choosingGeocodeAddress(item) {
				this.service.address = item
			},

		},
		computed: {
			getParamsForQuery() { 
				return `${this.type}?cityId=${this.cityId}&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
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
			this.$store.commit('showLoading')
			this.getCategoryList()
			// this.getServiceInfo()
			this.arraymove(this.service.availabilities, 0, 6)
			
		}
	}
</script>