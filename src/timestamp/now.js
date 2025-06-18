const ensureConfigDir = require('./config/ensureConfigDir');
const getConfig = require('./config/getConfig');

function now(locale) {
  ensureConfigDir();
  const config = getConfig();
  const selectedLocale = locale || config.locale || 'id-ID';
  return new Date().toLocaleString(selectedLocale);
}

module.exports = now;