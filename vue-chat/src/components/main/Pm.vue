<template>
	<div class="box" ref="box">
		<div class="top">
			<p v-text="toUser.userName"></p>
			<i :class="['iconfont icon-yuanhuan', {'green': toUser.online}, {'white': !toUser.online}]"></i>
		</div>
		<div class="content" ref="content">
			<ul class="chat-box" ref="contentUl">
				<li :class="{'other': frUser.userId == item.group && frUser.userId == item.toUser.userId, 'me': item.self}" 
				v-for="item in msgList">
<!-- 					<p>{{item.toUser.userId}}  {{toUser.userId}}  {{frUser.userId}}</p> -->
					<img v-bind:src="!!item.toUser.userImg ? item.toUser.userImg : '/static/imgs/default.png'"/>
					<span v-html="!!item.content ? item.content : '&nbsp;'"></span>
				</li>
			</ul>
		</div>
		<div class="footer">
			<!-- <div class="toolbar">toolbar</div> -->
			<table>
				<tr>
					<td>
						<input class="send-content" type="text" @keyup.13="sendMsg" v-model="content"/>
					</td>
					<td width="80" class="send-btn-td">
						<a class="send-btn" style="color:#fff" @click="sendMsg">Send</a>
					</td>
				</tr>
			</table>
		</div>
	</div>
	
</template>

<style scoped>
	::selection{
		color: #fff;
	}
	.box{
		width: 100%;
		height: 100%; 
		position: relative;	
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
	    width: 100%;
	    height: 60px;
	    margin-top: 8px;
		/*position: absolute;*/
		/*bottom: 0;*/
	}
	.footer table{
		width: 100%;
		padding-left: 40px;
		padding-right: 40px;
	}
	.footer table input{
		width: 100%;
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
	    padding: 8px 10px;
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
	    padding: 8px 10px;
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
	// import io from '../../../static/js/socket.io'
	export default{
	  data () {
	    return {
	      content: '',
	      type: '1',
	      msgList: []
	    }
	  },
	  watch: {
	    msgList () {
	      this.$nextTick(function () {
	        var height = this.$refs.contentUl.scrollHeight
	        this.$refs.content.scrollTop = height
	        this.content = ''
	      })
	    }
	  },
	  methods: {
	    init () {
	      this.httpServer.on('getMsg', (msg) => {
	        this.msgList.push(msg)
	      })
	    },
	    sendMsg () {
	      if (!this.toUser.userId) {
	        alert('需选择用户')
	        return
	      }
	      var msg = {
	        toUser: this.toUser,
	        frUser: this.frUser,
	        group: this.toUser.userId,
	        content: this.content,
	        type: this.type
	      }
	      this.httpServer.emit('sendTo', msg)
	      // this.msgList.push(msg)
	      msg.self = true
	      this.msgList.push(msg)
	      this.content = ''
	    }
	  },
	  props: ['toUser', 'frUser'],
	  mounted () {
	    this.$refs.content.style.height = window.innerHeight - 180 + 'px'
	    const that = this
	    window.onresize = () => {
	      return (() => {
	        that.$refs.content.style.height = window.innerHeight - 180 + 'px'
	      })()
	    }
	    this.init()
	  }
	}
</script>
