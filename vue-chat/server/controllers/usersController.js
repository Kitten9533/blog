var User 		= require('../proxy').User;
var querystring = require('querystring');
var util	    = require('util');
var tool 		= require('../common/tool');
var crypto		= require('../common/crypto');
var authtoken 	= require('../common/authtoken');

var registerUser = function (req, res) {
	console.log('registerUser');
	let postData = "";
	req.on('data', function (data) {
		postData += data;
	})
	req.on('end' ,function () {
		// authtoken
		let data = querystring.parse(postData);
		console.log(data);
		let loginname = data.loginname;
		// let pass = crypto.aesDecrypt(data.pass);
		let pass = data.pass;
		User.queryUserByLoginName(loginname, function (err, doc) {
			if (err) {
				return res.json({
					code: 0,
					msg: '通过用户名查询用户过程中发生错误',
					accessToken: null,
					time: new Date()
				});
			}
			else {
				if (!doc) {
					// 用户不存在可以注册
					addUser(req, res, loginname, pass);
				}
				else {
					return res.json({
						code: 0,
						msg: '该用户已存在',
						accessToken: null,
						time: new Date()
					});
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
			return res.json({
				code: 0,
				msg: '注册失败',
				accessToken: null,
				time: new Date()
			});
		}
		else {
			if (doc) {
				return res.json({
					code: 1,
					msg: '注册成功',
					accessToken: doc.accessToken,
					time: new Date()
				});
			}
			else {
				return res.json({
					code: 0,
					msg: '注册过程中发生错误',
					accessToken: null,
					time: new Date()
				});
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
				return res.json({
					code: 0,
					msg: '登录失败，账号或密码错误',
					accessToken: null,
					time: new Date()
				});
			}
			else {
				if (doc) {
					let token = doc.accessToken;
					let flag = authtoken.verifyToken(token);
					if (flag) {
						// token未过期
						return res.json({
							code: 1,
							msg: '登陆成功',
							accessToken: doc.accessToken,
							time: new Date()
						});
					}
					else {
						// token过期 则生成新的token并更新改user
						let newToken = authtoken.getToken(loginname);
						User.updateToken(loginname, pass, newToken, function (err, doc) {
							if (err) {
								return res.json({
									code: 0,
									msg: '登录过程中发生错误，请重试',
									accessToken: null,
									time: new Date()
								})
							}
							else {
								console.log('update')
								console.log(doc);
								return res.json({
									code: 1,
									msg: '登陆成功',
									accessToken: doc.accessToken,
									time: new Date()
								});
							}
						})
					}
				}
				else {
					return res.json({
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
