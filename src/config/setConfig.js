const fs = require('fs');
const path = require('path');

const CONFIG_PATH = path.join(process.cwd(), '.timestamp-config', 'config.json');

function setConfig(newConfig) {
  const current = fs.existsSync(CONFIG_PATH)
    ? JSON.parse(fs.readFileSync(CONFIG_PATH))
    : {};
  const updated = { ...current, ...newConfig };
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(updated, null, 2));
  return updated;
}

module.exports = setConfig;