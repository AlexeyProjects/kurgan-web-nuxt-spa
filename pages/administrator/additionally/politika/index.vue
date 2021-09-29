<template>
	<div class="main">
		<Topbar
		:title="'Бизнес-аккаунты'"
		:history="true"
		>
			<div slot="history" class="">
				<NuxtLink to="/index">
					Панель управления/
				</NuxtLink>
				<NuxtLink to="/administrator/additionally">
					Дополнительно/ 
				</NuxtLink>
			
			</div>
		</Topbar>
		<div class="main-content full">
			
			
			
			
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		computed: {
			...mapGetters({
				
			}),
			
		},
		data() {
			return {
				
				
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