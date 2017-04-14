import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
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
    }
  ]
})
export default router
