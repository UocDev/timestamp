const https = require('https');

function syncTimeFrom(url, callback) {
  https.get(url, (res) => {
    let raw = '';
    res.on('data', chunk => raw += chunk);
    res.on('end', () => {
      try {
        const json = JSON.parse(raw);
        const serverTime = new Date(json.utc_datetime || json.datetime || json.utc_time);
        const localTime = new Date();
        const drift = localTime.getTime() - serverTime.getTime();

        callback(null, {
          syncedTime: serverTime,
          localTime,
          driftMilliseconds: drift,
          driftSeconds: Math.round(drift / 1000),
          timezone: json.timezone || 'Unknown',
          raw: json
        });
      } catch (err) {
        callback(new Error('Failed to parse response'));
      }
    });
  }).on('error', (err) => {
    callback(new Error(`HTTP error: ${err.message}`));
  });
}

module.exports = syncTimeFrom;