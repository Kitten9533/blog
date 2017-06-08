var mail = require('../common/mail');
// var eventproxy = require('eventproxy');
var sendEmail = function (req, res) {
	var emailAddress = req.emailaddress;
	// var ep = new eventproxy();
	mail.sendMail();
	res.send('hahah');
}
exports.sendEmail = sendEmail;

var sendTrailMail = function (req, res) {
	console.log('req');
	console.log(req.body);
	var email = req.email;
	console.log('email');
	console.log(email);
	email = '1173860556@qq.com';
	mail.sendTrialMail(email, req, res);
}
exports.sendTrailMail = sendTrailMail;
