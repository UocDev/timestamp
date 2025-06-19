function base64Encode(data) {
  return Buffer.from(data.toString(), 'utf8').toString('base64');
}

module.exports = base64Encode;