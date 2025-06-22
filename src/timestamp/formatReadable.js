function formatReadable(date = new Date(), locale = 'en-US') {
  const d = new Date(date);
  return d.toLocaleString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

module.exports = formatReadable;