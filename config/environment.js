const defaultEnvironment = {
  timezone: 'UTC',
  defaultFormat: ,
  locale: 'en-US',
};

let currentEnv = { ...defaultEnvironment };

/**
 * Initialize or update environment config.
 * @param {Object} options
 * @param {string} [options.timezone]
 * @param {string} [options.defaultFormat]
 * @param {string} [options.locale]
 */
function setEnvironment(options = {}) {
  currentEnv = {
    ...currentEnv,
    ...options
  };
}

/**
 * Get a single environment variable by key.
 * @param {string} key
 * @returns {any}
 */
function getEnv(key) {
  return currentEnv[key];
}

/**
 * Get the full environment config (read-only).
 * @returns {Object}
 */
function getAllEnv() {
  return { ...currentEnv };
}

/**
 * Reset environment to default values.
 */
function resetEnvironment() {
  currentEnv = { ...defaultEnvironment };
}

module.exports = {
  setEnvironment,
  getEnv,
  getAllEnv,
  resetEnvironment
};
