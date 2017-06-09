var nodemailer	  = require('nodemailer');
var async	 	  = require('async');
var logger		  = require('../common/logger');
var config		  = require('../config');
var util          = require('util');

let transporter = nodemailer.createTransport({
    host: config.mail_opts.host,
    port: config.mail_opts.port,
    secure: config.mail_opts.secure, // secure:true for port 465, secure:false for port 587
    auth: {
        user: config.mail_opts.auth.user,
        pass: config.mail_opts.auth.pass
    }
});

// // setup email data with unicode symbols
// let mailOptions = {
//     from: '"Kitten 👻" <18868195887@163.com>', // sender address
//     to: '1173860556@qq.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world ?', // plain text body
//     html: '<b>Hello world ?</b>' // html body
// };

// data邮件对象
var sendMail = function (data, req, res) {
	logger.info(new Date());
	console.log('sendMail');
	console.log(data);
	async.retry({times: 5}, function (done) {
		// send mail with defined transport object
		transporter.sendMail(data, (error, info) => {
		    if (error) {
		    	logger.error('send mail error', error, data);
		        return done(error);
		    }
		    console.log('Message %s sent: %s', info.messageId, info.response);
		    return done()
		});
	}, function (err) {
		if (err) {
			logger.error('send mail finally error', err, data)
			res.json({
      			code: 0,
      			msg: util.format('send mail finally error %s %s', err, data)
      		});
      		return {
      			code: 0,
      			msg: util.format('send mail finally error %s %s', err, data)
      		};
		}
		logger.info('send mail success at ' + new Date());
		res.json({
      		code: 1,
      		msg: util.format('send mail success at %s', new Date())
      	});
		return {
      		code: 0,
      		msg: util.format('send mail success at %s', new Date())
      	};
	})
};
exports.sendMail = sendMail;

exports.sendTrialMail = function (who, req, res) {
	let from = util.format('%s <%s>', config.name, config.mail_opts.auth.user);
	let to = who;
	let subject = config.name + ': Hello';
	let text= 'Hello';
	let html = '<b>Hello </b>';
	exports.sendMail({
		from: from,
		to: to,
		subject: subject,
		text: text,
		html: html
	}, req, res)
}
