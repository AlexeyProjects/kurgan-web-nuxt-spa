import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  cityInfo: {}
})

export const mutations = {
  putCityInfo(state,data) {
    state.cityInfo = data
  }
}

export const actions = {
  getCityInfo({commit}, data) {
    return new Promise((resolve, reject) => {
      console.log(data)
      axios(    
          `${this.$axios.defaults.baseURL}city/1`,
        {  
          method: 'GET',
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'X-Auth-Token': localStorage.getItem('token'),
          }, 
          
        }
        )
      .then(resp => {
        
        resolve(resp)
        console.log(resp)
        commit('putCityInfo', resp.data.data)
      })
      .catch(err => {
        reject(err)
        console.log(err)
      })
    })
  },
  sendCityinfo({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(data)
      axios(    
          `${this.$axios.defaults.baseURL}city/1`,
        {  
          data: data,
          method: 'PUT',
          

          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'X-Auth-Token': localStorage.getItem('token'),
          }, 
          
        }
        )
      .then(resp => {
        
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
  cityInfo(state) {
    return state.cityInfo
  }
}