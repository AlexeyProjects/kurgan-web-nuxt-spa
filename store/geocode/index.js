import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  
})

export const mutations = {
  putCityInfo(state,data) {

  }
}

export const actions = {
  getGeoFromAddress({commit}, keyword) {
    return new Promise((resolve, reject) => {
      axios(    
          `${this.$axios.defaults.baseURL}geocoding?keyword=${keyword}`,
        {  
          method: 'GET',
          headers: {
            "Accept": "application/json",
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
  }
}


export const getters = {
  cityInfo(state) {
    return state.cityInfo
  }
}