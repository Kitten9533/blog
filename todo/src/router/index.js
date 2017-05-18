import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sidebar from '@/components/Sidebar'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'

Vue.use(Router)

const router = new Router()

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
   	  path: '/siderbar',
   	  component: Sidebar
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children:[{
      	path: 'log-time',
      	component: LogTime
      }]
    }
  ]
})
