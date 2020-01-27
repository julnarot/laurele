// initial state
import axios from 'axios'
import utils from '../../util/config'
import Data from '../../util/mocks'

const state = {
  all: [],
  basicMenu: Data.mainMenu,
  menuList: [],
  currentPage: ''
}

// getters
const getters = {
  getMenu: function (state) {
    return state.basicMenu
  }
}

// actions
const actions = {
  obtainMenu () {
    axios.get(utils.endPointJcms + utils.endPoint.setup.menu)
      .then((response) => {
        console.log('getting Menu', response)
        this.commit('updateMenu', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  selectMenu (context, {id}) {
    axios.get(utils.apiPath + utils.endPointJcms.setup.pages + id + '/contenido/')
      .then((response) => {
        this.commit('menus/updatePage', response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  updateMenu (state, newMenu) {
    state.menuList = newMenu
  },
  updatePage (state, newPage) {
    state.currentPage = newPage
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
