var config 		= require('../config');
var util	    = require('util');
var http		= require('http');
var querystring = require('querystring')

var sendTest = function (req,res) {
	console.log('sendTest');
}
exports.sendTest = sendTest;

var sendToRebot = function (req, res) {
	let postData = "";
	req.on('data', function(data) {
		postData += data;
	});
	req.on('end', function() {
		getFromRebot(res, postData)
	});
	req.on('error', function (e) {
		res.json({
			code: 0,
			msg: e.message,
			time: new Date()
		});
	});
}
exports.sendToRebot = sendToRebot;

var getFromRebot = function (res, data) {
	let obj = querystring.parse(data);
	let body = "";
	let postdata = querystring.stringify({
		key: config.rebot.key,
		info: obj.info,
		userid: obj.userid
	});
	let res_Dev = res;
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
	let req = http.request(options, function (res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			body += chunk;
			// console.log('BODY: ' + chunk);
		});
		res.on('end', function (res) {
			console.log(JSON.parse(body).text);
			res_Dev.json({
				code: 1,
				msg: JSON.parse(body).text,
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
exports.getFromRebot = getFromRebot;
