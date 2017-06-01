import Vue from 'vue'
import Vuex from 'vuex'
import height from './modules/HeightModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    height: height
  }
})
