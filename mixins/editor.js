import { mapActions, mapGetters } from 'vuex'

export default {
    data: () => {
        return {
            mixineditor: true,
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"],
                [{ align: "" }, { align: "center" }, { align: "right"}, { align: "justify"}],
                [{ color: [] }]
            ],
        }
    },
    
    methods: {
        ...mapActions({
            getData: 'service/getData'
        }),

        saveRich() {
            let params = {}
            params.params = this.queryParams

            var keysTemplate = Object.keys(this.richData)
            let firstValue = keysTemplate[0]
            let secondValue = keysTemplate[1]
            let newObj = {}
            newObj[firstValue] = this.richData[firstValue]
            newObj[secondValue] = this.richData[secondValue]
            params.data = newObj
            this.$store.commit('showLoading')
            this.$store.dispatch('service/putJson', params )
            .then(() => {
                this.$store.commit('hideLoading')
            })
        },

        getRich() {
            let params = {}
            params.params = this.queryParams
            this.getData(params)
            .then((res) => {
                let response = res.data.data
                var keysTemplate = Object.keys(this.richData)
                var keysResponse = Object.keys(response)
                this.richData[keysTemplate[0]] = response[keysResponse[0]]
                this.richData[keysTemplate[1]] = response[keysResponse[1]]
            })
        }

    },

    computed: {
        ...mapGetters({
            globalLoading: 'globalLoading',
        })
    },

    mounted() {
        this.getRich()
        
    }
}