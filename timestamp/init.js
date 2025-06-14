const defaultConfig = {
  defaultFormat: 'R',
  timezone: 'UTC',
};

let currentConfig = { ...defaultConfig };

/**
 * Initializes global config for the timestamp module.
 * @param {Object} options
 * @param {'t'|'T'|'d'|'D'|'f'|'F'|'R'} [options.defaultFormat]
 * @param {string} [options.timezone]
 */
function init(options = {}) {
  currentConfig = {
    ...defaultConfig,
    ...options,
  };
}

function getConfig() {
  return { ...currentConfig };
}

module.exports = {
  init,
  getConfig,
};