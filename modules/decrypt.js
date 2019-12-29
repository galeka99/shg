const crypto = require('crypto');

module.exports = (string, secret) => {
  if (string == null || string == undefined) {
    console.log("Decrypt error: Parameter \'string\' is required!");
    return;
  } else if (secret == null || secret == undefined) {
    console.log("Decrypt error: Parameter \'secret\' is required!");
    return;
  }

  try {
    const algorithm = "aes-512-cbc";
    const password = crypto.scryptSync(secret, '332c9159404b700a', 64);
    const iv = Buffer.alloc(16, 0);
  
    const decipher = crypto.createDecipheriv(algorithm, password, iv);
    let decrypted = decipher.update(string, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (e) {
    console.log(e.toString());
    return;
  }
}