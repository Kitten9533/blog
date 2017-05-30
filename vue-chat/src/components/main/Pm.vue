<template>
	<div class="box" ref="box">
		<div class="top">
			<!-- <img v-bind:src="!!userInfo.userImg ? userInfo.userImg : '/static/imgs/default.png'"/> -->
			<p v-text="userInfo.userName"></p>
			<i :class="['iconfont icon-yuanhuan', {'green': userInfo.online}, {'white': !userInfo.online}]"></i>
		</div>
		<div class="content" ref="content">
			<ul class="chat-box">
				<li class="other">
					<img src="/static/imgs/default.png"/>
					<span>你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊你好啊</span>
				</li>
				<li class="me">
					<span>啊哈哈啊哈</span>
					<img src="/static/imgs/default.png"/>
				</li>
								<li class="me">
					<span>啊哈哈啊哈</span>
					<img src="/static/imgs/default.png"/>
				</li>
								<li class="me">
					<span>啊哈哈啊哈</span>
					<img src="/static/imgs/default.png"/>
				</li>
								<li class="me">
					<span>啊哈哈啊哈</span>
					<img src="/static/imgs/default.png"/>
				</li>
								<li class="me">
					<span>啊哈哈啊哈</span>
					<img src="/static/imgs/default.png"/>
				</li>
			</ul>
		</div>
		<div class="footer">
			<div class="toolbar">toolbar</div>
			<div>
				<input type="text"/>
				<input type="button" value="Send"/>
			</div>
		</div>
	</div>
	
</template>

<style scoped>
	.box{
		width: 100%;
		height: 100%; 	
	}
	.top{
		padding: 20px 40px;
		text-align: left;
		height: 20px;
	}
	.content{
		overflow-y: auto;
	}
	.content ul{
		width: 100%;
	}
	.footer{
		height: 60px;
		position: absolute;
		bottom: 0;
	}
	.top > {
		display: inline-block;
	}
	li{
		list-style: none;
		padding: 10px 40px;
		position: relative;
	}
	.other{
		text-align: left;
	}
	.other img{
		border: 1px solid #fff;
		width: 34px;
		height: 34px;
		border-radius: 34px;
		background: #fff;
		display: inline-block;
		position: absolute;
	}
	.other span{
	    display: inline-block;
	    margin-left: 50px;
	    padding: 10px 10px 10px 20px;
	    border: 1px solid #fff;
	    border-radius: 10px;
	    background: #fff;
	    color: #717171;
	    text-align: left;
	    position: relative;
	}
	.other span:before{
		content: '';
		display: block;
		position: absolute;
		left: -18px;
		top: 4px;
		width: 0px;
		border-width: 9px;
		border-style: solid;
		border-color: transparent #fff transparent transparent;
	}
	.me{
		text-align: right;
	}
	.me img{
		border: 1px solid #fff;
		width: 34px;
		height: 34px;
		border-radius: 34px;
		background: #fff;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 40px;
	}
	.me span{
	    display: inline-block;
	    margin-right: 50px;
	    padding: 10px 10px 10px 20px;
	    border: 1px solid #fff;
	    border-radius: 10px;
	    background: #fff;
	    color: #717171;
	    text-align: left;
	    position: relative;
	}
	.me span:after{
		content: '';
		display: block;
		position: absolute;
		right: -18px;
		top: 4px;
		width: 0px;
		border-width: 9px;
		border-style: solid;
		border-color: transparent transparent transparent #fff;
	}
	.green{
		color: #5b9b5b;
	}
	.white{
		color: #ccc;
	}
</style>

<script>
	export default{
	  data () {
	    return {}
	  },
	  props: ['userInfo'],
	  updated () {
	    console.log(!!this.userInfo.userImg)
	  },
	  mounted () {
	    this.$refs.content.style.height = window.innerHeight - 180 + 'px'
	    const that = this
	    window.onresize = () => {
	      return (() => {
	        console.log('resize')
	        that.$refs.content.style.height = window.innerHeight - 180 + 'px'
	      })()
	    }
	  }
	}
</script>
