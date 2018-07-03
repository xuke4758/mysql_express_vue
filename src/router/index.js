import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import home from '@/components/home/home'
import out from '@/components/out/out'
import A404 from '@/components/A404/A404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/out',
      name: 'out',
      component: out
    },

    {
    	path: '*',
    	name: 'A404',
    	component: A404
    }
  ]
})
