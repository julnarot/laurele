import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Services from '@/components/services'
import Details from '@/components/details'
import VueResource from 'vue-resource'
// import HelloWorld from '@/components/HelloWorld'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.material.locale.dateFormat = 'dd/MM/yyyy'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/blog',
      name: 'blog',
      component: Blog
    }, {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, {
      path: '/services',
      name: 'services',
      component: Services
    }, {
      path: '/details/:Pid',
      name: 'details',
      component: Details
    }
  ]
})
