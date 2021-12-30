<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
                <div 			
				class="viewing-body">
                    <div 
					v-if="type === 'audioGuide'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendService('audioGuide/1')"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`audioGuide/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Аудиозапись гида
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
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										
										

									</div>
									<AudioLoad 
									
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить аудио'"
									:multiple="false"
									
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									>
										<IconAudioload slot="icon"></IconAudioload>

									</AudioLoad>

									<div 
									v-if=""
									class="photo-requirements">
											<div class="">• Расширение: mp3, wav</div>
											<div class="">• Размер: не более 30 мб</div>
											<div class="">• Не дольше 20 минут</div>		
									</div>
									
								</div>


							</div>

							

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Сообщение
									</div>
									
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field">
										<label for="">Заголовок</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
									</div>

									<div class="card-data-content__field">
										<label for="">Заголовок (на английском языке)</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>

									<!-- <div class="card-data-header">
										<div class="card-data-header__title">
											Расположение метки
										</div>
										
									</div>

									<InputGeocode
									:address="this.choosedSight.polygon[0][0]"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>

									<div class="card-data-content__field__btn btn black nofill">
										Выбрать на карте
									</div> -->
									

									
								</div>
								
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
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
	import Vue from 'vue'
	import { VueEditor } from "vue2-editor";
	import VueLoadImage from 'vue-load-image'
	import ClickOutside from 'vue-click-outside'
	import { mapGetters } from 'vuex'
	import { pathToFile } from 'image-to-file-converter'

	import DatePicker from 'vue2-datepicker';
  	import 'vue2-datepicker/index.css';
	import QrcodeVue from 'qrcode.vue'

	export default {
		components: {
		    'vue-load-image': VueLoadImage,
		    DatePicker,
			QrcodeVue,
			VueEditor
		},
		props: {
			card: [],
			data: {},
			type: '',
			show: '',
			method: '',
			choosedSight: {}
			

		},
		watch: {
			show(val) {

				if ( val === false ) {
					setTimeout(() => {
					  this.$refs.viewing.style.display = 'none'
					}, 200)
					
				}

				else if ( val === true ) {
					this.$refs.viewing.style.display = 'block'
				}

				if ( this.type === 'museumGuide' && val === true) {
					this.qrCodeGetImage()
				}
			}
		},
		data() {
			return {
				langCard: 'rus',
				
			}
		},
		computed: {
			...mapGetters({
				globalLoading: 'globalLoading',
				cityId: 'admin/cityinfo/cityId'
			}),
			getStatus() {
				let statusTitle = ''
				switch(this.choosedSight.status) {
					case 'MODERATION' :
						statusTitle = 'На модерации'
						break;
					case 'PUBLISHED' :
						statusTitle = 'Опубликован'
						break;
					case 'REMOVED' :
						statusTitle = 'Удаленный'
						break;
					case 'REJECTED' :
						statusTitle = 'Отклонён'
						break;
					case 'NEW' :
						statusTitle = 'Новый'
						break;
				}
				return statusTitle
			},
			methodsTitle() {
				let title = ''
				switch(this.method) {
					case 'add' :
						title = 'Добавить'
						break;
					case 'change' :
						title = 'Сохранить'
						break;
				}
				return title
			}
		},
		methods: {
			previewHide: function() {
				this.$emit('previewHide')
			},
			changeCardLang(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			}
	
		},
		directives: {
			ClickOutside
		},
		mounted() {	
			this.viewingItem = this.$el
		}
		
	}
</script>