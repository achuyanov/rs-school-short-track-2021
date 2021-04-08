/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  const min = Math.min(...str.split('').map(x=>Number(x)));
  return +str.replace(String(min),'');
}

module.exports = deleteDigit;
