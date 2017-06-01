import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
// import Hello from '@/components/Hello'
import Cover from '@/components/Cover'
import Chat from '@/components/main/Chat'
import Pm from '@/components/main/Pm'
import Right from '@/components/Right'

Vue.use(VueResource)
Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Cover',
    //   component: Cover
    // },
    {
      path: '/',
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
      }]
    },
    {
      path: '/right',
      name: 'Right',
      component: Right
    }
  ]
})
