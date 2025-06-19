function base64Decode(encodedStr) {
  return Buffer.from(encodedStr, 'base64').toString('utf8');
}

module.exports = base64Decode;