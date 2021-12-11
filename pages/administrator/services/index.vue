<template>
	<div class="main">
		<Topbar
		:title="'Услуги'"
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
						Добавить услугу
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
			:type="'service'"
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
		      slot="preloader">
			  </IconImageloader>
		     
		      <div slot="error"></div>
		    </vue-load-image>		
			
		</Popup>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
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
				type: 'service',
				headers: [
					{
						title: 'ID',
						name: 'id',
						width: '30',
						sort: false,

					},
					{
						title: '',
						name: 'covers',
						width: '40',
						sort: false,
					},
					
					{
						title: 'Дата / Время',
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
				  	"address": {
				    	"id": null,
				    	"address": "",
				    	"latitude": null,
				    	"longitude": null
				  	},
				  	"availabilities": [
					  	{
							"id": 1,
							"enable": true,
							"day": 0,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 2,
							"enable": true,
							"day": 1,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 3,
							"enable": true,
							"day": 2,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 4,
							"enable": true,
							"day": 3,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 5,
							"enable": true,
							"day": 4,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 6,
							"enable": false,
							"day": 5,
							"start": "00:00:00",
							"end": "00:00:00"
						}, {
							"id": 7,
							"enable": false,
							"day": 6,
							"start": "00:00:00",
							"end": "00:00:00"
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
				return `${this.type}?cityId=${this.cityId}&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
			...mapActions({
				queryData: 'service/getData'
			}),
			getData() {
				this.$store.commit('showLoading')
				let params = {}
				// this.$store.dispatch('admin/users/getUsers', this.getParamsForQuery)
				params.params = this.getParamsForQuery
				this.queryData(params)
				.then((res) => {

					this.responseData = res.data
					console.log(res.data)

					this.$store.commit('hideLoading')
				})
			},
			addSight() {
				console.log('show')
				
				this.method = 'add'
				this.previewShow()
			},
		},
		mounted() {
			this.getData()
		}
	}
</script>