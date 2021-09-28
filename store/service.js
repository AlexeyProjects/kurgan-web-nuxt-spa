import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  
})

export const mutations = {
  
}

export const actions = {
  send({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(data)
      axios(    
          'http://ovz1.j04830129.meo8n.vps.myjino.ru:49174/api/service/1',
        {  
          data: data,
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
  getCity({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(data)
      axios(
        {
          url: 'http://ovz1.j04830129.meo8n.vps.myjino.ru:49174/api/service/3',
          method: 'GET'
        }
        )
      .then(resp => {
        resolve(resp)

        console.log(resp)


        axios.defaults.headers.common['X-Auth-Token'] = token

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