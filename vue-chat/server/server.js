var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var onlineUserList = [];// 当前在线用户列表
// [{userId, userName, userImg},{...}]

io.on('connection', function(socket){
	console.log(' 创建连接成功');
	// 登录
	socket.on('login', (obj) => {
		socket.socketId = obj.userId;
		let flag = false;
		for(let i = 0; i < onlineUserList.length; i++) {
			if(obj.userId === onlineUserList[i].userId) {
				flag = true;
				break;
			}
		}
		if(!flag) {// 在线新用户添加
			onlineUserList.push(obj);
		}
		console.log(obj)
		console.log(onlineUserList)
		socket.broadcast.emit('login', {loginUser: obj, onlineUserList: onlineUserList});
		console.log('broadcast end');
	});

	// 退出
	socket.on('logout', (obj) => {
		let user = {};
		let flag = false;
		for(let i = 0; i < onlineUserList.length; i++) {
			if(onlineUserList[i].userId === socket.socketId) {
				onlineUserList[i].userId = -1;
				flag = true;
				user = onlineUserList[i];
				break;
			}
		}
		if(flag) {
			socket.broadcast.emit('logout', {msg: user.userName + '退出了...'});
		}
	});

	// 发送消息
	socket.on('message', (obj) => {
		socket.broadcast.emit('message', {msg: obj});
	})

	socket.on('disconnect', (data) => {
		socket.broadcast.emit('disconnect', data);
		console.log('用户退出')
	})

});
server.listen(8010);
console.log('success  ----->  running on 8010');