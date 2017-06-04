<template>
	<div class="box">
		<div class="main">
			<label for="file">
				<canvas width="200" height="200"></canvas>
			</label>
			<input id="file" type="file" name="file" @change='imgChange'>
		</div>
		<div class="screen-shot" v-show="screenShot">
			<button @click="shotEnd">完成</button>
			<canvas ref="canvas" width="200" height="200"></canvas>
			<div class="modal" ref="modal">
				<img class="pic" ref="pic" width="" height="" :src="src ? src : '/static/imgs/upload.png'" @mousedown.prevent='dragstart' @mouseup.prevent="dragend"/>
			</div>
		</div>
	</div>
</template>

<style scoped>
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
		background:rgba(0,0,0,0.8);
	}
	.modal{
		position: fixed;
		width: 200px;height: 200px;
		left: 50%;top: 50%;
		margin-left: -100px;
		margin-top: -100px;
		/*border: 1px solid #fff;*/
		overflow: hidden;
	}
	.pic{
		position: absolute;
		left: 50%; top: 50%;
		cursor: pointer;
	}
</style>

<script>
	export default{
	  data () {
	    return {
	      src: '',
	      maxSize: 2000,
	      screenShot: false,
	      mouseX: 0,
	      mouseY: 0,
	      imgMarginLeft: 0,
	      imgMarginTop: 0,
	      image: null,
	      canvas: null,
	      context: null,
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
	  },
	  methods: {
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
	      this.image = new Image()
	      reader.onloadend = function () {
	        self.src = this.result
	        self.screenShot = true
	        self.image.src = this.result
	        self.$refs.pic.style.marginLeft = self.image.width / -2.0 + 'px'
	        self.$refs.pic.style.marginTop = self.image.height / -2.0 + 'px'
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
	      console.log(this.$refs.modal.offsetLeft)
	      console.log(this.$refs.pic.offsetLeft)
	      console.log(left)
	      console.log(top)
	      this.context.drawImage(this.image, left, top, 200, 200, 0, 0, 200, 200)
	    }
	  }
	}
</script>
