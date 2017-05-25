<template>
	<div class="chat-box" ref="chatBox">
		<div class="setUserName-box" v-show="enterUserName">
			<div class="setUserName">
				<p>Enter your name:</p>
				<input type="text" name="userName" ref="userName" @keyup.13="setUserName($event)"/>
			</div>
		</div>
		<div class="chat-content" data-from="Sonu Joshi" ref="chatContent">
			<ul class="chat-thread" ref="chatThread">
				<li v-for="msg in msgList" :class="[{'other':msg.senderId!=userId && msg.senderId !=0,'me':msg.senderId==userId  && msg.senderId !=0, 'system':msg.senderId==0}]" v-html="msg.content"></li>
			</ul>
		</div>
		<div class="chat-footer">
			<table>
				<tbody>
					<tr>
						<td>
							<input class="send-content" type="text" ref="content" @keyup.13="sendMsg($event)" v-model="content" :value="content"/>
						</td>
						<td width="100" class="send-btn-td">
							<a class="send-btn" style="color:#fff">Send</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<style scoped>
	.chat-box{
		height: 100%;
	}
	.chat-content{
		height: 80%;
	}
	.chat-thread{
		width: 80%;
		height: 100%;
		margin-top: 0;
	}
	.chat-thread li{
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.chat-footer{
		width: 80%;
		height: 50px;
		margin: 20px auto 0 auto;
	  	padding: 0;
	  	list-style: none;
	  	position: absolute;
	  	left: 10%;
	  	bottom: 20px;
	}
	.chat-footer table, .chat-footer tbody, .chat-footer tr{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}
	.chat-footer table{
		padding: -20px;
	}
	.send-content{
		width: 100%;
		height: 44px;
		line-height: 30px;
		border-radius: 3px;
		border: none;
		font-size: 20px;
		text-indent: 20px;
	}
	.send-btn-td{
		background: rgb(24, 56, 80);
		border-radius: 3px;
		border: none;
	}
	.send-btn{
		width: 100%;
		height: 40px;
		line-height: 1.4;
	}
	/*系统消息样式*/
	.system{
		display: block;
		color: #fff;
		margin: 10px auto !important;
		width: 60%;
	}
	.setUserName-box{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 3;
		background: rgba(0, 0, 0, 0.5);
	}
	.setUserName{
		width: 400px;
		height: 140px;
		position: absolute;
		top:50%;
		left: 50%;
		margin-left: -200px;
		margin-top: -70px;
		border-radius: 10px;
		background: rgb(24, 56, 80);
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
	}
	.setUserName p{
		color: #fff;
	}
	.setUserName input{
		width: 80%;
		font-size:30px;
		height: 40px;
		line-height: 1.4;
		margin:10px auto;
		text-align: center;
		border-radius: 5px;
		border: none;
	}
</style>

<script>
	import io from '../../../static/js/socket.io'
	export default {
	  name: 'chat',
	  data () {
	    var arr = []
	    for (let i = 0; i < 5; i++) {
	      arr.push({content: 'Are we meeting today?', senderId: '0'})
	      arr.push({content: 'yes, what time suits you?', senderId: '1'})
	      arr.push({content: 'I was thinking after lunch, I have a meeting in the morning', senderId: '2'})
	    }
	    return {
	      msgList: arr,
	      content: '',
	      // userNameList: ['奥特曼', '小怪兽', 'Kitten', 'John', 'JSON', 'JAVASCRIPT'],
	      userNameList: ['奥特曼', '小怪兽'],
	      userId: '', // 当前用户的id,
	      enterUserName: true // 用户名输入框的显示 隐藏
	    }
	  },
	  watch: {
	    msgList () {
	      this.$nextTick(function () {
	        var height = this.$refs.chatThread.scrollHeight
	        this.$refs.chatThread.scrollTop = height
	        this.content = ''
	      })
	    }
	  },
	  methods: {
	    setUserName ($event) {
	      if (this.$refs.userName.value) {
	        this.enterUserName = false
	        this.connect(this.$refs.userName.value)
	      } else {
	        alert('Please enter your name')
	      }
	    },
	    connect (userName) {
	      // 生成随机用户
	      // var num = Math.floor(Math.random() * 10) % 2
	      var userInfo = {
	        userId: this.getUserId(),
	        // userName: this.userNameList[num]
	        userName: userName
	      }
	      // this.httpServer = io.connect('http://123.206.111.248:8010')
	      this.httpServer = io.connect('http://127.0.0.1:8010')
	      console.log(userInfo)
	      this.httpServer.emit('login', userInfo)
	      this.httpServer.on('login', (obj) => {
	        // 有人登陆，可以显示 *** 加入了房间
	        console.log(obj)
	        console.log(obj.loginUser.userName + ' join')
	        this.msgList.push({content: obj.loginUser.userName + ' 加入了', senderId: 0})
	        this.toBottom()
	      })
	      this.httpServer.on('message', (obj) => {
	        console.log(obj)
	        this.msgList.push({content: obj.msg.msg})
	        this.toBottom()
	      })
	      this.httpServer.on('logout', (obj) => {
	        this.msgList.push({content: obj.msg, senderId: 0})
	        this.toBottom()
	      })
	    },
	    getUserId () {
	      var randomId = new Date().getTime() + Math.floor(Math.random() * 10000)
	      this.userId = randomId
	      return (randomId)
	    },
	    sendMsg ($event) {
	      // TODO 发送消息
	      this.msgList.push({content: this.$refs.content.value ? this.$refs.content.value : '&nbsp;', senderId: this.userId})
	      this.httpServer.emit('message', {msg: this.$refs.content.value})
	    },
	    toBottom () {
	      this.$refs.chatContent.style.height = window.innerHeight - 100 + 'px'
	    }
	  },
	  mounted () {
	    // 连接
	    // this.setUserName()
	    this.toBottom()
	    const that = this
	    window.onresize = () => {
	      that.$refs.chatContent.style.height = window.innerHeight - 100 + 'px'
	    }
	  }
	}
</script>
