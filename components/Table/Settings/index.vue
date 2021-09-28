<template>
	<div class="settings">
		<div 
		@click="openSettings(id)"
		>
			<IconThreedots class="table-dots"></IconThreedots>
		</div>
		
		<div
		v-if="settingsShow"
		class="table-settings-list">
			<div class="table-settings-list__item">
				<IconReturn></IconReturn>
				Снять с публикации
			</div>
			<div class="table-settings-list__item">
				<IconEnter></IconEnter>
				Опубликовать
			</div>
			<div class="table-settings-list__item">
				<IconEye></IconEye>
				Посмотреть
			</div>
			<div class="table-settings-list__item">
				<IconEdit></IconEdit>
				Изменить
			</div>
			<div class="table-settings-list__item">
				<IconDelete></IconDelete>
				Удалить
			</div>
		</div>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				settingsShow: false
			}
		},
		methods: {
			openSettings(id) {
				this.settingsShow = !this.settingsShow
			}
		},
	}
</script>