var UserModel 	= require('../models').User
var querystring = require('querystring');
var util	    = require('util');

var registerUser = function (req, res) {
	console.log('registerUser');
	let postData = "";
	req.on('data', function (data) {
		postData += data;
	})
	req.on('end' ,function () {
		queryUser(req, res, postData);
	})
	req.on('error', function (e) {
		res.json({
			code: 0,
			msg: e.message,
			time: new Date()
		});
	});
}
exports.registerUser = registerUser;

var queryUser = function (req, res, data) {
	data = querystring.parse(data);
	let msg = "";
	console.log(data);
	UserModel.findOne({loginname: data.loginname}, function (user) {
		console.log(user);
		if(!user){
			console.log('用户 %s 不存在', data.loginname);
		} else {
			console.log('用户 %s 存在', data.loginname);
		}
	})
	res.json({
		code: 1,
		msg: '1111',
		time: new Date()
	});
}
exports.queryUser = queryUser;