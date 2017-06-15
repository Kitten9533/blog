var config= require('../config');
var jwt = require('jsonwebtoken');

let key = config.key;
let content = {accessToken: 'loginnameaijing'};
let token = jwt.sign(content, key, {
                    expiresIn: 60*60*24*7
                });

jwt.verify(token, key, function (err, decode) {
        if (err) {  //  时间失效的时候/ 伪造的token          
            console.log(err);
        } else {
        	console.log(decode);
        	console.log(decode.accessToken);
            // next();
        }
    })
