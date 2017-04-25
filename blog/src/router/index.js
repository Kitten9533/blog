import Vue from 'vue'
import Router from 'vue-router'
import 'babel-polyfill' // es6 shim
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Blog from '@/components/Blog'
import VueResource from 'vue-resource'
import Index from '@/components/Index'
import Info from '@/components/Info'
import Info2 from '@/components/info2'

Vue.use(VueResource)
Vue.use(Router)

// export default
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
    {
      path: '/info2',
      name: 'Info2',
      component: Info2
    }
  ]
})
export default router
