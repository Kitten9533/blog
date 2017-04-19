var http = require('https');
var cheerio = require('cheerio');
var url = 'https://www.cnblogs.com/';

function filter(html) {
	var $ = cheerio.load(html);
}

filter('aaa');

// http.get(url,function(res){
// 	var html='';
// 	res.on('data',function(data){
// 		html += data
// 	})
// 	res.on('end',function(){
// 		//console.log(html);
// 		filter(html);
// 	})
// }).on('error',function(){
// 	console.log('error');
// });