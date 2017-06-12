var config 		= require('../config');
var util	    = require('util');
var http		= require('http');
var querystring = require('querystring')

var sendTest = function (req,res) {
	console.log('sendTest');
}
exports.sendTest = sendTest;

var sendToRebot = function (req, res) {
	console.log(req.query);
	// console.log('rebot.js');
	let res_Dev = res;
	let body = "";
	let postdata = querystring.stringify({
		key: config.rebot.key,
		info: '你好啊，今天天气怎么样',
		userid: '12345678'
	});
	let options = {
		host: 'www.tuling123.com',
		port: 80,
		path: '/openapi/api',
		method: 'POST',
		rejectUnauthorized: false,
		headers: {
			"Content-Type": 'application/x-www-form-urlencoded', //这个一定要有
		}
	};
	req = http.request(options, function (res) {
		// console.log('STATUS: ' + res.statusCode);
		// console.log('HEADERS: ' + JSON.stringify(res.headers));
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			body += chunk;
			// console.log('BODY: ' + chunk);
		});
		res.on('end', function (res) {
			// console.log(body);
			res_Dev.json({
				code: 1,
				msg: body,
				time: new Date()
			});
		});
	});
	req.on('error', function(e) { 
		console.log('error');
		console.log('problem with request: ' + e.message); 
		res_Dev.json({
			code: 0,
			msg: e.message,
			time: new Date()
		});
	});
	 
	// write data to request body 
	// console.log(postdata);
	req.write(postdata);
	req.end();
}
exports.sendToRebot = sendToRebot;
