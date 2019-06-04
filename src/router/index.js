import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Services from '@/components/services'
import Details from '@/components/details'
Vue.use(Router)
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
