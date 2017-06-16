var models		= require('../models');
var config 		= require('../config');
var authtoken 	= require('../common/authtoken');
var User 		= models.User;

exports.queryUserByLoginName = function (loginname, callback) {
	User.findOne({loginname: loginname}, callback);
}

exports.queryUser = function (callback) {
	User.find(callback);
}

// 注册时给每个用户生成一个accesstoken,有效期为7天
exports.addUser = function (loginname, pass, callback) {
	// 生成accessToken并存入数据库
	let token = authtoken.getToken(loginname);
	User.create({loginname: loginname, pass: pass, accessToken: token}, callback);
}

// 登录时验证该用户的accesstoken,如果accesstoken过期，则生成一个新的token,并存入数据库，再返回给用户保存到localstorage中
exports.login = function (loginname, pass, callback) {
	User.findOne({loginname: loginname, pass: pass}, callback);
}