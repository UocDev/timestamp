const now = require('./src/timestamp/now');
const unix = require('./src/timestamp/unix');
const discordFull = require('./src/timestamp/discordFull');
const htmlTime = require('./src/timestamp/htmlTime');
const androidISO = require('./src/timestamp/androidISO');

module.exports = {
  now,
  unix,
  discordFull,
  htmlTime,
  androidISO
};
// require some others packages timestamp for good results,  this is still wip but thank you for using my package :D