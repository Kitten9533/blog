var path = require('path');

var config  = {
	db: '',
	// 邮箱配置
	name: 'Kitten 👻',
	mail_opts: {
	    host: 'smtp.163.com',
	    port: 465,
	    auth: {
	      user: '18868195887@163.com',
	      pass: 'Jiang199455'
	    },
	    secure: true,
	}
}

module.exports = config;
