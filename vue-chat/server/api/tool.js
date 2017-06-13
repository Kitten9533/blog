var mail = require('../common/mail');
var validator = require('validator');

var sendTrailMail = function (req, res) {
	var email = req.query.email;
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
