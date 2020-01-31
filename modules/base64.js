/**
 * @param {string} text Text that you want to be encoded to base64 (utf8)
 * @return {string}
 */
exports.encode = (text) => {
  return Buffer.from(text, 'utf8').toString('base64');
}

/**
 * @param {string} text Base64 that you want to be decoded to plain text
 * @return {string}
 */
exports.decode = (text) => {
  return Buffer.from(text, 'base64').toString('utf8');
}