function discordFull(date = new Date()) {
  const timestamp = Math.floor(date.getTime() / 1000);
  return `<t:${timestamp}:F>`;
}
module.exports = discordFull;