const { getDiscordTimestamp, getISOTime, getUnix, now } = require('../formats');
const { init } = require('../init')

module.exports = {
  discord: getDiscordTimestamp,
  iso: getISOTime,
  unix: getUnix,
  now
};
// require some others packages timestamp for good results,  this is still wip but thank you for using my package :D