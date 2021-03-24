const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) {
    throw new Error('Error')
  }

  let newArray = []
  if (arr.length === 0) {
    return newArray
  }

  arr.forEach((item, i, arr) => {
    if (item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-next' && item !=='--double-prev') {
      newArray.push(item)

      if (arr[i - 1] === '--discard-next') {
        newArray.pop()
      }
      if (arr[i - 1] === '--double-next') {
        newArray.push(item)
      }
      if ((arr[i + 1] === '--discard-prev') & (arr[i - 1] !== '--discard-next')) {
        newArray.pop()
      }
      if ((arr[i + 1] === '--double-prev') && (arr[i - 1] !== '--discard-next')) {
        newArray.push(item)
      }

    }
  })
  return newArray
};
