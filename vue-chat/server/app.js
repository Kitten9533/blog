var app = require('express')();
var server = require('http').createServer(app);
var _ = require('underscore');
var router = require('./router');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config')
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.set('trust proxy', 1);
app.use(session({
	secret: config.session_secret,
	cookie: {maxAge: 60 * 1000 * 30}, // 过期时间（毫秒）,
	resave: false,
	saveUninitialized: true
}));
app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/session', function (req, res) {
	console.log('session');
	req.session.loginname = '3333';
	console.log(req.session);
	res.send('33');
});

server.listen(8010);
console.log('-->8010');
