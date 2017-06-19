import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
// import VueResource from 'vue-resource'
// import Hello from '@/components/Hello'
import Cover from '@/components/Cover'
import Chat from '@/components/main/Chat'
import Pm from '@/components/main/Pm'
import Right from '@/components/Right'
import Upload from '@/components/Upload'
import Upload2 from '@/components/main/Upload2'
import Upload3 from '@/components/main/Upload3'
import Index from '@/components/Responsive/index'
import Nav from '@/components/Responsive/nav'
import Overview from '@/components/Responsive/overview'
import Index2 from '@/components/Responsive/index2'
import Echatrs from '@/components/Responsive/echarts'
import Register from '@/components/Responsive/register'
import Login from '@/components/Responsive/login'
import Userinfo from '@/components/Responsive/userinfo'
import store from '@/store/store'

console.log(store)

// Vue.use(VueResource)
Vue.use(Router)
Vue.use(Vuex)

const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Cover',
    //   component: Cover
    // },
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/overview',
      children: [{
        path: 'nav',
        component: Nav
      },
      {
        path: 'overview',
        component: Overview
      },
      {
        path: 'echarts',
        component: Echatrs
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'userinfo',
        component: Userinfo,
        meta: {
          requireAuth: true// 添加该字段，表示进入这个路由是需要登录的
        }
      }]
    },
    {
      path: '*',
      redirect: '/overview'
    },
    {
      path: '/nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/',
      name: 'Index2',
      component: Index2
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/cover',
      name: 'Cover',
      component: Cover,
      children: [{
        path: 'chat',
        component: Chat
      },
      {
        path: 'pm',
        component: Pm
      },
      {
        path: 'upload',
        component: Upload
      },
      {
        path: 'upload2',
        component: Upload2
      },
      {
        path: 'upload3',
        component: Upload3
      }]
    },
    {
      path: '/right',
      name: 'Right',
      component: Right
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    alert(store.state.token.accessToken)
    if (store.state.token.accessToken) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}// 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
