function scheduleIn(delayMs, callback) {
  if (typeof delayMs !== 'number' || delayMs < 0) {
    return callback(new Error('Invalid delay'));
  }

  return setTimeout(() => callback(null, new Date()), delayMs);
}

module.exports = scheduleIn;