<template>
    <div class="temp">
      <div class="box">
          <div class="container">
              <img :src="dataUrl" v-if="hasimg" 
                  v-bind:class="['preview-img',{'preview-img-hover':ishover}]" @click="previewclick">
              <div class="preview-cover" @click="previewclick" @mouseover="addhover" @mouseout="removehover"></div>
          </div>
          <input class="preview-img-input"
              ref="inputer"
              :id="inputId" 
              type="file"
              :name="name"
              :accept="accept"
              capture="video"
              @change="handleFileChange"/>
          <label :for="inputId"><p>点击添加图片</p></label>
          {{errTxt}}{{fileName}}
<!--           <form id='editfile' method='post' action='/api/upload' enctype='multipart/form-data'>
              <input name="text" type="text"/>
              选择图片：<input name="avatar" id='upfile' type='file'/>
              <input type='submit' value='提交'/>
          </form> -->
      </div>
    </div>
</template>

<style scoped>
    *{
        margin:0;padding:0;
    }
    #editfile{
        margin-top:50px;
    }
    .temp{
      width: 100%;
      height: 100%;
      position: relative;
    }
    .box, .container{
        width: 200px;
        height: 80px;
        position: relative;
    }
    .img-cover{
        z-index: 2;
    }
    input{
        position: absolute;
        left: -9999px;
    }
    label {
        transition: 0.3s all;
        position: absolute;
        border-radius: 5px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: #efeeee;
        border: 1px solid #efeeee;
        text-align: center;
        box-sizing: border-box;
    }
    label p{
        font-size: 12px;
        line-height: 24px;
        font-weight: 500;
        margin-top:25px;
    }
    .preview-img, label{
        transition: 0.5s all;
    }
        .preview-img:hover, label:hover, .preview-cover:hover {
            transition: 0.5s all;
            transform: scale(1.015);
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        }
        .preview-img-hover{
            transition: 0.3s all;
            transform: scale(1.015);
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
        }
    .preview-img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
        z-index: 3;
        position: absolute;
        left: 0;
    }
    .preview-cover{
        transition: 0.5s all;
        border-radius: 5px;
        width: 100%;
        height: 100%;
        z-index: 4;
        position: absolute;
    }
    .box img {
        border-radius: 5px;
    }
</style>

<script>
    export default{
      data () {
        return {
          inputId: 'upload',
          hasimg: false,
          name: 'image',
          accept: '',
          video: '',
          errTxt: '',
          maxSize: 2000,
          // dataUrl: require('../assets/upload.png'),
          dataUrl: '',
          fileName: '',
          ishover: true
        }
      },
      methods: {
        handleFileChange (e) {
          if (typeof e.target === 'undefined') this.file = e[0]
          else this.file = e.target.files[0]
          let size = Math.floor(this.file.size / 1024)
          if (size > this.maxSize) {
            this.errTxt = '文件最大不能超过2M'
          }
          // let accept = this.accept.split(',')
          this.onChange && this.onChange(this.file, e.target.value)
          this.imgPreview(this.file)
          this.fileName = this.file.name
          this.hasimg = true
        },
        previewclick () {
          document.getElementById(this.inputId).click()
        },
        imgPreview (file) {
          let self = this
          if (!file || !window.FileReader) return
          if (/^image/.test(file.type)) {
            var reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = function () {
              self.dataUrl = this.result
            }
          }
        },
        addhover () {
          this.ishover = true
        },
        removehover () {
          this.ishover = false
        }
      }
    }
</script>
