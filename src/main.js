// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import * as JWT from 'jwt-decode'

import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueAxios)
Vue.use(axios)

const idModule = '1'

Vue.config.productionTip = false
const urlApi = 'https://jcmsresource.herokuapp.com/'

const mainEndPoints = {
  auth: {
    obtainToken: 'auth/obtain_token/',
    refleshToken: 'auth/refresh_token'
  },
  setup: {
    modules: 'setup/module/',
    pages: 'setup/page/'
  }
}
/*
const config = {
  headers: {
    accept: 'application/json'
  },
  data: {}
}
*/

const modulesModule = {
  namespaced: true,
  state: {
    module: {}
  },
  mutations: {
    updateModule (state, newModule) {
      state.module = newModule
    }
  },
  actions: {
    obtainModule () {
      axios.get(urlApi + mainEndPoints.setup.modules + idModule + '/')
        .then((response) => {
          console.log('getting module', response)
          this.commit('updateModule', response.data.token)
        })
        .catch((error) => {
          console.log(error, store)
        })
    }
  },
  getters: {}
}
const store = new Vuex.Store({
  modules: {
    a: modulesModule
  },
  state: {
    jwt: localStorage.getItem('t'),
    endpoints: {
      obtainJWT: 'https://jcmsresource.herokuapp.com/auth/obtain_token/',
      refreshJWT: 'https://jcmsresource.herokuapp.com/auth/refresh_token'
    },
    contador: 1
  },

  mutations: {
    updateToken (state, newToken) {
      localStorage.setItem('t', newToken)
      state.jwt = newToken
    },
    removeToken (state) {
      localStorage.removeItem('t')
      state.jwt = null
    },
    incrementByValue (state, valor) {
      state.contador += valor
    },
    decrement (state) {
      state.contador = state.contador - 1
    }
  },
  actions: {
    // WE WILL ADD THIS LATER
    obtainToken (context, {username, password}) {
      const payload = {
        username: username,
        password: password
      }
      axios.post(this.state.endpoints.obtainJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error, store)
        })
    },
    refreshToken () {
      const payload = {
        token: this.state.jwt
      }
      axios.post(this.state.endpoints.refreshJWT, payload)
        .then((response) => {
          this.commit('updateToken', response.data.token)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    inspectToken () {
      const token = this.state.jwt
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
    }
  },
  getters: {
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
})
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'

const m = store.state.contador
console.log(m)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
