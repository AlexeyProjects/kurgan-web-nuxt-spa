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
			:type="'sight'"
			:method="method"
			:choosedSight="choosedSight"
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

	export default {
		components: {
		    'vue-load-image': VueLoadImage
		},
		layout: 'moderator',
	  	middleware: 'auth',
	  	middleware: 'MODERATOR',
		data() {
			return {
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
				rows: [
					{
						"title": 'Церковь',
						"titleEn": 'Aurora',
						"status": 'NEW',
						"cover": 'https://imgur.com/ZPKQTQW.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'REMOVED',
						"cover": 'https://imgur.com/RTMAHH5.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'MODERATION',
						"cover": 'https://imgur.com/WRkSqVd.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'REJECTED',
						"cover": 'https://imgur.com/tYs1Tzd.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'PUBLISHED',
						"cover": 'https://imgur.com/eoIiORL.png'
					},
				],
				showPopup: false,
				previewShowing: false,
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
				  "medias": [
				    
				  ]
				},
				currentPage: 1,
				qtyPage: 0,
				pageList: [],
				choosedPageList: [],
				paginationShow: false,
				responseData: {},
				searchInput: '',
				searching: false,
				forQuery: {
					role: 'USER',
					offset: 0,
					limit: 20
				},
				previewShowing: false,
				popupImageSrc: '',
				method: ''

			}
		},
		computed: {
			...mapGetters({
				globalLoading: 'globalLoading'
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
			getParamsForQuery() { 
				return `place?cityId=1&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
			...mapActions({
				queryData: 'service/getData'
			}),
			showPaginationPages() {
				this.paginationShow = !this.paginationShow
			},
			// Не работает проверка + присвоения класса ( Игнорирует наличие item в this.choosedPageList )
			sortListInPaginate(offset, currentPage) {
					this.forQuery.offset = offset
					this.currentPage = currentPage
					console.log(currentPage)
					this.getData()
				
			},
			paginationNext(offset) {
					this.forQuery.offset = offset
					this.getData()
					this.currentPage += 1
				
				
			},
			paginationPrev(offset) {
					this.forQuery.offset = offset
					this.getData()
					this.currentPage -= 1
				
			},
			paginationStart() {
				if ( this.currentPage != 1 ) {
					this.forQuery.offset = 0
					this.getData()
					this.currentPage = 1
				}
				else {
					return
				}
			},
			paginationEnd(offset) {
				this.forQuery.offset = offset
				this.getData()
				this.currentPage = this.qtyPage
			},
			searchTable() {
				this.forQuery.offset = 0
				this.currentPage = 1
				this.searching = true
				this.getData()
			},
			clearSearch() {
				this.searchInput = ''
				this.searching = false
				this.getData()
			},
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
			getQtyPage(value) {
				this.qtyPage = value
			},
			addSight() {
				console.log('show')
				this.choosedSight = {
				"id": null,
				  "title": "",
				  "titleEn": "",
				  "description": "",
				  "descriptionEn": "",
				  "status": "",
				  "cover": "",
				  "address": {
				    "id": null,
				    "address": "",
				    "latitude": 50,
				    "longitude": 70
				  },
				  "medias": [
				    
				  ]
				},
				this.method = 'add'
				this.previewShow()
			},
			previewShow() {
				this.previewShowing = true
			},
			previewHide() {
				this.previewShowing = false
			},
			showPhoto(src) {
				this.showPopup = true
				this.popupImageSrc = src
			},
			hidePopup() {
				this.showPopup = false
			},
			// Table settings methods //
			changeItem(id) {
				console.log(id)
				let params = {}
				params.params = `place/${id}`
				this.queryData(params)
				.then((res) => {
					this.choosedSight = res.data.data
					this.method = 'change'
					this.previewShow()
					console.log(res)
				})
			}
			// openSettings(id) {
			// 	this.settingsShow = !this.settingsShow
			// }
		},
		mounted() {
			this.getData()
		}
	}
</script>