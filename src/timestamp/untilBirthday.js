function untilBirthday(input) {
  const now = new Date();
  let birthDate;

  if (typeof input === 'string') {
    const [month, day] = input.split('-').map(Number);
    birthDate = new Date(now.getFullYear(), month - 1, day);
  } else if (input instanceof Date) {
    birthDate = new Date(now.getFullYear(), input.getMonth(), input.getDate());
  } else {
    return null;
  }

  if (birthDate < now) {
    birthDate.setFullYear(birthDate.getFullYear() + 1);
  }

  const diff = birthDate - now;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(seconds / 3600) % 24;
  const days = Math.floor(seconds / 86400);

  return { days, hours, minutes, seconds: seconds % 60 };
}

module.exports = untilBirthday;