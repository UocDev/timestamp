function compareGmtUtc() {
  const now = new Date();

  const gmt = now.toLocaleString('en-GB', {
    timeZone: 'GMT',
    timeZoneName: 'short'
  });

  const utc = now.toUTCString(); // Always returns UTC

  return {
    gmtFormatted: gmt,          // e.g., "18/06/2025, 17:00:00 GMT"
    utcFormatted: utc,          // e.g., "Wed, 18 Jun 2025 17:00:00 GMT"
    areEqual: utc.includes(gmt.split(', ')[1]) // Checks if hours match
  };
}

module.exports = compareGmtUtc;