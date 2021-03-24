const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) { 
  let b = backyard.reduce (
    (result, element) => result.concat(element), [])
  const some = b.values()
  let i = 0
  for (const value of some) {
    if (value === '^^') {
      i++
    }
  }
 return i
}
