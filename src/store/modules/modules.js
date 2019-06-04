// initial state
import axios from 'axios'
import utils from '../../util/config'
const state = {
  module: {}
}

// getters
const getters = {}

// actions

const actions = {
  obtainModule () {
    axios.get(utils.apiPath + utils.endPoint.setup.modules + utils.appIdModule + '/')
      .then((response) => {
        console.log('getting module', response)
        this.commit('updateModule', response.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  updateModule (state, newModule) {
    state.module = newModule
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}