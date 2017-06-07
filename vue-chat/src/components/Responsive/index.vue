<template>
<div>
	<nav class="navbar navbar-default navbar-fixed-top">
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
	<div class="container-fluid">
		<div class="row">
		<div class="col-md-12 col-xs-12 col-sm-12 col-lg-12 column nopadding">
			<div class="carousel slide" id="carousel-119615">
				<ol class="carousel-indicators">
					<li class="active" data-slide-to="0" data-target="#carousel-119615">
					</li>
					<li data-slide-to="1" data-target="#carousel-119615">
					</li>
					<li data-slide-to="2" data-target="#carousel-119615">
					</li>
				</ol>
				<div class="carousel-inner">
					<div class="item active">
						<img alt="" src="../../../static/imgs/bg.jpg" class="img-responsive" />
						<div class="carousel-caption">
							<h4>
								First Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						<img alt="" src="../../../static/imgs/background2.jpg" class="img-responsive" />
						<div class="carousel-caption">
							<h4>
								Second Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
					<div class="item">
						<img alt="" src="../../../static/imgs/bg.jpg" class="img-responsive"/>
						<div class="carousel-caption">
							<h4>
								Third Thumbnail label
							</h4>
							<p>
								Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
							</p>
						</div>
					</div>
				</div> 
				<a class="left carousel-control" href="#carousel-119615" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a> <a class="right carousel-control" href="#carousel-119615" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
			</div>
		</div>
	</div>
	</div>
</div>
</template>

<style scoped>
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
		background: #999;
		transition: all 0.3s ease-in-out;
		box-sizing: border-box;

	}
	.navbar-default .navbar-nav>li>a:hover::after{
		width: 100%;
	}
	.navbar{
		margin-bottom: 0;
	}
	.nopadding{
		padding:0;
	}
	item img{
		width: 100%;
	}
</style>

<script>
	export default{
	  data () {
	    return {}
	  }
	}
</script>
