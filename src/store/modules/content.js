import axios from 'axios'
import utils from '../../util/config'

const state = {
  sectionContent: {}
}

// getters
const getters = {}

// actions

const actions = {
  obtainSectionContent (idPage) {
    axios.get(utils.apiPath + utils.endPointJcms.setup.pages + idPage + '/page_section_content/')
      .then((response) => {
        this.commit('setSectionContent', response.data.token)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// mutations
const mutations = {
  setSectionContent (state, newData) {
    state.sectionContent = newData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
