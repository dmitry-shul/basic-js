const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) { 

  if (Array.isArray(members) && members.length !== 0) {
  return members.filter(element => (typeof element == 'string')).map(element => {
    return element.replace(/\s/g, '')
}).map(element => element[0].toUpperCase()).sort().join('')
} else {
  return false
}
}
