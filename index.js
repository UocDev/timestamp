const now = require('./src/timestamp/now');
const unix = require('./src/timestamp/unix');
const discordFull = require('./src/timestamp/discordFull');
const htmlTime = require('./src/timestamp/htmlTime');
const androidISO = require('./src/timestamp/androidISO');
const saveTimestamp = require('./src/saveTimestamp')

module.exports = {
  now,
  unix,
  discordFull,
  htmlTime,
  androidISO,
  saveTimestamp
  
};
// require some others packages timestamp for good results,  this is still wip but thank you for using my package :D