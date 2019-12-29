module.exports = {
  encode: (string) => {
    return Buffer.from(string, "utf8").toString("base64");
  },
  decode: (hash) => {
    return Buffer.from(hash, "base64").toString("utf8");
  }
}