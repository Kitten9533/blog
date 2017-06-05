<template>
	<div class="box">
		<div class="main">
			<label for="file">
				<img width="200" height="200" :src="src ? src : '/static/imgs/upload.png'"/>
			</label>
			<input id="file" type="file" name="file" @change='imgChange' hidden="">
			<img class="preview-img" width="100" height="100" :src="complete && src ? src : '/static/imgs/upload.png'"/>
		</div>
		<div class="screen-shot" v-if="screenShot">
			<canvas id="canvas" ref="canvas" width="200" height="200" style="float:right" hidden=""></canvas>
			<div class="modal" ref="modal">
				<img class="pic" ref="pic" width="" height="" :src="shotSrc ? shotSrc : '/static/imgs/upload.png'" @mousedown.prevent='dragstart' @mouseup.prevent="dragend"/>
				<div class="modal-border" @mousedown.prevent='dragstart' @mouseup.prevent="dragend"></div>
			</div>
			<div class="preview">			
				<div class='scroll' id='scroll' ref='scroll'>
					<div class='bar' id='bar' ref='bar' @mousedown="mouseDown">
					</div>
					<div class='mask' id='mask' ref='mask'></div>
				</div>
				<div class="btn-box">
					<button class="btn cancel-btn" @click="cancel">取消</button>
					<button class="btn ok-btn" @click="shotEnd">完成</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	*{
		margin:0;
		padding: 0;	
	}
	.box{
		width: 100%;
		height: 100%;
	}
	.main{
		width: 400px;
		height: 400px;
		position: absolute;
		left: 50%;top: 50%;
		margin-left: -200px;
		margin-top: -200px;
		/*border: 1px solid #fff;*/
	}
	.screen-shot{
		position: fixed;
		width: 100%;
		height: 100%;
		z-index: 3;
		left: 0;top:0;
		background:rgba(255,255,255,0.7);
	}
	.modal{
		position: fixed;
		width: 200px;height: 200px;
		left: 50%;top: 50%;
		margin-left: -100px;
		margin-top: -100px;
		/*border: 1px solid #fff;*/
		z-index: 5;
		overflow: visible;
	}
	.pic{
		position: absolute;
		z-index: 4;
		left: 50%; top: 50%;
		cursor: pointer;
		opacity: 0.7;
		margin-left: -100px;
		margin-top: -100px;
	}
	.modal-border{
		position: absolute;
		width: 200px;
		height: 200px;
		left: 50%;top: 50%;
		margin-left: -100px;
		margin-top: -100px;
		z-index: 100;
		border: 5px solid #fff;
		cursor: pointer;
		box-sizing: border-box;
		/*padding: 10px;*/
		outline: 2px dotted #fff;
	}
	.preview{
		position: absolute;
		width: 250px;
		height: 100px;
		left: 50%;
		top: 50%;
		margin-left: 150px;
		margin-top: 50px;
		z-index: 100;
		/*border: 1px solid #fff;*/
	}
	.preview-img{
		border-radius: 100px;
	}
	.modal-border:before{
		content: '200 X 200';
		position: absolute;
		top: -25px;
		left: 0;
	}
	.btn-box{
    	text-align: left;
    }
	.btn{
		display: inline-block;
		background: none;
		border: none;
		padding: 5px 8px;
		width: 100px;
		color: #fff;
		margin-top: 5px;
		cursor: pointer;
	}
	.ok-btn{
		background: rgb(52,168,255);
	}
	.cancel-btn{
		background: rgb(255,104,56);
	}
	.scroll{
      	width: 200px;
      	height: 5px;
      	background: rgb(255,104,56);
      	position: relative;
      	margin-bottom: 20px;
    }
    .bar{
      	width: 20px;
      	height: 20px;
      	border-radius: 10px;
      	background: #fff;
      	position: absolute;
      	top: -7px;
      	left: 0;
      	cursor: pointer;
      	transition: background 0.3s;
    }
    .bar:hover{
    	transition: background 0.3s;
      	background: rgb(52,168,255);
    }
    .mask{
      	position: absolute;
      	left: 0;
      	top: 0;
      	background: rgb(52,168,255);
      	width: 0;
      	height: 5px;
    }
</style>

<script>
	export default{
	  data () {
	    // image保存了图片的原图
	    // src 外部显示的图片
	    // shotSrc 截图时显示的图片
	    return {
	      src: '',
	      shotSrc: '',
	      maxSize: 2000,
	      screenShot: false,
	      mouseX: 0,
	      mouseY: 0,
	      curWidth: 0,
	      curHeight: 0,
	      barleft: 0,
	      imgMarginLeft: -100,
	      imgMarginTop: -100,
	      zoom: 1,
	      srcImg: null,
	      srcWidth: 0,
	      srcHeight: 0,
	      image: null,
	      canvas: null,
	      context: null,
	      complete: false,
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
	      let self = this
	      let leftVal = event.clientX - this.$refs.bar.offsetLeft
	      document.onmousemove = (event) => {
	        this.barleft = event.clientX - leftVal
	        if (this.barleft < 0) {
	          this.barleft = 0
	        } else if (this.barleft > this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth) {
	          this.barleft = this.$refs.scroll.offsetWidth - this.$refs.bar.offsetWidth
	        }
	        // 图片缩放
	        if (this.shotSrc) {
	          this.zoom = this.barleft / this.$refs.scroll.offsetWidth * 5 + 1
	          this.$refs.pic.width = self.curWidth * this.zoom
	          this.$refs.pic.height = self.curHeight * this.zoom
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
	      this.screenShot = true
	      this.imgPreview(this.file)
	      // 初始化zoom
	      this.zoom = 1
	    },
	    imgPreview (file) { // 图片预览
	      let self = this
	      if (!file || !window.FileReader) {
	        return
	      }
	      let reader = new FileReader()
	      reader.readAsDataURL(file)
	      this.image = new Image()
	      this.srcImg = new Image()
	      reader.onloadend = function () {
	        self.src = this.result
	        self.shotSrc = this.result
	        self.image.src = this.result
	        self.srcImg.src = this.result
	        self.image.width = 200
	        // self.image.height = 200
	        // 直接在style里写了 未加载时 宽和高为200
	        self.$refs.pic.width = 200
	        // self.$refs.pic.height = '200'
	        self.image.onload = function () {
	          self.curWidth = self.$refs.pic.width
	          self.curHeight = self.$refs.pic.height
	        }
	        self.srcImg.onload = () => {
	          self.srcWidth = self.srcImg.width
	          self.srcHeight = self.srcImg.height
	          self.$refs.pic.style.marginLeft = '-100px'
	          self.$refs.pic.style.marginTop = '-100px'
	        }
	      }
	    },
	    dragstart (event) { // 截图时，图片移动
	      console.log(event) // event.clientX  event.clientX
	      this.mouseX = event.clientX
	      this.mouseY = event.clientY
	      this.imgMarginLeft = this.$refs.pic.style.marginLeft
	      this.imgMarginTop = this.$refs.pic.style.marginTop
	      document.onmousemove = (event) => {
	        this.$refs.pic.style.marginLeft = this.imgMarginLeft.replace('px', '') - this.mouseX + event.clientX + 'px'
	        this.$refs.pic.style.marginTop = this.imgMarginTop.replace('px', '') - this.mouseY + event.clientY + 'px'
	      }
	    },
	    dragend (event) {
	      document.onmouseup = (event) => {
	        document.onmousemove = null
	      }
	    },
	    shotEnd () {
	      this.canvas = this.$refs.canvas
	      this.context = this.canvas.getContext('2d')
	      this.context.fillStyle = 'ffffff'
	      this.context.fillRect(0, 0, 200, 200)
	      // console.log(this.$refs.pic)
	      let left = -this.$refs.pic.offsetLeft
	      let top = -this.$refs.pic.offsetTop
	      console.log(left)
	      console.log(top)
	      let scale = 200 / this.srcImg.width * this.zoom
	      console.log(scale)
	      this.context.drawImage(this.srcImg, left / scale, top / scale, 200 / scale, 200 / scale, 0, 0, 200, 200)
	      // 图片显示的时候即为 宽度为200的所以缩放比例为  200/this.image.width
	      // 通过调大小后 缩放比例为this.zoom
	      // 最终为 200/this.image.width*this.zoom
	      this.src = this.canvas.toDataURL()
	      this.complete = true
	      this.screenShot = false
	    },
	    cancel () {
	      this.screenShot = !this.screenShot
	      this.complete = false
	    }
	  }
	}
</script>
