var app = require('express')();
var server = require('http').createServer(app);
var _ = require('underscore');
// var router = require('./router');
var bodyParser = require('body-parser');
// app.use('/api', router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));  

app.get('/test', function (req, res) {
	res.redirect('https://www.baidu.com');
})

server.listen(8010);
console.log('-->8010');
