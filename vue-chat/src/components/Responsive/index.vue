<template>
<div class="fullHeight">
<!-- 	<nav class="navbar navbar-default navbar-fixed-top"> -->
	<navTemp></navTemp>
	<router-view></router-view>
	<notice></notice>
</div>
</template>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
	.navbar{
		background: #fff;
	}
	.navbar-default 
	.navbar-nav>.active>a, 
	.navbar-default 
	.navbar-nav>.active>a:focus, 
	.navbar-default {
		background: #fff;
		transition: all 0.3s ease-in-out;
	}
	.navbar-nav>.active>a:hover{
		background: #e7e7e7;
		transition: all 0.3s ease-in-out;
	}
	.navbar-nav>li>a,
	.navbar-nav>li>a:focus{
		background: #fff;
		transition: all 0.3s ease-in-out;
	}
	.navbar-nav>li>a:hover{
		background: #e7e7e7 !important;
		transition: all 0.3s ease-in-out;
	}
	.navbar-nav>.active>a:before{
		content: '';
		display: block;
		width: 100%;
		height: 2px;
		background: rgb(91,122,222);
		position: absolute;
		margin-left: -15px;
		bottom: 0;
	}
	.navbar-default .navbar-nav>li>a,
	.navbar-default .navbar-nav>li>a:link,
	.navbar-default .navbar-nav>li>a:visited,
	.navbar-default .navbar-nav>li>a:focus{
		text-decoration: none;
		position: relative;
		padding:0 15px;
		line-height: 50px;
	}
	.navbar-default .navbar-nav>li>a:after{
		content: '';
		display: block;
		width: 0px;
		height: 2px;
		margin-left: -15px;
		margin-top: -2px;
		position: absolute;
		/*background: rgb(51,122,123);*/
		background: rgb(91,122,222);
		transition: all 0.3s ease-in-out;
		box-sizing: border-box;

	}
	.navbar-default .navbar-nav>li>a:hover::after{
		width: 100%;
	}
	.navbar{
		margin-bottom: 0;
	}
	.fullHeight{
		height: 100%;
	}
	.noPadding{
		padding: 0;
	}
	.minHeight{
		min-height: 600px;
	}
	.maxHeight{
		max-height: 600px;
	}
	.bg{
		background: url('../../../static/imgs/bg.jpg') center center;
		background-size: cover;
		-moz-background-size: cover;
		-webkit-background-size: cover;
	}
	.container .jumbotron, .container-fluid .jumbotron{
		border-radius: 0;
	}
	.jumbotron{
		margin-bottom: 0;
		background: rgba(0,0,0,0.1);
		position: relative;
	}
	.jumbotron h1{
		margin-top: 60px;
		margin-bottom: 30px;
		line-height: 100px;
	}
	.jumbotron-box{
		height: 100%;
	}
	.jumbotron-div{
		margin-top: 200px;
	}
</style>

<script>
	import notice from './notice.vue'
	import navTemp from './nav.vue'
	export default{
	  data () {
	    return {
	      top: [{
	        text: 'Overview <span class="sr-only">(current)',
	        href: '#',
	        active: true
	      },
	      {
	        text: 'ECharts',
	        href: '#',
	        active: false
	      }],
	      email: '',
	      emailRes: {
	        code: 1, // 1成功 0失败
	        msg: 'Send Successful' // Fail in Send
	      },
	      showRes: false
	    }
	  },
	  components: {
	    notice: notice,
	    navTemp: navTemp
	  },
	  methods: {
	    changeAcitve (index) {
	      for (let i = 0; i < this.top.length; i++) {
	        this.top[i].active = false
	      }
	      this.top[index].active = true
	    },
	    sendEmail () {
	      this.showRes = true
	      this.emailRes = {
	        code: 1,
	        msg: '发送中...'
	      }
	      var reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
	      if (reg.test(this.email)) {
	        // TODO调用发送邮件
	        // let data = {email: this.email}
	        this.$http.get('/api/send_trail_mail?email=' + this.email)
	          .then((response) => {
	            this.emailRes = response.body
	            this.hideEmailRes()
	          })
	          .catch((reject) => {
	            this.emailRes = reject.body
	            this.hideEmailRes()
	          })
	      } else {
	        this.emailRes.code = 0
	        this.emailRes.msg = '邮箱格式不正确'
	        this.hideEmailRes()
	      }
	    },
	    hideEmailRes () {
	      var self = this
	      setTimeout(function () {
	        self.showRes = false
	      }, 2000)
	    }
	  }
	}
</script>
