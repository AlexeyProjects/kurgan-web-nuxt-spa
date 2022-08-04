<template>
	<div class="main">
		<Topbar
		:title="'Раздел помощь'"
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
					<div v-if="langCard === 'rus'" class="card-data-header__title">
						Информационный раздел
					</div>
          <div v-else-if="langCard === 'eng'" class="card-data-header__title">
						Information section
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
					v-model="richData.help"
					/>

				<!-- English Editor -->
					<label
					v-if="langCard == 'eng'"
					class="label-default" for="">Описание (Английский язык)</label>
					<VueEditor
					v-if="langCard === 'eng'"
					:editor-toolbar="customToolbar"
					:useMarkdownShortcuts="true"
					v-model="richData.helpEn"
					/>
				</div>

				<div class="card-buttons row">
					<div
					@click="saveRich"
					class="card-buttons__item btn act">
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

	import editorRich from '@/mixins/editor'

	export default {
		components: {
			VueEditor
		},
		mixins: [
			editorRich
		],
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
				richData: {
					help: '',
					helpEn: ''
				},
				langCard: 'rus',
				queryParams: 'help'
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