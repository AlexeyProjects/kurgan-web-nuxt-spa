<template>
	<div class="main">
		<Topbar
		:title="'О городе'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content infocity">
			<div class="card-data">
				<div class="card-data-header">
					<div class="card-data-header__title">
						Данные о городе
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
			
				<div  class="card-data-content rus">
					<div 
					v-if="langCard == 'rus'"
					class="card-data-content__field">
						<label for="">Название города (Русский язык)</label>
						<input 
						placeholder="Название города" 
						v-model="name" type="text">
					</div>

					<div 
					v-if="langCard == 'eng'"
					class="card-data-content__field">
						<label for="">Название города (Английский язык)</label>
						<input 
						placeholder="Название города" 
						v-model="nameEn" type="text">
					</div>
					
					

					
				</div>
				<div class="card-data-content__editors">
					<label 
					v-if="langCard == 'rus'"
					class="label-default" for="">Описание (Русский язык)</label>
					<VueEditor
					v-if="langCard === 'rus'"
					:editor-toolbar="customToolbar"
					v-model="contentEditor"
					/>
					<label 
					v-if="langCard == 'eng'"
					class="label-default" for="">Описание (Английский язык)</label>
					<VueEditor
					v-if="langCard === 'eng'"
					:editor-toolbar="customToolbar"
					v-model="contentEditorEn"
					/>
				</div>
				
				<div class="card-buttons">
					
					<div 
					@click="sendService"
					class="card-buttons__item act btn">
						Сохранить
					</div>
					<div 
					@click="previewShow"
					class="card-buttons__item black nofill btn">
						
						Посмотреть результат
					</div>
				</div>


				<div 
				v-show="0"
				v-html="contentEditor"
				class="ql-editor">
					
				</div>
			</div>
		</div>
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

	export default {
		components: { 
			VueEditor
		},
		data() {
			return {
				langCard: 'rus',
				contentEditor: `Основан в 1679 году, но поселение на этом месте существовало с 1553 года.

Расположен в Уральском федеральном округе, на берегах Тобола и его притока Тоболашки. `,
				contentEditorEn: `It was founded in 1679, but a settlement has existed on this site since 1553.

Located in the Ural Federal District, on the banks of the Tobol and its tributary Tobolashka.`,
				customToolbar: [
			      ["bold", "italic", "underline"],
			      [{ list: "ordered" }, { list: "bullet" }],
			      ["image", "code-block"],
			      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
			      [{ color: [] }]
			    ],
			    name: '',
			    nameEn: ''
			    
			}
		},
		layout: 'admin',
	  	middleware: 'auth',
	  	middleware: 'ADMIN',
	  	computed: {

	  	},
	  	methods: {
	  		changeCardLang: function(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			},
	  	}
	}
</script>