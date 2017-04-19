<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    @import "./assets/css/bootstrap.min14ed.css?v=3.3.6";
    @import "./assets/css/bootstrap.min.css";
    @import "./assets/css/plugins/iCheck/custom.css";
    @import "./assets/css/animate.min.css";
    @import "./assets/css/style.min862f.css?v=4.1.0";
    @import "./assets/css/font-awesome.min93e3.css?v=4.4.0";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  margin:0;
  padding:0;
}
</style>
