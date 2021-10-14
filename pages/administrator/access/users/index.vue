<template>
	<div class="main">
		<Topbar
		:title="'Пользователи'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
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
						<input 
						v-model="searchInput"
						placeholder="Найти" 
						class="input table-header-panel__search" type="text">
						<div 
						@click="searchTable"
						class="table-header-panel__btn btn black">
							Поиск
						</div>
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
					 	<tr 
					 	v-for="(item,key,index) in getUsers.rows"
					 	>
					 		<td
					 			
					 		>
					 			{{ item.email }}
					 		</td>
					 		
					 		<td>
					 			Права 
					 		</td>
					 		
					 		<td>
					 			Телефон 
					 		</td>
					 		

					 		<td >
					 			<TableSettings

					 			:type="'user'"
					 			:status="item.status"
					 			@checkUser="checkUser(item)"
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
					></TablePagination>

					
				</div>

			</div>
				<Loader
				v-if="globalLoading"
				></Loader>
				<ViewingItem
				
				@previewHide="previewHide"
				:card="cardInfo"
				:type="'user'"
				:show="previewShowing"
				>
				
				</ViewingItem>
				
				
			
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		
		
		data() {
			return {
				headers: [
					{
						title: 'E-mail',
						name: 'E-mail',
						sort: false,
					},
					{
						title: 'Имя',
						name: 'serivce',
						sort: false,
					},
					{
						title: 'Телефон',
						name: 'status',
						sort: false,
					},
					{
						title: 'Статус',
						name: 'status',
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
						"email": 'email@email.ru',
						"service": "Аврора",
						"status": 'PUBLISHED'
			
					},
					{
						"email": 'email@email.ru',
						"service": "Аврора",
						"status": 'PUBLISHED'
			
					},
					{
						"email": 'email@email.ru',
						"service": "Аврора",
						"status": 'PUBLISHED'
			
					},
					{
						"email": 'email@email.ru',
						"service": "Аврора",
						"status": 'PUBLISHED'
			
					},
					{
						"email": 'email@email.ru',
						"service": "Аврора",
						"status": 'PUBLISHED'
			
					}
				],
				cardInfo: [],
				currentPage: 1,
				qtyPage: 0,
				pageList: [],
				choosedPageList: [],
				paginationShow: false,
				responseData: {},
				searchInput: '',
				forQuery: {
					role: 'USER',
					offset: 0,
					limit: 20
				},
				previewShowing: false
			}
		},
		layout: 'admin',
		computed: {	
			...mapGetters({
				getUsers: 'admin/users/getUsers',
				getAllServices:	'admin/service/getAllService',
				globalLoading: 'globalLoading'
			}),
			getStatus() {
				let statusTitle = ''
				switch(this.item.status) {
					case 'MODERATION' :
						statusTitle = 'На модерации'
						break;
					case 'PUBLISH' :
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
				return `&role=${this.forQuery.role}&offset=${this.forQuery.offset}&limit=${this.forQuery.limit}&search=${this.searchInput}`
			}
		},
		methods: {
			
			...mapActions(['admin/users/getUsers']),
			showPaginationPages() {
				this.paginationShow = !this.paginationShow
			},
			// Не работает проверка + присвоения класса ( Игнорирует наличие item в this.choosedPageList )
			sortListInPaginate(offset, currentPage) {
					this.forQuery.offset = offset
					this.currentPage = currentPage
					console.log(currentPage)
					this.getUsersList()
				
			},
			paginationNext(offset) {
					this.forQuery.offset = offset
					this.getUsersList()
					this.currentPage += 1
				
				
			},
			paginationPrev(offset) {
					this.forQuery.offset = offset
					this.getUsersList()
					this.currentPage -= 1
				
			},
			paginationStart() {
				if ( this.currentPage != 1 ) {
					this.forQuery.offset = 0
					this.getUsersList()
					this.currentPage = 1
				}
				else {
					return
				}
			},
			paginationEnd() {
				if ( this.currentPage != this.qtyPage ) {
					this.forQuery.offset = this.pageList[this.pageList.length - 1].start - 1
					this.getUsersList()
					this.currentPage = this.qtyPage
				}
				else {
					return
				}
			},
			searchTable() {
				this.forQuery.offset = 0
				this.currentPage = 1
				this.getUsersList()
			},
			getUsersList() {
				this.$store.commit('showLoading')
				this.$store.dispatch('admin/users/getUsers', this.getParamsForQuery)
				.then((res) => {
					this.responseData = res.data
					console.log(res.data)

					this.$store.commit('hideLoading')
				})
			},
			// ------ Use Table settings //
			previewShow() {
				this.previewShowing = true
			},
			previewHide() {
				this.previewShowing = false
			},
			checkUser(item) {
				this.previewShow()
				this.cardInfo = item
				console.log(item)
			},

		},
		mounted() {
			this.getUsersList()

		}
	}
</script>