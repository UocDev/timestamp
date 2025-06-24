function nextBirthdayDate(input) {
  const now = new Date();
  let birth;

  if (typeof input === 'string') {
    const [month, day] = input.split('-').map(Number);
    birth = new Date(now.getFullYear(), month - 1, day);
  } else if (input instanceof Date) {
    birth = new Date(now.getFullYear(), input.getMonth(), input.getDate());
  } else {
    return null;
  }

  if (birth < now) {
    birth.setFullYear(birth.getFullYear() + 1);
  }

  return birth;
}

module.exports = nextBirthdayDate;