import Vue from 'vue'
import Vuex from 'vuex'
import height from './modules/HeightModule'
import token from './modules/tokenModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    height: height,
    token: token
  }
})
