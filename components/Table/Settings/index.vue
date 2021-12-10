<template>
	<div 
	ref="icon"
	class="settings">
		<div 
		@click="openSettings(item)"
		>
			<IconThreedots class="table-dots"></IconThreedots>
		</div>
		
		<div

		v-click-outside="hideSettings"
		v-if="settingsShow && type != 'user'"
		class="table-settings-list"
		:style="position"
		>
			<div
			@click="changeStatusItem(item, 'REJECTED')"
			v-if="item.status === 'PUBLISHED'"
			class="table-settings-list__item">
				<IconReturn></IconReturn>
				Снять с публикации
			</div>
			<div 
			@click="changeStatusItem(item, 'PUBLISHED')"
			v-if="item.status != 'PUBLISHED'"
			class="table-settings-list__item">
				<IconEnter
				v-click-outside="hideSettings"
				></IconEnter>
				Опубликовать
			</div>
			<div class="table-settings-list__item">
				<IconEye></IconEye>
				Посмотреть
			</div>
			<div 
			@click="changeItem(item)"
			class="table-settings-list__item">
				<IconEdit></IconEdit>
				Изменить
			</div>
			<div 
			v-if="item.status != 'REMOVED'"
			@click="changeStatusItem(item, 'REMOVED')"
			class="table-settings-list__item">
				<IconDelete></IconDelete>
				Удалить
			</div>
		</div>

		<div
		v-click-outside="hideSettings"
		v-if="settingsShow && type == 'user'"
		class="table-settings-list">
			<div 
			@click="checkUser"
			class="table-settings-list__item">
				<IconEye></IconEye>
				Посмотреть
			</div>
			<div 
			@click="blockUser"
			class="table-settings-list__item">
				<IconDelete></IconDelete>
				Заблокировать
			</div>
		</div>
	</div>
	
</template>

<script>
	import ClickOutside from 'vue-click-outside'

	export default {
		props: {
			type: '',
			item: {},
		},
		data() {
			return {
				settingsShow: false,
				id: '',
				position: {
					right: '0'
				}
			}
		},
		computed: {
			getPositionValue() {
				
				let result = null
				result = this.$refs.icon.getBoundingClientRect();
				console.log(result)
				return result.left
			}
		},
		methods: {
			openSettings(item) {
				this.settingsShow = !this.settingsShow
			},
			hideSettings() {
				console.log('xx')
				this.settingsShow = false
			},
			// Default Table //
			changeItem(item) {
				this.$emit('changeItem',item.id)
				this.hideSettings()
			},
			changeStatusItem(item, newStatus) {
				this.$emit('changeStatusItem',item, newStatus)
				this.hideSettings()
			},
			// User //
			checkUser() {
				this.$emit('checkUser')
			},
			blockUser() {
				this.$emit('blockUser')
			},
			myEventHandler(e) {
				let widthscreen = window.innerWidth
			    let result = this.$refs.icon.getBoundingClientRect();
			    let computedPosRight = widthscreen - result.right
			    console.log(computedPosRight)
			    if ( computedPosRight < 130 ) {
			    	this.position = {}
			    	this.position.right = '100%'
			    	
			    }
			    else {
			    	this.position = {}
			    	this.position.left = '100%'
			    	
			    }
			    
			}
		},
		mounted() {
			this.id = this.item.id
			this.popupItem = this.$el
		},
		directives: {
			ClickOutside
		},
		created() {
		  window.addEventListener("resize", this.myEventHandler);
		},
		destroyed() {
		  window.removeEventListener("resize", this.myEventHandler);
		},
	}
</script>