/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const getchars = (s) => [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a; }, {});
  const a = getchars(s1);
  const b = getchars(s2);
  const chars = Object.keys(a);
  let ret = 0;
  chars.forEach(el => {
    if (b[el]) ret+= Math.min(a[el],b[el]);
  });
  return ret;
}

module.exports = getCommonCharacterCount;
