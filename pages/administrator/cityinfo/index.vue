<template>
	<div class="main">
		<Topbar
		:title="'О городе'"
		:history="true"
		>
			<div slot="history" class="">
				<NuxtLink to="/">
					Панель информации/
				</NuxtLink>
			
			</div>
		</Topbar>
		<div 
		:class="{ loading: globalLoading }"
		class="main-content infocity full">
			<div 
			v-if="!globalLoading"
			class="card-data">
				<div class="card-data-header">
					<div class="card-data-header__title">
						Данные о городе
					</div>
					<div class="card-data-header__translate translate">
						<div 
						@click="changeCardLang('rus')"
						:class="{ active: langCard == 'rus' }"
						class="card-data-header__translate__item translate__item rus">
							Русская версия
						</div>
						<div 
						@click="changeCardLang('eng')"
						:class="{ active: langCard == 'eng' }"
						class="card-data-header__translate__item translate__item eng">
							Английская версия
						</div>
					</div>
				</div>
				
				<div  
				
				
				class="card-data-content rus">
					<div 
					v-if="langCard == 'rus'"
					class="card-data-content__field">
						<label for="">Название города (Русский язык)</label>
						<input 
						placeholder="Название города" 
						v-model="cityInfo.name" type="text">
					</div>

					<div 
					v-if="langCard == 'eng'"
					class="card-data-content__field">
						<label for="">Название города (Английский язык)</label>
						<input 
						placeholder="Название города" 
						v-model="cityInfo.nameEn" type="text">
					</div>
					
					

					<div class="card-data-content__editors">
					<!-- Русский Editor -->
						<label 
						v-if="langCard == 'rus'"
						class="label-default" for="">Описание (Русский язык)</label>
						<VueEditor
						v-if="langCard === 'rus'"
						:editor-toolbar="customToolbar"
						v-model="cityInfo.history"
						/>

					<!-- English Editor -->
						<label 
						v-if="langCard == 'eng'"
						class="label-default" for="">Описание (Английский язык)</label>
						<VueEditor
						v-if="langCard === 'eng'"
						:editor-toolbar="customToolbar"
						v-model="cityInfo.historyEn"
						/>
					</div>
					
					<div class="card-buttons">
						
						<div 
						@click="sendData"
						class="card-buttons__item act btn">
							Сохранить
						</div>
						<div 
						@click="previewShow"
						class="card-buttons__item black nofill btn">
							
							Посмотреть результат
						</div>
					</div>
				</div>
				


				
			</div>
			<Loader
			v-if="globalLoading"
			>
				
			</Loader>
		</div>
		<transition name="viewslide">
			<ViewingItem 
			@previewHide="previewHide"
			:data="cityInfo"
			:type="'editor'"
			:show="previewShowing"
			>
			
			</ViewingItem>
		</transition>
		
	</div>
</template>

<style lang="scss">
	.infocity {
		.card {
			&-data {
				&-header {
					margin-bottom: 2.4rem;
				}
				&-content {
					&__field {
						width: 30rem;
					}
				}
			}
		}
		.quillWrapper {
			margin-top: .8rem;
		}
	}
</style>

<script>
	import { VueEditor } from "vue2-editor";
	import { mapActions,mapGetters } from "vuex";
	export default {
		components: { 
			VueEditor
		},
		data() {
			return {
				langCard: 'rus',
				
				customToolbar: [
			      ["bold", "italic", "underline"],
			      [{ list: "ordered" }, { list: "bullet" }],
			      ["image", "code-block"],
			      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
			      [{ color: [] }]
			    ],
			    
			    cityInfo: '',
			    previewShowing: false
			    
			}
		},
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'ADMIN',
	  	computed: {	
	  		...mapGetters({
	  			getCityInfoData: 'admin/cityinfo/cityInfo',
	  			globalLoading: 'globalLoading',
	  		}),

	  	},
	  	methods: {
	  		...mapActions({
	  			sendCityInfo: 'admin/cityinfo/sendCityinfo',
	  			getCityInfo: 'admin/cityinfo/getCityInfo'
	  		}),
	  		changeCardLang: function(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			},
			previewShow() {
				this.previewShowing = true
			},
			previewHide() {
				this.previewShowing = false
			},
			sendData() {
				this.$store.commit('showLoading');
				this.sendCityInfo(this.cityInfo)
				.then((res) => {
					this.$store.commit('hideLoading');
				})
			},
			getData() {		
				this.$store.commit('showLoading');
				this.getCityInfo()
				.then((res) => {
					let data = {}				
					Object.assign(data, this.getCityInfoData)
					this.cityInfo = data
					this.$store.commit('hideLoading');
				})
				.catch((err) => {
					this.$store.commit('hideLoading');
				})
				
			}
	  	},
	  	mounted() {
	  		this.getData()
	  	}
	}
</script>