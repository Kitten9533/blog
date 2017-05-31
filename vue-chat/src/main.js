// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import io from '../static/js/socket.io'

Vue.config.productionTip = false

Vue.prototype.httpServer = io.connect('http://127.0.0.1:8010')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
