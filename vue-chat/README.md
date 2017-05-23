# vue-chat

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

聊天室 Room
私聊相当于room中只有2个人，群聊有多个,
暂时完成聊天室的
消息 msg [{
	senderId:'',// 发送人
	roomId:'',// 聊天室
	time:'',// 发送时间
	type:'',// 消息类型   1 系统消息，2.聊天信息
	content:'',// 消息内容
}]

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
