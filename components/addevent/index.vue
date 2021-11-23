<template>
	<div class="main-content">
		<div class="gallery">
			<div class="gallery__title">
				Обложка услуги
			</div>
			<div class="gallery-list cover">
				<div class="gallery-list__item">
					<img src="@/assets/images/gallery/service/preimage.jpg" alt="">
					

				</div>
				<Photoload :title="'Загрузить фото'"></Photoload>
				<div class="photo-requirements">
						<div class="">• Расширение: png, jpg</div>
						<div class="">• Размер: не более 5 мб</div>
						<div class="">• Формат: 16:9, 1:1, 4:3</div>		
				</div>
			</div>


		</div>

		
		<div class="card-data">
			<div class="card-data-header">
				<div class="card-data-header__title">
					Информация о мероприятии
				</div>
				<div class="card-data-header__translate">
					<div class="card-data-header__translate__item active rus">
						Русская версия
					</div>
					<div class="card-data-header__translate__item eng">
						Английская версия
					</div>
				</div>
			</div>
			<div class="card-data-content">
				<div class="card-data-content__field">
					<label for="">Название мероприятия</label>
					<input placeholder="Название мероприятия" type="text">
				</div>

				<div class="card-data-content__field select">
					<label for="">Вид мероприятия</label> 
					<InputSelect
					
					:multiple="false"
					:title="'Выберите вид услуги'"
					:items="template.category"
					@chooseSelect="chooseCategory"
					></InputSelect>
				</div>

				<div class="card-data-content__field geo">
					<label for="">Введите местоположение</label>
					<div class="input-icon">
						<IconGeo></IconGeo>
						<input placeholder="Введите местоположение" type="text">
					</div>
					
				</div>
				

			
			</div>
		</div>
		<div class="card-time event">	
			<div class="card-time__title">
				<div class="card-time-list row">
					<div class="card-data-content__field card-time-list__field">
						<label for="">С</label>
						<input value="08:00" type="time">
					</div>
					<div class="card-data-content__field 
					card-time-list__field
					">
						<label for="">До (необязательно)</label>
						<input value="20:00" type="time">
					</div>

				</div>
				
				<div class="card-data-content__field card-time-list__field">
					<label for="">Выберите дату</label>
					<date-picker :placeholder="'Выберите дату'" v-model="time1" :lang="lang" valueType="format"></date-picker>
					
				</div>

				<div class="card-time__btn btn withicon dissable">
					<IconPlusBlack></IconPlusBlack>Добавить время
				</div>
				
			</div>

		</div>	

		<div class="card-data">
			<div class="card-data-header">
				<div class="card-data-header__title">
					Информация в карточке мероприятия
				</div>
			</div>
			<div class="card-data-content">
				<div class="card-data-content__field">
					<label for="">Заголовок</label>
					<input placeholder="Название мероприятия" type="text">
				</div>
			

				<div class="card-data-content__field textarea">
					<label for="">Описание</label> 
					<textarea placeholder="ВВедите" class="input-textarea" name="" id="" cols="30" rows="10">
				
					</textarea>
				</div>
			</div>
		</div>
		
		<div class="card-buttons">
			<div class="card-buttons__item act btn">
				Сохранить
			</div>
			<div class="card-buttons__item subact btn">
				<IconEyebold></IconEyebold>
				Предпросмотр
			</div>
		</div> 
	</div>
</template>

<script>
	import DatePicker from 'vue2-datepicker';
  	import 'vue2-datepicker/index.css';

	export default {
		components: { DatePicker },
		data() {
			return {
				time1: null,
				lang: {
		          formatLocale: {
		            months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		            monthsShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		          },
		          monthBeforeYear: false,
		        },
				template: {
					category: [
						{
							id: 1,
							title: 'Категория 2',
							titleEn: 'Category 2 '
						},
						{
							id: 2,
							title: 'Категория 2',
							titleEn: 'Category 2 '
						},
						{
							id: 3,
							title: 'Категория 2',
							titleEn: 'Category 2 '
						}
					]
				},
			}
		}
	}
</script>