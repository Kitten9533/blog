<template>
	<div class="middle-box text-center loginscreen   animated fadeInDown">
        <div>
            <div>

                <h1 class="logo-name">BLOG</h1>

            </div>
            <h3>欢迎注册 BLOG</h3>
            <p>创建一个新账户</p>
            <form class="m-t" role="form" action="http://localhost:3000/server_register">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="请输入用户名" required="">
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="请输入密码" required="">
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
                <button type="submit" class="btn btn-primary block full-width m-b">注 册</button>

                <p class="text-muted text-center"><small>已经有账户了？</small><a href="login.html">点此登录</a>
                </p>

            </form>
        </div>
    </div>
</template>

<style>
    @import "../assets/css/bootstrap.min14ed.css?v=3.3.6";
    @import "../assets/css/bootstrap.min.css";
    @import "../assets/css/plugins/iCheck/custom.css";
    @import "../assets/css/animate.min.css";
    @import "../assets/css/style.min862f.css?v=4.1.0";
    @import "../assets/css/font-awesome.min93e3.css?v=4.4.0";
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
