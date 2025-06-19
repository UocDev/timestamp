function utfEncode(data) {
  return Buffer.from(data.toString(), 'utf8');
}

module.exports = utfEncode;