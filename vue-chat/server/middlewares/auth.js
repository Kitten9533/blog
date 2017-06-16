var config= require('../config');
var authtoken = require('../common/authtoken');


// 判断authtoken是否过期
exports.verifyauth = function (req, res, next) {
    let token = req.headers.authorization;
    let flag = authtoken.verifyToken(token);
    // token无效,返回，前台页面重定向到login页面(http.js中)
    // 如果token原先能用，但是几天后登录token已过期，则重新登录获取最新的token即可
    if (!flag) {
        return res.status(401).send();
    }

    next();
}
