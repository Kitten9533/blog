<template>
	<div class="left-box">
		<div class="left-menu">
			<div class="photo" @click="toInfo()" title="更改用户信息">
				<img src="../assets/img/signature.png"/>
				<p class="left-menu-info">用户名 
<!-- 					<span class="left-menu-option"></span> -->
				</p>
			</div>
			<ul class="left-menu-ul">
				<li><p>1号坑</p></li>
				<li><p>2号坑</p></li>
				<li><p>3号坑</p></li>
				<li><p>4号坑</p></li>
			</ul>
		</div>
	</div>
</template>

<style>
	*{
		margin:0;padding:0;
	}
	.left-box{
		width: 190px;
		height: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	.photo{
		cursor:pointer;
		padding:20px 80px 0 40px;
		border-bottom: 1px solid rgba(255,255,255,0.1);
	}
	.photo img{
		background: #fff;
		border-radius: 40px;
		width: 60px;
		height: 60px;
	}
	.photo p{
		color:#fff;
		margin-top:14px;
		font-size: 12px;
		line-height: 1.4;
		display: inline-block;
	}
	.photo .left-menu-info{

	}
/*	.left-menu-option{
		cursor:pointer;
		display: inline-block;
		margin-left:5px;
		border: 5px solid;
		border-color: #fff transparent transparent transparent;
	}*/
	.left-menu-info{
		cursor: pointer;
	}
	.left-menu-info:after{
		content: ':)';
		margin-left:5px;
/*		cursor:pointer;
		display: inline-block;
		border: 5px solid;
		border-color: #fff transparent transparent transparent;*/
	}
	.left-menu{
		width: 180px;
		height: 1000px;
		background: #2F4F4F;
		color:#fff;
	}
	.left-menu-ul li{
		text-align: left;
    	padding: 20px 10px 5px 30px;
	}
</style>

<script>
	export default {
	  data () {
	    return {
	      msg: ''
	    }
	  },
	  methods: {
	    toInfo () {
	      this.$router.push({'name': 'Info'})
	    }
	  }
	}
</script>
