// 设置数据库相关
// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));
/************** 定义模式UserSchema **************/
const UserSchema = mongoose.Schema({
    username : String,
    password : String
});
const BlogSchema = mongoose.Schema({
	title : String,
	url : String,
	summary : String,
	author : String,
	time : String,
	comment : String,
	article_view : String
});

/************** 定义模型Model **************/
const Models = {
    User : mongoose.model('User',UserSchema),
    Blog : mongoose.model('Blog',BlogSchema)
}

module.exports = Models;