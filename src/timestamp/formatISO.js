function formatISO(date = new Date()) {
  const d = new Date(date);
  return d.toISOString();
}

module.exports = formatISO;