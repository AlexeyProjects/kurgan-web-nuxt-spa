import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  loading: false
})

export const mutations = {
  showLoading(state) {
    state.loading = true
    console.log('loading show')
  },

  hideLoading(state) {
    state.loading = false
  },


}


export const getters = {
  globalLoading(state) {
    return state.loading
  }
}