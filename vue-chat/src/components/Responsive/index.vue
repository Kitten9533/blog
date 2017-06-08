<template>
<div class="fullHeight">
	<nav class="navbar navbar-default">
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
	        <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
	        <li><a href="#">Chat</a></li>
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
	        <li><a href="#">HELP</a></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">Separated link</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div>
	    </div>
	    </div>
	  </div>
	</nav>
	<div class="container-fluid fullHeight maxHeight">
		<div class="row bg fullHeight">
			<div class="col-md-5 noPadding fullHeight">
			</div>
			<div class="col-md-7 noPadding fullHeight">
				<div class="jumbotron fullHeight">
					<div class="container fullHeight">
						<div>
							<h1>Welocme</h1>
						  	<p>What can we help you with</p>
						  	<p><a class="btn btn-success btn-lg" href="#" role="button">Learn More</a></p>
						  	<div class="input-group">
							<input type="text" class="form-control" placeholder="Email Address" aria-describedby="basic-addon2" v-model="email" @keyup.13="sendEmail">
							  <span class="input-group-addon btn" @click="sendEmail" id="basic-addon2">START YOUR TRIAL</span>
							</div>
							<div :class="['alert', {'alert-success': emailRes.code}, {'alert-danger': !emailRes.code}]" role="alert" v-text="emailRes.msg">Send Successful</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<style scoped>
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
		background: url('../../../static/imgs/bg.jpg') 100% 100% no-repeat;
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
	.alert{
		/*margin-top: 5px;*/
	}
</style>

<script>
	export default{
	  data () {
	    return {
	      email: '',
	      emailRes: {
	        code: 1, // 1成功 0失败
	        msg: 'Send Successful' // Fail in Send
	      }
	    }
	  },
	  methods: {
	    sendEmail () {
	      var reg = new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
	      if (reg.test(this.email)) {
	        // TODO调用发送邮件
	        this.emailRes.code = 1
	        this.emailRes.msg = '发送中...'
	      } else {
	        this.emailRes.code = 0
	        this.emailRes.msg = '邮箱格式不正确'
	      }
	    }
	  }
	}
</script>
