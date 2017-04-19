import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Blog from '@/components/Blog'
import VueResource from 'vue-resource'

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
    }
  ]
})
export default router
