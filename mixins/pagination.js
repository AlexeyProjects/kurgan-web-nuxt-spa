export default {
    data() {
        return {
            currentPage: 1,
				qtyPage: 0,
				pageList: [],
				choosedPageList: [],
				paginationShow: false,
        }
    },
    methods: {
        showPaginationPages() {
            this.paginationShow = !this.paginationShow
        },
        // Не работает проверка + присвоения класса ( Игнорирует наличие item в this.choosedPageList )
        sortListInPaginate(offset, currentPage) {
                this.forQuery.offset = offset
                this.currentPage = currentPage
                console.log(currentPage)
                this.getData()
            
        },
        paginationNext(offset) {
                this.forQuery.offset = offset
                this.getData()
                this.currentPage += 1
            
            
        },
        paginationPrev(offset) {
                this.forQuery.offset = offset
                this.getData()
                this.currentPage -= 1
            
        },
        paginationStart() {
            if ( this.currentPage != 1 ) {
                this.forQuery.offset = 0
                this.getData()
                this.currentPage = 1
            }
            else {
                return
            }
        },
        paginationEnd(offset) {
            this.forQuery.offset = offset
            this.getData()
            this.currentPage = this.qtyPage
        },
        getQtyPage(value) {
            this.qtyPage = value
        },
    }
}