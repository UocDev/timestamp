const syncTime = require('./syncTime');

function syncAndCorrect(callback) {
  syncTime((err, data) => {
    if (err) return callback(err);

    const correctedTime = new Date(data.localTime.getTime() - data.driftMilliseconds);
    callback(null, {
      correctedTime,
      ...data
    });
  });
}

module.exports = syncAndCorrect;