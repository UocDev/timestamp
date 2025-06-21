function scheduleRepeat(intervalMs, callback) {
  if (typeof intervalMs !== 'number' || intervalMs <= 0) {
    throw new Error('Invalid interval');
  }

  return setInterval(() => callback(new Date()), intervalMs);
}

module.exports = scheduleRepeat;