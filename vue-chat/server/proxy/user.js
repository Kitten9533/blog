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
exports.addUser = function (loginname, pass, token, callback) {
	User.create({loginname: loginname, pass: pass, accessToken: token}, callback);
}

// 登录时验证该用户的accesstoken,如果accesstoken过期，则生成一个新的token,并存入数据库，再返回给用户保存到localstorage中
exports.login = function (loginname, pass, callback) {
	User.findOne({loginname: loginname, pass: pass}, callback);
}

//登录时发现token过期时 更新相应的token
exports.updateToken = function (loginname, pass, token, callback) {
	User.update({loginname : loginname, pass : pass}, {$set:{accessToken: token}}, callback);
}