<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <router-link to="/home" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划表
        </router-link>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view @timeUpdate="timeUpdate" @deleteTime="deleteTime"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'wrapper',
  components: {
    sidebar: Sidebar
  },
  data () {
    return {
      totalTime: this.getTime()
    }
  },
  methods: {
    deleteTime (timeEntry) {
      this.totalTime -= parseFloat(timeEntry.totalTime)
    },
    timeUpdate (timeEntry) {
      this.totalTime += parseFloat(timeEntry.totalTime)
    },
    getTime() {
      var total = ""
      let time = localStorage.getItem('time')
      if(!!time){
        total = time
      }
      else{
        total = "0"
      }
      return parseFloat(total)
    }
  }
}
</script>

<style>

</style>
