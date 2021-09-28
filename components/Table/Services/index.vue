<template>
	<table class="table">

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
		 	v-for="(item,key,index) in data"
		 	> -->
		 	<tr 
		 	v-for="(item,key,index) in rows"
		 	>
		 		<td
		 			
		 		>
		 			{{ item.id }}
		 		</td>
		 		<td>
		 			<img 
		 			:src="item.cover" 
		 			alt=""
		 			>
		 		</td>
		 		<td>
		 			{{ item.title }}
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
</template>

<script>
	export default {
		props: {
			data: [],
			headers: []
		},
		data() {
			return {
				settingsShow: false,
				rows: [
					{
						"id": 0,
						"title": 'Аврора',
						"titleEn": 'Aurora',
						"status": 'MODERATION',
						"cover": 'https://imgur.com/S8dPZOg.png'
					}
				] 

				
			}
		},
		methods: {
			openSettings(id) {
				this.settingsShow = !this.settingsShow
			}
		},
		computed: {
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
		mounted() {

		}
	}
</script>