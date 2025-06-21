function scheduleCron(timeStr, callback) {
  const [hour, minute] = timeStr.split(':').map(Number);

  if (isNaN(hour) || isNaN(minute)) throw new Error('Invalid time string');

  function getNextDelay() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(hour, minute, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    return next.getTime() - now.getTime();
  }

  function scheduleNext() {
    const delay = getNextDelay();
    setTimeout(() => {
      callback(new Date());
      scheduleNext(); // recursive reschedule
    }, delay);
  }

  scheduleNext();
}

module.exports = scheduleCron;