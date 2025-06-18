function now(locale = 'id-ID') {
  return new Date().toLocaleString(locale);
}
module.exports = now;