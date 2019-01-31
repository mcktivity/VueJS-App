import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Frontend from './views/Frontend.vue'
import Uxdesign from './views/Uxdesign.vue'
import Sysadmin from './views/Sysadmin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/frontend',
      name: 'frontend',
      component: Frontend
    },
    {
      path: '/uxdesign',
      name: 'uxdesign',
      component: Uxdesign
    },
    {
      path: '/sysadmin',
      name: 'sysadmin',
      component: Sysadmin
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
