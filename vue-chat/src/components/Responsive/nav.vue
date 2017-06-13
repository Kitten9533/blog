<template>
	<nav class="navbar navbar-default navbar-fixed-top">
	<!-- <nav class="navbar navbar-default"> -->
	  <div class="container-fluid">
	  <div class="row">
	  <div class="col-md-12 col-xs-12 col-sm-12 col-lg-12">
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">Kitten</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	      	<li v-for="(item, index) in top" :class="{active: item.active}" @click="changeAcitve(index)">
	      		<router-link :to="item.href" v-html="item.text"></router-link>
	      	</li>
<!-- 	        <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
	        <li><a href="#">Chat</a></li> -->
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">Separated link</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">One more separated link</a></li>
	          </ul>
	        </li>
	      </ul>
	      <form class="navbar-form navbar-left">
	        <div class="form-group">
	          <input type="text" class="form-control" placeholder="Search">
	        </div>
	        <button type="submit" class="btn btn-default">Submit</button>
	      </form>
	      <ul class="nav navbar-nav navbar-right">
	        <li><router-link :to="'/login'">登录</router-link></li>
	        <li><router-link :to="'/register'">注册</router-link></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人信息 <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">个人信息</a></li>
	            <li><a href="#">修改头像</a></li>
<!-- 	            <li><a href="#">Something else here</a></li> -->
	            <li role="separator" class="divider"></li>
	            <li><a href="#">退出</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div>
	    </div>
	    </div>
	  </div>
	</nav>
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
</style>

<script>
	export default{
	  data () {
	    return {
	      top: [{
	        text: 'Overview <span class="sr-only">(current)',
	        href: '/overview',
	        active: true
	      },
	      {
	        text: 'ECharts',
	        href: '/echarts',
	        active: false
	      }]
	    }
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
