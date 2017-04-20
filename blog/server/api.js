// 编写接口
// "use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/registerAccout',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    console.log(req.body.username + ',' + req.body.password);
    let newUser = new models.User({
        username: req.body.username,
        password: req.body.password
    });
    // 查询用户是否存在
    models.User.findOne({'username': req.body.username}, (err,doc) => {
      if (err){
        res.sendStatus(500);
        req.session.error = '网络异常错误';
        console.log('网络异常错误');
      }
      else if (doc) {// 用户不存在 可以注册
        req.session.error = '用户名已存在';
        res.sendStatus(200);
        console.log('用户名已存在')
      }
      else {
        newUser.save((err,data) => {
          if (err) {
            res.sendStatus(500);
            console.log(err);
          } else {
            req.session.error = '用户创建成功';
            res.sendStatus(200);
            console.log('registerAccout successed');
          }
        })
      }
    })

});
// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
    // 通过模型去查找数据库
    models.User.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

router.get('/',(req,res) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("register");
    res.end();
});

router.get('/api/getBlogList',(req,res) => {
  models.Blog.find((err,data) => {
    if(err){
      res.sendStatus(500);
    }
    else{
      //console.log(data);
      res.json(data);
      res.end();
    }
  });
});

module.exports = router;