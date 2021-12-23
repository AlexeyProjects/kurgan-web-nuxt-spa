<template>
    <div 
    :class="{ 'card-data-content__field--error': !address.latitude }"
    class="card-data-content__field geo field-wrap">
        <div class="">
            <label for="">Введите местоположение</label>
            <div class="input-icon">
                <IconGeo></IconGeo>
                <input
                @input="getAddressList()"
                placeholder="Введите местоположение" 
                v-model="address.address" type="text">
                <span 
                v-if="address.address.length < 3"
                class="card-data-content__field__message">Введите адрес</span>
            </div>
        </div>
        <div 
        v-if="droped"
        class="field-drop">
            <div 
            v-for="(item,key) in responseItems"
            :key="key"
            @click="chooseAddress(item)"
            class="field-drop__item">
                {{ item.address }}
            </div>
            <div 
            v-if="responseItems.length === 0"
            class="field-drop__error">
                Ничего не найдено
            </div>
        </div>
        
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        props: {
            address: {
                type: Object,
                default: () => {}
            }
        },

        data() {
            return {
                droped: false,
                responseItems: []
            }
        },
        methods: {
            ...mapActions({
                getGeocodeList: 'geocode/getGeoFromAddress'
            }),

            getAddressList() {
				let keyword = this.address.address
				console.log(keyword)
				this.getGeocodeList(keyword)
                .then((res) => {
                    this.responseItems = res.data
                    this.droped = true
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

            chooseAddress(item) {
                this.address = item.address
                this.droped = false
                this.$emit('choosingGeocodeAddress', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .field{
        &-wrap {
            position: relative;
        }
        &-drop {
            max-height: 20rem;
            overflow: auto;
            width: 100%;
            position: absolute;
            background-color: #fff;
            top: 6.7rem;
            border: 1px solid #000;
            border-radius: .8rem;
            z-index: 10;
            &__item {
                margin-bottom: .5rem;
                padding: .5rem;
                transition: .3s;
                &:hover {
                    cursor: pointer;
                    background-color: rgba(0,0,0,.2);
                }
            }
            &__error {
                padding: 1rem;
            }
        } 
    }
</style>