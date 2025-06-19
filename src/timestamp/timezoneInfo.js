function getTimezoneInfo() {
  const now = new Date();
  const offsetMinutes = now.getTimezoneOffset();
  const offsetHours = -(offsetMinutes / 60);

  const isNegative = offsetHours < 0;
  const sign = isNegative ? '-' : '+';
  const absOffset = Math.abs(offsetHours).toString().padStart(2, '0');

  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    gmtOffset: `GMT${sign}${absOffset}`,
    utcOffset: `UTC${sign}${absOffset}`,
    timezoneName: timezoneName,
    rawOffsetMinutes: offsetMinutes
  };
}

module.exports = getTimezoneInfo;