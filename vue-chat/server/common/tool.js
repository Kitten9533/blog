var resBack = function (res, code, msg) {
	res.json({
		code: code,
		msg: msg,
		time: new Date()
	});
}
exports.resBack = resBack;