var mail = require('../common/mail');
var rebot = require('../common/rebot');
var validator = require('validator');

var sendTrailMail = function (req, res) {
	var email = req.query.email;
	console.log(email);
	if (validator.isEmail(email)) {
		email = '1173860556@qq.com';
		mail.sendTrialMail(email, req, res);
	} else {
		res.json({
      		code: 0,
      		msg: '邮箱格式有误，请重新填写'
      	});
	}
}
exports.sendTrailMail = sendTrailMail;

var sendToRebot = function (req, res) {
	console.log('colltrollers sendToRebot');
	console.log(req.query);
	console.log('----');
	rebot.sendToRebot(req,res);
}
exports.sendToRebot = sendToRebot;
