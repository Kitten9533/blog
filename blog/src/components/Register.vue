<template>
	<div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">BLOG</h1>

            </div>
            <h3>欢迎注册 BLOG</h3>
            <p>创建一个新账户</p>
            <form class="m-t" role="form" action="#">
                <div class="form-group">
                    <input name="username" type="text" class="form-control" placeholder="请输入用户名" required="" v-model="username">
                </div>
                <div class="form-group">
                    <input name="password" type="password" class="form-control" placeholder="请输入密码" required="" v-model="password">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="请再次输入密码" required="">
                </div>
                <div class="form-group text-left">
                    <div class="checkbox i-checks">
                        <label class="no-padding">
                            <input type="checkbox" class="input-chk"><i></i> <p class="chk-span">我同意注册协议</p></label>
                    </div>
                </div>
                <button type="button" class="btn btn-primary block full-width m-b" @click="register">注 册</button>

                <p class="text-muted text-center"><small>已经有账户了？</small><a href="login.html">点此登录</a>
                </p>

            </form>
        </div>
    </div>
</template>

<script>
    export default{
      data () {
        return {
          username: '',
          password: ''
        }
      },
      methods: {
        register () {
          console.log('register')
          this.$http.get('/api/registerAccout')
            .then((response) => {
              // 响应成功
              let param = {
                username: this.username,
                password: this.password
              }
              this.$http.post('/api/registerAccout', param)
                .then((response) => {
                  alert('注册成功')
                  this.$router.push({'name': 'Hello'})
                  console.log(response)
                })
                .catch((reject) => {
                  alert('注册失败')
                  console.log(reject)
                })
            })
            .then((response) => {
              console.log(response)
            })
            .catch((reject) => {
              console.log(reject)
            })
        }
      }
    }
</script>


<style>
    .input-chk{
    	width:18px;height:18px;
    	margin-left:0 !important;
    }
    .chk-span{
    	margin-top:0px;
    	margin-left:25px;
    }
    .logo-name{
    	font-size: 100px !important;
    }
</style>
