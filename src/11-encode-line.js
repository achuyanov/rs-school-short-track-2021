/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let n = 1;
  let tmp = '';
  arr.forEach((el, i) => {
    if (arr[i + 1] === el) {
      n += 1;
    } else {
      tmp += (n > 1) ? n + el : el;
      n = 1;
    }
  });
  return tmp;
}

module.exports = encodeLine;
