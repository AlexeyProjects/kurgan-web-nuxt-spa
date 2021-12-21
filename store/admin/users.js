import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  
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