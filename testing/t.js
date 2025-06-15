function getLocalTime() {
  const now = new Date();
  return now.toLocaleTimeString(); // e.g., 15:31:06
}

module.exports = { getLocalTime };