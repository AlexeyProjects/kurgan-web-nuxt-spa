import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({

})

export const mutations = {

  auth_success(state, token, user){
    state.status = 'success'
    state.user = JSON.parse(localStorage.getItem('user'))
    state.token = localStorage.getItem('token')
  },
  
}

export const actions = {
  recoveryPasswordEmail({commit}, email){
    return new Promise((resolve, reject) => {
      console.log(email)
      axios({url: `${this.$axios.defaults.baseURL}auth/reset?email=${email}`, method: 'POST' })
      .then(resp => {
 
        resolve(resp)
      })
      .catch(err => {

        reject(err)

      })
    })
  }
}


export const getters = {
  USER(state) {
    return state.user
  }
}