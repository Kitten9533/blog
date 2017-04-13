<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<!-- <script src="../assets/js/jquery.min.js"></script> -->
<!-- <script src="../assets/js/bootstrap.min.js?v=3.3.6"></script> -->
<!-- <script src="../assets/js/plugins/iCheck/icheck.min.js"></script> -->
<script>
export default {
  name: 'app'
}
</script>

<style>
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
