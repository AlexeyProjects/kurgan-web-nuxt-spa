<template>
	<div ref="viewing"  class="viewing">
		<transition name="viewslide">
			<div v-if="show" class="viewing-wrap">
				<div 
				
				class="viewing-body">
					<div 
					v-if="type === 'infoservice'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header__title ">
								Предварительный просмотр
							</div>

							<div class="viewing-body-header__translate ">
								Предварительный просмотр
							</div>

							<div class="viewing-body-header__btn act ">
								Завершить просмотр
							</div>
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								{{ card.title }}
							</div>

							<div class="viewing-body-content-gallery">
								<div class="viewing-body-content-gallery__cover">
									<img src="@/assets/images/gallery/service/cover.png" alt="" class="viewing-body-content-gallery__cover">
								</div>
								<div class="viewing-body-content-gallery__images">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
									<img src="@/assets/images/gallery/service/galleryimage.png" alt="" class="viewing-body-content-gallery__images__item">
								</div>
							</div>

							<div class="viewing-body-content-panel">
								<div class="viewing-body-content-panel__item">

									<IconMap></IconMap>  {{ card.address.address }}
								</div>
								<div class="viewing-body-content-panel__item">
									<IconPhone></IconPhone>  +7 (900) 000-00-00
								</div>
								<div class="viewing-body-content-panel__item">
									<IconClock></IconClock> с 8:00 до 21:00
								</div>
							</div>

							<div class="viewing-body-content-descrp">
								{{ card.description }}




							</div>

						</div>
					</div>

					<div 
					v-if="type === 'user'"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header__title ">
								Информация о пользователе
							</div>
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								{{ card.title }}
							</div>

							
							<div class="viewing-body-content-wrap">
								<!-- <div 
								v-for="(item,key,index) in card"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Имя:
									</div>
									<div class="viewing-body-content-wrap__value">
										Иван 
									</div>
								</div> -->
								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Имя:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.surname }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Фамилия:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.surname != null ? card.surname : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.email }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										E-mail:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.email != null ? card.email : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.phone }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Телефон:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.phone != null ? card.phone : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Зарегистрирован:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name } "
								class="viewing-body-content-wrap-row">
									<div class="viewing-body-content-wrap__key">
										Последняя активность:
									</div>
									<div class="viewing-body-content-wrap__value">
										{{ card.name != null ? card.name : 'Не указано' }}
									</div>
								</div>

								<div 
								:class=" { noData: card.name }"
								class="viewing-body-content-wrap-row panel">
									
									<div 
									v-if="!card.blocked"
									@click="changeUserStatus(card)"
									class="viewing-body-content-wrap-row__btn btn red">
										Заблокировать
									</div>

									<div 
									v-if="card.blocked"
									@click="changeUserStatus(card)"
									class="viewing-body-content-wrap-row__btn btn black nofill">
										Разблокировать
									</div>

									<div 
									@click="previewHide"
									class="viewing-body-content-wrap-row__btn btn act">
										Вернуться назад
									</div>
								</div>
							</div>




							

						</div>
					</div>

					<div 
					v-if="type === 'editor'"
					class="viewing-body-wrap viewing-body-wrap--editor">
						<div 
						class="
						viewing-body-header 
						viewing-body-header--editor">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Предварительный просмотр
								</div>
								<div class="viewing-body-translate__btn translate act ">
									<div 
									@click="changeCardLang('rus')"
									:class="{ active: langCard == 'rus' }"
									class="translate__item translate__item--editor">
										Рус
									</div>
									<div 
									@click="changeCardLang('eng')"
									:class="{ active: langCard == 'eng' }"
									class="translate__item translate__item--editor">
										Анг
									</div>
								</div>
								<div 
								@click="previewHide"
								class="viewing-body-header__btn btn act ">
									Завершить просмотр
								</div>
							</div>
							
							
						</div>
						<div class="viewing-body-content">
							<div class="viewing-body-content__title title">
								{{ langCard === 'rus' ? data.name : data.nameEn }}
							</div>

							
							<div class="viewing-body-content-wrap viewing-body-content-wrap--editor">
								<div 
								v-html="langCard === 'rus' ? data.history : data.historyEn"
								class="">
									
								</div>
							</div>




							

						</div>
					</div>

					<div 
					v-if="type === 'place'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendService('place/1')"
								:class="{
									'dissable' : !canSendPlace
								}"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`place/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Обложка достопримечательности
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="choosedSight.cover" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="popup-body__content__preloader"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error"></div>
									    </vue-load-image>
										<div 
										@click="deleteCover()"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										

									</div>
									<Photoload 
									:class="{ 'photo-load--error': !choosedSight.cover }"
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить фото'"
									:multiple="false"
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									>
										<IconPhotoload slot="icon"></IconPhotoload>	
									</Photoload>
									<div 
									v-if="choosedSight.cover <= 0"
									class="photo-requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>


							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Фотографии достопримечательности
									</div>
									<div 
									v-if="gallery.images.length != 0"
									class="gallery-header__qty">
										Загружено {{ gallery.images.length }} из 14 фото
									</div>
								</div>
								
								<div 
								:class="{ show : gallery.showMoreGallery } "
								class="gallery-list hidden">
									<!-- <GalleryPhoto
									v-for="(itemGallery,key,index) in gallery.images"
									
									:item="itemGallery"
									:errors="itemGallery.errors"
									:arr="gallery.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<!-- :class="{ error: itemGallery.error_format }" -->
									<div 

									v-for="(itemGallery, key, index) in choosedSight.medias" 
									
									
									class="gallery-list__item viewing-photo">
										
										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="itemGallery.url" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="preloader__gallery-item"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error">ошибка</div>
									    </vue-load-image>

										<!-- <img 
										:src = "itemGallery.url"
										 alt=""> -->
										<div 
										@click="deleteImage(key, choosedSight.medias)"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>


										<!-- Проверка на валидность фотографии  -->


										<!-- <div
										v-if="itemGallery.error_size || itemGallery.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemGallery.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemGallery.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div> -->
									</div>

									<Photoload 
									v-if="choosedSight.medias.length <= 14"
									class="gallery-list__item__load" 
									:title="'Загрузить несколько фото'"
									@unloadPhoto="loadPreviewGallery" 
									:multiple="true"
									@refreshPhoto="refreshPhotos"
									:name="'medias'"
									>
										
									</Photoload>
									<div 
									v-if="choosedSight.medias.length <= 14"
									class="photo-requirements gallery-list__item__requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>
								<div 
								@click="showAllGallery"
								
								class="gallery-list__more">
									<div 
									v-if="!gallery.showMoreGallery"
									class="">
										Показать остальные фото
									</div>
									<div 
									v-if="gallery.showMoreGallery"
									class="">
										Скрыть остальные фото
									</div>
								</div>

								
							</div>

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Данные услуги
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div 
									:class="{ 'card-data-content__field--error': choosedSight.title.length < 3 }"
									class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
										<span 
										v-if="choosedSight.title.length < 3"
										class="card-data-content__field__message">Введите поле</span>
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea 
										v-model="choosedSight.description" 
										class="input-textarea" 
										name="" 
										id="" 
										cols="30" 
										placeholder="Введите описание" 
										rows="10">
										
										</textarea>
										
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="choosedSight.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
										
										" id="" cols="30" rows="10">
										
										</textarea>
									</div>
								</div>
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>

					<div 
					v-if="type === 'event'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendService('event/1')"
								:class="{
									'dissable' : !canSendPlace
								}"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`event/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Обложка события
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="choosedSight.cover" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="popup-body__content__preloader"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error"></div>
									    </vue-load-image>
										<div 
										@click="deleteCover()"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										

									</div>
									<Photoload 
									:class="{ 'photo-load--error': !choosedSight.cover }"
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить фото'"
									:multiple="false"
									:name="'cover'"

									@refreshPhoto="refreshPhotos"
									>
										<IconPhotoload slot="icon"></IconPhotoload>		
									</Photoload>
									<div 
									v-if="choosedSight.cover <= 0"
									class="photo-requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>


							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Фотографии события
									</div>
									<div 
									v-if="gallery.images.length != 0"
									class="gallery-header__qty">
										Загружено {{ gallery.images.length }} из 14 фото
									</div>
								</div>
								
								<div 
								:class="{ show : gallery.showMoreGallery } "
								class="gallery-list hidden">
									<!-- <GalleryPhoto
									v-for="(itemGallery,key,index) in gallery.images"
									
									:item="itemGallery"
									:errors="itemGallery.errors"
									:arr="gallery.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<!-- :class="{ error: itemGallery.error_format }" -->
									<div 

									v-for="(itemGallery, key, index) in choosedSight.medias" 
									
									
									class="gallery-list__item viewing-photo">
										
										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="itemGallery.url" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="preloader__gallery-item"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error">ошибка</div>
									    </vue-load-image>

										<!-- <img 
										:src = "itemGallery.url"
										 alt=""> -->
										<div 
										@click="deleteImage(key, choosedSight.medias)"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>


										<!-- Проверка на валидность фотографии  -->


										<!-- <div
										v-if="itemGallery.error_size || itemGallery.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemGallery.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemGallery.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div> -->
									</div>

									<Photoload 
									v-if="choosedSight.medias.length <= 14"
									class="gallery-list__item__load" 
									:title="'Загрузить несколько фото'"
									@unloadPhoto="loadPreviewGallery" 
									:multiple="true"
									@refreshPhoto="refreshPhotos"
									:name="'medias'"
									>
										
									</Photoload>
									<div 
									v-if="choosedSight.medias.length <= 14"
									class="photo-requirements gallery-list__item__requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>
								<div 
								@click="showAllGallery"
								
								class="gallery-list__more">
									<div 
									v-if="!gallery.showMoreGallery"
									class="">
										Показать остальные фото
									</div>
									<div 
									v-if="gallery.showMoreGallery"
									class="">
										Скрыть остальные фото
									</div>
								</div>

								
							</div>

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Данные услуги
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div 
									:class="{ 'card-data-content__field--error': choosedSight.title.length < 3 }"
									class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
										 <span 
										v-if="choosedSight.title.length < 3"
										class="card-data-content__field__message">Введите поле</span>
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="choosedSight.description" 
										class="input-textarea" 
										name="" 
										id="" 
										cols="30" 
										placeholder="Введите описание" 
										rows="10">
										
										</textarea>
										
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="choosedSight.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
										
										" id="" cols="30" rows="10">
										
										</textarea>
									</div>
								</div>
							</div>

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Время проведения мероприятия
									</div>
									
								</div>
								
								
								<div class="card-data-content row">
									<div 
									style="margin-bottom: 0" 
									class="card-time-list__item">

										

										<div class="card-time-list__item__input card-data-content__field start">
											<label for="">C</label>
											<input 
											v-model="choosedSight.startTime"
											type="time" 
											
											
								       		min="08:00" 
								       		max="21:00"
											
											
								       		
								       		
								       		>
											

										</div>

										<div class="card-time-list__item__input card-data-content__field end">
											<label for="">До</label>
											<input 
											v-model="choosedSight.endTime"
											type="time" 
											
								       		min="08:00" 
								       		max="21:00"
								       		 
								       		>
										</div>

									</div>

									
									
									

									
								</div>
								<div class="card-data-content__field card-time-list__field">
									<label for="">Выберите дату</label>
									<date-picker :placeholder="'Выберите дату'" v-model="choosedSight.startDate" :lang="lang" valueType="format"></date-picker>
									
								</div>
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>

					<div 
					v-if="type === 'service' && method"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendService('service/1')"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`service/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Обложка услуги
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="choosedSight.cover" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="popup-body__content__preloader"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error"></div>
									    </vue-load-image>
										<div 
										@click="deleteCover()"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										

									</div>
									<Photoload 
									
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить фото'"
									:multiple="false"
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									>
										<IconPhotoload slot="icon"></IconPhotoload>	
									</Photoload>
									<div 
									v-if="choosedSight.cover <= 0"
									class="photo-requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>


							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Фотографии услуги
									</div>
									<div 
									v-if="gallery.images.length != 0"
									class="gallery-header__qty">
										Загружено {{ gallery.images.length }} из 14 фото
									</div>
								</div>
								
								<div 
								:class="{ show : gallery.showMoreGallery } "
								class="gallery-list hidden">
									<!-- <GalleryPhoto
									v-for="(itemGallery,key,index) in gallery.images"
									
									:item="itemGallery"
									:errors="itemGallery.errors"
									:arr="gallery.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<!-- :class="{ error: itemGallery.error_format }" -->
									<div 

									v-for="(itemGallery, key, index) in choosedSight.medias" 
									
									
									class="gallery-list__item viewing-photo">
										
										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="itemGallery.url" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="preloader__gallery-item"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error">ошибка</div>
									    </vue-load-image>

										<!-- <img 
										:src = "itemGallery.url"
										 alt=""> -->
										<div 
										@click="deleteImage(key, choosedSight.medias)"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>


										<!-- Проверка на валидность фотографии  -->


										<!-- <div
										v-if="itemGallery.error_size || itemGallery.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemGallery.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemGallery.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div> -->
									</div>

									<Photoload 
									v-if="choosedSight.medias.length <= 14"
									class="gallery-list__item__load" 
									:title="'Загрузить несколько фото'"
									@unloadPhoto="loadPreviewGallery" 
									:multiple="true"
									@refreshPhoto="refreshPhotos"
									:name="'medias'"
									>
										
									</Photoload>
									<div 
									v-if="choosedSight.medias.length <= 14"
									class="photo-requirements gallery-list__item__requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>
								<div 
								@click="showAllGallery"
								
								class="gallery-list__more">
									<div 
									v-if="!gallery.showMoreGallery"
									class="">
										Показать остальные фото
									</div>
									<div 
									v-if="gallery.showMoreGallery"
									class="">
										Скрыть остальные фото
									</div>
								</div>

								
							</div>

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Данные услуги
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
									</div>
									<div class="card-data-content__field">
										<label for="">Вид услуги</label>
										<!-- <input 
										readonly
										v-model="choosedSight.category.title"
										placeholder="Введите название услуги" 
										 type="text">
										  -->
										<InputSelect

										:title="'Выберите услугу'"
										:multiple="false"
										:items="responseCategory"

										@chooseSelect="chooseCategoryService"
										></InputSelect>
										<!-- <InputSelect
										:title="choosedSight.category.title"
										:multiple="false"
										:items="status"

										@chooseSelect="chooseCategory"
										></InputSelect> -->
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="choosedSight.description" 
										class="input-textarea" 
										name="" 
										id="" 
										cols="30" 
										placeholder="Введите описание" 
										rows="10">
										
										</textarea>
										
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>
									<InputGeocode
									:address="this.choosedSight.address"
									@choosingGeocodeAddress="choosingGeocodeAddress"
									/>
									

									<div class="card-data-content__field textarea">
										<label for="">Описание</label> 
										<textarea v-model="choosedSight.descriptionEn" placeholder="Enter description of serivce" class="input-textarea" name="
										
										" id="" cols="30" rows="10">
										
										</textarea>
									</div>
								</div>
							</div>

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Время работы
									</div>
									
								</div>
								
								
								
								
								<Datatime 
								:item="itemWeek"
								v-for="(itemWeek, key, index) in choosedSight.availabilities"
								></Datatime>

							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>

					<div 
					v-if="type === 'audioGuide'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendService('audioGuide/1')"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`audioGuide/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Аудиозапись гида
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										
										

									</div>
									<AudioLoad 
									
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить аудио'"
									:multiple="false"
									
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									>
										<IconAudioload slot="icon"></IconAudioload>

									</AudioLoad>

									<div 
									v-if=""
									class="photo-requirements">
											<div class="">• Расширение: mp3, wav</div>
											<div class="">• Размер: не более 30 мб</div>
											<div class="">• Не дольше 20 минут</div>		
									</div>
									
								</div>


							</div>

							

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Сообщение
									</div>
									
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field">
										<label for="">Заголовок</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
									</div>

									<div class="card-data-content__field">
										<label for="">Заголовок (на английском языке)</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>

									<div class="card-data-header">
										<div class="card-data-header__title">
											Расположение метки
										</div>
										
									</div>

									
									
									<div class="card-data-content__field">
										<label for="">Координаты</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.polygon[0].lat" type="text">
									</div>

									<div 
									v-if="false"
									class="card-data-content__field__btn btn black nofill">
										Выбрать на карте
									</div>
									<div class="lmap-container">
										<vl-map data-projection="EPSG:4326" style="height: 400px">
											<vl-view :min-zoom="10" :zoom.sync="zoom" :center.sync="centerСord" :rotation.sync="rotation"></vl-view>

											<vl-layer-tile>
											<vl-source-osm></vl-source-osm>
											</vl-layer-tile>

											<vl-feature>
												<vl-geom-polygon :coordinates="formatedPolygon"></vl-geom-polygon>
											</vl-feature>

											<vl-layer-vector z-index="1">
												<vl-source-vector :features.sync="drawnFeatures" ident="the-source"></vl-source-vector>

												<vl-style-box>
													<vl-style-stroke color="green"></vl-style-stroke>
													<vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
												</vl-style-box>
											</vl-layer-vector>
											
											<vl-interaction-draw 
											@drawend="drawEnd"
											@drawstart="drawReset"
											type="Polygon" source="the-source">
												<vl-style-box>
													<vl-style-stroke color="blue"></vl-style-stroke>
													<vl-style-fill color="rgba(255,255,255,0.5)"></vl-style-fill>
												</vl-style-box>
											</vl-interaction-draw>
										</vl-map>
									</div>
									

									
								</div>
								
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>

					<div 
					v-if="type === 'museumGuide'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								<div class="viewing-body-translate__state state act ">
									<InputSelect

									:title="getStatus"
									:multiple="false"
									:items="status"

									@chooseSelect="chooseCategory"
									></InputSelect>
								</div>
								<div 
								v-if="method === 'add'"
								@click="sendServiceJson('museumGuide/1')"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendServiceJson(`museumGuide/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										QR-код
									</div>
									
								</div>
								<div 
								class="gallery-list align qr cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<qrcode-vue
									id="qrcode"
									class="gallery-list__item"
									render-as='canvas'
									:size="155"
									:value="choosedSight.url"  
									level="H" />
									<div>
									<a  
									v-show="false"
									id="downloadQrcode" download="qrcode.jpg">Download as image</a>

										
										
										

									</div>
									<div class="gallery-list--center col">
										<div class="gallery-list--center__input">
											<div class="card-data-content__field width--auto">
												<label for="">Ссылка</label>
												<input 
												v-model="qrCodeUrl"
												placeholder="Введите название услуги" 
												 type="text">
											</div>
										</div>
										<div class="gallery-list--center-row row">
											<div 
											@click="qrCodeGenerate"
											style="margin-right: 2rem;" 
											class="gallery-list--center-row__btn btn black nofill withicon hover width--auto">
												<IconMusemgid class="black small"></IconMusemgid> Сгенерировать QR-код
											</div>
											<div 
											@click='qrCodeDownrload'
											class="gallery-list--center-row__btn btn black nofill withicon hover width--auto">
												<IconMusemgid 
												class="black small"></IconMusemgid>Скачать QR-код
											</div>
										</div>
									</div>
									
								</div>


							</div>

							

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Сообщение
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
									</div>
									
									

									<div class="card-data-content__field textarea">
										<label class="label-default" for="">Описание (Русский язык)</label>

										<VueEditor
										v-if="langCard === 'rus'"
										:editor-toolbar="customToolbar"
										v-model="choosedSight.description"
										/>
										
									</div>
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название объекта</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>
									
									

									<div class="card-data-content__field textarea">
										<label class="label-default" for="">Описание (Английский язык)</label>
										<VueEditor
										v-if="langCard === 'eng'"
										:editor-toolbar="customToolbar"
										v-model="choosedSight.descriptionEn"
										/>
									</div>
								</div>
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>

					<div 
					v-if="type === 'category'"
					:class="{ loading: globalLoading }"
					class="viewing-body-wrap">
						<div class="viewing-body-header">
							<div class="viewing-body-header-wrap">
								<div class="viewing-body-header__title ">
									Режим редактора
								</div>
								
								<div 
								v-if="method === 'add'"
								@click="sendService('category/1')"
								:class="{
									'dissable' : !canSendPlace
								}"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>

								<div 
								v-if="method === 'change'"
								@click="sendService(`category/${choosedSight.id}`)"
								class="viewing-body-header__btn btn widthauto withicon act ">
									<IconSave></IconSave>
									{{ methodsTitle }}
								</div>
							</div>
							
						</div>
						<div 
						v-if="!globalLoading"
						class="viewing-body-content">
							<div class="viewing-body-content__title title">
								
							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Обложка категории
									</div>
									
								</div>
								<div 
								class="gallery-list cover">
									<!-- :class="{ error: itemCover.errors.size === true || itemCover.errors.format === true }" -->
									<!-- <GalleryPhoto 
									v-for="(itemCover,key,index) in cover.images"
									:item="itemCover"
									:arr="cover.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<div 
									
									
									class="gallery-list__item"
									v-if="choosedSight.cover"
									>

										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="choosedSight.cover" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="popup-body__content__preloader"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error"></div>
									    </vue-load-image>
										<div 
										@click="deleteCover()"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>
										

									</div>
									<Photoload 
									:class="{ 'photo-load--error': !choosedSight.cover }"
									@unloadPhoto="loadPreviewCover" 
									:title="'Загрузить фото'"
									:multiple="false"
									:name="'cover'"
									@refreshPhoto="refreshPhotos"
									>
										<IconPhotoload slot="icon"></IconPhotoload>	
									</Photoload>
									<div 
									v-if="choosedSight.cover <= 0"
									class="photo-requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>


							</div>

							<div class="gallery">
								<div class="gallery-header">
									<div class="gallery-header__title">
										Иконка категории
									</div>
									<div 
									v-if="gallery.images.length != 0"
									class="gallery-header__qty">
										Загружено {{ gallery.images.length }} из 14 фото
									</div>
								</div>
								
								<div 
								:class="{ show : gallery.showMoreGallery } "
								class="gallery-list hidden">
									<!-- <GalleryPhoto
									v-for="(itemGallery,key,index) in gallery.images"
									
									:item="itemGallery"
									:errors="itemGallery.errors"
									:arr="gallery.images"
									:keyArr="key"
									@deleteImage="deleteImage"
									>
									
									</GalleryPhoto> -->
									<!-- :class="{ error: itemGallery.error_format }" -->
									<div 

									
									
									v-if="choosedSight.icon"
									class="gallery-list__item viewing-photo">
										
										<vue-load-image
										
										>
									      <img 
									      	slot="image"
								 			:src="choosedSight.icon" 
								 			alt=""
									      	/>
									      <IconImageloader 
									      class="preloader__gallery-item"
									      slot="preloader">
									      	
									      </IconImageloader>
									     
									      <div slot="error">ошибка</div>
									    </vue-load-image>

										<!-- <img 
										:src = "itemGallery.url"
										 alt=""> -->
										<div 
										@click="deleteIcon()"
										class="gallery-list__item__delete">
											<IconDeleteimage></IconDeleteimage>
										</div>


										<!-- Проверка на валидность фотографии  -->


										<!-- <div
										v-if="itemGallery.error_size || itemGallery.error_format"
										class="gallery-list__item-errors">
											<div class="gallery-list__item-errors__icon">
												<IconErrorImage></IconErrorImage> 
											</div>
											<div class="gallery-list__item-errors__text">
												<div 
												v-if="itemGallery.error_size"
												class="gallery-list__item-errors__text--size">
													Неверный размер
												</div>
												<div 
												v-if="itemGallery.error_format"
												class="gallery-list__item-errors__text--format">
													Неверный формат
												</div>
											</div>
										</div> -->
									</div>

									<Photoload 
									
									class="gallery-list__item__load" 
									:title="'Загрузить иконку'"
									@unloadPhoto="loadIcon" 
									:multiple="true"
									
									:name="'medias'"
									>
										
									</Photoload>
									<div 
									v-if="!choosedSight.icon"
									class="photo-requirements gallery-list__item__requirements">
											<div class="">• Расширение: png, jpg</div>
											<div class="">• Размер: не более 5 мб</div>
											<div class="">• Формат: 16:9, 1:1, 4:3</div>		
									</div>
								</div>
								<div 
								@click="showAllGallery"
								
								class="gallery-list__more">
									<div 
									v-if="!gallery.showMoreGallery"
									class="">
										Показать остальные фото
									</div>
									<div 
									v-if="gallery.showMoreGallery"
									class="">
										Скрыть остальные фото
									</div>
								</div>

								
							</div>

							

							<div class="card-data">
								<div class="card-data-header">
									<div class="card-data-header__title">
										Данные категории
									</div>
									<div class="card-data-header__translate">
										<div 
										@click="changeCardLang('rus')"
										:class="{ active: langCard == 'rus' }"
										class="card-data-header__translate__item rus">
											Русская версия
										</div>
										<div 
										@click="changeCardLang('eng')"
										:class="{ active: langCard == 'eng' }"
										class="card-data-header__translate__item eng">
											Английская версия
										</div>
									</div>
								</div>
								
								<div v-if="langCard == 'rus'" class="card-data-content rus">
									<div 
									:class="{ 'card-data-content__field--error': choosedSight.title.length < 3 }"
									class="card-data-content__field">
										<label for="">Название категории</label>
										<input 
										v-model="choosedSight.title"
										placeholder="Введите название услуги" 
										 type="text">
										<span 
										v-if="choosedSight.title.length < 3"
										class="card-data-content__field__message">Введите поле</span>
									</div>
									
									

									
								</div>
								<div v-if="langCard == 'eng'" class="card-data-content eng">
									<div class="card-data-content__field">
										<label for="">Название категории</label>
										<input 
										placeholder="Enter name of service" 
										v-model="choosedSight.titleEn" type="text">
									</div>
									
									
									

									
								</div>
							</div>
							
						</div>
						<Loader
						v-if="globalLoading"
						></Loader>
					</div>


					


					
				</div>

				<div 
				@click="previewHide"
				class="viewing-body-wrap__close">
					<IconViewingclose></IconViewingclose>
				</div>
			</div>
		</transition>
	</div>
</template>

<style>
	
</style>

<script>
	import Vue from 'vue'
	import { VueEditor } from "vue2-editor";
	import VueLoadImage from 'vue-load-image'
	import ClickOutside from 'vue-click-outside'
	import { mapGetters, mapActions } from 'vuex'
	import { pathToFile } from 'image-to-file-converter'
	import inputvalidate from '~/directives/inputvalidate'

	import DatePicker from 'vue2-datepicker';
  	import 'vue2-datepicker/index.css';
	import QrcodeVue from 'qrcode.vue'


	import 'vuelayers/lib/style.css' // needs css-loader

	export default {
		components: {
		    'vue-load-image': VueLoadImage,
		    DatePicker,
			QrcodeVue,
			VueEditor
			
		},
		props: {
			card: [],
			data: {},
			type: '',
			show: '',
			method: '',
			choosedSight: {}
			

		},
		watch: {
			show(val) {

				if ( val === false ) {
					setTimeout(() => {
					  this.$refs.viewing.style.display = 'none'
					}, 200)
					
				}

				else if ( val === true ) {
					this.$refs.viewing.style.display = 'block'
				}

				if ( this.type === 'museumGuide' && val === true) {
					this.qrCodeGetImage()
				}
			},

			'choosedSight.startDate'(newVal){
				//to work with changes in "myArray"
				
				// let splited = newVal.splice(0, -1)
				var date = new Date(newVal);
				date.setDate(date.getDate() + 1);

				function formatDate(date) {
					var d = new Date(date),
						month = '' + (d.getMonth() + 1),
						day = '' + d.getDate(),
						year = d.getFullYear();

					if (month.length < 2) 
						month = '0' + month;
					if (day.length < 2) 
						day = '0' + day;

					return [year, month, day].join('-');
				}
				
				

				this.choosedSight.endDate = formatDate(date)
			},
			
		},
		data() {
			return {
				cover: {
					images: [],
				},
				gallery: {
					images: [],
					showMoreGallery: false
				},
				sight: {
					title: '',
					titleEn: '',
					address: {
						address: '',
						latitude: null,
     					longitude: null
					},
					status: [
						{
							title: '',
							value: '', 
						}
						
					],
					
					description: '',
					descriptionEn: ''
				},
				status: [
					{
						title: 'На модерации',
						value: 'MODERATION', 
					},
					{
						title: 'Отклонён',
						value: 'REJECTED', 
					},
					{
						title: 'Опубликован',
						value: 'PUBLISHED', 
					},
					{
						title: 'Удаленный',
						value: 'REMOVED', 
					},
					{
						title: 'Новый',
						value: 'NEW', 
					},
				],	
				langCard: 'rus',
				customToolbar: [
			      ["bold", "italic", "underline"],
			      [{ list: "ordered" }, { list: "bullet" }],
			      ["image", "code-block"],
			      [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
			      [{ color: [] }]
			    ],
				qrCodeUrl: '',
				newCover: '',
				responseCategory: {},
				useUrlFunction: true,
                zoom: 6,
				center: [-122.10038,37.413742],
				rotation: 0,
                geolocPosition: undefined,
                reloading: false,
				drawnFeatures: []
				
			}
		},
		computed: {
			...mapGetters({
				globalLoading: 'globalLoading',
				cityId: 'admin/cityinfo/cityId'
			}),

			canSendPlace() {
				if ( this.type === 'category' ) {
					if ( this.choosedSight.cover && this.choosedSight.title.length > 2 && this.choosedSight.icon ) {
						return  true
					}
					else {
						return false
					}
				}
				else if ( this.choosedSight.cover && this.choosedSight.title.length > 2 && this.choosedSight.address.latitude ) {
					return  true
				}
				
				else {
					return false
				}
				
			},
			
			getStatus() {
				let statusTitle = ''
				switch(this.choosedSight.status) {
					case 'MODERATION' :
						statusTitle = 'На модерации'
						break;
					case 'PUBLISHED' :
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
			methodsTitle() {
				let title = ''
				switch(this.method) {
					case 'add' :
						title = 'Добавить'
						break;
					case 'change' :
						title = 'Сохранить'
						break;
				}
				return title
			},

			formatedPolygon() {
				let newArr = []
				let polygonItems = this.choosedSight.polygon
				polygonItems.forEach((item) => {
					let newItem = []
					newItem.push(item.lon)
					newItem.push(item.lat)
					newArr.push(newItem)
				})
				return [newArr]
			},

			centerСord() {
				let lat = this.choosedSight.polygon[0].lat
				let lon = this.choosedSight.polygon[0].lon
				return [lon,lat]
			}
		},
		methods: {
			...mapActions({
				getData: 'service/getData'
			}),

			previewHide: function() {
				this.$emit('previewHide')
			},
			changeCardLang: function(lang) {
				if ( lang === 'rus' ) {
					this.langCard = 'rus'
				}
				else if ( lang === 'eng' ) {
					this.langCard = 'eng'
				}
			},
			loadPreviewCover(images) {
				console.log(images)
				this.cover.images = images
				this.choosedSight.cover = this.cover.images[0].src
				console.log(this.cover.images[0])
				
			},
			loadPreviewGallery(images) {
				console.log(images)
				
				
				for ( let key in images ) {
					
					images[key].url = images[key].src
					this.choosedSight.medias.push(images[key])
					this.gallery.images.push(images[key])
					console.log(images[key])
				}
			   	console.log(this.gallery.images)
			   	console.log(typeof this.gallery.images)
			   	console.log(Array.isArray(this.gallery.images))
			   	
			},

			deleteImage(key, arr) {

				arr.splice(key, 1);
			},

			deleteCover() {
				this.choosedSight.cover = ''
			},
			refreshPhotos() {
				this.refreshGallery = !this.refreshGallery 
			},

			showAllGallery() {
				this.gallery.showMoreGallery = !this.gallery.showMoreGallery
			},

			chooseCategory(val) {
				console.log(val)
				this.choosedSight.status = val.value
			},

			sendService(params) {
				let formData = new FormData();

				let obj = this.choosedSight

				let paramsQuery = {}
				const json = JSON.stringify(obj);
				
				console.log(obj)
				if ( this.method === 'add' ) {
					
					formData.append(this.type, new Blob([json], {
					  type: 'application/json',
					}));
					if ( this.type != 'category' ) {
						this.choosedSight.medias.forEach((item) => {
							formData.append("medias", item);
						})
					}
					else {
						formData.append("icon", this.icon);
					}
					if ( this.type === 'audioGuide' ) {
						formData.append("audio", this.cover.images[0]);
					}
					else {
						formData.append("cover", this.cover.images[0]);
					}
					
					paramsQuery = {
						params: params,
						data: formData
					}
					this.$store.commit('showLoading')
					this.$store.dispatch('service/send', paramsQuery )
					.then((res) => {
					this.$store.commit('hideLoading')
					console.log(res)
					})
					.catch((err) => {	
						console.log(err)
					})
				}
				else if ( this.method === 'change' ) {
					this.$store.commit('showLoading')
					console.log('IMAGE TO FILE');
					console.log(params)

					
					let gallery = this.choosedSight.medias
					let cover = this.choosedSight.cover
					let arrForGallery = []
					let fileCover = []
					let iconSrc = this.choosedSight.icon
					let icon = []

					if (this.choosedSight.medias) {
						async function saveImageFile() {
							for ( let item of gallery ) {
								await fetch(item.url)
								.then((res) => res.blob())
								.then((myBlob) => {
									console.log(myBlob);
									const myFile = new File([myBlob], "image.jpeg", {
										type: myBlob.type,
									});
									console.log(myFile)
									arrForGallery.push(myFile)
								})	
								
							}

							await fetch(cover)
							.then((res) => res.blob())
							.then((myBlob) => {
								console.log(myBlob);
								const myFile = new File([myBlob], "image.jpeg", {
									type: myBlob.type,
								});
								fileCover = myFile
							});
						}

						saveImageFile()
						.then(() => {
							
							formData.append(this.type, new Blob([json], {
								type: 'application/json',
							}));
							
							arrForGallery.forEach((item) => {
								formData.append("medias", item);
							})
							

							formData.append("cover", fileCover);

							
							paramsQuery = {
								params: params,
								data: formData
							}
							for (var pair of formData.entries()) {
								console.log(pair); 
							}
							
							this.$store.dispatch('service/put', paramsQuery )
							.then((res) => {
								console.log(res.data.data);
								Vue.set(this.choosedSight, 'cover', res.data.data.cover );
								Vue.set(this.choosedSight, 'medias', res.data.data.medias );
								this.$store.commit('hideLoading');
								this.$emit('refreshTable');
							})
							.catch((err) => {	
								console.log(err)
							})
						})
					}

					if ( this.type === 'category' ) {
						console.log('category CHANGE')
						async function saveImageFile() {
						
							await fetch(iconSrc)
							.then((res) => res.blob())
							.then((myBlob) => {
								console.log(myBlob);
								const myFile = new File([myBlob], "image.jpeg", {
									type: myBlob.type,
								});
								console.log(myFile)
								icon = myFile
							})	
							
						
							await fetch(cover)
							.then((res) => res.blob())
							.then((myBlob) => {
								console.log(myBlob);
								const myFile = new File([myBlob], "image.jpeg", {
									type: myBlob.type,
								});
								fileCover = myFile
							});
						}

						saveImageFile()
						.then(() => {
							
							formData.append(this.type, new Blob([json], {
								type: 'application/json',
							}));
							
							formData.append("cover", icon);
							

							formData.append("cover", fileCover);

							
							paramsQuery = {
								params: params,
								data: formData
							}
							for (var pair of formData.entries()) {
								console.log(pair); 
							}
							
							this.$store.dispatch('service/put', paramsQuery )
							.then((res) => {
								console.log(res.data.data);
								Vue.set(this.choosedSight, 'cover', res.data.data.cover );
								Vue.set(this.choosedSight, 'medias', res.data.data.medias );
								this.$store.commit('hideLoading');
								this.$emit('refreshTable');
							})
							.catch((err) => {	
								console.log(err)
							})
						})
					}
					
					
					if ( this.type === 'audioGuide' ) {
						

						formData.append(this.type, new Blob([json], {
							type: 'application/json',
						}));

						formData.append("audio", this.cover.images[0]);
						console.log(this.cover.images)
						console.log(this.cover.images[0])
						paramsQuery.params = params
						paramsQuery.data = formData

						

						this.$store.dispatch('service/put', paramsQuery )
						.then((res) => {
							console.log(res.data.data);
							Vue.set(this.choosedSight, 'cover', res.data.data.cover );
							Vue.set(this.choosedSight, 'medias', res.data.data.medias );
							this.$store.commit('hideLoading');
							this.$emit('refreshTable');
						})
						.catch((err) => {	
							console.log(err)
						})
					}

					
					
					
				}
				
			},

			sendServiceJson(params) {
				let formData = new FormData();
				let obj = this.choosedSight
				let paramsQuery = {}

				
				console.log(paramsQuery)
				if ( this.method === 'add' ) {

					paramsQuery = {
						params: params,
						data: this.choosedSight
					}

					this.$store.commit('showLoading')
					console.log(paramsQuery)
					this.$store.dispatch('service/sendJson', paramsQuery )
					.then((res) => {
					this.$store.commit('hideLoading')
					console.log(res)
					})
					.catch((err) => {	
						console.log(err)
					})
				}
				else if ( this.method === 'change' ) {

					paramsQuery = {
						params: params,
						data: this.choosedSight
					}
					
					console.log(this.choosedSight)
					this.$store.commit('showLoading')
					this.$store.dispatch('service/putJson', paramsQuery )
					.then((res) => {
						this.$store.commit('hideLoading')
						console.log(res)
						this.$emit('refreshTable');
					})
					.catch((err) => {	
						console.log(err)
					})
				}
				
			},
			qrCodeGenerate() {
				this.choosedSight.url = this.qrCodeUrl
				Vue.set(this.choosedSight, 'url', this.qrCodeUrl)
			},
			qrCodeDownrload() {
				if (this.type === 'museumGuide') {
					console.log('museumGuide')
					let qrcodeBlock = document.querySelector('.gallery-list.qr')
					let qrcode = qrcodeBlock.getElementsByTagName('canvas')[0]
					let qrcodeBase64 = qrcode.toDataURL("image/png");
					let downloadLnk = document.getElementById('downloadQrcode')
					downloadLnk.href = qrcodeBase64
					downloadLnk.click()
					console.log(downloadLnk.href)
				}
			},
			qrCodeGetImage() {
				console.log('mounted_comp')
				if ( this.method === 'change' ) {
					this.qrCodeUrl = this.choosedSight.url
				}
				else if ( this.method === 'add' ) {
					this.qrCodeUrl = ''
				}
			},
			qrCodeSetSize() {
				let qrcodeBlock = document.querySelector('.gallery-list.qr')
				console.log(qrcodeBlock)
				// let qrcode = qrcodeBlock.getElementsByTagName('canvas')[0]
				// qrcode.style.width = '100%'
				// qrcode.style.height = '100%'
			},
			choosingGeocodeAddress(item) {
				this.choosedSight.address = item
			},
			changeUserStatus(item) {

				this.$emit('changeUserStatus',item)
				this.card.blocked = !this.card.blocked
			},

			getCategoryList() {
				let params = {}
				params.params = `category/?cityId=${this.cityId}`
				this.$store.dispatch('service/getData',params)
				.then((res) => {
					let response = res.data.rows
					this.responseCategory = response
				})
			},

			chooseCategoryService(item) {
				console.log(item)
				this.choosedSight.category = item
			},

			changeMap() {
                this.useUrlFunction = !this.useUrlFunction
                this.reloading = true
                this.$nextTick(() => {
                    this.reloading = false
                })
            },
            urlFunction(extent, resolution, projection) {
                return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
                    'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
                    'outputFormat=application/json&srsname=' + projection + '&maxFeatures=50' + '&' +
                    'bbox=' + extent.join(',') + ',' + projection
            },
            loadingStrategyFactory() {
                return this.$loadingBBox()
            },
			drawEnd() {
				console.log('DRAWED')
				console.log(this.drawnFeatures)
				let newPolygon = []
				let drawedPolugon = this.drawnFeatures[0].geometry.coordinates[0]
				drawedPolugon.forEach((item) => {
					let newObj = {
						lon: item[0],
						lat: item[1]
					}
					newPolygon.push(newObj)
				})
				this.choosedSight.polygon = newPolygon
				console.log()
				console.log(this.choosedSight.polygon)
			},
			drawReset() {
				this.drawnFeatures = []
			},

			loadIcon(images) {
				console.log(images[0])
				this.choosedSight.icon = images[0].src
				this.icon = images[0]
			},
			
			deleteIcon() {
				this.choosedSight.icon = ''
			}

			

		},
		directives: {
        	inputvalidate: inputvalidate
    	},
		
		mounted() {	
			this.viewingItem = this.$el
			if ( this.type === 'service' ) {
				this.getCategoryList()
			}
		}
		
	}
</script>

<style lang="scss" scoped>
	.lmap-container {
		width: 100%;
		height: 40rem;
	}
</style>