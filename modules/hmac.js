const crypto = require('crypto');

exports.md5 = (string, secret) => {
  return crypto.createHmac("md5", secret).update(string).digest("hex");
}

exports.sha1 = (string, secret) => {
  return crypto.createHmac("sha1", secret).update(string).digest("hex");
}

exports.sha256 = (string, secret) => {
  return crypto.createHmac("sha256", secret).update(string).digest("hex");
}

exports.sha512 = (string, secret) => {
  return crypto.createHmac("sha512", secret).update(string).digest("hex");
}