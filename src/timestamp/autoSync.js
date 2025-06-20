const syncTime = require('./syncTime');

function autoSync(intervalMs = 60000, onSync = () => {}) {
  const doSync = () => {
    syncTime((err, data) => {
      if (!err) {
        onSync(data);
      } else {
        console.warn('[autoSync] Failed:', err.message);
      }
    });
  };

  doSync(); // Initial sync
  return setInterval(doSync, intervalMs); // Repeat
}

module.exports = autoSync;