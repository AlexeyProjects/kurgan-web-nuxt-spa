
import VueLoadImage from 'vue-load-image'
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        'vue-load-image': VueLoadImage
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
            showPopup: false,
            responseData: {},
            searchInput: '',
            searching: false,
            previewShowing: false,
            popupImageSrc: '',
			method: ''
        }
    },

    methods: {
        ...mapActions({
            queryData: 'service/getData'
        }),
        searchTable() {
            this.forQuery.offset = 0
            this.currentPage = 1
            this.searching = true
            this.getData()
        },
        clearSearch() {
            this.searchInput = ''
            this.searching = false
            this.getData()
        },
        previewShow() {
            this.previewShowing = true
        },
        previewHide() {
            this.previewShowing = false
        },
        showPhoto(src) {
            this.showPopup = true
            this.popupImageSrc = src
        },
        hidePopup() {
            this.showPopup = false
        },
        // Table settings methods //
        changeItem(id) {
            console.log('change')
            let params = {}
            params.params = `${this.type}/${id}`
            this.queryData(params)
            .then((res) => {
                this.choosedSight = res.data.data
                this.method = 'change'
                this.previewShow()
            })
        },
        refreshTable() {
            this.getData()
        },
        getStatusTitle(item) {
            let statusTitle = ''
            switch(item) {
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
        changeStatusItem(item, newStatus) {
            console.log(item)
            let params = {}
            params.params = `${this.type}/${item.id}`
            params.data = {
                "status": newStatus
            }
            this.$store.dispatch('service/patch', params )
            .then((res) => {
                this.getData()
            })
            
        }
        
    },

    computed: {
        ...mapGetters({
            globalLoading: 'globalLoading'
        })
    }

}