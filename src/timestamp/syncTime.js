const https = require('https');

function syncTime(callback) {
  const url = 'https://worldtimeapi.org/api/ip';

  https.get(url, (res) => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const serverTime = new Date(json.utc_datetime);
        const localTime = new Date();
        const driftMs = localTime.getTime() - serverTime.getTime();

        callback(null, {
          syncedTime: serverTime,
          localTime: localTime,
          driftMilliseconds: driftMs,
          driftSeconds: Math.round(driftMs / 1000),
          timezone: json.timezone,
          raw: json
        });
      } catch (err) {
        callback(new Error('Failed to parse time API response'));
      }
    });
  }).on('error', (err) => {
    callback(new Error(`HTTP Error: ${err.message}`));
  });
}

module.exports = syncTime;