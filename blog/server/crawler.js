var http = require('https');
var cheerio = require('cheerio');
var url = 'https://www.cnblogs.com/';
var models = require('./db');
var express = require('express');
var router = express.Router();

function filter(html) {
	var $ = cheerio.load(html);
	var blogs = [];
	$(".post_item").each(function(){
		var obj = {};
		obj.title = $(this).find('a.titlelnk').text();
		obj.url = $(this).find('a.titlelnk').attr('href');
		obj.summary = $(this).find('p.post_item_summary').text();
		obj.author = $(this).find('div.post_item_foot a.lightblue').text();
		obj.time = $(this).find('div.post_item_foot')[0].children[2].data;
		obj.comment = $(this).find('div.post_item_foot span.article_comment a').text();
		obj.article_view = $(this).find('div.post_item_foot span.article_view a').text();
		blogs.push(obj);
	});
	//console.log(blogs);

	//保存到数据库
	for(var i=0;i<blogs.length;i++){
		var newBlog = new models.Blog(blogs[i]);
		newBlog.save((err,data) => {
			if(err){
				console.log(err);
			}else{
				console.log('success');
			}
		})
	}

}

http.get(url,function(res){
	var html='';
	res.on('data',function(data){
		html += data
	})
	res.on('end',function(){
		//console.log(html);
		filter(html);
	})
}).on('error',function(){
	console.log('error');
});