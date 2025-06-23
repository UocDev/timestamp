const [major] = process.versions.node.split('.').map(Number);

if (major < 18 || major >= 26) {
  console.error(`Unsupported Node.js version: ${process.version}`);
  console.error(`Required: Node.js 18.x or higher`);
  process.exit(1);
}

console.log(`Valid Node.js version: ${process.version}`);

const now = require('./src/timestamp/now');
const unix = require('./src/timestamp/unix');
const discordFull = require('./src/timestamp/discordFull');
const htmlTime = require('./src/timestamp/htmlTime');
const androidISO = require('./src/timestamp/androidISO');
const saveTimestamp = require('./src/timestamp/saveTimestamp')
const base64Encode = require('./src/timestamp/base64Encode');
const base64Decode = require('./src/timestamp/base64Decode');
const utfEncode = require('./src/timestamp/utfEncode');
const utfDecode = require('./src/timestamp/utfDecode');
const getTimezoneInfo = require('./src/timestamp/timezoneInfo');
const compareGmtUtc = require('./src/timestamp/compareGmtUtc');
const syncTimeFrom = require('./src/timestamp/syncTimeFrom');
const syncTime = require('./src/timestamp/syncTime');
const syncAndCorrect = require('./src/timestamp/syncAndCorrect');
const autoSync = require('./src/timestamp/autoSync');
const scheduleAt = require('./src/timestamp/scheduleAt');
const scheduleIn = require('./src/timestamp/scheduleIn');
const scheduleRepeat = require('./src/timestamp/scheduleRepeat');
const scheduleCron = require('./src/timestamp/scheduleCron');
const isString = require('./src/timestamp/validator');
const isNumber = require('./src/timestamp/validator');
const isValidTime = require('./src/timestamp/validator');
const isValidTimezone = require('./src/timestamp/validator');
const validator = require('./src/timestamp/validator');
const formatISO = require('./src/timestamp/formatISO');
const formatCompact = require('./src/timestamp/formatCompact');
const formatReadable = require('./src/timestamp/formatReadable');


module.exports = {
  now,
  unix,
  discordFull,
  htmlTime,
  androidISO,
  saveTimestamp, 
  base64Encode,
  base64Decode,
  utfEncode,
  utfDecode,
  getTimezoneInfo,
  compareGmtUtc,
  syncTimeFrom,
  syncTime,
  syncAndCorrect,
  autoSync,
  scheduleAt,
  scheduleIn,
  scheduleRepeat,
  scheduleCron,
  isString,
  isNumber,
  isValidTime,
  isValidTimezone,
  validator,
  formatISO,
  formatCompact,
  formatReadable
};
// require some others packages timestamp for good results,  this is still wip but thank you for using my package :D