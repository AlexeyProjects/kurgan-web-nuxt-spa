<template>
	<div 
	:class="{ dissable : checked === false }" 
	class="card-time-list__item">

		<div class="card-time-list__item__checkbox">

			<label>
				<input v-model="item.enable" type="checkbox" >
				<IconCheckbox></IconCheckbox>
				{{ item.day }}
			</label>
			
			
			
		</div>

		<div class="card-time-list__item__input start">
			<input 
			type="time" 
			id="appt" 
			name="appt"
       		min="08:00" 
       		max="21:00"
       		v-model="item.start" 
       		>
			<!-- <input 
			maxlength="5" 
			placeholder="Укажите время" 
			v-model="start" 
			type="text"
			> -->

		</div>

		<div class="card-time-list__item__input end">
			<!-- <input 
			maxlength="5" 
			placeholder="Укажите время" 
			v-model="end" 
			type="text"	
			> -->
			<input 
			type="time" 
			id="appt" 
			name="appt"
       		min="08:00" 
       		max="21:00"
       		v-model="item.end" 
       		>
		</div>

	</div>
</template>

<script>
	const emailRe = (/[^0-9\-()]/g, '');
	export default {
		props: {
			enable: true,
			item: {}
		},
		data() {
			return {
				checked: this.item.enable,
				fieldOff: false,
				start: this.item.start,
				end: this.item.end

			}
		},
		watch: {
			start(val) {
				val = val.replace(/[^0-9\-()]/g, '');
				this.item.start = val
				let string = val
				if ( string.length != 0  ) {
					let stringSplited = string.split(':')
					console.log(stringSplited)
					let hour = stringSplited[0]
					let min = stringSplited[1]
					console.log(hour)
					if ( hour ) {
						if ( hour.length == 1 ) {
							hour = `0${hour}`
						}
					}
					if ( min ) {
						if ( min.length == 1 ) {
							min = `0${min}`
						}
					}
					console.log(hour)
					let newString = `${hour}:${min}`
					console.log(newString)
					this.item.start = newString
				}
				

				
			}
		},
		computed: {
			getStartValue() {
				return `${this.item.start.hour}:${this.item.start.minute}`
			},
			getEndValue() {
				return `${this.item.end.hour}:${this.item.end.minute}`
			},
		},
		methods: {
			
		}
	}
</script>