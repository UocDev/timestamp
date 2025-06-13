function getUnix(input = Date.now()) {
  const date = new Date(input);
  return Math.floor(date.getTime() / 1000);
}

function getISOTime(input = Date.now()) {
  return new Date(input).toISOString();
}

function getDiscordTimestamp(input = Date.now(), style = 'R') {
  const unix = getUnix(input);
  return `<t:${unix}:${style}>`;
}

function now() {
  return new Date();
}

module.exports = {
  getUnix,
  getISOTime,
  getDiscordTimestamp,
  now
};