<template>
    <div class="card-data-content__field geo field-wrap">
        <div class="">
            <label for="">Введите местоположение</label>
            <div class="input-icon">
                <IconGeo></IconGeo>
                <input
                @input="getAddressList()"
                placeholder="Введите местоположение" 
                v-model="address" type="text">
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
            
        },

        data() {
            return {
                address: '',
                droped: false,
                responseItems: []
            }
        },
        methods: {
            ...mapActions({
                getGeocodeList: 'geocode/getGeoFromAddress'
            }),

            getAddressList() {
				let keyword = this.address
				console.log(keyword)
				this.getGeocodeList(keyword)
                .then((res) => {
                    this.responseItems = res.data
                    this.droped = true
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