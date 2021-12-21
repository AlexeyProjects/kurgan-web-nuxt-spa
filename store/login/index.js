import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  status: '',
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user'))
})

export const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, user){
    state.status = 'success'
    state.user = JSON.parse(localStorage.getItem('user'))
    // state.token = localStorage.getItem('token')
  },
  auth_logout(state){
    state.status = ''
    state.token = ''
    state.user = []
  },
}

export const actions = {
  auth({commit}, user){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      console.log(user)
      axios({url: `${this.$axios.defaults.baseURL}auth/login`, data: user, method: 'POST' })
      .then(resp => {
        console.log(resp.headers)
        resolve(resp)
        const user = resp.data.data
        const token = resp.headers["x-auth-token"]

        
        console.log(resp.headers)
        console.log(token)
        localStorage.setItem('isLogged', true)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)

        axios.defaults.headers.common['X-Auth-Token'] = token
        commit('auth_success', user, token)
        resolve(resp)
      })
      .catch(err => {

        reject(err)
        // localStorage.removeItem('token')
      })
    })
  },
  logout({commit}, user) {
    return new Promise((resolve, reject) => {
      
      console.log(user)
      let token = localStorage.getItem('token');
      console.log(token)
      axios({
        url: `${this.$axios.defaults.baseURL}auth/logout`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          ['X-Auth-Token']: token
        }
      })
      .then(resp => {
        resolve(resp)
        localStorage.setItem('isLogged', false)
        localStorage.removeItem('user')
        localStorage.removeItem('token')
          commit('auth_logout')
        resolve(resp)
      })
      .catch(err => {
        reject(err)
        // localStorage.removeItem('token')
      })
    })
  }
}


export const getters = {
  USER(state) {
    return state.user
  }
}