<template>
    <div class="container">
        <div class="header"></div>
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
        </div>
    </div>
</template>

<style type="text/css">
    *{margin: 0;padding:0;}
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
    .navigation-bar{
        z-index: 1;
        position: absolute;
        top:0;
        width: 100%;
        height: 73px;
    }
    .navigation-bar div.row{
        width: 1140px;
        height:66px;
        margin:8px auto 2px auto;
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
          $('.menu a').css('color', 'red')
          $('a').click(function () {
            alert('1')
          })
          $(window).ready(function () {
            alert('22')
          })
        }

      }
    }
</script>
