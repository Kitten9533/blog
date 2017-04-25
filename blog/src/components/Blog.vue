<template>
<div class="bg-gray">
  <div class="div-left">
    <left></left>
  </div>
	<div class="div-right wrapper wrapper-content animated fadeInRight blog">
       <!--  <div> -->
            <div class="row" v-for="(list,index) in objlist">
                <div class="col-lg-4"  v-for="item in objlist[index]">
                    <div class="ibox">
                        <div class="ibox-content">
                            <a v-bind:href="(item.url)" class="btn-link">
                                <h2>{{item.title}}</h2>
                            </a>
                            <div class="small m-b-xs">
                                <strong>{{item.author}}</strong> <span class="text-muted"><i class="fa fa-clock-o"></i>{{item.time}}</span>
                            </div>
                            <p>
                                {{item.summary}}
                            </p>
                            <div class="row">
                                <div class="col-md-6" style="text-align:left;">
                                    <i class="fa fa-eye"> </i>{{item.article_view}}
                                </div>
                                <div class="col-md-6">
                                    <div class="small text-right">
                                        <div> <i class="fa fa-comments-o"> </i>{{item.comment}}</div>       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </div>
</div>
</template>	

<style>
    .bg-gray{
      width:100%;
      background-color: #f3f3f4;
    }
    .div-left{
      width:180px;
      height: 100%;
      top:0;
      left: 0;
      float:left;
      position:fixed;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    .div-right{
      z-index: 1;
      position:absolute;
      left:180px;
      float:left;
    }
</style>

<script>
    import left from './Left.vue'
    export default{
      data () {
        // var objlist = this.getBlogList()
        this.getBlogList()
        return {
          objlist: ''
        }
      },
      components: {
        left
      },
      methods: {
        getBlogList () {
          this.$http.get('/api/getBlogList')
            .then((response) => {
              var list = response.body
              var arr = []
              var tmp = []
              // 数据处理
              for (var i = 0; i < list.length; i++) {
                tmp.push(list[i])
                if ((i + 1) % 3 === 0 || (i + 1) === list.length) {
                  arr.push(tmp)
                  tmp = []
                }
              }
              console.log(arr)
              this.objlist = arr
            })
            .catch((reject) => {
              console.log(reject)
            })
        }
      }
    }
</script>
