function utfDecode(buffer) {
  return Buffer.from(buffer).toString('utf8');
}

module.exports = utfDecode;