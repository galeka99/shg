const crypto = require('crypto');

module.exports = (string, secret) => {
  if (string == null || string == undefined) {
    console.log("Encrypt error: Parameter \'string\' is required!");
    return;
  } else if (secret == null || secret == undefined) {
    console.log("Encrypt error: Parameter \'secret\' is required!");
    return;
  }

  const algorithm = "aes-512-cbc";
  const password = crypto.scryptSync(secret, '332c9159404b700a', 64);
  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createCipheriv(algorithm, password, iv);
  let encrypted = cipher.update(string, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}