import Vuex from 'vuex'
import axios from 'axios'

export const state = () => ({
  status: ''
})

export const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, user){
    state.status = 'success'
    state.token = token
    state.user = user
  },
  auth_error(state){
    state.status = 'error'
  },
  logout(state){
    state.status = ''
    state.token = ''
  },
}

export const actions = {
  register({commit}, user){
	return new Promise((resolve, reject) => {
		console.log('get')
	    // commit('auth_request')
	    axios({url: 'http://ovz1.j04830129.meo8n.vps.myjino.ru:49174/api/registration', data: user, method: 'POST' })
	    .then(resp => {
	    	console.log(resp)
		    // const token = resp.data.token
		    // const user = resp.data.user
		    // localStorage.setItem('token', token)
		    // axios.defaults.headers.common['Authorization'] = token
		    // commit('auth_success', token, user)
		    resolve(resp)
	    })
	    .catch(err => {
	    	console.log(err)
	      	// commit('auth_error', err)
	      	// localStorage.removeItem('token')
	      	// reject(err)
	    })
	  })
	}
}


export const getters = {

}
