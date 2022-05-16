<template>
	<div class="main">
		<Topbar
		:title="'Музейный гид'"
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
						Добавить код
					</div>
				</div>
				<table >


					<thead>
					  	<tr>
					   		<td 
					   		v-for="(item,key,index) in headers"
							:key="index"
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
						:key="index"
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
								@reviewShow="reviewShow"
								@changeStatusItem="changeStatusItem"
					 			></TableSettings>

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
			:type="'museumGuide'"
			:method="method"
			:choosedSight="choosedSight"
			@refreshTable="refreshTable"
			></ViewingItem>
			<ReviewMuseumgid
			@reviewHide="reviewHide"
			:show="reviewShowing"
			:type="'audioGuide'"
			:method="method"
			:choosedSight="choosedSight"
			@refreshTable="refreshTable"
			></ReviewMuseumgid>
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
	import tableMixin from '@/mixins/table';
	import paginationMixin from '@/mixins/pagination';

	export default {
		mixins: [
			tableMixin,
			paginationMixin
		],
		layout: 'moderator',
		data() {
			return {
				type: 'museumGuide',
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
				choosedSightNull: {
				  	"title": "",
				  	"titleEn": "",
				 	"description": "",
				  	"descriptionEn": "",
				  	"status": "NEW",
					"url": ""
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
				return `museumGuide?cityId=${this.cityId}&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
			...mapActions({
				queryData: 'service/getData'
			}),
			addSight() {
				console.log('show')
				this.choosedSight = this.choosedSightNull
				this.method = 'add'
				this.previewShow()
			},
			refreshTable() {
				this.getData()
				console.log('refresh')
			}
		},
		mounted() {
			this.getData()
		}
	}
</script>