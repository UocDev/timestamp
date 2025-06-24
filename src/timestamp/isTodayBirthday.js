function isTodayBirthday(input) {
  const now = new Date();
  let bday;

  if (typeof input === 'string') {
    const [month, day] = input.split('-').map(Number);
    bday = { month, day };
  } else if (input instanceof Date) {
    bday = { month: input.getMonth() + 1, day: input.getDate() };
  } else {
    return false;
  }

  return (now.getMonth() + 1 === bday.month && now.getDate() === bday.day);
}

module.exports = isTodayBirthday;