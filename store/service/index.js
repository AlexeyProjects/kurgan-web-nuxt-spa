import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  send({commit}, params){
    return new Promise((resolve, reject) => {
      console.log(params)
      console.log(params.data)
      axios(    
          `${this.$axios.defaults.baseURL}${params.params}`,
        {  
          data: params.data,
          method: 'POST',
          Accept: 'application/json',
          headers: {
            'X-Auth-Token': localStorage.getItem('token'),
            'Content-Type': `multipart/form-data; boundary=WebAppBoundary`
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
  put({commit}, params){
    return new Promise((resolve, reject) => {
      console.log(params)
      console.log(params.data)
      axios(    
          `${this.$axios.defaults.baseURL}${params.params}`,
        {  
          data: params.data,
          method: 'PUT',
          headers: {
            'accept': 'application/json',
            'X-Auth-Token': localStorage.getItem('token'),
            'Content-Type': `multipart/form-data; boundary=WebAppBoundary`
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
  getData({commit}, params){
    return new Promise((resolve, reject) => {
      console.log(params)
      axios(
        {
          url: `${this.$axios.defaults.baseURL}${params.params}`,
          method: 'GET',
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
  
}