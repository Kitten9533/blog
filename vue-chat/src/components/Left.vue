<template>
	<div class="box" ref="content">
		<ul class="menu">
			<li @click="toCover" class="userinfo">Name</li>
			<li v-for="(item, index) in menuList" v-bind:class="{'active': item.active}" v-text="item.name" @click="changeActive(index, item.link)"></li>
		</ul>
	</div>
</template>

<style scoped>
	.box{
		width:100%;
		height: 100%;
		padding: 0;
	    margin: 0;
	    background: linear-gradient(-65deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -moz-linear-gradient(-65deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -webkit-linear-gradient(-65deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background-repeat: no-repeat;
	    background-attachment: fixed;
	    overflow-x: hidden;
	    overflow-y: auto;
	}
	.menu{
		width: 220px;
		/*overflow-y: scroll;*/
	}
	.menu li{
		height: 80px;
		line-height: 80px;
		/*cursor: pointer;*/
		cursor: default;
		border-bottom: 1px outset #d8d8d8;
	}
	.menu li.userinfo{
		height: 100px;
		line-height: 100px;
	}
	.active{
		border-left: 3px solid rgb(53,166,242);
		background: rgb(47,54,64);
	}
	::selection{
		color:#fff;
	}
	::-moz-selection{
		color:#fff;
	}
	::scrollbar {
	  width: 0;
	}
	::-moz-scrollbar {
	  width: 0;
	}
	::-webkit-scrollbar {
	  width: 0;
	}
	a{
		cursor: default;
    	color: #fff;
    	text-decoration: none;
	}
</style>

<script>
	import { mapGetters } from 'vuex'
	export default{
	  data () {
	    return {
	      menuList: [
	        {name: 'Overview', link: '/cover', active: true},
	        {name: 'Files', link: '/cover', active: false},
	        {name: 'Photos', link: '/cover', active: false},
	        {name: 'Music', link: '/cover', active: false},
	        {name: 'Links', link: '/cover', active: false},
	        {name: 'Upload', link: '/cover/upload', active: false},
	        {name: 'Upload2', link: '/cover/upload2', active: false},
	        {name: 'Upload3', link: '/cover/upload3', active: false}
	      ]
	    }
	  },
	  computed: {
	    ...mapGetters({'height': 'getWInnerHeight'})
	  },
	  watch: {
	    height () {
	      this.$refs.content.style.height = window.innerHeight
	    }
	  },
	  methods: {
	    changeActive: function (index, link) {
	      for (let i = 0; i < this.menuList.length; i++) {
	        this.menuList[i].active = false
	      }
	      this.menuList[index].active = true
	      this.$router.push({'path': link})
	      // 将选中的菜单名传给Cover
	      this.$emit('setName', this.menuList[index].name)
	    },
	    toCover () {
	      this.$router.push({'path': '/cover'})
	    }
	  }
	}
</script>
