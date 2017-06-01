 <template>
	<div class="box" ref="box">
		<div class="top">
			<p v-text="this.toUser.userId ? toUser.userName : '请先选择联系人'"></p>
			<i :class="['iconfont icon-yuanhuan', {'green': toUser.online}, {'white': !toUser.online}]"></i>
		</div>
		<div class="hr-box"><div class="hr"></div></div>
		<div class="content" ref="content">
			<ul class="chat-box" ref="contentUl">
				<li :class="{'other': frUser.userId == item.toUser.userId, 'me': frUser.userId == item.frUser.userId}" 
				v-for="item in msgList" 
				v-if="item.group == toUser.userId + frUser.userId || item.group == frUser.userId + toUser.userId">
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
						<input class="send-content" :disabled="!this.toUser.userId" :class="{'disabled': !this.toUser.userId}" type="text" @keyup.13="sendMsg" v-model="content"/>
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
	li span{
		word-wrap:break-word;white-space:normal;max-width: 500px;
	}
	a::selection{
		color: #fff;
	}
	.box{
		width: 100%;
		min-width: 700px;
		height: 100%; 
		position: relative;	
	}
	.top{
		padding: 20px 40px;
		text-align: left;
		height: 20px;
	}
	.top p{
		/*text-indent: 20px;*/
	}
	.hr-box{
		padding: 0 40px;
	}
	.hr{
		border-bottom: 1px outset #fff;
	}
	.content{
		width: 100%;
		overflow-y: auto;
	}
	.content ul{
		/*width: 100%;*/
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
		background: rgb(85, 101, 121);
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
		display: block;
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
	    font-size: 14px;
	}
	.other span:before{
		content: '';
		display: block;
		position: absolute;
		left: -18px;
		top: 7px;
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
		right: 40px;
		font-size: 14px;
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
		top: 7px;
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
	.disabled{
    	cursor: not-allowed;
	}
</style>

<script>
	// import store from '../../store/store'
	// import io from '../../../static/js/socket.io'
	// import { mapActions } from 'vuex'
	import { mapGetters } from 'vuex'
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
	    },
	    height () {
	      this.$refs.content.style.height = window.innerHeight - 180 + 'px'
	    }
	  },
	  computed: {
	    ...mapGetters({height: 'getWInnerHeight'})
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
	        group: this.toUser.userId + this.frUser.userId,
	        content: this.content,
	        type: this.type
	      }
	      this.httpServer.emit('sendTo', msg)
	      this.content = ''
	    }
	    // ...mapActions(['setHeight'])
	  },
	  props: ['toUser', 'frUser'],
	  mounted () {
	    this.$refs.content.style.height = window.innerHeight - 180 + 'px'
	    // const that = this
	    // window.onresize = () => {
	    //   return (() => {
	    //     that.$refs.content.style.height = window.innerHeight - 180 + 'px'
	    //   })()
	    // }
	    this.init()
	  }
	}
</script>
