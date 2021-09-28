<template>
	<div class="main">
		<Topbar
		:title="'События в городе'"
		:history="false"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content full">
			<!-- <TableServices 
			:data="getAllServices.rows"
			:headers="headers"
			></TableServices> -->
			
			<div class="table">
				<div class="table-header">
					<div class="table-header-panel">
						<input 
						placeholder="Найти" 
						class="input table-header-panel__search" type="text">
						<div class="table-header-panel__btn btn black">
							Поиск
						</div>
					</div>
					<div class="table-header__btn btn act">

						Добавить событие
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
					 	v-for="(item,key,index) in rows"
					 	>
					 		<td
					 			
					 		>
					 			{{ item.id }}
					 		</td>
					 		<td class="cover">
					 			<img 
					 			:src="item.cover" 
					 			alt=""
					 			>
					 		</td>
					 		<td>
					 			{{ item.title }}
					 		</td>
					 		<td>
					 			{{ item.date }}
					 		</td>
					 		<td>
					 			
					 			<div 
					 			v-if="item.status === 'MODERATION'"
					 			:class="{ 'moderaion' : item.status === 'MODERATION' }"
					 			class="status">
					 	
					 					
					 				На модерации
					 			</div>

					 			<div 
					 			v-if="item.status === 'PUBLISHED'"
					 			:class="{ 'published' : item.status === 'published' }"
					 			class="status">
					 	
					 					
					 				Опубликован
					 			</div>
					 		</td>

					 		<td >
					 			<TableSettings
					 			:status="item.status"
					 			>
					 				
					 			</TableSettings>

					 		</td>
					 	</tr>
					 </tbody>
				</table>
				<div class="table-footer">
					<div class="table-footer__pagination">
						<div class="table-footer__pagination-arrows">
							<div class="table-footer__pagination-arrows__start">
								<svg class="icon" width="1.4rem" height="1.2rem" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M6.03033 10.5303C5.73744 10.8232 5.26256 10.8232 4.96967 10.5303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L4.96967 1.46967C5.26256 1.17678 5.73744 1.17678 6.03033 1.46967C6.32322 1.76256 6.32322 2.23744 6.03033 2.53033L2.56066 6L6.03033 9.46967C6.32322 9.76256 6.32322 10.2374 6.03033 10.5303Z" fill="#858585"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 11.5303C12.7374 11.8232 12.2626 11.8232 11.9697 11.5303L6.96967 6.53033C6.67678 6.23744 6.67678 5.76256 6.96967 5.46967L11.9697 0.46967C12.2626 0.176777 12.7374 0.176777 13.0303 0.46967C13.3232 0.762563 13.3232 1.23744 13.0303 1.53033L8.56066 6L13.0303 10.4697C13.3232 10.7626 13.3232 11.2374 13.0303 11.5303Z" fill="#858585"/>
								</svg>
							</div>
							<div class="table-footer__pagination-arrows__prev">
								<svg class="icon" width=".6rem" height="1rem" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M5.76877 0.231232C6.07708 0.53954 6.07708 1.03941 5.76877 1.34772L2.11648 5L5.76877 8.65228C6.07708 8.96059 6.07708 9.46046 5.76877 9.76877C5.46046 10.0771 4.96059 10.0771 4.65228 9.76877L0.441758 5.55824C0.13345 5.24993 0.13345 4.75007 0.441758 4.44176L4.65228 0.231231C4.96059 -0.0770772 5.46046 -0.0770772 5.76877 0.231232Z" fill="#858585"/>
								</svg>
							</div>
						</div>
						<div class="table-footer__pagination__number">
							1
						</div>
						<div class="table-footer__pagination-arrows">
							<div class="table-footer__pagination-arrows__next">
								<svg class="icon" width=".6rem" height="1rem" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.231231 9.76877C-0.0770772 9.46046 -0.0770771 8.96059 0.231231 8.65228L3.88352 5L0.231232 1.34772C-0.0770771 1.03941 -0.077077 0.539539 0.231232 0.231232C0.53954 -0.0770769 1.03941 -0.0770769 1.34772 0.231232L5.55824 4.44176C5.86655 4.75007 5.86655 5.24993 5.55824 5.55824L1.34772 9.76877C1.03941 10.0771 0.53954 10.0771 0.231231 9.76877Z" fill="#858585"/>
								</svg>
							</div>
							<div class="table-footer__pagination-arrows__end">
								<svg class="icon" width="1.4rem" height="1.2rem" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M7.96967 1.46967C8.26256 1.17678 8.73744 1.17678 9.03033 1.46967L13.0303 5.46967C13.3232 5.76256 13.3232 6.23744 13.0303 6.53033L9.03033 10.5303C8.73744 10.8232 8.26256 10.8232 7.96967 10.5303C7.67678 10.2374 7.67678 9.76256 7.96967 9.46967L11.4393 6L7.96967 2.53033C7.67678 2.23744 7.67678 1.76256 7.96967 1.46967Z" fill="#858585"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L7.03033 5.46967C7.32322 5.76256 7.32322 6.23744 7.03033 6.53033L2.03033 11.5303C1.73744 11.8232 1.26256 11.8232 0.96967 11.5303C0.676777 11.2374 0.676777 10.7626 0.96967 10.4697L5.43934 6L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="#858585"/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				getAllServices:	'admin/service/getAllService'
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
				}
				return statusTitle
			}
		},
		data() {
			return {
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
						title: 'Дата / Время',
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
						"date": '06 май - 10 май / 13:00-14:00',
						"cover": 'https://imgur.com/ZPKQTQW.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'REMOVED',
						"date": '13 май / 13:00-14:00',
						"cover": 'https://imgur.com/RTMAHH5.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'MODERATION',
						"date": '13 май / 13:00-14:00',
						"cover": 'https://imgur.com/WRkSqVd.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'REJECTED',
						"date": '15 май / 13:00-14:00',
						"cover": 'https://imgur.com/tYs1Tzd.png'
					},
					{
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'PUBLISHED',
						"date": '20 май / 13:00-14:00',
						"cover": 'https://imgur.com/eoIiORL.png'
					},
				]
			}
		},
		layout: 'admin',
		methods: {
			// openSettings(id) {
			// 	this.settingsShow = !this.settingsShow
			// }
		}
	}
</script>