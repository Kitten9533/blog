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
	},
	rebot: {
		key: '7e4a79e3e5fc4f63b7d87d68e5802bc8'
	}
}

module.exports = config;
