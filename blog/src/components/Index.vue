<template>
    <div class="container">
        <div class="header"></div>
        <div class="nav">
            <div class="navigation-bar">
                <div class="row">
                    <div class="col-xs-6">
                        <div class="logo">
                            <a href="index.html"><span class="fa fa-viacoin"></span></a>
                        </div>
                    </div>
                    <div class="col-xs-6 text-right">
                        <div class="menu">
                            <a href="#">MENU <span class="menu-icon glyphicon glyphicon-align-right" aria-hidden="true"></span></a>
                        </div>
                    </div>
                </div>
                <div class="enter-div">
                    <button type="button" class="btn enter-btn" @click="toBlog">Enter Blog</button>
                </div>
            </div> 
        </div>
    </div>
</template>

<style type="text/css">
    *{margin: 0;padding:0;}
    body{font-family: 'Lora', serif;}
    h1,h2,h3,h4,h5,h6{
        font-family: 'Lora', sans-serif;
    }
    .container{width: 100%;height: 100%;margin:0;padding:0;position:relative;}
    .header{width: 100%;height: 100%;margin:0;padding:0;background: url("../assets/img/background.jpg") no-repeat;background-size: 100% 100%;}
    .header:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        top:0;left: 0;
    }
    .nav{
        width: 100%;
        z-index: 1;
        position: absolute;
        top:0;
        height: 73px;
    }
    .navigation-bar{
        z-index: 1;
        top:0;
        width: 80%;
        height: 73px;
        margin:0 auto;
    }
    .navigation-bar div.row{
        width:100%;
        height:66px;
        /*margin:8px auto 2px auto;*/
        border-bottom: 1px solid rgba(255,255,255,0.2);
        text-align: left;
    }
    .text-right{
        text-align: right;
    }
    .fa-viacoin:before{
        line-height: 66px;
        color:#fff;
        font-size:24px;
    }
    .logo{
        height: 30px;
    }
    .menu{
        margin:0;
        height: 30px;
    }
    .menu a{
        line-height: 66px;
        color:white !important;
        font-size:22px;
    }
    .ion-navicon{
        content:"\f20e";
    }
    .glyphicon-align-right:before{
        font-size: 18px;
    }
    .toBlog{
        position:absolute;
        top:70%;
    }
    .enter-div{
        width:200px;
        height:100px;
        position:fixed;
        left:50%;
        top:50%;
        margin:100px 0 0 -100px;
        color:#fff;
    }
    .enter-btn{
        width:200px;
        height:40px;
        background: rgba(0,0,0,0);
        border:1px solid rgba(255,255,255,0.5);
        color:#fff;
        transition: 0.5 all;
        -webkit-transition: 0.5 all;
    }
    .enter-btn:hover{
        background: rgba(255,255,255,0.3);
        border:1px solid rgba(0,0,0,0.3);
        color:#fff;
        transition: 0.3s all;
        -webkit-transition: 0.3s all;
    }
    .enter-div p{
        font-size: 20px;
    }
</style>

<script>
    import $ from 'jquery'
    export default {
      data () {
        this.init()
        return {
          msg: 'Hello'
        }
      },
      methods: {
        init () {
          $
        },
        toBlog () {
          this.$router.push({'name': 'Blog'})
        }
      }
    }
</script>
