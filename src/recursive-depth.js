const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.length === 0 ? 1 : Array.isArray(arr) ? 1 + Math.max(...arr.map(item => this.calculateDepth(item))) : 0;

  }
};