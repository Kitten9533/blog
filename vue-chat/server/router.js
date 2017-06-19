var express 		= require('express');
var toolsController = require('./controllers/toolsController');
var usersController = require('./controllers/usersController');
var auth 			= require('./middlewares/auth');
var router = express.Router(); 

router.get('/send_trail_mail', toolsController.sendTrailMail);
router.post('/sendToRebot', toolsController.sendToRebot);

// 用户注册传入loginname,pass。
// 查询账号是否存在
// 保存loginname,pass.生成并保存accesstoken
// accesstoken返回给前台，前台保存到localStorage中
router.post('/register', usersController.registerUser);

// 用户登录传入loginname,pass
// 账号，密码与数据库中的一致时，返回accesstoken给前台，
// 前台保存到localStorage中
router.post('/login', usersController.login);

// TODO 登录后传入loginname,pass
// 登录成功后，得到accesstoken
// 判断accesstoken是否可用,如不可用则重新生成一个accesstoken替换数据库中的
// 再返回给前台，保存到localstorage中

// 后续访问有权限的页面时，只要传入accesstoken
// auth.verifyauth判断accesstoken是否过期,过期则重新登录
// 继续执行，通过accesstoken查询数据库获取用户信息
// 有相应匹配则返回该用户信息，否则，重定向到登录页

// 其他查询、操作用户信息的
// 
// 


// 用户登出时,传入accesstoken
// auth.verifyauth判断accesstoken是否过期,过期则重新登录,也就不用继续执行

// router.post('loginout', auth.verifyauth, usersController.loginOut);
router.post('loginout', auth.verifyauth, function (req, res) {
	return res.json({
		code: 1,
		msg: '退出成功',
		accessToken: null,
		time: new Date()
	})
})

router.get('/userinfo', auth.verifyauth, function (req, res) {
	res.redirect('/#/userinfo');
})

module.exports = router;