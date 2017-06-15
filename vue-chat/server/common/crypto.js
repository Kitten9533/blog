var crypto = require('crypto');
var config = require('../config');

exports.aesEncrypt = function (data) {
  const cipher = crypto.createCipher('aes192', config.key)
  var crypted = cipher.update(data, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
};

exports.aesDecrypt = function (encrypted) {
  const decipher = crypto.createDecipher('aes192', config.key)
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}