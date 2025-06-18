const fs = require('fs');
const path = require('path');

const CONFIG_DIR = path.join(process.cwd(), '.timestamp-config');

function ensureConfigDir() {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR);
    fs.writeFileSync(path.join(CONFIG_DIR, 'config.json'), JSON.stringify({
      locale: 'id-ID'
    }, null, 2));
  }
}

module.exports = ensureConfigDir;