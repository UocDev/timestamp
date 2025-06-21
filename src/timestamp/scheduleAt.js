function scheduleAt(targetTime, callback) {
  const now = Date.now();
  const delay = new Date(targetTime).getTime() - now;

  if (delay <= 0) return callback(new Error('Target time is in the past'));

  return setTimeout(() => callback(null, new Date()), delay);
}

module.exports = scheduleAt;