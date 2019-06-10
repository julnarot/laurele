import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/menus'
import modules from './modules/modules'
import interceptor from './modules/interceptor'
import VueResource from 'vue-resource'

// is not recomended
// import VueMaterial from 'vue-material'
// import 'vue-material/dist/vue-material.min.css'
// end is not recomended
// Vue.use(VueMaterial)

import {
  MdButton,
  MdContent,
  // MdTabs,
  MdToolbar,
  MdMenu,
  MdIcon,
  MdList
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
// Vue.use(MdTabs)
Vue.use(MdToolbar)
Vue.use(MdMenu)
Vue.use(MdIcon)
Vue.use(MdList)

Vue.use(Vuex)
// Vue.use(VueAxios)
// Vue.use(axios)
Vue.material.locale.dateFormat = 'dd/MM/yyyy'
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    menus,
    modules,
    interceptor
  }
})
