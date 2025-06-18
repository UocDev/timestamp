const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(process.cwd(), '.timestamp-config', 'config.json');

function getConfig() {
  try {
    const raw = fs.readFileSync(CONFIG_PATH);
    return JSON.parse(raw);
  } catch (err) {
    return { locale: 'id-ID' };
  }
}

module.exports = getConfig;