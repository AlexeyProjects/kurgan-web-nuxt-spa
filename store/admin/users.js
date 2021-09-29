import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  users: []
})

export const mutations = {
  putUsers(state, data) {
    state.users = data
  }
}

export const actions = {
  getServices({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(resolve)
      axios(    
          `${this.$axios.defaults.baseURL}admin/users?&role=MODERATOR`,
        {  
          // data: data,
          method: 'GET',
          Accept: 'application/json',
          headers: {
            'X-Auth-Token': localStorage.getItem('token'),
          }, 
          
        }
        )
      .then(resp => {
        commit('putUsers', resp.data)
        resolve(resp)
        console.log('get service')
        console.log(resp)



      })
      .catch(err => {
        reject(err)
        console.log(err)
      })
    })
  }
}


export const getters = {
  getAllUsers(state) {
    return state.users
  }
}