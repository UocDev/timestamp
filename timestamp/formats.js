const { getConfig } = require('./init');

function getUnix(input = Date.now()) {
  const date = new Date(input);
  return Math.floor(date.getTime() / 1000);
}

function getISOTime(input = Date.now()) {
  return new Date(input).toISOString();
}

function getDiscordTimestamp(input = Date.now(), style) {
  const config = getConfig();
  const format = style || config.defaultFormat || 'R';
  return `<t:${getUnix(input)}:${format}>`;
}

function now() {
  return new Date();
}

module.exports = {
  getUnix,
  getISOTime,
  getDiscordTimestamp,
  now,
};