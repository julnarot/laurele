// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

import './styles/global.scss' // This line here

Vue.use(VueMaterial)
// Vue.material.setCurrentTheme('default')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
