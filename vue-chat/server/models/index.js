var config = require('../config');
var logger = require('../common/logger');
var mongoose = require('mongoose');

mongoose.connect(config.mongoose.db, {
	server: {poolSize: 20}
}, function (err) {
	if (err) {
    	logger.error('connect to %s error: ', config.mongoose.db, err.message);
        process.exit(1);
	} else {
		logger.info('connect to %s: ', config.mongoose.db);
	}
});

require('./user');
exports.User = mongoose.model('User');
