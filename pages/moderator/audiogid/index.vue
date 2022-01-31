<template>
	<div class="main">
		<Topbar
		:title="'Аудио гид'"
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
		class="main-content full">
			<!-- <TableServices 
			:data="getAllServices.rows"
			:headers="headers"
			></TableServices> -->
			
			<div 
			v-if="!globalLoading"
			class="table">
				<div class="table-header">
					<div class="table-header-panel">
						<div class="input withicon">
							<input 
							v-model="searchInput"
							placeholder="Найти" 
							class="input table-header-panel__search" type="text">
							<div 
							@click="clearSearch"
							>
								<IconClose
								v-if="searching"
								></IconClose>
							</div>
							
						</div>
						

						<div
						@click="searchTable"
						class="table-header-panel__btn btn black">
							Поиск
						</div>
					</div>
					<div 
					@click="addSight"
					class="table-header__btn btn withicon act">
						<IconPlusWhite></IconPlusWhite>
						Добавить метку
					</div>
				</div>
				<table >


					<thead>
					  	<tr>
					   		<td 
					   		v-for="(item,key,index) in headers"
					   		:width="item.width"
					   		> 
					   			{{ item.title }}
					   		</td>
					   		
					  	</tr>
					</thead>

					<tbody>
					 	<!-- <tr 
					 	v-for="(item,key,index) in getAllServices.rows"
					 	> -->
					 	<tr 
					 	v-for="(item,key,index) in responseData.rows"
					 	>
					 		<td
					 			
					 		>
					 			{{ item.id }}
					 		</td>
					 		<td>
					 			{{ item.title }}
					 		</td>
					 		<td>
					 			Адрес
					 		</td>
					 		<td>
					 			<div 
					 			v-if="item.status === 'PUBLISHED'"
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 	
					 					
					 				Опубликован
					 			</div>

					 			<div 
					 			v-if="item.status === 'REMOVED'"
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 	
					 					
					 				Удаленный
					 			</div>

					 			<div 
					 			v-if="item.status === 'REJECTED'"
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 	
					 					
					 				Отклонён
					 			</div>

					 			<div 
					 			v-if="item.status === 'NEW'"
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 	
					 					
					 				Новый
					 			</div>

					 			<div 
					 			v-if="item.status === 'MODERATION'"
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 	
					 					
					 				На модерации
					 			</div>
					 			

					 			
					 		</td>

					 		<td >
					 			<TableSettings
					 			:item="item"
					 			:status="item.status"
					 			@changeItem="changeItem"
								@changeStatusItem="changeStatusItem"
								 
					 			>
					 				
					 			</TableSettings>

					 		</td>
					 	</tr>
					 </tbody>
				</table>
				<div class="table-footer">

					<TablePagination
					:responseData="responseData"
					:currentPage="currentPage"
					@sortListInPaginate="sortListInPaginate"
					@paginationNext="paginationNext"
					@paginationPrev="paginationPrev"
					@getQtyPage="getQtyPage"
					@paginationStart="paginationStart"
					@paginationEnd="paginationEnd"
					></TablePagination>

					
				</div>
			</div>

			<Loader
			v-if="globalLoading"
			></Loader>

			<ViewingItem 
			@previewHide="previewHide"
			:show="previewShowing"
			:type="'audioGuide'"
			:method="method"
			:choosedSight="choosedSight"
			@refreshTable="refreshTable"
			>
				
			
			</ViewingItem>
		</div>
		
		<Popup 
		v-if="showPopup" 
		@hidePopup="hidePopup"
		:type="'simple-gallery'">
			<vue-load-image
			slot="body"
			>
		      <img 
		      	slot="image"
	 			:src="popupImageSrc" 
	 			alt=""
		      	/>
		      <IconImageloader 
		      class="popup-body__content__preloader"
		      slot="preloader"></IconImageloader>
		     
		      <div slot="error"></div>
		    </vue-load-image>		
			
		</Popup>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import VueLoadImage from 'vue-load-image'

	import tableMixin from '@/mixins/table';
	import paginationMixin from '@/mixins/pagination';

	export default {
		mixins: [
			tableMixin,
			paginationMixin
		],
		components: {
		    'vue-load-image': VueLoadImage
		},
		layout: 'moderator',
		data() {
			return {
				type: 'audioGuide',
				cover: {
					images: [],
				},
				gallery: {
					images: [],
					showMoreGallery: false
				},
				headers: [
					{
						title: 'ID',
						name: 'id',
						width: '30',
						sort: false,

					},
					{
						title: 'Название',
						name: 'Название',
						width: '300',
						sort: false,
					},
					
					{
						title: 'Местоположение',
						sort: false,
						width: '270'
					},
					{
						title: 'Статус',
						width: '60',
						sort: false,
					},
					{
						title: '',
						name: 'settings',
						width: '40',
						sort: false,
					}
				],
				langCard: 'rus',
				choosedSight: {
					"id": null,
				  	"title": "",
				  	"titleEn": "",
				 	"description": "",
				  	"descriptionEn": "",
				  	"status": "MODERATION",
				  	"cover": "",
					"polygon": [
						{
							"lat": 55.43614774412981,
							"lon": 65.32098412513733
						},
						{
							"lat": 55.4354660245281,
							"lon": 65.32053351402283
						},
						{
							"lat": 55.43466255416806,
							"lon": 65.32119870185852
						},
						{
							"lat": 55.43547819819565,
							"lon": 65.3235375881195
						},
						{
							"lat": 55.435916447727465,
							"lon": 65.3240954875946
						},
						{
							"lat": 55.436610332868554,
							"lon": 65.32323718070984
						},
						{
							"lat": 55.43614774412981,
							"lon": 65.32098412513733
						}
					],
				  	"medias": [
				    
				  	]
				},		
				forQuery: { 
					role: 'USER',
					offset: 0,
					limit: 20
				},
			}
		},
		computed: {
			getParamsForQuery() { 
				return `audioGuide?cityId=1&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
			...mapActions({
				queryData: 'service/getData'
			}),
			
			addSight() {
				
				console.log('show')
				
				this.method = 'add'
				this.previewShow()
			},
			// Table settings methods //
			changeItem(id) {
				console.log(id)
				let params = {}
				params.params = `audioGuide/${id}`
				this.queryData(params)
				.then((res) => {
					this.choosedSight = res.data.data
					this.method = 'change'
					this.previewShow()
					console.log(res)
				})
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>