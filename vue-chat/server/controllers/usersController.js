var User 		= require('../proxy').User;
var querystring = require('querystring');
var util	    = require('util');
var tool 		= require('../common/tool');

var registerUser = function (req, res) {
	console.log('registerUser');
	let postData = "";
	req.on('data', function (data) {
		postData += data;
	})
	req.on('end' ,function () {
		let data = querystring.parse(postData);
		console.log(data);
		let loginname = data.loginname;
		let pass = data.pass;
		console.log(req.session);
		req.session.loginname = '3333';
		console.log(req.session);
		User.queryUserByLoginName(loginname, function (err, doc) {
			if (err) {
				tool.resBack(res, 0, err);
			}
			else {
				if (!doc) {
					// 用户不存在可以注册
					addUser(res, loginname, pass);
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

var addUser = function (res, loginname, pass) {
	User.addUser(loginname, pass, function (err, doc) {
		if (err) {
			tool.resBack(res, 0, err);
		}
		else {
			if (doc) {
				tool.resBack(res, 1, '注册成功');
			}
			else {
				tool.resBack(res, 0, '注册失败');
			}
		}	
	})
}
exports.addUser = addUser;
