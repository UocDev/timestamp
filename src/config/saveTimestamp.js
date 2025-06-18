const fs = require('fs');
const path = require('path');
const now = require('./now');

function saveTimestamp(locale = 'id-ID') {
  const folderPath = path.join(__dirname, '..', 'logs');
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  const date = new Date();
  const filename = `timestamp-${date.toISOString().slice(0, 10)}.txt`;
  const filePath = path.join(folderPath, filename);

  const timestamp = now(locale);
  fs.appendFileSync(filePath, `[${timestamp}]\n`, 'utf8');

  return filePath; // Return path to confirm
}

module.exports = saveTimestamp;