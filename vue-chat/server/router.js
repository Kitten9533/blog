var express = require('express');
var toolsController = require('./api/tool');
var mail = require('./common/mail');
var router = express.Router();

router.get('/send_email', toolsController.sendEmail)
// router.get('/send_email', function (req, res) {
// 	res.send('aa');
// })

// router.get('/send_trail_mail', toolsController.sendTrailMail)

router.get('/send_trail_mail', function (req, res) {
	var email = req.query.email;
	console.log(email);
	email = '1173860556@qq.com';
	mail.sendTrialMail(email, req, res);
});

module.exports = router;