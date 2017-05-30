var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var userList = [];
var onlineList = [];
var offlineList = [];

io.on('connection', function (socket) {
	console.log('connection is established!')
	io.sockets.emit('refreshList', {loginUser: {}, userList: userList});
	socket.on('login', (user) => { // obj传入用户的userId,userName,userImg
		socket.socketId = user.userId;
		let flag = false;
		for (let i = 0; i < userList.length; i++) {
			if (user.userId == userList[i].userId) {
				userList[i].online = true;
				flag = true;
				break;
			}
		}
		if (!flag) {// 在线用户添加
			user.online = true;
			userList.push(user)
		}
		console.log(userList.length);
		// 在线用户传给前台页面，更新在线用户列表
		io.sockets.emit('refreshList', {loginUser: user, userList: userList});
	})
	socket.on('disconnect', () => {
		let user = {};
		let flag = false;
		for (let i = 0; i < userList.length; i++) {
			if (userList[i].userId == socket.socketId) {
				userList[i].online = false;
				flag = true;
				user = userList[i];
				break;
			}
		}
		if (flag) {
			io.sockets.emit('refreshList', {loginUser: {}, userList: userList});
			socket.broadcast.emit('logout', {logoutuser: user, userList: userList});
		}
	})
});

server.listen(8010);
console.log('-->8010');
