// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import crypto from 'crypto'
// import store from './store/store'
// import echarts from 'echarts'

// import io from '../static/js/socket.io'
// import { accordion, panel } from 'vue-strap'
import '../static/css/normalize.css'
import '../static/css/bootstrap.min.css'
import '../static/js/bootstrap.min'
import * as types from './store/types'

Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios
Vue.prototype.$key = 'hahaha'
Vue.prototype.$crypto = crypto
Vue.prototype.$aesEncrypt = function (data) {
  const cipher = crypto.createCipher('aes192', Vue.prototype.$key)
  var crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}
Vue.prototype.$aesDecrypt = function (encrypted) {
  const decipher = crypto.createDecipher('aes192', Vue.prototype.$key)
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}
Vue.prototype.$types = types

// Vue.prototype.$store = store

// Vue.prototype.$echarts = echarts
// Vue.prototype.httpServer = io.connect('http://127.0.0.1:8010')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
