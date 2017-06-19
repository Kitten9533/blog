var config= require('../config');
var jwt = require('jsonwebtoken');

exports.getToken = function (str) {
    let key = config.key;
    let content = {accessToken: str};
    let token = jwt.sign(content, key, {
                        expiresIn: 60*60*24*7
                        // expiresIn: 1
                    });
    return token;
}

exports.verifyToken = function (token) {
    let key = config.key;
    jwt.verify(token, key, function (err, decode) {
        if (err) {  //  时间失效的时候/ 伪造的token          
            return false;
        } else {
            console.log(decode);
            console.log(decode.accessToken);
            // next();
            return true;
        }
    })
}
