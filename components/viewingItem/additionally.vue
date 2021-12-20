<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
                <div 			
				class="viewing-body">
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
                                Правила путешественника
                            </div>

                            
                            <div class="viewing-body-content-wrap viewing-body-content-wrap--editor">
                                <div 
                                v-html="langCard === 'rus' ? data[Object.keys(data)[0]] : data[Object.keys(data)[1]]"
                                class="">
                                    
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