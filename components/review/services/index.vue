<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
                <div 			
				class="viewing-body">
                    <div 
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
                                @click="reviewHide"
                                class="viewing-body-header__btn btn act ">
                                    Завершить просмотр
                                </div>
                            </div>
                            
                            
                        </div>
                        <div class="viewing-body-content">
                            <div class="viewing-body-content__title title">
                                {{ choosedSight.title  }}
                            </div>

                            
                            <div class="gallery">
								
								<div 
								class="gallery-list">
									<div 
									v-for="(itemGallery, key, index) in choosedSight.medias" 
									class="gallery-list__item viewing-photo">
										
										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="itemGallery.url" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="preloader__gallery-item"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error">ошибка</div>
									    </vue-load-image>					
									</div>	
								</div>

								
							</div>
                            <div class="review-panel">
                                <div class="btn-address">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.368 4.78907L5.632 3.87607C5.33133 3.77593 5.01118 3.74867 4.69791 3.79654C4.38464 3.8444 4.08723 3.96603 3.83019 4.15139C3.57315 4.33674 3.36383 4.58053 3.21949 4.86266C3.07516 5.14478 2.99992 5.45717 3 5.77407V17.5571C2.9999 17.977 3.13198 18.3863 3.37752 18.727C3.62305 19.0676 3.96959 19.3224 4.368 19.4551L8.368 20.7881C8.77825 20.9247 9.22175 20.9247 9.632 20.7881L14.368 19.2101C14.7783 19.0734 15.2217 19.0734 15.632 19.2101L18.368 20.1221C18.6687 20.2222 18.989 20.2495 19.3023 20.2016C19.6157 20.1536 19.9132 20.0319 20.1702 19.8465C20.4273 19.661 20.6366 19.4171 20.7808 19.1348C20.9251 18.8526 21.0002 18.5401 21 18.2231V6.44107C21.0002 6.02126 20.8682 5.61205 20.6229 5.2714C20.3775 4.93075 20.0312 4.67594 19.633 4.54307L15.633 3.21007C15.2224 3.07321 14.7786 3.07321 14.368 3.21007L9.631 4.78807C9.22074 4.92471 8.77725 4.92471 8.367 4.78807L8.368 4.78907Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M9 5V21" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                        <path d="M15 3V19" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                                    </svg>

                                    {{ choosedSight.address.address }}
                                </div><br>
								<div 
								v-if="choosedSight.phone"
								class="btn-address">
                                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M14.997 16C6.46601 16.012 -0.00899063 9.46 9.3707e-06 1.003C9.3707e-06 0.45 0.448009 0 1.00001 0H3.64001C4.13501 0 4.55601 0.364 4.62901 0.854C4.80311 2.02905 5.14493 3.17305 5.64401 4.251L5.74701 4.473C5.8162 4.62239 5.83108 4.79124 5.78909 4.95043C5.7471 5.10962 5.65088 5.24917 5.51701 5.345C4.69901 5.929 4.38701 7.104 5.02401 8.02C5.82301 9.17 6.83001 10.178 7.98001 10.977C8.89701 11.613 10.072 11.301 10.655 10.484C10.7507 10.3497 10.8904 10.2531 11.0498 10.211C11.2092 10.1688 11.3784 10.1836 11.528 10.253L11.749 10.355C12.827 10.855 13.971 11.197 15.146 11.371C15.636 11.444 16 11.865 16 12.361V15C16 15.1314 15.9741 15.2615 15.9238 15.3829C15.8735 15.5043 15.7997 15.6146 15.7068 15.7075C15.6138 15.8003 15.5034 15.874 15.382 15.9242C15.2606 15.9744 15.1304 16.0001 14.999 16H14.997Z" fill="black"/>
									</svg>


                                    {{ choosedSight.phone }}
                                </div>
								<div 
								class="btn-address">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M19 4H16V2H14V4H10V2H8V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4ZM5 20V7H19V6L19.002 20H5Z" fill="black"/>
										<path d="M7 10V12H17V9H7V10Z" fill="black"/>
									</svg>
                                    {{ getWorkDaysString }}
                                </div>
                                
                                <div class="btn-address">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="black"/>
                                        <path d="M13.3333 8H11V13H18V11.3333H13.3333V8Z" fill="black"/>
                                    </svg>
                                    {{ getFirstDay }}
                                </div>
                            </div>
                            
                            <div class="card-data">
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field textarea">
										{{ choosedSight.description }}
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field textarea">
										{{ choosedSight.descriptionEn }}
									</div>
								</div>
							</div>

                        </div>
                    </div>
                </div>

                <div 
				@click="reviewHide"
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
			},
            getWorkDaysString() {
				var newListDays = []
				this.choosedSight.availabilities.forEach(element => {
					var stringDay = ''
					switch(element.day) {
						case 0 :
							stringDay = 'Вс'
							break;
						case 1 :
							stringDay = 'Пн'
							break;
						case 2 :
							stringDay = 'Вт'
							break;
						case 3 :
							stringDay = 'Ср'
							break;
						case 4 :
							stringDay = 'Чт'
							break;
						case 5 :
							stringDay = 'Пт'
							break;
						case 6 :
							stringDay = 'Сб'
							break;
					}
					console.log(stringDay)
					element.dayString = stringDay
					if ( element.enable ) {
						newListDays.push(stringDay)
					}
				});
				return newListDays.join(',')
			},
			getFirstDay() {
				var startDay = ``
				this.choosedSight.availabilities.forEach((element) => {
					if ( element.enable ) {
						startDay = `${element.start} - ${element.end}`
					}
				})
				return startDay
			}
		},
		methods: {
			previewHide: function() {
				this.$emit('previewHide')
			},
            reviewHide() {
                this.$emit('reviewHide')
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

<style lang="scss" scoped>

</style>