<template>
	<div 
	:class="{ dissable : checked }" 
	class="card-time-list__item">

		<div class="card-time-list__item__checkbox">

			<label>
				<input v-model="checked" type="checkbox" >
				<IconCheckbox></IconCheckbox>
				Понедельник
			</label>
			
			
			
		</div>

		<div class="card-time-list__item__input start">
			<input placeholder="Укажите время" type="text">
		</div>

		<div class="card-time-list__item__input end">
			<input placeholder="Укажите время" type="text">
		</div>

	</div>
</template>

<script>
	export default {
		props: {
			enable: true
		},
		data() {
			return {
				checked: this.enable,
				fieldOff: false
			}
		},
		watch: {
			checked(val) {
				/*if ( val === true ) {
					this.fieldOff
				}*/
			}
		}
	}
</script>