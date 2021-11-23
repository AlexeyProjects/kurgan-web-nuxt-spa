<template>
	<td>
		{{ computedStartDate }} {{ computedEndDate }}/{{  computedStartTime }} {{ computedEndTime }}
	</td>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			endTime: '',
			startTime: '',
			endDate: '',
			startDate: ''
		},
		computed: {
			computedStartTime() {
				this.startTime 
			},
			computedStartDate() {
				let array = this.startDate.split('-')
				let monthNumb = +array[1]
				let dayNumb = +array[2]
				let month = ''
				let day = ''

				switch(monthNumb) {
					case 1 :
						month = 'Января'
						break;
					case 2 :
						month = 'Февраля'
						break;
					case 3 :
						month = 'Марта'
						break;
					case 4 :
						month = 'Апреля'
						break;
					case 5 :
						month = 'Мая'
						break;
					case 6 :
						month = 'Июня'
						break;
					case 7 :
						month = 'Июля'
						break;
					case 8 :
						month = 'Августа'
						break;
					case 9 :
						month = 'Сентября'
						break;
					case 10 :
						month = 'Октября'
						break;
					case 11 :
						month = 'Ноября'
						break;
					case 12 :
						month = 'Декабря'
						break;
				}

				return `${dayNumb}\u00A0${month}`
			},
			computedEndDate() {
				let array = this.endDate.split('-')
				let monthNumb = +array[1]
				let dayNumb = +array[2]
				let month = ''
				let day = ''

				switch(monthNumb) {
					case 1 :
						month = 'Января'
						break;
					case 2 :
						month = 'Февраля'
						break;
					case 3 :
						month = 'Марта'
						break;
					case 4 :
						month = 'Апреля'
						break;
					case 5 :
						month = 'Мая'
						break;
					case 6 :
						month = 'Июня'
						break;
					case 7 :
						month = 'Июля'
						break;
					case 8 :
						month = 'Августа'
						break;
					case 9 :
						month = 'Сентября'
						break;
					case 10 :
						month = 'Октября'
						break;
					case 11 :
						month = 'Ноября'
						break;
					case 12 :
						month = 'Декабря'
						break;
				}

				return `- ${dayNumb}\u00A0${month}`
			},
			computedStartTime() {
				let array = this.startTime.split(':');
				let hour = array[0];
				let minute = array[1];

				let resutl = `${hour}:${minute}`
				return resutl	
			},

			computedEndTime() {
				let array = this.endTime.split(':');
				let hour = array[0];
				let minute = array[1];

				let resutl = `- ${hour}:${minute}`
				return resutl	
			}
		}
	}
</script>