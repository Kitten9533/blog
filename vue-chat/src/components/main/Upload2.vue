<template>
	<div class='box'>
		<div class='img-box'>
			<label for='upload'>
				<img ref='img2' class="upload-img" title="点击上传图片" :src="!!imgData ? imgData : '/static/imgs/upload.png'"/>
			</label>
			<input id='upload' type='file' name='upload' hidden @change='imgChange'/>
			<div class="operation" v-show="!!imgData"><span @click="imgData=''">取消</span><span @click="screenShot=true">裁剪</span></div>
		</div>
		<div class="screen-shot" v-if="screenShot">
			<div class="shot-main">
				<div class='shot-box'>
					<img ref='img' :src="!!imgData ? imgData : '/static/imgs/upload.png'"/>
				</div>
				<div class="shot-tool">
					<div class='scroll' id='scroll' ref='scroll'>
				    	<div class='bar' id='bar' ref='bar' @mousedown='mouseDown'>
				    	</div>
				    	<div class='mask' id='mask' ref='mask'></div>
				  	</div>
				  	<a class="tool-btn" @click="screenShot=false">取消</a>
				  	<a class="tool-btn" @click="screenShot=false">完成</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	*{
		cursor: default;
	}
	.box{
		min-width: 600px;
		margin: 0 auto;
	}
	.img-box{
		width: 200px;
		height: 200px;
		margin: 0 auto;
		border: 1px solid #ccc;
		overflow: hidden;
		padding: 10px;
		background: #fff;
		position: relative;
	}
	.upload-img{
		width: 200px;
		/*height: 200px;*/
		cursor: pointer;
	}
	div.operation{
		position: absolute;
		bottom: 10px;
		color: #fff;
		border-top: 1px solid #ccc;
		width: 100%;
		left: 0;
		bottom: 0;
		line-height: 40px;
		background: rgba(0, 0, 0, 0.4);
	}
	div.operation span{
		display: inline-block;
		text-align: center;
		width: 50%;
		box-sizing: border-box;
		cursor: pointer;
	}
	div.operation span:nth-child(odd){
		border-right: 1px solid #ccc;
	}
	.screen-shot{
		width: 100%;
		height: 100%;
		min-width: 1000px;
		min-height: 500px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		background: rgba(0, 0, 0, 0.8);
	}
	.shot-main{
		/*border: 1px solid red;*/
		width: 700px;
		height: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-left: -350px;
		margin-top: -200px;
	}
	.shot-box{
		width: 400px;
		height: 400px;
		/*padding: 10px;*/
		background: #fff;
		overflow: hidden;
		display: inline-block;
		float: left;
	}
	.shot-box img{
		width: 400px;
	}
	.tool-btn{
		width: 200px;
		height: 30px;
		line-height: 30px;
		display: block;
		background: #fff;
		color: black;
		cursor: pointer;
		margin: 10px 0 5px 50px;
		transition: all ease 0.3s;
	}
	.tool-btn:hover{
		transition: all ease 0.3s;
		opacity: 0.8;
	}
	.shot-tool{
		width: 300px;
		height: 400px;
		display: inline-block;
		float: left;
		bottom: 0;
		margin-top: 250px;
	}
	.scroll{
      	width: 200px;
      	height: 5px;
      	background: #ccc;
      	position: relative;
      	margin: 10px auto 50px auto;
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
	    // maxSize 图片最大2M
	    return {
	      barleft: 0,
	      file: '',
	      maxSize: 2000,
	      imgData: '',
	      type: '',
	      screenShot: false,
	      image: new Image(),
	      mimes: {
	        'jpg': 'image/jpeg',
	        'png': 'image/png',
	        'gif': 'image/gif',
	        'mp4': 'video/mp4',
	        'mov': 'video/quicktime',
	        'wmv': 'video/x-ms-wmv',
	        'flv': 'video/x-flv',
	        'svg': 'image/svg+xml',
	        'psd': 'image/photoshop',
	        'mp3': 'audio/mpeg',
	        'rar': 'application/x-rar-compressed',
	        'zip': 'application/zip',
	        'json': 'application/json',
	        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	        'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	        'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	        'doc': 'application/msword',
	        'pdf': 'application/pdf',
	        'xls': 'application/vnd.ms-excel',
	        'ppt': 'application/vnd.ms-powerpoint'
	      }
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
	      // alert(this.$refs.scroll.style.width)
	      document.onmousemove = (event) => {
	        this.barleft = event.clientX - leftVal
	        if (this.barleft < 0) {
	          this.barleft = 0
	        } else if (this.barleft > this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth) {
	          this.barleft = this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth
	        }
	        // 图片缩放
	        if (this.file) {
	          this.$refs.img.style.zoom = this.barleft / this.$refs.scroll.offsetWidth * 4.0 + 1
	        }
	      }
	      document.onmouseup = (event) => {
	        document.onmousemove = null
	      }
	    },
	    imgChange (event) {
	      console.log(event)
	      if (typeof event.target === 'undefined') {
	        this.file = event[0]
	      } else {
	        this.file = event.target.files[0]
	      }
	      let size = Math.floor(this.file.size / 1024)
	      this.type = this.file.type
	      if (size > this.maxSize) {
	        alert('文件最大不能超过2M')
	        return
	      }
	      let flag = false
	      for (let key in this.mimes) {
	        if (this.mimes[key] === this.type && (key === 'jpg' || key === 'png')) {
	          flag = true
	        }
	      }
	      if (!flag) {
	        alert('请上传jpg或者png格式的图片')
	      }
	      this.imgPreview(this.file)
	    },
	    imgPreview (file) { // 图片预览
	      let self = this
	      if (!file || !window.FileReader) {
	        return
	      }
	      let reader = new FileReader()
	      reader.readAsDataURL(file)
	      reader.onloadend = function () {
	        self.imgData = this.result
	        self.image.src = this.result
	      }
	    }
	  }
	}
</script>
