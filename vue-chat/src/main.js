// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import io from '../static/js/socket.io'
// import { accordion, panel } from 'vue-strap'
import '../static/css/normalize.css'
import '../static/css/bootstrap.min.css'
import '../static/js/bootstrap.min'

Vue.config.productionTip = false

Vue.prototype.httpServer = io.connect('http://127.0.0.1:8010')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
