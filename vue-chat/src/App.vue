<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store/store'
export default {
  store,
  name: 'app'
}

// 高度调整
// var resizeTime = null
// window.onresize = () => {
//   if (resizeTime) {
//     clearTimeout(resizeTime)
//   }
//   resizeTime = setTimeout(() => {
//     store.commit('change')
//     store.dispatch('setHeight')
//   }, 500)
// }

window.onresize = () => {
  store.commit('change')
  // store.dispatch('setHeight')
}

</script>

<style>
  @import '/static/css/iconfont.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }
</style>
