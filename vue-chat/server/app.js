var app = require('express')();
var server = require('http').createServer(app);
var _ = require('underscore');
var router = require('./router')

server.listen(8010);
console.log('-->8010');
