// initial state
import Data from '../../util/mocks'
const state = {
  all: [],
  basicMenu: Data.mainMenu
}

// getters
const getters = {
  getMenu: function (state) {
    return state.basicMenu
  }
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
