// initial state
import axios from 'axios'
import utils from '../../util/config'
const state = {
  module: {},
  pageMenus: [{
    id: null,
    menu: null,
    menu_name: '',
    path: '/'
  }]
}

// getters
const getters = {
  getPageMenu: function (state) {
    return state.pageMenus
  }
}

// actions

const actions = {
  obtainModule () {
    axios.get(utils.apiPath + utils.endPointJcms.setup.modules + utils.appIdModule + '/content/')
      .then((response) => {
        this.commit('modules/updateModule', response.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  obtainPageMenuModule () {
    axios.get(utils.apiPath + utils.endPointJcms.setup.modules + utils.appIdModule + '/menu_page/')
      .then((response) => {
        console.log(response.data.result)
        this.commit('modules/setPageMenuModule', response.data.result)
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
  },
  setPageMenuModule (state, data) {
    state.pageMenus = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
