import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  service: []
})

export const mutations = {
  putServiceState(state, data) {
    state.service = data
  }
}

export const actions = {
  getServices({commit}, data){
    return new Promise((resolve, reject) => {
      console.log(resolve)
      axios(
          "http://ovz1.j04830129.meo8n.vps.myjino.ru/api/service?cityId=1",
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
        commit('putServiceState', resp.data)
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
  getAllService(state) {
    return state.service
  }
}
