import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  cityInfo: {},
  cityId: JSON.parse(localStorage.getItem('cityInfo')).id
})

export const mutations = {
  putCityInfo(state,data) {
    state.cityInfo = data
    localStorage.setItem('cityInfo', JSON.stringify(data))
    
  }
}

export const actions = {
  getCityInfo({commit}) {
    return new Promise((resolve, reject) => {
      axios(    
          `${this.$axios.defaults.baseURL}city`,
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
        console.log(resp.data[0])
        commit('putCityInfo', resp.data[0])
      })
      .catch(err => {
        reject(err)
        console.log(err)
      })
    })
  },

  sendCityinfo({commit}, data){
    return new Promise((resolve, reject) => {
      axios(    
          `${this.$axios.defaults.baseURL}city/${this.state.admin.cityinfo.cityId}`,
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
  },

  createCityinfo({commit}, data){
    return new Promise((resolve, reject) => {
      axios(    
          `${this.$axios.defaults.baseURL}city`,
        {  
          data: data,
          method: 'POST',
          

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
  },

  cityId(state) {
    return state.cityId
  }
}