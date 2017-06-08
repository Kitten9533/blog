var nodemailer = require('nodemailer');
var async = require('async');

let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: '18868195887@163.com',
        pass: 'Jiang199455'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Kitten 👻" <18868195887@163.com>', // sender address
    to: '1173860556@qq.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// data邮件对象
var sendMail = function (data) {
	logger.info(new Date());
	async.retry({times: 5}, function (done) {
		// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
		    if (error) {
		    	logger.error('send mail error', err, data);
		        return done(err);
		    }
		    console.log('Message %s sent: %s', info.messageId, info.response);
		    return done()
		});
	}), function (err) {
		if (err) {
      		return logger.error('send mail finally error', err, data);
		}
		logger.info('send mail success');
	}
}

exports.sendMail = sendMail
