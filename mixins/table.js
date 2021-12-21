
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

        getUserStatus(item) {
            let statusTitle = ''
            switch(item) {
                case true :
                    statusTitle = 'Заблокирован'
                    break;
                case false :
                    statusTitle = 'Активный'
                    break;
            }
            return statusTitle
        },

        getUserStatusStyle(item) {
            let statusTitle = ''
            switch(item) {
                case true :
                    statusTitle = 'rejected'
                    break;
                case false :
                    statusTitle = 'published'
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
            .catch((error) => {
                if ( error.response.data.errors[0].code === 1001 || error.response.data.errors[0].code === 1002 ) {
                    this.$router.push({ path: `/login` })
                    localStorage.setItem('isLogged', false)
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                }              
            })
            
        },

        getData() {
            this.$store.commit('showLoading')
            let params = {}
            params.params = this.getParamsForQuery
            this.queryData(params)
            .then((res) => {
                console.log('Этот метод')
                this.responseData = res.data
                console.log(res.data)

                this.$store.commit('hideLoading')
            })
            .catch((error) => {
                if ( error.response.data.errors[0].code === 1001 || error.response.data.errors[0].code === 1002 ) {
                    this.$router.push({ path: `/login` })
                    localStorage.setItem('isLogged', false)
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                }              
            })
        },

        changeUserStatus(item) {
            console.log(item)
            
            let params = {}
            params.params = `admin/block/${item.id}/?block=${!item.blocked}`
            this.$store.dispatch('service/patch', params )
            .then((res) => {
                this.getData()
            })
            .catch((error) => {
                if ( error.response.data.errors[0].code === 1001 || error.response.data.errors[0].code === 1002 ) {
                    this.$router.push({ path: `/login` })
                    localStorage.setItem('isLogged', false)
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                }              
            })
        }
        
    },

    computed: {
        ...mapGetters({
            globalLoading: 'globalLoading',
            cityId: 'admin/cityinfo/cityId'
        })
    }

}