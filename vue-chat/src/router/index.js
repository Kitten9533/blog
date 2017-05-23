import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Cover from '@/components/Cover'
import Chat from '@/components/main/Chat'

Vue.use(Router)

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
    }
  ]
})
