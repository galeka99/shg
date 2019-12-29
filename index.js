const hash = require('./modules/hash');
const random = require('./modules/random');
const hmac = require('./modules/hmac');
const encrypt = require('./modules/encrypt');
const decrypt = require('./modules/decrypt');
const base64 = require('./modules/base64');

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt,
  base64: base64,
  hash: hash,
  hmac: hmac,
  random: random
}