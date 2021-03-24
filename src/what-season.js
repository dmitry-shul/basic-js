const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
seasons = {winter: [00, 01, 11], spring: [02, 03, 04], summer: [05, 06, 07], fall: [08, 09, 10]}
if (date instanceof Date && !isNaN(date)) {
  if (seasons.winter.includes(date.getMonth())) {
    return 'winter' }
    else
  if (seasons.spring.includes(date.getMonth())) {
    return 'spring'}
    else
  if (seasons.summer.includes(date.getMonth())) {
    return 'summer'}
    else
  if (seasons.fall.includes(date.getMonth()))   {
  return 'fall'}
  }
 else if (date !== undefined) {
  throw new Error();
} else {
  return 'Unable to determine the time of year!';
}
}

