<template>
	<div class="container">
	    <div class="row">
	        <div class="col-md-offset-3 col-md-6">
	            <form class="form-horizontal">
	                <span class="heading">用户注册</span>
	                <div class="form-group">
	                    <input type="email" class="form-control" placeholder="用户名或电子邮件" v-model="loginname">
	                    <i class="fa fa-user"></i>
	                </div>
	                <div class="form-group help">
	                    <input type="password" class="form-control" placeholder="密　码" v-model="pass">
	                    <i class="fa fa-lock"></i>
	                    <a href="#" class="fa fa-question-circle"></a>
	                </div>
	                <div class="form-group help">
	                    <input type="password" class="form-control" placeholder="再次输入密码" v-model="repass">
	                    <i class="fa fa-lock"></i>
	                    <a href="#" class="fa fa-question-circle"></a>
	                </div>
	                <div class="form-group">
	                    <button type="submit" class="btn btn-default" @click.prevent="register">注册</button>
	                </div>
                    <transition name="fade">
                        <div class="form-group help">
                            <div v-show="showAlert" ref="emailRes" class="alert alert-danger" role="alert" v-html="!alertText ? '&nbsp;' : alertText"></div>
                        </div>
                    </transition>
                    <div class="form-group help">
                        <transition name="fade">
                            <div class="progress" v-show="progress">
                              <div class="progress-bar progress-bar-striped active" ref="progress" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                                <span class="sr-only">100% Complete</span>
                              </div>
                            </div>
                        </transition>
                    </div>
	            </form>
	        </div>
	    </div>
	</div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.container{
	padding-top: 100px;
}
.form-bg{
    background: #00b4ef;
}
.form-horizontal{
    background: #fff;
    padding-bottom: 40px;
    border-radius: 15px;
    text-align: center;
}
.form-horizontal .heading{
    display: block;
    font-size: 35px;
    font-weight: 700;
    padding: 35px 0;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 30px;
}
.form-horizontal .form-group{
    padding: 0 40px;
    margin: 0 0 25px 0;
    position: relative;
}
.form-horizontal .form-control{
    background: #f0f0f0;
    border: none;
    border-radius: 20px;
    box-shadow: none;
    padding: 0 20px 0 45px;
    height: 40px;
    transition: all 0.3s ease 0s;
}
.form-horizontal .form-control:focus{
    background: #e0e0e0;
    box-shadow: none;
    outline: 0 none;
}
.form-horizontal .form-group i{
    position: absolute;
    top: 12px;
    left: 60px;
    font-size: 17px;
    color: #c8c8c8;
    transition : all 0.5s ease 0s;
}
.form-horizontal .form-control:focus + i{
    color: #00b4ef;
}
.form-horizontal .fa-question-circle{
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 60px;
    font-size: 20px;
    color: #808080;
    transition: all 0.5s ease 0s;
}
.form-horizontal .fa-question-circle:hover{
    color: #000;
}
.form-horizontal .main-checkbox{
    float: left;
    width: 20px;
    height: 20px;
    background: #11a3fc;
    border-radius: 50%;
    position: relative;
    margin: 5px 0 0 5px;
    border: 1px solid #11a3fc;
}
.form-horizontal .main-checkbox label{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
}
.form-horizontal .main-checkbox label:after{
    content: "";
    width: 10px;
    height: 5px;
    position: absolute;
    top: 5px;
    left: 4px;
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    background: transparent;
    opacity: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.form-horizontal .main-checkbox input[type=checkbox]{
    visibility: hidden;
}
.form-horizontal .main-checkbox input[type=checkbox]:checked + label:after{
    opacity: 1;
}
.form-horizontal .text{
    float: left;
    margin-left: 7px;
    line-height: 20px;
    padding-top: 5px;
    text-transform: capitalize;
}
.form-horizontal .btn{
    float: right;
    font-size: 14px;
    color: #fff;
    background: #00b4ef;
    border-radius: 30px;
    padding: 10px 25px;
    border: none;
    text-transform: capitalize;
    transition: all 0.5s ease 0s;
}
.btn{
    outline: none!important;
}
@media only screen and (max-width: 479px){
    .form-horizontal .form-group{
        padding: 0 25px;
    }
    .form-horizontal .form-group i{
        left: 45px;
    }
    .form-horizontal .btn{
        padding: 10px 20px;
    }
}
</style>

<script>
import querystring from 'querystring'
export default({
  data () {
    return {
      loginname: '',
      pass: '',
      repass: '',
      showAlert: false,
      alertText: '',
      progress: false
    }
  },
  methods: {
    register () {
      this.progress = false
      if (!this.loginname) {
        this.showAlert = true
        this.alertText = '请输入用户名或电子邮箱'
        return
      }
      if (this.pass !== this.repass) {
        this.showAlert = true
        this.alertText = '两次输入的密码不相同，请重试'
        return
      }
      this.showAlert = false
      this.alertText = ''
      let data = {loginname: this.loginname, pass: this.$aesEncrypt(this.pass)}
      let self = this
      this.$axios.post('/api/register', querystring.stringify(data))
        .then((response) => {
          if (response.data.code === 0) {
            this.showAlert = true
            this.alertText = response.data.msg
          } else {
            self.progress = true
            self.$refs.progress.style.width = '100%'
            setTimeout(function () {
              self.progress = false
              console.log(response.data)
              alert(response.data.msg)
              self.$router.push({path: '/overview'})
            }, 1000)
          }
        })
        .catch((reject) => {
          // console.log(response.data,msg)
        })
    }
  }
})
</script>
