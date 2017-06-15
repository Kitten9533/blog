var models	= require('../models');
var config 	= require('../config');
var User 	= models.User;

exports.queryUserByLoginName = function (loginname, callback) {
	User.findOne({loginname: loginname}, callback);
}

exports.queryUser = function (callback) {
	User.find(callback);
}

exports.addUser = function (loginname, pass, callback) {
	User.create({loginname: loginname, pass: pass}, callback);
}

exports.login = function (loginname, pass, callback) {
	User.findOne({loginname: loginname, pass: pass}, callback);
}