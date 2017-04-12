import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/user_info',
      component: UserInfo
    }
  ]
})
