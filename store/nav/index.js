import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  data: '',
  rightMenu: false

})

export const mutations = {
  PUT_NAV(state,data){
    state.data = data
  },
  showRightMenu(state) {
    state.rightMenu = true
    console.log('show')
  },
  hideRightMenu(state) {
    state.rightMenu = false
  }
  
}

export const actions = {
  GET_NAV({commit}, user){
    axios({url: '/nav.json', method: 'GET' })
    .then ((res) => {
      console.log(res.data)
      commit('PUT_NAV', res.data)
    })
  }
}


export const getters = {
  BUSINESS(state) {
    return state.data.business
  },
  MODERATOR(state) {
    return state.data.moderator
  },
  ADMINISTRATOR(state) {
    return state.data.administrator
  },
  rightMenu(state) {
    return state.rightMenu
  }
}