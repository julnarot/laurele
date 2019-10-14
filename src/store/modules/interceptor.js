// initial state
import Vue from 'vue'
import Vuex from 'vuex'
import VueAxios from 'vue-axios'
import axios from 'axios'
import config from '../../util/config'
const state = {
  jwt: localStorage.getItem('t'),
  endpoints: {
    obtainJWT: config.apiPath + config.endPointJcms.auth.obtainToken,
    refreshJWT: config.apiPath + config.endPointJcms.auth.refleshToken
  },
  contador: 1
}

Vue.use(Vuex)
Vue.use(VueAxios)
Vue.use(axios)

// getters
const getters = {
  obtenerContador: function (state) {
    return `Es: ${state.contador}`
  },
  isLoged: function (state) {
    if (state.jwt) {
      return true
    } else {
      return false
    }
  }
}

// actions
const actions = {
  // WE WILL ADD THIS LATER
  obtainToken (context, {username, password}) {
    const payload = {
      username: username,
      password: password
    }
    axios.post(this.state.interceptor.endpoints.obtainJWT, payload)
      .then((response) => {
        this.commit('interceptor/updateToken', response.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  closeSession () {
    this.commit('interceptor/removeToken')
  },
  refreshToken () {
    const payload = {
      token: this.state.interceptor.jwt
    }
    axios.post(this.state.interceptor.endpoints.refreshJWT, payload)
      .then((response) => {
        this.commit('interceptor/updateToken', response.data.token)
      })
      .catch((error) => {
        console.log('loginFile', error)
      })
  }
  /* inspectToken () {
    const token = this.state.interceptor.jwt
    if (token) {
      const decoded = JWT(token)
      const exp = decoded.exp
      const origIat = decoded.orig_iat
      if (exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - origIat < 628200) {
        this.dispatch('refreshToken')
      } else if (exp - (Date.now() / 1000) < 1800) {
        // DO NOTHING, DO NOT REFRESH
        console.log()
      } else {
        // PROMPT USER TO RE-LOGIN, THIS ELSE CLAUSE COVERS THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
      }
    }
  } */
}

// mutations
const mutations = {

  updateToken (state, newToken) {
    localStorage.setItem('t', newToken)
    state.jwt = newToken
  },
  removeToken (state) {
    localStorage.removeItem('t')
    state.jwt = null
    // this.state.isLoged(state)
  },
  incrementByValue (state, valor) {
    state.contador += valor
  },
  decrement (state) {
    state.contador = state.contador - 1
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
