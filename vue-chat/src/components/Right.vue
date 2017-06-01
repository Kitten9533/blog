<template>
	<div class="box" style="color:#fff">
		<div class="search-box">
			<input class="search-btn" type="text" name="search" placeholder="Search..."/>
		</div>
		<div class="userlist" ref="userlist">
			<!-- <p v-text="currentUser"></p> -->
			<ul class="online">
				<li class="tag" @click="showOnline = !showOnline">online<i :class="['iconfont icon-caret tag-text',{'tag-text-hover': showOnline}]"></i></li>
				<li v-for="item in onlineList" v-if="showOnline && currentUser.userId!=item.userId" :userId="item.userId" @click="openPm(item)">
					<div class="userimg-box">
						<img class="userimg" v-bind:src="!!item.userImg ? item.userImg : '/static/imgs/default.png'"/>
					</div>
					<p class="username">{{item.userName}}<span class="status iconfont icon-yuanhuan green"></span></p>
					<p class="content" v-text="item.content"></p>
				</li>
			</ul>
			<ul class="offline">
				<li class="tag" @click="showOffline = !showOffline">offline<i :class="['iconfont icon-caret tag-text',{'tag-text-hover': showOffline}]"></i></li>
				<li v-for="item in offlineList" v-if="showOffline" :userId="item.userId" @click="openPm(item)">
					<div class="userimg-box">
						<img class="userimg" v-bind:src="!!item.userImg ? item.userImg : '/static/imgs/default.png'"/>
					</div>
					<p class="username">{{item.userName}}<span class="status iconfont icon-yuanhuan white"></span></p>
					<p class="content" v-text="item.content"></p>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped>
	.box{
		width:100%;
		height: 100%;
		padding: 0;
	    margin: 0;
	    background: linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -moz-linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -webkit-linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background-repeat: no-repeat;
	    background-attachment: fixed;
	    border-left: 1px solid #5a5959;
	}
	.search-box{
		padding-top: 30px;
		padding-bottom: 20px;
		border-bottom: 1px solid #5a5959;
	}
	::-webkit-input-placeholder { /* WebKit browsers */  
	    color: #fff;  
	}  
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
	   	color: #fff;  
	   	opacity: 1;  
	}  
	::-moz-placeholder { /* Mozilla Firefox 19+ */  
	   	color: #fff;  
	   	opacity: 1;  
	}  
	:-ms-input-placeholder { /* Internet Explorer 10+ */  
	   	color: #fff;  
	}  
	.search-btn{
		width:260px;
		border: none;
		background: rgb(87,99,121);
		border-radius: 6px;
		outline: none;
		text-indent: 20px;
		line-height: 25px;
		color: #fff !important;
	}
	li{
		list-style: none;
		height: 60px;
		position: relative;
		cursor: default;
	}
	::selection{
		color:#fff;
	}
	::-moz-selection{
		color:#fff;
	}
	.content::selection{
		color: #ccc;
	}
	.content::-moz-selection{
		color: #ccc;
	}
	li.tag{
		margin-top: 20px;
		line-height: 20px;
		margin-right: 20px;
		height: 20px;
		text-align: left;
		margin-left: 20px;
		cursor: pointer;
	}
	.tag-text{
		cursor:pointer;
		font-size: 20px;
		float: right;
		margin-right: 0;
		transform: rotateZ(90deg);
	}
	.tag-text-hover{
		transform: rotateZ(0deg);
	}
	.userimg-box{
		position: absolute;
		width:42px;
		height: 42px;
		background:#fff;
		top:9px;
		left:19px;
		border-radius: 42px;
	}
	.userimg{
		width: 40px;
		height: 40px;
		position: absolute;
		left: 1px;
		top: 1px;
		border-radius: 40px;
	}
	.username, .content{
		padding-top: 10px;
		margin-top: 10px;
		margin-left: 80px;
		text-align: left;
		font-size: 15px;
		line-height: 20px;
		color: #f9f9f9;
	}
	.content{
		padding-top: 0;
		margin-top:0px;
		color: #ccc;
		white-space: nowrap;
	    text-overflow: ellipsis;
	    overflow: hidden;
	    width: 150px;
	}
	.status{
		float: right;
		margin-right: 20px;
		line-height: 40px;
	}
	.red{
		color: red;
	}
	.green{
		color: #5b9b5b;
	}
	.white{
		color: #ccc;
	}
	.userlist{
		overflow-y: scroll;
	}
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .3s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
</style>

<script>
	// import io from '../../static/js/socket.io'
	import { mapGetters } from 'vuex'
	export default{
	  data () {
	    // this.connect()
	    // this.getList()
	    return {
	      onlineList: ['11'],
	      offlineList: ['22'],
	      showOnline: true,
	      showOffline: true,
	      currentUser: {userId: '', userName: ''}
	    }
	  },
	  watch: {
	    height () {
	      this.initStyle()
	    }
	  },
	  computed: {
	    ...mapGetters({height: 'getWInnerHeight'})
	  },
	  methods: {
	    initStyle () {
	      this.$refs.userlist.style.height = window.innerHeight - 76 + 'px'
	    },
	    getList () {
	      this.$http.get('/api/getOnline')
	        .then((response) => {
	          // console.log(response)
	          this.onlineList = response.data.data
	        })
	        .catch((reject) => {
	          console.log(reject)
	        })
	      this.$http.get('/api/getOffline')
	        .then((response) => {
	          // console.log(response)
	          this.offlineList = response.data.data
	        })
	        .catch((reject) => {
	          console.log(reject)
	        })
	    },
	    connect () {
	      // this.getList()
	      var user = this.getUser()
	      var self = this
	      this.httpServer.emit('login', user)
	      this.$emit('getFrUser', user)
	      this.httpServer.on('refreshList', (data) => {
	        var online = []
	        var offline = []
	        var userList = data.userList
	        for (let i = 0; i < userList.length; i++) {
	          if (userList[i].online) {
	            online.push(userList[i])
	            self.onlineList.push(userList[i])
	          } else {
	            offline.push(userList[i])
	          }
	        }
	        self.onlineList = online
	        self.offlineList = offline
	      })
	      this.httpServer.on('getMsg', (msg) => {
	        for (let i = 0; i < this.onlineList.length; i++) {
	          if (this.onlineList[i].userId === msg.frUser.userId && this.currentUser.userId !== msg.frUser.userId) {
	            // this.onlineList[i].content = msg.content
	            // this.$set(this.onlineList, i, {
	            //   content: msg.content
	            // })
	            // this.onlineList[i] = Object.assign({}, this.onlineList[i], {content: msg.content})
	            // 由于javascript的限制，vue不能检测以下变动的数组
	            // 1.当你利用索引直接设置一个项时， vm.items[index] = newValue
	            // 2.当你修改数组的长度时，vm.items.length = newLength
	            this.onlineList.splice(i, 1)
	            let obj = msg.frUser
	            obj.content = msg.content
	            this.onlineList.splice(0, 0, obj)
	          }
	        }
	      })
	    },
	    getUser () {
	      var obj = {}
	      obj.userId = String(new Date().getTime() + Math.floor(Math.random() * 10000))
	      var lastName = ['Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson']
	      var firstName = ['White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson', 'Clark', 'Rodriguez', 'Rodriguez']
	      obj.userName = lastName[Math.floor(Math.random() * 10)] + ' ' + firstName[Math.floor(Math.random() * 10)]
	      obj.userImg = ''
	      this.currentUser = obj
	      return obj
	    },
	    openPm (user) {
	      this.$router.push({path: '/cover/pm'})
	      this.$emit('getToUser', user)
	    }
	  },
	  mounted () {
	    this.connect()
	    this.initStyle()
	    // window.onresize = () => {
	    //   return (() => {
	    //     this.initStyle()
	    //   })()
	    // }
	  }
	}
</script>
