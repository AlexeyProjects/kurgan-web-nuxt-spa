<template>
	<div class="main">
		<Topbar
		:title="'Политика конфедициальности'"
		:history="true"
		>
			<div slot="history" class="">
				
				<NuxtLink to="/">
					Панель управления/
				</NuxtLink>
				<NuxtLink to="/administrator/additionally">
					Дополнительно/ 
				</NuxtLink>
			</div>
		</Topbar>
		<div class="main-content full">
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
				
				<div class="card-data-content__editors">
				<!-- Русский Editor -->
					<label 
					v-if="langCard == 'rus'"
					class="label-default" for="">Описание (Русский язык)</label>
					<VueEditor
					v-if="langCard === 'rus'"
					:editor-toolbar="customToolbar"
					v-model="choosedSight.descrp"
					/>

				<!-- English Editor -->
					<label 
					v-if="langCard == 'eng'"
					class="label-default" for="">Описание (Английский язык)</label>
					<VueEditor
					v-if="langCard === 'eng'"
					:editor-toolbar="customToolbar"
					v-model="choosedSight.descrpEn"
					/>
				</div>
				
				<div class="card-buttons row">
					<div class="card-buttons__item btn act">
						Сохранить
					</div>
					<div class="card-buttons__item btn black nofill withicon">
						<IconEye class="large"></IconEye>
						Предпросмотр
					</div>
				</div>
				
			</div>
			
			
			<ViewingItem 
			@previewHide="previewHide"
			:show="previewShowing"
			:type="'event'"
			:method="method"
			:choosedSight="choosedSight"
			>
				
			
			</ViewingItem>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { VueEditor } from "vue2-editor";

	export default {
		components: { 
			VueEditor
		},
		computed: {
			...mapGetters({
				
			}),
			
		},
		data() {
			return {
				customToolbar: [
			      ["bold", "italic", "underline"],
			      [{ list: "ordered" }, { list: "bullet" }],
			      ["image", "code-block"],
			      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
			      [{ color: [] }]
			    ],
				previewShowing: false,
				choosedSight: {
					descrp: '',
					descrpEn: ''
				},
				langCard: 'rus'
			}
		},
		layout: 'admin',
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
			previewShow() {
				this.previewShowing = true
			},
			previewHide() {
				this.previewShowing = false
			},
			// openSettings(id) {
			// 	this.settingsShow = !this.settingsShow
			// }
		}
	}
</script>