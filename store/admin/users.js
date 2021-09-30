import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  users: {
    users: [],
    moderators: []
  }
})

export const mutations = {
  putUsers(state, data) {
    state.users.users = data
  },
  putModerators(state,data) {
    state.users.moderators = data
  }
}

export const actions = {
  getUsers({commit}, params){
    return new Promise((resolve, reject) => {
      console.log(params)
      console.log(resolve)
      
      axios(    
          `${this.$axios.defaults.baseURL}admin/users?&role=${params.role}&offset=${params.offset}&limit=${params.limit}`,
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
  },
  createModerator({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(resolve)
      axios(    
          `${this.$axios.defaults.baseURL}admin/moderator`,
        {  
          data: data,
          method: 'POST',
          Accept: 'application/json',
          headers: {
            'X-Auth-Token': localStorage.getItem('token'),
          }, 
          
        }
        )
      .then(resp => {
        resolve(resp)
        
        console.log(resp)



      })
      .catch(err => {
        reject(err)
        console.log(err)
      })
    })
  },
}


export const getters = {
  getUsers(state) {
    return state.users.users
  },
  getAllModerators(state) {
    return state.users.moderator
  }
}