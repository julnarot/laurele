// initial state
import axios from 'axios'
import utils from '../../util/config'
const state = {
  repositoriesList: []
}

// getters
const getters = {}

// actions

const actions = {
  obtainRepository () {
    const params = {
      q: 'topic:angular' // q: 'topic:angular+topic:angular'
    }
    return new Promise((resolve, reject) => {
      axios.get(utils.apiGitHub + utils.endPointGitHub.search.repositories, {params: params})
        .then((response) => {
          resolve(response.data['items'] || true)
          this.commit('repositories/updateRepository', response.data['items'])
        })
        .catch((error) => {
          reject(error || false)
          console.error('!!!STORIES: ERROR ', error)
        })
    })
  }
}

// mutations
const mutations = {
  updateRepository (state, newRepository) {
    state.repositoriesList = newRepository
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
