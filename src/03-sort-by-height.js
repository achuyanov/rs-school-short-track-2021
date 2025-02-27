/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const srt = arr.slice().sort((a, b) => (b - a)).filter((x) => (x !== -1));
  const ret = [];
  let tmp;
  arr.forEach((el) => {
    tmp = el;
    if (tmp !== -1) tmp = srt.pop();
    ret.push(tmp);
  });

  return ret;
}

module.exports = sortByHeight;
