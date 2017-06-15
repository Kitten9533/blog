var User 		= require('../proxy').User;
var querystring = require('querystring');
var util	    = require('util');
var tool 		= require('../common/tool');
var crypto		= require('../common/crypto');

var registerUser = function (req, res) {
	console.log('registerUser');
	let postData = "";
	req.on('data', function (data) {
		postData += data;
	})
	req.on('end' ,function () {
		// authtoken
		console.log(req.headers.authorization);
		let data = querystring.parse(postData);
		console.log(data);
		let loginname = data.loginname;
		// let pass = crypto.aesDecrypt(data.pass);
		let pass = data.pass;
		User.queryUserByLoginName(loginname, function (err, doc) {
			if (err) {
				tool.resBack(res, 0, err);
			}
			else {
				if (!doc) {
					// 用户不存在可以注册
					addUser(req, res, loginname, pass);
				}
				else {
					tool.resBack(res, 0, '该用户已注册');
				}
			}
		})
	})
	req.on('error', function (e) {
		tool.resBack(res, 0, e.message);
	});
}
exports.registerUser = registerUser;

var addUser = function (req, res, loginname, pass) {
	User.addUser(loginname, pass, function (err, doc) {
		if (err) {
			tool.resBack(res, 0, err);
		}
		else {
			if (doc) {
				req.session.loginname = loginname;
				tool.resBack(res, 1, '注册成功');
			}
			else {
				tool.resBack(res, 0, '注册失败');
			}
		}	
	})
}
exports.addUser = addUser;

var login = function (req, res) {
	console.log('login');
	let postData = '';
	req.on('data', function (data) {
		postData += data;
	})
	req.on('end', function () {
		let data = querystring.parse(postData);
		let loginname = data.loginname;
		let pass = data.pass;
		User.login(loginname, pass, function (err, doc) {
			if (err) {
				tool.resBack(res, 0, err);
			}
			else {
				if (doc) {
					res.json({
						code: 1,
						msg: '登陆成功',
						accessToken: doc.accessToken,
						time: new Date()
					});
				}
				else {
					res.json({
						code: 0,
						msg: '登录失败，账号或密码错误',
						accessToken: null,
						time: new Date()
					});
				}
			}
		})
	})
}
exports.login = login;
