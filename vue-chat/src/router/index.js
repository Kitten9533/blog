import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
// import Hello from '@/components/Hello'
import Cover from '@/components/Cover'
import Chat from '@/components/main/Chat'
import Pm from '@/components/main/Pm'
import Right from '@/components/Right'
import Upload from '@/components/Upload'
import Upload2 from '@/components/main/Upload2'
import Upload3 from '@/components/main/Upload3'
import Index from '@/components/Responsive/index'

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
      name: 'Index',
      component: Index
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
