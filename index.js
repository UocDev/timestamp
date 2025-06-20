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
};
// require some others packages timestamp for good results,  this is still wip but thank you for using my package :D