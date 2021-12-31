<template>
	<div class="main">
		<Topbar
		:title="'Категории'"
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
						Добавить категорию
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
					 			{{ item.title }}
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
					 			
					 		</td>
					 		<td class="cover">
					 			<vue-load-image>
							      <img 
							      	@click="showPhoto(item.icon)" 
						 			:src="item.icon" 
						 			alt=""
							      	slot="image"/>
							      <IconImageloader slot="preloader"></IconImageloader>
							     
							      <div slot="error"></div>
							    </vue-load-image>

					 		</td>
					 		<td>
                                 <div class="row">
                                     <div 
                                     @click="changeItem(item.id)"
                                     class="status status--btn status--withicon status--red">
                                        Изменить
                                    </div>
                                    <div 
                                    @click="deleteCategory(item.id)"
                                    class="status status--btn status--withicon status--main">
                                        Удалить
                                    </div>
                                 </div>
                                 
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
			:type="'category'"
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
				type: 'category',
				headers: [					
					{
						title: 'Название категории',
						name: 'covers',
						sort: false,
					},
					{
						title: '',
                        name: 'icons',
						sort: false,
					},
					{
						title: '',
                        name: 'cover',
						sort: false
					},
					{
						title: 'Редактирование',
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
			
			addSight() {
				this.choosedSight = {
                    "id": null,
                    "title": "",
                    "titleEn": "",
                    "icon": "",
                    "cover": "",

				},
				this.method = 'add'
				this.previewShow()
			},

            deleteCategory(id) {
                let paramsQuery = {}
                paramsQuery.params = `category/${id}`
                this.$store.commit('showLoading')
                this.$store.dispatch('service/delete', paramsQuery)
                .then(() => {
                    this.getData()
                    
                    
                    
                })
            }
		},
		mounted() {
			this.getData()
		}
	}
</script>