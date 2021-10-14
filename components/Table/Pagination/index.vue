<template>
	<div class="table-footer__pagination">
		<div class="table-footer__pagination-arrows">
			<div 
			@click="paginationStart"
			class="table-footer__pagination-arrows__start">
				<svg class="icon" width="1.4rem" height="1.2rem" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M6.03033 10.5303C5.73744 10.8232 5.26256 10.8232 4.96967 10.5303L0.96967 6.53033C0.676777 6.23744 0.676777 5.76256 0.96967 5.46967L4.96967 1.46967C5.26256 1.17678 5.73744 1.17678 6.03033 1.46967C6.32322 1.76256 6.32322 2.23744 6.03033 2.53033L2.56066 6L6.03033 9.46967C6.32322 9.76256 6.32322 10.2374 6.03033 10.5303Z" fill="#858585"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 11.5303C12.7374 11.8232 12.2626 11.8232 11.9697 11.5303L6.96967 6.53033C6.67678 6.23744 6.67678 5.76256 6.96967 5.46967L11.9697 0.46967C12.2626 0.176777 12.7374 0.176777 13.0303 0.46967C13.3232 0.762563 13.3232 1.23744 13.0303 1.53033L8.56066 6L13.0303 10.4697C13.3232 10.7626 13.3232 11.2374 13.0303 11.5303Z" fill="#858585"/>
				</svg>

			</div>
			<div 
			@click="paginationPrev"
			class="table-footer__pagination-arrows__prev">
				<svg class="icon" width=".6rem" height="1rem" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.76877 0.231232C6.07708 0.53954 6.07708 1.03941 5.76877 1.34772L2.11648 5L5.76877 8.65228C6.07708 8.96059 6.07708 9.46046 5.76877 9.76877C5.46046 10.0771 4.96059 10.0771 4.65228 9.76877L0.441758 5.55824C0.13345 5.24993 0.13345 4.75007 0.441758 4.44176L4.65228 0.231231C4.96059 -0.0770772 5.46046 -0.0770772 5.76877 0.231232Z" fill="#858585"/>
				</svg>
			</div>
		</div>
		<div 
		@click="showPaginationPages"
		class="table-footer__pagination__number">

			{{ this.currentPage }}-{{ this.qtyPage }}
			<div 
			v-show="paginationShow"
			class="table-footer__pagination__number-pages">
				<div class="table-footer__pagination__number-pages-list">
					<div 
					@click="sortListInPaginate(item.start - 1, item)"
					:class="{ active: choosedPageList === item }"
					class="table-footer__pagination__number-pages-list__item"
					v-for="(item,index,key) in pageList"
					>
						{{ item.start }} - {{ item.end }} 
						<IconAccept 
						v-if="choosedPageList === item"
						class="black"></IconAccept>
					</div>

				</div>
			</div>
		</div>
		<div class="table-footer__pagination-arrows">
			<div 
			@click="paginationNext"
			class="table-footer__pagination-arrows__next">
				<svg class="icon" width=".6rem" height="1rem" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.231231 9.76877C-0.0770772 9.46046 -0.0770771 8.96059 0.231231 8.65228L3.88352 5L0.231232 1.34772C-0.0770771 1.03941 -0.077077 0.539539 0.231232 0.231232C0.53954 -0.0770769 1.03941 -0.0770769 1.34772 0.231232L5.55824 4.44176C5.86655 4.75007 5.86655 5.24993 5.55824 5.55824L1.34772 9.76877C1.03941 10.0771 0.53954 10.0771 0.231231 9.76877Z" fill="#858585"/>
				</svg>
			</div>
			<div 
			@click="paginationEnd"
			class="table-footer__pagination-arrows__end">
				<svg class="icon" width="1.4rem" height="1.2rem" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.96967 1.46967C8.26256 1.17678 8.73744 1.17678 9.03033 1.46967L13.0303 5.46967C13.3232 5.76256 13.3232 6.23744 13.0303 6.53033L9.03033 10.5303C8.73744 10.8232 8.26256 10.8232 7.96967 10.5303C7.67678 10.2374 7.67678 9.76256 7.96967 9.46967L11.4393 6L7.96967 2.53033C7.67678 2.23744 7.67678 1.76256 7.96967 1.46967Z" fill="#858585"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L7.03033 5.46967C7.32322 5.76256 7.32322 6.23744 7.03033 6.53033L2.03033 11.5303C1.73744 11.8232 1.26256 11.8232 0.96967 11.5303C0.676777 11.2374 0.676777 10.7626 0.96967 10.4697L5.43934 6L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="#858585"/>
				</svg>
			</div>
		</div>
	</div>
</template>

<style>
	
</style>

<script>
	export default {
		props: {
			responseData: [],
			currentPage: 1
		},
		data() {
			return {
				pageList: [],
				qtyPage: 0,
				choosedPageList: {},
				paginationShow: false
			}
		},
		computed: {

		},
		methods: {
			getPageQty() {
				const rowsize = 20
				let total = this.responseData.total
				let partQty = Math.round(total / rowsize) * rowsize
				console.log(partQty)
				console.log('partQty')
				if ( total > partQty  ) {
					partQty += rowsize
				}
				console.log(partQty)

				let qtyPage = partQty/rowsize
				this.qtyPage = qtyPage
				console.log(qtyPage)
				let pageList = []
				let pageListNew = []
				
				let pagListObg = {}
				let object = new Object();
				for (var i = 0; i < this.qtyPage; i++) {

					let lastItterate = this.qtyPage - 1

					if ( i == 0 ) {
						console.log(`Иттерация ${i}`)
						object.pageQty = i
						object.start = 1;
						object.end = rowsize
					}
					else if ( i != this.qtyPage ) {
						object.pageQty = i
						object.start = object.start + 20

						if ( i == lastItterate ) {
							object.end = this.responseData.total
						}
						else {
							object.end = object.end + 20
						}
						
					}
					
					let pushingObj =  {} 
					pushingObj.start = object.start
					pushingObj.end = object.end
					pushingObj.pageQty = object.pageQty
					pageList.push(pushingObj)
				}
				this.pageList = pageList
				this.choosedPageList = pageList[this.currentPage-1]
				

			},
			// Не работает проверка + присвоения класса ( Игнорирует наличие item в this.choosedPageList )
			sortListInPaginate(offset, itemPage) {
				if ( this.choosedPageList != itemPage ) {
					let currentPage = itemPage.pageQty + 1
					console.log(currentPage)
					this.currentPage = currentPage
					console.log(this.currentPage)
					this.choosedPageList = itemPage
					this.$emit('sortListInPaginate', offset, currentPage)
				}
				else {
					// console.log('return')
					// this.choosedPageList = {}
					// this.$emit('sortListInPaginate', 0, 1)
					return

				}	
			},
			paginationNext() {
				if ( this.currentPage != this.qtyPage ) {
					let nextIndexPage = this.currentPage + 1
					let offset = 0
					offset = this.pageList[nextIndexPage - 1].start - 1
					this.$emit('paginationNext', offset)
				}
				else {
					return
				}
				
			},
			paginationPrev() {
				if ( this.currentPage != 1 ) {
					let nextIndexPage = this.currentPage - 1
					let offset = 0
					offset = this.pageList[nextIndexPage - 1].start - 1
					this.$emit('paginationPrev', offset)
				}
				else {
					return
				}
			},
			paginationStart() {
				if ( this.currentPage != 1 ) {
					let offset = 0
					this.$emit('paginationStart', offset)
				}
				else {
					return
				}
			},
			paginationEnd() {
				if ( this.currentPage != this.qtyPage ) {
					let offset = 0
					offset = this.pageList[this.pageList.length - 1].start - 1
					this.$emit('paginationEnd', offset)
				}
				else {
					return
				}
			},
			showPaginationPages() {
				this.paginationShow = !this.paginationShow
			},
		},
		mounted() {
			this.getPageQty()
		}
	}
</script>