const untilBirthday = require('./untilBirthday');

function daysUntilBirthday(input) {
  const data = untilBirthday(input);
  return data ? data.days : null;
}

module.exports = daysUntilBirthday;