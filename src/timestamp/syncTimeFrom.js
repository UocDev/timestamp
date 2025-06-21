const https = require('https');

function syncTimeFrom(url, callback) {
  const options = {
    headers: {
      'User-Agent': 'Timestamp-Hasei-Bot/1.0 (https://npmjs.com/package/@uocdev/timestamp-hasei)'
    }
  };

  https.get(url, options, (res) => {
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
        callback(new Error('❌ Failed to parse API response'));
      }
    });
  }).on('error', (err) => {
    callback(new Error(`❌ HTTP error: ${err.message}`));
  });
}

module.exports = syncTimeFrom;