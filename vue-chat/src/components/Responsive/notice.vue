<template>
	<div>
		<transition name="fade">
			<div class="chat-div" v-if="showChat">
				<div class="chat-top">
					<img class="to-user" src="/static/imgs/user.jpg"/>
					<span class="to-user-name">聊天机器人</span>
				</div>
				<div class="chat-content">
					<ul class="content-ul">
						<li class="other"><img width="30" height="30" src="/static/imgs/user.jpg"><div>你好</div></li>
						<li class="me"><div>Hello</div><img width="30" height="30" src="/static/imgs/default.png"></li>
					</ul>
				</div>
				<div class="chat-footer">
					<div class="send-left">
						<input class="send-content" type="text" name="content" @keyup.13="sendMsg" v-model="info"/>
					</div>
					<div class="send-right" @click="sendMsg">
						<i class="iconfont icon-fasong send-btn"></i>
					</div>
				</div>
			</div>
		</transition>
		<div class="notice" @click="showChat=!showChat">
			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
		</div>
	</div>
</template>

<style scoped>
	::scrollbar {
	    width: 3px;
	}
	::-webkit-scrollbar {
	    width: 3px;
	}
	::-moz-scrollbar {
	    width: 3px;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
	.chat-div{
		position: fixed;
		z-index: 10;
		bottom: 110px;
		right: 60px;
		border: 1px solid rgba(92, 184, 92, 1);
		height: 350px;
		width: 250px;
		border-radius: 5px;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0px rgba(0, 0, 0, 0.3);
		overflow: hidden;
	}
	.chat-div:after{
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		bottom: -20px;
		border-width: 10px;
		border-style: solid;
		right: 0;
		border-color: rgb(92, 184, 92) transparent transparent transparent;
	}
	.chat-top{
		height: 40px;
		background: rgba(92, 184, 92, 1);
	}
	.to-user{
		width: 30px;
		height: 30px;
		border-radius: 15px;
		/*background: #fff;*/
		margin-left: 5px;
	}
	.to-user-name{
		line-height: 40px;
		color: #fff;
		margin-left: 5px;	
	}
	.chat-content{
		height: 268px;	
		background: #fff;
		overflow-y: auto;
	}
	.content-ul{
		list-style: none;
		width: 100%;
		padding: 5px;
	}
	.content-ul li{
		display: block;
		padding: 3px;
		margin-top: 3px;
		margin-bottom: 3px;
		border-radius: 5px;
		clear: both;
		position: relative;
		max-width: 200px;
	}
	.content-ul .other{
		float: left;
		background: rgb(92, 184, 92);
		color: #fff;
		left: 40px;
	}
	.content-ul .other div{
		position: relative;
	}
	.content-ul .other div:after{
		content: '';
		display: block;
		position: absolute;
		width: 0;height: 0;
		border-style: solid;
		border-width: 5px;
		border-color: transparent rgb(92, 184, 92) transparent transparent;
		top:0;
		left: -13px;
	}
	.content-ul .other img{
		position: absolute;
		border-radius: 15px;
		top: 0;
		left: -40px;
		border: 1px solid #efefef;
	}
	.content-ul .me img{
		position: absolute;
		border-radius: 15px;
		top: 0;
		right: -40px;
		border: 1px solid #efefef;
	}
	.content-ul .me{
		float: right;
		border: 1px solid #ccc;
		right: 40px;
	}
	.content-ul .me div{
		position: relative;
	}
	.content-ul .me div:after{
		content: '';
		display: block;
		position: absolute;
		width: 0;height: 0;
		border-style: solid;
		border-width: 5px;
		border-color: transparent transparent transparent #ccc;
		top: -2px;
		right: -13px;
	}
	.chat-footer{
		height: 40px;
		width: 100%;
		display: table;
		border-top: 1px solid #e7e7e7;
		background: #fff;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.chat-footer div.send-left, .chat-footer div.send-right{
		height: 40px;
		display: table-cell;
		vertical-align: middle;
		padding: 0;
	}
	.chat-footer .send-content{
		height: 40px;
		width: 100%;
		text-indent: 5px;
		border: 1px solid #e7e7e7;
		border-top: none;
		outline: none;
		/*margin-left: 2%;*/
		background: #f3f3f3;
	}
	.chat-footer div.send-right{
		width: 40px;
		height: 100%;
		text-align: center;	
		cursor: pointer;
	}
	.chat-footer div.send-right .send-btn{
		font-size: 20px;
		line-height: 40px;
		color: rgb(92, 184, 92);
		transition: 0.3s ease-in-out;
	}
	.chat-footer div.send-right .send-btn:hover{
		color: #ccc;
		transition: 0.3s ease-in-out;
	}
	.notice{
		background: rgba(92, 184, 92, 1);
		height: 50px;
		width: 50px;
		position: fixed;
		right: 60px;
		bottom: 50px;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.notice:hover{
		transform: rotateZ(360deg);
		position: cursor;
		transition: 0.3s ease-in-out;
	}
	.glyphicon-info-sign{
		font-size: 33px;
		width: 50px;
		height: 50px;
		color: #fff;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
	}
</style>

<script>
	export default{
	  data () {
	    return {
	      showChat: true
	    }
	  },
	  methods: {
	    sendMsg () {
	      this.$http.get('/api/sendToRebot?info=' + this.info + '&userid=1234567')
	        .then((response) => {
	          console.log(response)
	        })
	        .catch((reject) => {
	          console.log(reject)
	        })
	    }
	  }
	}
</script>
