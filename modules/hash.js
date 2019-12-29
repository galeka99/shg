const crypto = require('crypto');

exports.md5 = (string) => {
  return crypto.createHash("md5").update(string, "utf8").digest("hex");
}

exports.sha1 = (string) => {
  return crypto.createHash("sha1").update(string, "utf8").digest("hex");
}

exports.sha256 = (string) => {
  return crypto.createHash("sha256").update(string, "utf8").digest("hex");
}

exports.sha512 = (string) => {
  return crypto.createHash("sha512").update(string, "utf8").digest("hex");
}