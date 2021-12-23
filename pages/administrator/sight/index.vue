<template>
	<div class="main">
		<Topbar
		:title="'Достопримечательности'"
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
					class="table-header__btn withicon btn act">
						<IconPlusWhite></IconPlusWhite>
						Добавить достопримечательность
					</div>
				</div>
				<table >


					<thead>
					  	<tr>
					   		<td 
					   		v-for="(item,key,index) in headers"
							:key="key"
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
						:key="key"
					 	>
					 		<td
					 			
					 		>
					 			{{ item.id }}
					 		</td>
					 		<td class="cover">

					 			<vue-load-image>
							      <img 
							      	@click="showPhoto(item.cover)" 
						 			:src="item.cover" 
						 			alt=""
							      	slot="image"/>
							      <IconImageloader slot="preloader"></IconImageloader>
							     
							      <div slot="error"></div>
							    </vue-load-image>
					 			
					 			<!-- <img
					 			@click="showPhoto(item.cover)" 
					 			:src="item.cover" 
					 			alt=""
					 			> -->
					 		</td>
					 		<td>
					 			{{ item.title }}
					 		</td>
					 		<td>
					 			<div 
					 			:class="item.status.toLowerCase()"
					 			class="status">
					 				{{ getStatusTitle(item.status) }}
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
			:type="'place'"
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
	import tableMixin from '@/mixins/table';
	import paginationMixin from '@/mixins/pagination';

	export default {
		mixins: [
			tableMixin,
			paginationMixin
		],
		layout: 'admin',
		data() {
			return {
				type: 'place',
				headers: [
					{
						title: 'ID',
						name: 'id',
						sort: false,
					},
					{
						title: '',
						name: 'covers',
						sort: false,
					},
					{
						title: 'Название',
						sort: false,
					},
					{
						title: 'Статус',
						sort: false,
					},
					{
						title: '',
						name: 'settings',
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
				  "status": "NEW",
				  "cover": "",
				  "address": {
				    "id": null,
				    "address": "",
				    "latitude": null,
				    "longitude": null
				  },
				  "medias": [
				    
				  ]
				},
				forQuery: {
					role: 'USER',
					offset: 0,
					limit: 20
				},
				previewShowing: false,

			}
		},
		computed: {

			getParamsForQuery() { 
				return `${this.type}?cityId=${this.cityId}&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
		
			addSight() {
				this.choosedSight = {
					"id": null,
				  	"title": "",
				  	"titleEn": "",
				  	"description": "",
				  	"descriptionEn": "",
				  	"status": "NEW",
				  	"cover": "",
				  	"address": {
				    	"id": null,
				    	"address": "",
				    	"latitude": null,
				    	"longitude": null
				  	},
				  	"medias": [
				    
				  	]
				},
				this.method = 'add'
				this.previewShow()
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>