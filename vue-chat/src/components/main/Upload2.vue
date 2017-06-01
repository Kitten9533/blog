<template>
	<div class="box">Upload2
		<div class="scroll" id="scroll" ref="scroll">
	    	<div class="bar" id="bar" ref="bar" @mousedown="mouseDown">
	    	</div>
	    	<div class="mask" id="mask" ref="mask"></div>
	  	</div>
	  	<p></p>
	</div>
</template>

<style scoped>
	.scroll{
      	margin:100px;
      	width: 500px;
      	height: 5px;
      	background: #ccc;
      	position: relative;
    }
    .bar{
      	width: 10px;
      	height: 20px;
      	background: #369;
      	position: absolute;
      	top: -7px;
      	left: 0;
      	cursor: pointer;
    }
    .mask{
      	position: absolute;
      	left: 0;
      	top: 0;
      	background: #369;
      	width: 0;
      	height: 5px;
    }
</style>

<script>
	export default {
	  data () {
	    return {
	      barleft: 0
	    }
	  },
	  watch: {
	    barleft () {
	      this.$refs.mask.style.width = this.barleft + 'px'
	      this.$refs.bar.style.left = this.barleft + 'px'
	    }
	  },
	  methods: {
	    mouseDown (event) {
	      var leftVal = event.clientX - this.$refs.bar.offsetLeft
	      console.log(leftVal)
	      document.onmousemove = (event) => {
	        this.barleft = event.clientX - leftVal
	        if (this.barleft < 0) {
	          this.barleft = 0
	        } else if (this.barleft > this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth) {
	          this.barleft = this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth
	        }
	      }
	      document.onmouseup = (event) => {
	        document.onmousemove = null
	      }
	    }
	  }
	}
</script>
