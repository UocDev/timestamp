function htmlTime(date = new Date()) {
  return `<time datetime="${date.toISOString()}">${date.toDateString()}</time>`;
}
module.exports = htmlTime;