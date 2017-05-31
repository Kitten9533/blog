<template>
	<div class="box">
		<div class="center-top">
			<h4 v-text="centerName"></h4>
		</div>
		<div class="center-main" ref="main">
			<keep-alive>
				<router-view v-if="!$route.meta.notKeepAlive" :toUser="toUser" :frUser="frUser"></router-view>
			</keep-alive>
			<router-view v-if="$route.meta.notKeepAlive" :toUser="toUser" :frUser="frUser"></router-view>
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
	}
	h4{
		text-align: left;
	    padding: 20px 40px;
	    font-size: 20px;
	    font-weight: 400;
	    height: 20px;
	}
	.center-top{
		height: 60px;
	}
	.center-main{
		height: 90%;
	}
</style>

<script>
	export default{
	  data () {
	    return {}
	  },
	  props: ['centerName', 'toUser', 'frUser'],
	  methods: {
	    changeMain () {
	      this.$refs.main.style.height = window.innerHeight - 60 + 'px'
	    }
	  },
	  mounted () {
	    const that = this
	    this.changeMain()
	    window.onresize = () => {
	      that.$refs.main.style.height = window.innerHeight - 60 + 'px'
	    }
	  }
	}
</script>
