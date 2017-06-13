<template>
	<div>
		<transition name="fade">
			<div class="chat-div" v-if="showChat">
				<div class="chat-top">
					<img class="to-user" src="/static/imgs/user.jpg"/>
					<span class="to-user-name">聊天机器人</span>
				</div>
				<div class="chat-content" id="content" ref="content">
					<ul class="content-ul" id="ul" ref="ul">
						<li v-for="item in msgList" 
							:class="{'other': item.user === 'rebot', 'me': item.user !== 'rebot'}">
							<img v-if="item.user === 'rebot'" width="30" height="30" src="/static/imgs/user.jpg">
							<div v-if="item.user === 'rebot'" v-text="item.info"></div>
							<div v-if="item.user !== 'rebot'" v-text="item.info">Hello</div>
							<img v-if="item.user !== 'rebot'" width="30" height="30" src="/static/imgs/default.png">
						</li>
					</ul>
				</div>
				<div class="chat-footer">
					<div class="send-left">
						<input class="send-content" type="text" name="content" @keyup.13="sendMsg" v-model="info"/>
					</div>
					<div class="send-right" @click="sendMsg">
						<i :class="['iconfont icon-fasong send-btn',{'color-ccc': waiting}]"></i>
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
		bottom: 100px;
		right: 60px;
		border: 1px solid rgba(92, 184, 92, 1);
		height: 450px;
		width: 280px;
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
		height: 368px;	
		background: #fff;
		overflow-y: auto;
	}
	.content-ul{
		list-style: none;
		width: 100%;
		padding: 10px;
	}
	.content-ul li{
		display: block;
		padding: 3px;
		margin-top: 3px;
		margin-bottom: 3px;
		border-radius: 5px;
		clear: both;
		position: relative;
		max-width: 180px;
	}
	.content-ul .other{
		float: left;
		background: rgb(92, 184, 92);
		color: #fff;
		left: 40px;
	}
	.content-ul .other div{
		position: relative;
		font-size: 13px;
		padding: 3px;
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
		border: 1px solid rgba(92, 184, 92, 0.9);
		right: 40px;
		color: #fff;
		background: rgba(92, 184, 92, 0.9);
	}
	.content-ul div{
		word-wrap:break-word;white-space:normal;
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
		border-color: transparent transparent transparent rgba(92, 184, 92, 0.9);
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
	.color-ccc{
		color: #ccc !important;	
	}
	.notice{
		background: rgba(92, 184, 92, 1);
		height: 40px;
		width: 40px;
		position: fixed;
		right: 60px;
		bottom: 50px;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.notice:hover{
		transform: rotateZ(360deg);
		background: rgb(78, 156, 78);
		position: cursor;
		opacity: 0.9;
		transition: 0.3s ease-in-out;
	}
	.glyphicon-info-sign{
		font-size: 25px;
		width: 40px;
		height: 40px;
		color: #fff;
		line-height: 40px;
		text-align: center;
		cursor: pointer;
	}
</style>

<script>
	import querystring from 'querystring'
	export default{
	  data () {
	    return {
	      showChat: false,
	      info: '',
	      waiting: false,
	      msgList: [{
	        info: '你可以在这里畅所欲言~',
	        user: 'rebot'
	      }]
	    }
	  },
	  watch: {
	    msgList () {
	      this.$nextTick(() => {
	        let height = this.$refs.content.scrollHeight
	        this.$refs.content.scrollTop = height
	      })
	    }
	  },
	  methods: {
	    sendMsg () {
	      if (!this.info) {
	        return
	      }
	      this.waiting = true
	      this.msgList.push({'info': this.info, 'user': '123456'})
	      let data = {info: this.info, userid: '123456'}
	      this.info = ''
	      this.$axios.post('/api/sendToRebot', querystring.stringify(data))
	        .then((response) => {
	          // console.log(response.data.msg)
	          this.waiting = false
	          this.msgList.push({'info': response.data.msg, 'user': 'rebot'})
	        })
	        .catch((reject) => {
	          // console.log(response.data,msg)
	        })
	    }
	  }
	}
</script>
