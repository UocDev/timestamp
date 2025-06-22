const validTimezones = Intl.supportedValuesOf
  ? Intl.supportedValuesOf('timeZone')
  : require('iana-tz-data').zones.map(z => z.name);

function isString(input) {
  return typeof input === 'string';
}

function isNumber(input) {
  return typeof input === 'number' || (!isNaN(input) && !isNaN(parseFloat(input)));
}

function isValidTime(input) {
  if (!isString(input)) return false;
  return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(input.trim());
}

function isValidTimezone(input) {
  if (!isString(input)) return false;
  return validTimezones.includes(input.trim());
}

module.exports = {
  isString,
  isNumber,
  isValidTime,
  isValidTimezone
};