<template>
	<div class="chat-box" ref="chatBox">
		<div class="chat-content" data-from="Sonu Joshi" ref="chatContent">
			<ul class="chat-thread" ref="chatThread">
				<li v-for="(msg, index) in msgList" v-text="msg.content">{{index}}</li>
			</ul>
		</div>
		<div class="chat-footer">
			<table>
				<tbody>
					<tr>
						<td>
							<input class="send-content" type="text" ref="content" @keyup.13="sendMsg($event)"/>
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
</style>

<script>
	export default {
	  name: 'chat',
	  data () {
	    var arr = []
	    for (let i = 0; i < 5; i++) {
	      arr.push({content: 'Are we meeting today?'})
	      arr.push({content: 'yes, what time suits you?'})
	      arr.push({content: 'I was thinking after lunch, I have a meeting in the morning'})
	    }
	    return {
	      msgList: arr
	    }
	  },
	  watch: {
	    msgList () {
	      this.$nextTick(function () {
	        var height = this.$refs.chatThread.scrollHeight
	        this.$refs.chatThread.scrollTop = height
	      })
	    }
	  },
	  methods: {
	    sendMsg: function ($event) {
	      // TODO 发送消息
	      this.msgList.push({content: this.$refs.content.value})
	    }
	  },
	  mounted () {
	    this.$refs.chatContent.style.height = window.innerHeight - 100 + 'px'
	    const that = this
	    window.onresize = () => {
	      that.$refs.chatContent.style.height = window.innerHeight - 100 + 'px'
	    }
	  }
	}
</script>
